import type { Accessor, Setter} from "solid-js";
import { createEffect, createSignal, type JSXElement } from "solid-js";
import { createStore, produce } from "solid-js/store";
import type { CascaderProps } from ".";
import createField from "../../utils/createField";
export type NodeKeyType = string | number

export interface CascaderNode {
    id: NodeKeyType;
    title: string | JSXElement;
    icon?: string | JSXElement;
    children?: CascaderNode[];
    expand?: boolean;
    disabled?: boolean;
    // 动态加载
    loading?: boolean;
    checked?: boolean | 'indeterminate';
    selected?: boolean;
    _parent?: CascaderNode;
    _level?: number;
    _dragging?: boolean;
    // 可扩展的属性
    [key: string]: any;
}

export interface CascaderStoreProps {
    nodeMap: Record<NodeKeyType, CascaderNode>;
    columns: NodeKeyType[][];
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

export class CascaderStore {
    store: any;
    setStore: any;
    data: CascaderNode[] = [];
    flatData: CascaderNode[] = [];
    valueField = 'value';
    titleField = 'title';
    selectedKey: Accessor<NodeKeyType[]>;
    setSelectedKey: Setter<NodeKeyType[]>;
    value: Accessor<NodeKeyType[]>;
    setValue: Setter<NodeKeyType[]>;
    props: CascaderProps;
    mode: TreeCheckMod;
    valMap: Record<NodeKeyType, NodeKeyType[]> = {};

    constructor (props: CascaderProps) {
        this.props = props;
        this.valueField = props.valueField || 'value';
        this.titleField = props.titleField || 'title';
        this.mode = props.mode ?? TreeCheckMod.HALF;
        const [store, setStore] = createStore({
            nodeMap: {},
            columns: [],
            filteredList: []
        } as CascaderStoreProps);
        this.store = store;
        this.setStore = setStore;
        const [selectedKey, setSelectedKey] = createSignal<NodeKeyType[]>([]);
        const [value, setValue] = createField<NodeKeyType[]>(props, 'value', []);
        this.selectedKey = selectedKey;
        this.setSelectedKey = setSelectedKey;
        this.setValue = setValue;
        this.value = value;
        this.init(props.data);
        this.valMap['__'] = this.data.map(item => item[this.valueField]);
        createEffect(() => {
            if (this.data !== props.data) {
                this.init(props.data);
                this.valMap['__'] = this.data.map(item => item[this.valueField]);
            }
        })

        // 外部修改selected值进行同步
        createEffect(() => {
            const keys = selectedKey();
            const columns = [this.valMap['__']];

            if (keys && keys.length) {
                keys.forEach((key: any) => {
                    if (this.valMap[key]) {
                        columns.push(this.valMap[key]);
                    } else {
                        const item = store.nodeMap[key];
                        if (item && item.children) {
                            const levelIds = item.children.map((aItem: any) => aItem[this.valueField]);
                            this.valMap[key] = levelIds;
                            columns.push(levelIds);
                        }
                    }
                });
            }
            setStore('columns', columns);
        })

        // 外部修改selected值进行同步
        createEffect(() => {
            const val = value();
            if (props.multi) {
                this.setCheckedByMod(val);
            } else {
                setSelectedKey(val || []);
            }
        })
    }

    init (data: any[]) {
        this.data = data;
        this.flatData = this.getAllFlatNodes(this.data);
        this.setStore('nodeMap', {});
        this.setStore('filteredList', []);
        this.buildRelation(this.data, null, 0);
    }

    /**
     * 构建父子关系和层级关系
     * @param data
     * @param parent
     * @param level
     */
    buildRelation = (data: CascaderNode[], parent: any, level: number) => {
        const map: Record<NodeKeyType, CascaderNode> = {};
        data.forEach((item: CascaderNode) => {
            map[item[this.valueField]] = item;
            item._parent = parent;
            item._level = level;
            if (item.children) {
                this.buildRelation(item.children, item, level + 1);
            }
        });
        this.setStore('nodeMap', map);
    }

    /**
     * 获取显示的树节点
     * @param nodes
     * @returns
     */
    getAllFlatNodes = (nodes: CascaderNode[]) : CascaderNode[] => {
        const list: CascaderNode[] = nodes.flatMap((item: CascaderNode) => {
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

    clearSelect = () => {

    }

    /**
     * 过滤
     * @param keyword
     */
    filter (keyword: string) {
        if (keyword) {
            const allChildren = this.flatData.filter(item => !item.children || item.children.length === 0);
            const lines = allChildren.map(item => {
                const arr = [];
                arr.push(item);
                let parent = item._parent;
                while (parent) {
                    arr.push(parent);
                    parent = parent._parent;
                }
                arr.reverse();
                return arr;
            });
            const filteredList = lines.filter(line => {
                return line.some(item => item[this.titleField].includes(keyword));
            });

            this.setStore('filteredList', filteredList);
        } else {
            this.setStore('filteredList', []);
        }
    }

    getNode = (key: NodeKeyType) => {
        return this.store.nodeMap[key];
    }

    /**
     * 选择节点
     * @param key
     */
    selectItem = (key: NodeKeyType | CascaderNode) => {
        const node = this._getNode(key);
        if (node) {
            const vals = [];
            for (let i = 0; i < node._level!; i++) {
                vals.push(this.selectedKey()[i]);
            }
            vals[node._level!] = node[this.valueField];
            this.setSelectedKey(vals);
        }
    }

    _getNode = (nodeId: NodeKeyType|CascaderNode) => {
        let node: CascaderNode;
        if (typeof nodeId === 'string' || typeof nodeId === 'number') {
            node = this.store.nodeMap[nodeId];
        } else {
            node = nodeId as CascaderNode;
            nodeId = node[this.valueField] as NodeKeyType;
        }
        return node;
    }

    /**
     * 更新节点选择状态
     * @param nodeId
     */
    updateNodeCheckStatus = (nodeId: CascaderNode | NodeKeyType | undefined) => {
        if (!nodeId) {
            return;
        }
        const node = this._getNode(nodeId);
        if (node) {
            this.setStore('nodeMap', node[this.valueField], produce((n: CascaderNode) => {
                n.checked = this.getNodeChecked(n);
            }));
            this.setCheckedForwardUp(node);
        }
    }

    checkNode = (nodeId: CascaderNode | NodeKeyType, checked: boolean) => {
        const node = this._getNode(nodeId);
        if (checked) {
            if (this.props.max && this.value().length >= this.props.max) {
                this.props.onExceed?.();
                return;
            }
        }
        this.setStore('nodeMap', node[this.valueField], produce((n: CascaderNode) => {
            n.checked = checked;
            this.setCheckedForwardDown(n, checked);
            n.checked = this.getNodeChecked(node);
            this.setCheckedForwardUp(n);
        }));
        const checkedKeys = this.getCheckedKeys(this.mode);
        this.setValue(checkedKeys);
        this.props.onChange && this.props.onChange(checkedKeys);
    }

    setCheckedForwardDown = (node: CascaderNode, checked: boolean) => {
        if (node.children) {
            node.children.forEach(item => {
                if (item.disabled) return;
                this.setStore('nodeMap', item[this.valueField], produce((n: CascaderNode) => {
                    n.checked = checked;
                }));
                this.setCheckedForwardDown(item, checked);
            })
        }
    }

    getNodeChecked = (nodeId: CascaderNode | NodeKeyType) => {
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

    setCheckedForwardUp = (node: CascaderNode) => {
        const parentNode = node._parent;
        if (parentNode) {
            const checked: boolean | 'indeterminate' | undefined = this.getNodeChecked(parentNode);
            this.setStore('nodeMap', parentNode[this.valueField], produce((n: CascaderNode) => {
                n.checked = checked;
            }));

            this.setCheckedForwardUp(parentNode);
        }
    }

    checkAll = () => {
        this.setStore('nodeMap', produce((map: Record<NodeKeyType, CascaderNode>) => {
            for (const key in map) {
                map[key].checked = true;
            }
        }));
        const checkedKeys = this.getCheckedKeys(this.mode);
        this.setValue(checkedKeys);
        this.props.onChange && this.props.onChange(checkedKeys);
    }

    uncheckAll = () => {
        this.setStore('nodeMap', produce((map: Record<NodeKeyType, CascaderNode>) => {
            for (const key in map) {
                map[key].checked = false;
            }
        }));
        const checkedKeys = this.getCheckedKeys(this.mode);
        this.setValue(checkedKeys);
        this.props.onChange && this.props.onChange(checkedKeys);
    }

    loadData = async (node: CascaderNode, loadDataMethod: (node: CascaderNode) => Promise<CascaderNode[]>) => {
        try {
            const list = await loadDataMethod(node);
            if (list.length > 0) {
                node.children = list;
                list.forEach(item => {
                    this.setStore('nodeMap', item[this.valueField], item);
                });
            }
        } catch (e) {
            //
        }
        this.setStore('nodeMap', node[this.valueField], produce((n: CascaderNode) => n.loading = false));
    }

    /**
     *
     * @param mode
     * @returns
     */
    getChecked = (mode: TreeCheckMod = TreeCheckMod.HALF) :CascaderNode[] => {
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
        return []
    }

    /**
     * 获取所有选中的节点包含父节点和子节点
     * @returns
     */
    getFullChecked = () => {
        return this.flatData.filter((node: CascaderNode) => node.checked === true);
    }

    /**
     * 选中的子节点
     * @returns
     */
    getChildChecked = () => {
        return this.flatData.filter((node: CascaderNode) => node.checked === true && (!node.children || node.children.length === 0));
    }

    /**
     * 返回全部选中子节点和部分选中的父节点
     * @returns
     */
    getHalfChecked = () => {
        return this.flatData.filter((node: CascaderNode) => node.checked === true || node.checked === 'indeterminate');
    }

    /**
     * 如果父节点下所有子节点全部选中，只返回父节点
     * @returns
     */
    getShallowChecked = () => {
        const ret: CascaderNode[] = [];
        this.flatData.forEach((node: CascaderNode) => {
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
        return nodes.map((node: CascaderNode) => node[this.valueField]);
    }

    clearChecked = () => {
        this.flatData.forEach((node: CascaderNode) => {
            this.setStore('nodeMap', node[this.valueField], 'checked', false);
        });
    }

    setCheckedByMod = (val: NodeKeyType[]) => {
        this.clearChecked();
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
    }

    setCheckedByFull = (val: NodeKeyType[]) => {
        val.forEach((key: NodeKeyType) => {
            this.setStore('nodeMap', key, produce((n: CascaderNode) =>{
                n.checked = true;
                this.setCheckedForwardUp(n);
            }));
        });
    }

    setCheckedByHalf = (val: NodeKeyType[]) => {
        val.forEach((key: NodeKeyType) => {
            const node = this._getNode(key);
            if (!node.children || node.children.length === 0) {
                this.setStore('nodeMap', key, produce((n: CascaderNode) =>{
                    n.checked = true;
                    this.setCheckedForwardUp(n);
                }));
            }
        });
    }

    setCheckedByChild = (val: NodeKeyType[]) => {
        val.forEach((key: NodeKeyType) => {
            const node = this._getNode(key);
            if (!node.children || node.children.length === 0) {
                this.setStore('nodeMap', key, produce((n: CascaderNode) =>{
                    n.checked = true;
                    this.setCheckedForwardUp(n);
                }));
            }
        });
    }

    setCheckedByShallow = (val: NodeKeyType[]) => {
        val.forEach((key: NodeKeyType) => {
            this.setStore('nodeMap', key, produce((n: CascaderNode) =>{
                n.checked = true;
                this.setCheckedForwardUp(n);
                this.setCheckedForwardDown(n, true);
            }));
        });
    }
}
