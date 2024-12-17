import type { Accessor, Setter, JSXElement } from "solid-js";
import type { TreeProps } from ".";
export declare type NodeKeyType = string | number;
export interface TreeNode {
    id: NodeKeyType;
    title: string | JSXElement;
    icon?: string | JSXElement;
    children?: TreeNode[];
    expand?: boolean;
    disabled?: boolean;
    loading?: boolean;
    checked?: boolean | 'indeterminate';
    selected?: boolean;
    _parent?: TreeNode;
    _level?: number;
    _dragging?: boolean;
    [key: string]: any;
}
export interface TreeStoreProps {
    nodeMap: Record<NodeKeyType, TreeNode>;
    nodeList: TreeNode[];
}
export declare enum TreeCheckMod {
    FULL = "FULL",
    HALF = "HALF",
    CHILD = "CHILD",
    SHALLOW = "SHALLOW"
}
export declare class TreeStore {
    store: any;
    setStore: any;
    data: TreeNode[];
    flatData: TreeNode[];
    keyField: string;
    titleField: string;
    selectedKey: Accessor<NodeKeyType>;
    setSelectedKey: Setter<NodeKeyType>;
    setSelected: Setter<NodeKeyType>;
    setValue: Setter<NodeKeyType[]>;
    value: Accessor<NodeKeyType[]>;
    checkable: boolean;
    draggable: boolean;
    checkRelation: string;
    props: TreeProps;
    mode: TreeCheckMod;
    constructor(props: TreeProps);
    init(data: any[]): void;
    /**
     * 构建父子关系和层级关系
     * @param data
     * @param parent
     * @param level
     */
    buildRelation: (data: TreeNode[], parent: any, level: number) => void;
    setRootFlatNodes: () => void;
    /**
     * 获取显示的树节点
     * @param nodes
     * @returns
     */
    getFlatNodes: (nodes: TreeNode[]) => TreeNode[];
    /**
     * 获取显示的树节点
     * @param nodes
     * @returns
     */
    getAllFlatNodes: (nodes: TreeNode[]) => TreeNode[];
    getStore(): any;
    openCloseNode: (node: TreeNode) => void;
    /**
     * 选择节点
     * @param node
     * @param silence 不触发回调
     */
    selectNode: (nodeId: NodeKeyType | TreeNode, silence?: boolean | undefined) => void;
    clearSelect: () => void;
    _storeNode: (node: TreeNode, map: Record<NodeKeyType, TreeNode>) => void;
    storeNode: (node: TreeNode) => void;
    getNode: (key: NodeKeyType) => any;
    _getNode: (nodeId: NodeKeyType | TreeNode) => TreeNode;
    removeNode: (node: TreeNode) => void;
    remove: (nodeId: NodeKeyType | TreeNode) => void;
    beforeNodeOperation: (targetKey: any, nodeId: NodeKeyType | TreeNode) => false | TreeNode;
    append: (parentKey: any, nodeId: NodeKeyType | TreeNode) => void;
    /**
     * 更新节点选择状态
     * @param nodeId
     */
    updateNodeCheckStatus: (nodeId: TreeNode | NodeKeyType | undefined) => void;
    updateLevels: (node: TreeNode, startLevel: number) => void;
    prepend: (parentKey: any, nodeId: NodeKeyType | TreeNode) => void;
    insertBefore: (targetKey: NodeKeyType, nodeId: NodeKeyType | TreeNode) => void;
    insertAfter: (targetKey: NodeKeyType, nodeId: NodeKeyType | TreeNode) => void;
    filter: (keyword: string, filterMethod: any) => void;
    getNodeIndexInShow: (nodeId: TreeNode | NodeKeyType) => any;
    expandAll: () => void;
    collapseAll: () => void;
    checkNode: (nodeId: TreeNode | NodeKeyType, checked: boolean) => void;
    setCheckedForwardDown: (node: TreeNode, checked: boolean) => void;
    getNodeChecked: (nodeId: TreeNode | NodeKeyType) => boolean | "indeterminate" | undefined;
    setCheckedForwardUp: (node: TreeNode) => void;
    rename: (nodeId: TreeNode | NodeKeyType, title: string) => void;
    expandNode: (nodeId: TreeNode | NodeKeyType, expand: boolean) => void;
    checkAll: () => void;
    uncheckAll: () => void;
    loadData: (node: TreeNode, loadDataMethod: (node: TreeNode) => Promise<TreeNode[]>) => Promise<void>;
    /**
     *
     * @param mode
     * @returns
     */
    getChecked: (mode?: TreeCheckMod) => TreeNode[];
    /**
     * 获取所有选中的节点包含父节点和子节点
     * @returns
     */
    getFullChecked: () => TreeNode[];
    /**
     * 选中的子节点
     * @returns
     */
    getChildChecked: () => TreeNode[];
    /**
     * 返回全部选中子节点和部分选中的父节点
     * @returns
     */
    getHalfChecked: () => TreeNode[];
    /**
     * 如果父节点下所有子节点全部选中，只返回父节点
     * @returns
     */
    getShallowChecked: () => TreeNode[];
    /**
     * 选中的节点标识
     * @param mode
     * @returns
     */
    getCheckedKeys: (mode?: TreeCheckMod) => NodeKeyType[];
    setNodeDragging: (nodeId: NodeKeyType, dragging: boolean) => void;
    clearChecked: () => void;
    setCheckedByMod: (val: NodeKeyType[]) => void;
    setCheckedByFull: (val: NodeKeyType[]) => void;
    setCheckedByHalf: (val: NodeKeyType[]) => void;
    setCheckedByChild: (val: NodeKeyType[]) => void;
    setCheckedByShallow: (val: NodeKeyType[]) => void;
}
