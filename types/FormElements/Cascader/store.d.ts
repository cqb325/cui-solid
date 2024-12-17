import type { Accessor, Setter } from "solid-js";
import { type JSXElement } from "solid-js";
import type { CascaderProps } from ".";
export declare type NodeKeyType = string | number;
export interface CascaderNode {
    id: NodeKeyType;
    title: string | JSXElement;
    icon?: string | JSXElement;
    children?: CascaderNode[];
    expand?: boolean;
    disabled?: boolean;
    loading?: boolean;
    checked?: boolean | 'indeterminate';
    selected?: boolean;
    _parent?: CascaderNode;
    _level?: number;
    _dragging?: boolean;
    [key: string]: any;
}
export interface CascaderStoreProps {
    nodeMap: Record<NodeKeyType, CascaderNode>;
    columns: NodeKeyType[][];
}
export declare enum TreeCheckMod {
    FULL = "FULL",
    HALF = "HALF",
    CHILD = "CHILD",
    SHALLOW = "SHALLOW"
}
export declare class CascaderStore {
    store: any;
    setStore: any;
    data: CascaderNode[];
    flatData: CascaderNode[];
    valueField: string;
    titleField: string;
    selectedKey: Accessor<NodeKeyType[]>;
    setSelectedKey: Setter<NodeKeyType[]>;
    value: Accessor<NodeKeyType[]>;
    setValue: Setter<NodeKeyType[]>;
    props: CascaderProps;
    mode: TreeCheckMod;
    valMap: Record<NodeKeyType, NodeKeyType[]>;
    constructor(props: CascaderProps);
    init(data: any[]): void;
    /**
     * 构建父子关系和层级关系
     * @param data
     * @param parent
     * @param level
     */
    buildRelation: (data: CascaderNode[], parent: any, level: number) => void;
    /**
     * 获取显示的树节点
     * @param nodes
     * @returns
     */
    getAllFlatNodes: (nodes: CascaderNode[]) => CascaderNode[];
    getStore(): any;
    clearSelect: () => void;
    /**
     * 过滤
     * @param keyword
     */
    filter(keyword: string): void;
    getNode: (key: NodeKeyType) => any;
    /**
     * 选择节点
     * @param key
     */
    selectItem: (key: NodeKeyType | CascaderNode) => void;
    _getNode: (nodeId: NodeKeyType | CascaderNode) => CascaderNode;
    /**
     * 更新节点选择状态
     * @param nodeId
     */
    updateNodeCheckStatus: (nodeId: CascaderNode | NodeKeyType | undefined) => void;
    checkNode: (nodeId: CascaderNode | NodeKeyType, checked: boolean) => void;
    setCheckedForwardDown: (node: CascaderNode, checked: boolean) => void;
    getNodeChecked: (nodeId: CascaderNode | NodeKeyType) => boolean | "indeterminate" | undefined;
    setCheckedForwardUp: (node: CascaderNode) => void;
    checkAll: () => void;
    uncheckAll: () => void;
    loadData: (node: CascaderNode, loadDataMethod: (node: CascaderNode) => Promise<CascaderNode[]>) => Promise<void>;
    /**
     *
     * @param mode
     * @returns
     */
    getChecked: (mode?: TreeCheckMod) => CascaderNode[];
    /**
     * 获取所有选中的节点包含父节点和子节点
     * @returns
     */
    getFullChecked: () => CascaderNode[];
    /**
     * 选中的子节点
     * @returns
     */
    getChildChecked: () => CascaderNode[];
    /**
     * 返回全部选中子节点和部分选中的父节点
     * @returns
     */
    getHalfChecked: () => CascaderNode[];
    /**
     * 如果父节点下所有子节点全部选中，只返回父节点
     * @returns
     */
    getShallowChecked: () => CascaderNode[];
    /**
     * 选中的节点标识
     * @param mode
     * @returns
     */
    getCheckedKeys: (mode?: TreeCheckMod) => NodeKeyType[];
    clearChecked: () => void;
    setCheckedByMod: (val: NodeKeyType[]) => void;
    setCheckedByFull: (val: NodeKeyType[]) => void;
    setCheckedByHalf: (val: NodeKeyType[]) => void;
    setCheckedByChild: (val: NodeKeyType[]) => void;
    setCheckedByShallow: (val: NodeKeyType[]) => void;
}
