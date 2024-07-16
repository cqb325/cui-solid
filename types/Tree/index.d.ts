import type { Signal } from 'solid-js';
import { type JSXElement } from 'solid-js';
import type { TreeCheckMod, TreeNode } from './store';
export * from './store';
export type NodeKeyType = string | number;
export interface TreeContextProps {
    onOpenClose: (node: any) => void;
    onNodeSelect: (node: any) => void;
    store: any;
    draggable?: boolean;
    checkable: boolean;
    directory?: boolean;
    contextMenu?: JSXElement;
    selectedClass?: string;
    dragHoverClass?: string;
    draggingClass?: string;
    onContextMenu?: (data: any) => void;
    onDragStart?: (e: any, node: any) => void;
    onDragEnter?: (e: any, node: any, hoverPart: dragHoverPartEnum) => void;
    onDragOver?: (e: any, node: any, hoverPart: dragHoverPartEnum) => void;
    onDragLeave?: (e: any, node: any, hoverPart: dragHoverPartEnum) => void;
    onDrop: (e: any, targetKey: NodeKeyType, dropPosition: dragHoverPartEnum) => void;
    onNodeCheck: (node: NodeKeyType | TreeNode, checked: boolean) => void;
    customIcon?: (node: TreeNode) => JSXElement;
    arrowIcon?: () => JSXElement;
}
export interface TreeInstanceProps {
    prepend: (parentKey: NodeKeyType, nodeId: NodeKeyType | TreeNode) => void;
    append: (parentKey: NodeKeyType, nodeId: NodeKeyType | TreeNode) => void;
    insertBefore: (targetKey: NodeKeyType, nodeId: NodeKeyType | TreeNode) => void;
    insertAfter: (targetKey: NodeKeyType, nodeId: NodeKeyType | TreeNode) => void;
    getNode: (nodeId: NodeKeyType) => TreeNode;
    remove: (nodeId: NodeKeyType | TreeNode) => void;
    filter: (keyword: string, filterMethod: any) => void;
    expandAll: () => void;
    collapseAll: () => void;
    expandNode: (nodeId: TreeNode | NodeKeyType, expand: boolean) => Promise<void>;
    scrollTo: (nodeId: TreeNode | NodeKeyType, position: 'top' | 'center' | 'bottom') => void;
    rename: (nodeId: TreeNode | NodeKeyType, title: string) => void;
    checkNode: (node: TreeNode | NodeKeyType, checked: boolean) => void;
    checkAll: () => void;
    uncheckAll: () => void;
    loadData: (nodeId: TreeNode | NodeKeyType, loadDataMethod: (node: TreeNode) => Promise<TreeNode[]>) => void;
    selectNode: (nodeId: NodeKeyType | TreeNode, silence?: boolean) => void;
    getChecked: (mode: TreeCheckMod) => TreeNode[];
    getCheckedKeys: (mode: TreeCheckMod) => NodeKeyType[];
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
    onNodeDragEnter?: (e: any, node: any, hoverPart: dragHoverPartEnum) => void;
    onNodeDragOver?: (e: any, node: any, hoverPart: dragHoverPartEnum) => void;
    onNodeDragLeave?: (e: any, node: any, hoverPart: dragHoverPartEnum) => void;
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
export declare enum dragHoverPartEnum {
    before = "before",
    body = "body",
    after = "after"
}
export declare const TreeContext: import("solid-js").Context<TreeContextProps>;
export declare const useTreeContext: () => TreeContextProps;
export declare function Tree(props: TreeProps): import("solid-js").JSX.Element;
