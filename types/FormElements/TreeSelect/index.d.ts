import { TreeCheckMod } from "../../Tree";
import type { NodeKeyType, TreeProps } from "../../Tree";
type TreeSelectProps = {
    classList?: any;
    class?: string;
    style?: any;
    data?: any[];
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
    onChange?: (value: NodeKeyType | NodeKeyType[]) => void;
} & TreeProps;
export declare function TreeSelect(props: TreeSelectProps): import("solid-js").JSX.Element;
export {};
