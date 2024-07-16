import type { Accessor, Setter} from "solid-js";
import { createEffect, createSignal, type JSXElement } from "solid-js";
import { createStore, produce } from "solid-js/store";
import type { TreeProps } from ".";
import createModel from "../utils/createModel";
export type NodeKeyType = string | number

export interface TreeNode {
    id: NodeKeyType;
    title: string | JSXElement;
    icon?: string | JSXElement;
    children?: TreeNode[];
    expand?: boolean;
    disabled?: boolean;
    // 动态加载
    loading?: boolean;
    checked?: boolean | 'indeterminate';
    selected?: boolean;
    _parent?: TreeNode;
    _level?: number;
    _dragging?: boolean;
    // 可扩展的属性
    [key: string]: any;
}

export interface TreeStoreProps {
    nodeMap: Record<NodeKeyType, TreeNode>;
    nodeList: TreeNode[];
}

export enum TreeCheckMod {
    // 只返回全选数据，包含父节点和子节点
    FULL = 'FULL',
    // 返回全部选中子节点和部分选中的父节点
    HALF = 'HALF',
    // 只返回选中子节点
    CHILD = 'CHILD',
    // 如果父节点下所有子节点全部选中，只返回父节点
    SHALLOW = 'SHALLOW'
}

export class TreeStore {
    store: any;
    setStore: any;
    data: TreeNode[] = [];
    flatData: TreeNode[] = [];
    keyField = 'id';
    titleField = 'title';
    selectedKey: Accessor<NodeKeyType>;
    setSelectedKey: Setter<NodeKeyType>;
    setSelected: Setter<NodeKeyType>;
    setValue: Setter<NodeKeyType[]>;
    checkable: boolean;
    draggable: boolean;
    checkRelation: string;
    props: TreeProps;
    mode: TreeCheckMod;

    constructor (props: TreeProps) {
        this.props = props;
        this.checkable = props.checkable ?? false;
        this.checkRelation = props.checkRelation ?? 'related';
        this.draggable = props.draggable ?? false;
        this.keyField = props.keyField || 'id';
        this.titleField = props.titleField || 'title';
        this.mode = props.mode ?? TreeCheckMod.HALF;
        const [store, setStore] = createStore({
            nodeMap: {},
            nodeList: []
        } as TreeStoreProps);
        this.store = store;
        this.setStore = setStore;
        const [selectedKey, setSelectedKey] = createSignal<NodeKeyType>('');
        const [selected, setSelected] = createModel<NodeKeyType>(props, 'selected', '');
        const [value, setValue] = createModel<NodeKeyType[]>(props, 'value', []);
        this.selectedKey = selectedKey;
        this.setSelectedKey = setSelectedKey;
        this.setSelected = setSelected;
        this.setValue = setValue;

        // 外部修改selected值进行同步
        createEffect(() => {
            const nodeId = selected();
            this.selectNode(nodeId, true);
        })

        // 外部修改selected值进行同步
        createEffect(() => {
            const val = value();
            this.setCheckedByMod(val);
        })
    }

    init (data: any[]) {
        this.data = data;
        this.flatData = this.getAllFlatNodes(this.data);
        this.setStore('nodeMap', {});
        this.setStore('nodeList', []);
        this.buildRelation(this.data, null, 0);
        this.setRootFlatNodes();
    }

    /**
     * 构建父子关系和层级关系
     * @param data
     * @param parent
     * @param level
     */
    buildRelation = (data: TreeNode[], parent: any, level: number) => {
        const map: Record<NodeKeyType, TreeNode> = {};
        data.forEach((item: TreeNode) => {
            map[item[this.keyField]] = item;
            item._parent = parent;
            item._level = level;
            item.visible = true;
            if (item.children) {
                this.buildRelation(item.children, item, level + 1);
            }
        });
        this.setStore('nodeMap', map);
    }

    setRootFlatNodes = () => {
        const list = this.getFlatNodes(this.data);
        this.setStore('nodeList', list);
    }

    /**
     * 获取显示的树节点
     * @param nodes
     * @returns
     */
    getFlatNodes = (nodes: TreeNode[]) : TreeNode[] => {
        const list: TreeNode[] = nodes.flatMap((item: TreeNode) => {
            if (item.expand && item.children?.length && item.visible) {
                return [item, this.getFlatNodes(item.children)].flat();
            } else {
                return item.visible ? [item] : [];
            }
        });
        return list;
    }

    /**
     * 获取显示的树节点
     * @param nodes
     * @returns
     */
    getAllFlatNodes = (nodes: TreeNode[]) : TreeNode[] => {
        const list: TreeNode[] = nodes.flatMap((item: TreeNode) => {
            if (item.children?.length) {
                return [item, this.getAllFlatNodes(item.children)].flat();
            } else {
                return [item];
            }
        });
        return list;
    }

    getStore () {
        return this.store;
    }

    openCloseNode = (node: TreeNode) => {
        this.setStore('nodeMap', node[this.keyField], produce((node: TreeNode) => {
            node.expand = !node.expand;
        }));
        this.setRootFlatNodes();
    }

    /**
     * 选择节点
     * @param node
     * @param silence 不触发回调
     */
    selectNode = (nodeId: NodeKeyType | TreeNode, silence?: boolean) => {
        const node = this._getNode(nodeId);

        if (node && this.selectedKey() !== node[this.keyField]) {
            this.setStore('nodeMap', this.selectedKey(), produce((node: TreeNode) => {
                node._selected = false;
            }));
            this.setStore('nodeMap', node[this.keyField], produce((node: TreeNode) => {
                node._selected = true;
                this.setSelectedKey(node[this.keyField]);
                this.setSelected(node[this.keyField]);
            }));
            !silence && this.props.onNodeSelect?.(node);
        }
    }

    clearSelect = () => {
        this.setStore('nodeMap', this.selectedKey(), produce((node: TreeNode) => {
            node._selected = false;
        }));
        this.setSelectedKey('');
        this.setSelected('');
    }

    _storeNode = (node: TreeNode, map: Record<NodeKeyType, TreeNode>) => {
        map[node[this.keyField]] = node;
        node.visible = true;
        if (node.children && node.children?.length > 0) {
            node.children.forEach((item: any) => {
                this._storeNode(item, map);
            });
        }
    }

    storeNode = (node: TreeNode) => {
        const map: Record<NodeKeyType, TreeNode> = {};
        this._storeNode(node, map);
        const flatData = this.getAllFlatNodes([node]);
        this.flatData = this.flatData.concat(flatData);
        this.setStore('nodeMap', produce((sourceMap: Record<NodeKeyType, TreeNode>) => {
            for (const key in map) {
                sourceMap[key] = map[key];
            }
        }));
    }

    getNode = (key: NodeKeyType) => {
        return this.store.nodeMap[key];
    }

    _getNode = (nodeId: NodeKeyType|TreeNode) => {
        let node: TreeNode;
        if (typeof nodeId === 'string' || typeof nodeId === 'number') {
            node = this.store.nodeMap[nodeId];
        } else {
            node = nodeId as TreeNode;
            nodeId = node[this.keyField] as NodeKeyType;
        }
        return node;
    }

    removeNode = (node: TreeNode) => {
        if (node) {
            const parent: TreeNode|undefined = node._parent;
            if (parent) {
                const index: number = parent.children!.findIndex((item: TreeNode) => item[this.keyField] === node[this.keyField]);
                this.setStore('nodeMap', parent[this.keyField], produce((target: TreeNode) => {
                    target.children?.splice(index, 1);
                }));
            } else {// 在根目录或是新节点
                const index = this.data.findIndex((item: TreeNode) => item[this.keyField] === node[this.keyField]);
                if (index > -1) {
                    this.data.splice(index, 1);
                }
            }
        }
    }

    remove = (nodeId: NodeKeyType|TreeNode) => {
        const node = this._getNode(nodeId);
        this.removeNode(node);
    }

    beforeNodeOperation = (targetKey: any, nodeId: NodeKeyType|TreeNode) => {
        if (!this.store.nodeMap[targetKey]) {
            console.error('targetKey not exist');
            return false;
        }
        const node: TreeNode = this._getNode(nodeId);
        // 新节点需要将节点和子节点存入map
        if (!this.store.nodeMap[node[this.keyField]]) {
            this.storeNode(node);
        } else {
            // 删除节点
            this.removeNode(node);
        }

        return node;
    }

    append = (parentKey: any, nodeId: NodeKeyType|TreeNode) => {
        const node = this.beforeNodeOperation(parentKey, nodeId);
        if (!node) {
            return;
        }

        this.setStore('nodeMap', produce((map: Record<NodeKeyType, TreeNode>) => {
            const target = map[parentKey];
            if (!target.children) {
                target.children = [];
            }
            const n = map[node[this.keyField]];
            this.updateLevels(node, target._level!);
            n._parent = target;
            target.children.push(n);
            if (this.checkable) {
                this.updateNodeCheckStatus(target);
            }
        }));
        this.setRootFlatNodes();
    }

    /**
     * 更新节点选择状态
     * @param nodeId
     */
    updateNodeCheckStatus = (nodeId: TreeNode | NodeKeyType | undefined) => {
        if (!nodeId) {
            return;
        }
        const node = this._getNode(nodeId);
        if (node) {
            this.setStore('nodeMap', node[this.keyField], produce((n: TreeNode) => {
                n.checked = this.getNodeChecked(n);
            }));
            if (this.checkRelation === 'related') {
                this.setCheckedForwardUp(node);
            }
        }
    }

    updateLevels = (node: TreeNode, startLevel: number) => {
        this.setStore('nodeMap', node[this.keyField], produce((node: TreeNode) => {
            node._level = startLevel + 1;
        }));
        if (node.children && node.children.length > 0) {
            node.children.forEach((item: any) => {
                this.updateLevels(item, startLevel + 1);
            })
        }
    }

    prepend = (parentKey: any, nodeId: NodeKeyType|TreeNode) => {
        const node = this.beforeNodeOperation(parentKey, nodeId);
        if (!node) {
            return;
        }

        this.setStore('nodeMap', produce((map: Record<NodeKeyType, TreeNode>) => {
            const target = map[parentKey];
            if (!target.children) {
                target.children = [];
            }
            const n = map[node[this.keyField]];
            this.updateLevels(node, target._level!);
            n._parent = target;
            target.children.unshift(n);
            // 更新状态
            if (this.checkable) {
                this.updateNodeCheckStatus(target);
            }
        }));
        this.setRootFlatNodes();
    }

    insertBefore = (targetKey: NodeKeyType, nodeId: NodeKeyType|TreeNode) => {
        const node = this.beforeNodeOperation(targetKey, nodeId);
        if (!node) {
            return;
        }

        this.setStore('nodeMap', produce((map: Record<NodeKeyType, TreeNode>) => {
            const target = map[targetKey];
            const parent = target._parent || {children: this.data};
            const targetIndex = parent.children!.findIndex(item => item[this.keyField] === targetKey);

            parent.children!.splice(targetIndex, 0, node);

            const n = map[node[this.keyField]];
            this.updateLevels(node, target._level! - 1);
            n._parent = target._parent;

            // 更新状态
            if (this.checkable) {
                this.updateNodeCheckStatus(target._parent);
            }
        }));
        this.setRootFlatNodes();
    }

    insertAfter = (targetKey: NodeKeyType, nodeId: NodeKeyType|TreeNode) => {
        const node = this.beforeNodeOperation(targetKey, nodeId);
        if (!node) {
            return;
        }

        this.setStore('nodeMap', produce((map: Record<NodeKeyType, TreeNode>) => {
            const target = map[targetKey];
            const parent = target._parent || {children: this.data};
            const targetIndex = parent.children!.findIndex(item => item[this.keyField] === targetKey);

            parent.children!.splice(targetIndex + 1, 0, node);

            const n = map[node[this.keyField]];
            this.updateLevels(node, target._level! - 1);
            n._parent = target._parent;

            // 更新状态
            if (this.checkable) {
                this.updateNodeCheckStatus(target._parent);
            }
        }));
        this.setRootFlatNodes();
    }

    filter = (keyword: string, filterMethod: any) => {
        const defaultFilterMethod = (keyword: string, node: TreeNode) => {
            const title = node[this.titleField]
            if (title == null || !title.toString) return false
            return (title.toString() as string).toLowerCase().indexOf(keyword.toLowerCase()) > -1
        }
        filterMethod = filterMethod || defaultFilterMethod;

        // 使用树形结构数据进行遍历
        const filterVisibleNodes: TreeNode[] = [];
        const visibleMap: Record<NodeKeyType, boolean> = {};
        this.flatData.forEach((node: TreeNode) => {
            visibleMap[node[this.keyField]] =
                (node._parent && visibleMap[node._parent[this.keyField]]) ||
                filterMethod(keyword, node)

            this.setStore('nodeMap', node[this.keyField], produce((n: TreeNode) => {
                n.visible = visibleMap[n[this.keyField]];
            }))
            if (visibleMap[node[this.keyField]]) {
                filterVisibleNodes.push(node);
            }
        });

        // 对于临时列表中的节点，都是可见的，因此将它们的父节点都设为可见并展开
        filterVisibleNodes.forEach(node => {
            const stack = []
            let parent = node._parent
            while (parent) {
                stack.unshift(parent)
                parent = parent._parent
            }
            stack.forEach(parent => {
                this.setStore('nodeMap', parent[this.keyField], produce((parent: TreeNode) => {
                    parent._filterVisible = true;
                    // _filterVisible 且 无父级或者父级展开且可见，则设为可见
                    parent.visible = (!parent._parent || (parent._parent.visible)) && parent._filterVisible
                }))
            })
            this.setStore('nodeMap', node[this.keyField], produce((n: TreeNode) => {
                n.visible = !n._parent || n._parent.visible;
            }))
        });

        this.setRootFlatNodes();
    }

    getNodeIndexInShow = (nodeId: TreeNode | NodeKeyType) => {
        const node = this._getNode(nodeId);
        if (!node || !node.visible) return -1;
        const index = this.store.nodeList.findIndex((n: TreeNode) => n[this.keyField] === node[this.keyField]);

        return index
    }

    expandAll = () => {
        this.flatData.forEach((item: TreeNode) => {
            if (item.visible && item.children && !item.expand) {
                this.setStore('nodeMap', item[this.keyField], produce((n: TreeNode) => {
                    n.expand = true;
                }));
            }
        });

        this.setRootFlatNodes();
    }

    collapseAll = () => {
        this.flatData.forEach((item: TreeNode) => {
            if (item.children && item.expand) {
                this.setStore('nodeMap', item[this.keyField], produce((n: TreeNode) => {
                    n.expand = false;
                }));
            }
        });

        this.setRootFlatNodes();
    }

    checkNode = (nodeId: TreeNode | NodeKeyType, checked: boolean) => {
        const node = this._getNode(nodeId);
        this.setStore('nodeMap', node[this.keyField], produce((n: TreeNode) => {
            n.checked = checked;
            if (this.checkRelation === 'related') {
                this.setCheckedForwardDown(n, checked);
            }
            if (this.checkRelation === 'related') {
                n.checked = this.getNodeChecked(node);
            }
            if (this.checkRelation === 'related') {
                this.setCheckedForwardUp(n);
            }
        }));
        const checkedKeys = this.getCheckedKeys(this.mode);
        this.setValue(checkedKeys);
        this.props.onChange && this.props.onChange(checkedKeys);
    }

    setCheckedForwardDown = (node: TreeNode, checked: boolean) => {
        if (node.children) {
            node.children.forEach(item => {
                if (item.disabled) return;
                this.setStore('nodeMap', item[this.keyField], produce((n: TreeNode) => {
                    n.checked = checked;
                }));
                this.setCheckedForwardDown(item, checked);
            })
        }
    }

    getNodeChecked = (nodeId: TreeNode | NodeKeyType) => {
        const node = this._getNode(nodeId);
        if (!node.children || node.children.length === 0) {
            return node.checked;
        } else {
            let checked: boolean | 'indeterminate' = false;
            let checkedNum = 0;
            let indeterminateNum = 0;
            node.children.forEach(item => {
                if (item.checked === true) {
                    checkedNum ++;
                }
                if (item.checked === 'indeterminate') {
                    indeterminateNum ++;
                }
            });
            if (checkedNum === node.children.length) {
                checked = true;
            } else if (checkedNum > 0) {
                checked = 'indeterminate';
            }
            if (!checked && indeterminateNum > 0) {
                checked = 'indeterminate';
            }
            return checked;
        }
    }

    setCheckedForwardUp = (node: TreeNode) => {
        const parentNode = node._parent;
        if (parentNode) {
            const checked: boolean | 'indeterminate' | undefined = this.getNodeChecked(parentNode);
            this.setStore('nodeMap', parentNode[this.keyField], produce((n: TreeNode) => {
                n.checked = checked;
            }));

            this.setCheckedForwardUp(parentNode);
        }
    }

    rename = (nodeId: TreeNode | NodeKeyType, title: string) => {
        const node = this._getNode(nodeId);
        this.setStore('nodeMap', node[this.keyField], this.titleField, title);
    }

    expandNode = (nodeId: TreeNode | NodeKeyType, expand: boolean) => {
        const node = this._getNode(nodeId);
        this.setStore('nodeMap', node[this.keyField], 'expand', expand);
        if (expand) {
            this.props.onNodeExpand?.(node);
        } else {
            this.props.onNodeCollapse?.(node);
        }
        this.setRootFlatNodes();
    }

    checkAll = () => {
        this.setStore('nodeMap', produce((map: Record<NodeKeyType, TreeNode>) => {
            for (const key in map) {
                map[key].checked = true;
            }
        }));
        const checkedKeys = this.getCheckedKeys(this.mode);
        this.setValue(checkedKeys);
        this.props.onChange && this.props.onChange(checkedKeys);
    }

    uncheckAll = () => {
        this.setStore('nodeMap', produce((map: Record<NodeKeyType, TreeNode>) => {
            for (const key in map) {
                map[key].checked = false;
            }
        }));
        const checkedKeys = this.getCheckedKeys(this.mode);
        this.setValue(checkedKeys);
        this.props.onChange && this.props.onChange(checkedKeys);
    }

    loadData = async (node: TreeNode, loadDataMethod: (node: TreeNode) => Promise<TreeNode[]>) => {
        this.setStore('nodeMap', node[this.keyField], produce((n: TreeNode) => n.__loading = true));
        try {
            const list = await loadDataMethod(node);
            if (list.length > 0) {
                list.forEach(item => {
                    this.append(node[this.keyField], item);
                })
            }
        } catch (e) {
            //
        } finally {
            this.setStore('nodeMap', node[this.keyField], produce((n: TreeNode) => n.__loading = false));
        }
        this.setStore('nodeMap', node[this.keyField], produce((n: TreeNode) => n.loading = false));
    }

    /**
     *
     * @param mode
     * @returns
     */
    getChecked = (mode: TreeCheckMod = TreeCheckMod.HALF) :TreeNode[] => {
        if (this.checkRelation === 'related') {
            if (mode === TreeCheckMod.FULL) {
                return this.getFullChecked();
            }
            if (mode === TreeCheckMod.CHILD) {
                return this.getChildChecked();
            }
            if (mode === TreeCheckMod.HALF) {
                return this.getHalfChecked();
            }
            if (mode === TreeCheckMod.SHALLOW) {
                return this.getShallowChecked();
            }
        } else {
            return this.getFullChecked();
        }
        return [];
    }

    /**
     * 获取所有选中的节点包含父节点和子节点
     * @returns
     */
    getFullChecked = () => {
        return this.flatData.filter((node: TreeNode) => node.checked === true);
    }

    /**
     * 选中的子节点
     * @returns
     */
    getChildChecked = () => {
        return this.flatData.filter((node: TreeNode) => node.checked === true && (!node.children || node.children.length === 0));
    }

    /**
     * 返回全部选中子节点和部分选中的父节点
     * @returns
     */
    getHalfChecked = () => {
        return this.flatData.filter((node: TreeNode) => node.checked === true || node.checked === 'indeterminate');
    }

    /**
     * 如果父节点下所有子节点全部选中，只返回父节点
     * @returns
     */
    getShallowChecked = () => {
        const ret: TreeNode[] = [];
        this.flatData.forEach((node: TreeNode) => {
            if (node.checked === true) {
                const parentChecked = (() => {
                    const parent = node._parent;
                    if (!parent) { return false; }
                    return parent.checked === true;
                })();
                if (!parentChecked) { ret.push(node); }
            }
        });
        return ret;
    }

    /**
     * 选中的节点标识
     * @param mode
     * @returns
     */
    getCheckedKeys = (mode: TreeCheckMod = TreeCheckMod.HALF) :NodeKeyType[] => {
        const nodes = this.getChecked(mode);
        return nodes.map((node: TreeNode) => node[this.keyField]);
    }

    setNodeDragging = (nodeId: NodeKeyType, dragging: boolean) => {
        const node = this._getNode(nodeId);
        if (node) {
            this.setStore('nodeMap', node[this.keyField], produce((n: TreeNode) =>{
                n._dragging = dragging;
            }))
        }
    }

    clearChecked = () => {
        this.flatData.forEach((node: TreeNode) => {
            this.setStore('nodeMap', node[this.keyField], 'checked', false);
        });
    }

    setCheckedByMod = (val: NodeKeyType[]) => {
        this.clearChecked();
        if (this.checkRelation === 'related') {
            if (this.mode === TreeCheckMod.FULL) {
                this.setCheckedByFull(val);
            }
            if (this.mode === TreeCheckMod.HALF) {
                this.setCheckedByHalf(val);
            }
            if (this.mode === TreeCheckMod.CHILD) {
                this.setCheckedByChild(val);
            }
            if (this.mode === TreeCheckMod.SHALLOW) {
                this.setCheckedByShallow(val);
            }
        } else {
            this.setCheckedByFull(val);
        }
    }

    setCheckedByFull = (val: NodeKeyType[]) => {
        val.forEach((key: NodeKeyType) => {
            this.setStore('nodeMap', key, produce((n: TreeNode) =>{
                n.checked = true;
                this.checkRelation === 'related' && this.setCheckedForwardUp(n);
            }));
        });
    }

    setCheckedByHalf = (val: NodeKeyType[]) => {
        val.forEach((key: NodeKeyType) => {
            const node = this._getNode(key);
            if (!node.children || node.children.length === 0) {
                this.setStore('nodeMap', key, produce((n: TreeNode) =>{
                    n.checked = true;
                    this.checkRelation === 'related' && this.setCheckedForwardUp(n);
                }));
            }
        });
    }

    setCheckedByChild = (val: NodeKeyType[]) => {
        val.forEach((key: NodeKeyType) => {
            const node = this._getNode(key);
            if (!node.children || node.children.length === 0) {
                this.setStore('nodeMap', key, produce((n: TreeNode) =>{
                    n.checked = true;
                    this.checkRelation === 'related' && this.setCheckedForwardUp(n);
                }));
            }
        });
    }

    setCheckedByShallow = (val: NodeKeyType[]) => {
        val.forEach((key: NodeKeyType) => {
            this.setStore('nodeMap', key, produce((n: TreeNode) =>{
                n.checked = true;
                this.checkRelation === 'related' && this.setCheckedForwardUp(n);
                this.checkRelation === 'related' && this.setCheckedForwardDown(n, true);
            }));
        });
    }
}
