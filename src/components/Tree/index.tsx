import { VirtualList } from '../virtual-list';
import { Node } from './Node';
import type { Signal} from 'solid-js';
import { createContext, createEffect, createSignal, Show, useContext, type JSXElement } from 'solid-js';
import type { TreeCheckMod, TreeNode} from './store';
import { TreeStore } from './store';
import { Dropdown } from '../Dropdown';
import { useStyle } from '../utils/useProps';

export * from './store';

export type NodeKeyType = string | number

export interface TreeContextProps {
    onOpenClose: (node: any) => void
    onNodeSelect: (node: any) => void
    store: any, // 存储树状结构的数据
    draggable?: boolean
    checkable: boolean
    directory?: boolean
    contextMenu?: JSXElement
    selectedClass?: string;
    dragHoverClass?: string;
    draggingClass?: string;
    onContextMenu?: (data: any) => void
    onDragStart?: (e: any, node: any) => void
    onDragEnter?: (e: any, node: any, hoverPart: dragHoverPartEnum) => void
    onDragOver?: (e: any, node: any, hoverPart: dragHoverPartEnum) => void
    onDragLeave?: (e: any, node: any, hoverPart: dragHoverPartEnum) => void
    onDrop: (e: any, targetKey: NodeKeyType, dropPosition: dragHoverPartEnum) => void
    onNodeCheck: (node: NodeKeyType | TreeNode, checked: boolean) => void
    customIcon?: (node: TreeNode) => JSXElement;
    arrowIcon?: () => JSXElement;
}

export interface TreeInstanceProps {
    prepend: (parentKey: NodeKeyType, nodeId: NodeKeyType|TreeNode) => void
    append: (parentKey: NodeKeyType, nodeId: NodeKeyType|TreeNode) => void
    insertBefore: (targetKey: NodeKeyType, nodeId: NodeKeyType|TreeNode) => void
    insertAfter: (targetKey: NodeKeyType, nodeId: NodeKeyType|TreeNode) => void
    getNode: (nodeId: NodeKeyType) => TreeNode
    remove: (nodeId: NodeKeyType|TreeNode) => void
    filter: (keyword: string, filterMethod: any) => void
    expandAll: () => void
    collapseAll: () => void
    expandNode: (nodeId: TreeNode | NodeKeyType, expand: boolean) => Promise<void>
    scrollTo: (nodeId: TreeNode | NodeKeyType, position : 'top'|'center'|'bottom') => void
    rename: (nodeId: TreeNode | NodeKeyType, title: string) => void
    checkNode: (node: TreeNode | NodeKeyType, checked: boolean) => void
    checkAll: () => void
    uncheckAll: () => void
    loadData: (nodeId: TreeNode | NodeKeyType, loadDataMethod: (node: TreeNode) => Promise<TreeNode[]>) => void
    selectNode: (nodeId: NodeKeyType | TreeNode, silence?: boolean) => void
    getChecked: (mode: TreeCheckMod) => TreeNode[]
    getCheckedKeys: (mode: TreeCheckMod) => NodeKeyType[]
}

export interface TreeProps {
    emptyText?: string;
    data: TreeNode[];
    checkable?: boolean;
    checkRelation?: 'related' | 'unRelated';
    directory?: boolean;
    contextMenu?: JSXElement;
    onContextMenu?: (data: TreeNode) => void;
    onNodeCheck?: (node: NodeKeyType | TreeNode, checked: boolean) => void;
    onNodeSelect?: (node: TreeNode) => void;
    onOpenClose?: (node: NodeKeyType | TreeNode) => void;
    ref?: any;
    draggable?: boolean;
    style?: any;
    class?: string;
    classList?: any;
    loadData?: (node: NodeKeyType | TreeNode) => Promise<any>;
    beforeDropMethod?: (node: TreeNode, dragNode: TreeNode, hoverPart: dragHoverPartEnum) => Promise<boolean>;
    beforeExpand?: (node: TreeNode, expand: boolean) => Promise<boolean>;
    onNodeDrop?: (e: any, node: TreeNode, dragNode: TreeNode, hoverPart: dragHoverPartEnum) => void;
    onNodeDragStart?: (e: any, node: TreeNode) => void;
    onNodeDragEnter?: (e: any, node: any, hoverPart: dragHoverPartEnum) => void
    onNodeDragOver?: (e: any, node: any, hoverPart: dragHoverPartEnum) => void
    onNodeDragLeave?: (e: any, node: any, hoverPart: dragHoverPartEnum) => void
    onSelectMenu?: (name: string) => void;
    onNodeExpand?: (node: TreeNode) => void;
    onNodeCollapse?: (node: TreeNode) => void;
    onChange?: (value: NodeKeyType[]) => void;
    selected?: NodeKeyType | Signal<NodeKeyType>;
    value?: NodeKeyType[] | Signal<NodeKeyType[]>;
    keyField?: string;
    titleField?: string;
    selectedClass?: string;
    dragHoverClass?: string;
    draggingClass?: string;
    customIcon?: (node: TreeNode) => JSXElement;
    arrowIcon?: () => JSXElement;
    mode?: TreeCheckMod;
}

export enum dragHoverPartEnum {
    before = 'before',
    body = 'body',
    after = 'after'
}

export const TreeContext = createContext<TreeContextProps>({} as TreeContextProps);
export const useTreeContext = () => useContext(TreeContext);

export function Tree (props: TreeProps) {
    let vir: any;
    const [visible, setVisible] = createSignal<boolean>(false);
    const [x, setX] = createSignal<number>(0);
    const [y, setY] = createSignal<number>(0);
    const emptyText = props.emptyText ?? '暂无数据';
    const treeStore = new TreeStore(props);
    const store = treeStore.getStore();

    createEffect(() => {
        treeStore.init(props.data);
    })

    const onNodeCheck = (node: TreeNode | NodeKeyType, checked: boolean) => {
        treeStore.checkNode(node, checked);
        props.onNodeCheck && props.onNodeCheck(node, checked);
    }

    const onNodeExpandCollapse = async (node: TreeNode) => {
        const valid = props.beforeExpand ? await props.beforeExpand(node, !node.expand) : true;
        if (!valid) {
            return;
        }
        if (node.loading && props.loadData) {
            await treeStore.loadData(node, props.loadData);
        }
        treeStore.expandNode(node, !node.expand);
    }

    props.ref && props.ref({
        prepend: treeStore.prepend,
        append: treeStore.append,
        insertBefore: treeStore.insertBefore,
        insertAfter: treeStore.insertAfter,
        getNode: treeStore.getNode,
        remove: treeStore.remove,
        filter: treeStore.filter,
        expandAll: treeStore.expandAll,
        collapseAll: treeStore.collapseAll,
        expandNode: async (nodeId: TreeNode | NodeKeyType, expand: boolean) => {
            const node = treeStore._getNode(nodeId);
            if (!node) return;
            if (node.expand !== expand) {
                onNodeExpandCollapse(node);
            }
        },
        scrollTo: (nodeId: TreeNode | NodeKeyType, position : 'top'|'center'|'bottom' = 'top') => {
            const index = treeStore.getNodeIndexInShow(nodeId);
            const nodeHeight = 22;
            let top = index * nodeHeight;
            if (position === 'center') {
                top = top - vir.getScrollElement().getBoundingClientRect().height / 2 + nodeHeight / 2;
            }
            if (position === 'bottom') {
                top = top - vir.getScrollElement().getBoundingClientRect().height + nodeHeight;
            }
            vir.getScrollElement().scrollTo({top, behavior: 'smooth'});
        },
        rename: treeStore.rename,
        checkNode: onNodeCheck,
        checkAll: treeStore.checkAll,
        uncheckAll: treeStore.uncheckAll,
        loadData: (nodeId: TreeNode | NodeKeyType, loadDataMethod: (node: TreeNode) => Promise<TreeNode[]>) => {
            const node = treeStore._getNode(nodeId);
            if (!node) return;
            treeStore.loadData(node, loadDataMethod);
        },
        selectNode: treeStore.selectNode,
        getChecked: treeStore.getChecked,
        getCheckedKeys: treeStore.getCheckedKeys,
    })

    const handleDrop = async (e: any, targetKey: NodeKeyType, hoverPart: dragHoverPartEnum) => {
        if (e.dataTransfer) {
            try {
                const node: TreeNode = treeStore._getNode(targetKey);
                const dragNodeKey = e.dataTransfer.getData('node');
                const dragNode: TreeNode = treeStore._getNode(dragNodeKey);
                const shouldDrop: boolean = props.beforeDropMethod ? await props.beforeDropMethod(
                    node,
                    dragNode,
                    hoverPart
                ) : true;

                if (shouldDrop) {
                    if (targetKey === dragNodeKey) return
                    if (hoverPart === dragHoverPartEnum.before) {
                        treeStore.insertBefore(targetKey, dragNodeKey);
                        // 如果是拖拽到父节点，并且父节点是展开的，则不管 hoverPart 是不是 after 都拖入为子节点
                    } else if (hoverPart === dragHoverPartEnum.body || node.expand) {
                        treeStore.prepend(targetKey, dragNodeKey)
                    } else if (hoverPart === dragHoverPartEnum.after) {
                        treeStore.insertAfter(targetKey, dragNodeKey)
                    }
                    props.onNodeDrop?.(e, node, dragNode, hoverPart);
                }
            } catch (err: any) {
                throw new Error(err)
            }
        }
    }

    const style = () => useStyle(props, {});

    return <TreeContext.Provider value={{onOpenClose: onNodeExpandCollapse, onNodeSelect: treeStore.selectNode,
        store: treeStore, draggable: props.draggable, checkable: props.checkable || false, onDrop: handleDrop,
        directory: props.directory, onContextMenu: props.onContextMenu, contextMenu: props.contextMenu,
        onNodeCheck: onNodeCheck, onDragStart: props.onNodeDragStart, onDragEnter: props.onNodeDragEnter,
        onDragLeave: props.onNodeDragLeave, onDragOver: props.onNodeDragOver, selectedClass: props.selectedClass,
        dragHoverClass: props.dragHoverClass, draggingClass: props.draggingClass, customIcon: props.customIcon,
        arrowIcon: props.arrowIcon}}>
        <Show when={props.contextMenu} fallback={
            <div class="cm-tree" style={style()}>
                <Show when={props.data && props.data.length} fallback={
                    <div class="cm-tree-empty">{emptyText}</div>
                }>
                    <VirtualList ref={vir} items={store.nodeList} itemEstimatedSize={22} itemComponent={{component: NodeWrap, props: {}}} />
                </Show>
            </div>
        }>
            <Show when={props.data && props.data.length} fallback={
                <div class="cm-tree-empty">{emptyText}</div>
            }>
                <Dropdown visible={[visible, setVisible]} transfer trigger="contextMenu" position={{x: x(), y: y()}}
                    onMouseClick={(e) => {
                        setX(e.pageX);
                        setY(e.pageY + 5);
                    }}
                    handler=".cm-tree-text" align="bottomLeft" menu={props.contextMenu} onSelect={props.onSelectMenu}>
                    <div class="cm-tree" style={style()}>
                        <VirtualList onScroll={() => setVisible(false)} ref={vir} items={store.nodeList} itemEstimatedSize={22} itemComponent={{component: NodeWrap, props: {}}} />
                    </div>
                </Dropdown>
            </Show>
        </Show>
    </TreeContext.Provider>
}

const NodeWrap = (props: any) => {
    return <Node data={props.item} ref={props.ref}/>
}
