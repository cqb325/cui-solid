import { TreeCheckMod } from "../../Tree";
import type { NodeKeyType, TreeNode, TreeProps } from "../../Tree";
export interface TreeSelectProps extends TreeProps {
    classList?: any;
    class?: string;
    style?: any;
    data: TreeNode[];
    transfer?: boolean;
    align?: 'bottomLeft' | 'bottomRight';
    disabled?: boolean;
    clearable?: boolean;
    prepend?: any;
    mode?: TreeCheckMod;
    size?: 'small' | 'large';
    showMax?: number;
    valueClosable?: boolean;
    placeholder?: string;
    showMore?: boolean;
    multi?: boolean;
    asFormField?: boolean;
    onChange?: (value: NodeKeyType | NodeKeyType[]) => void;
}
export declare function TreeSelect(props: TreeSelectProps): import("solid-js").JSX.Element;
