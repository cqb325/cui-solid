import type { Signal } from "solid-js";
type TransferProps = {
    classList?: any;
    class?: string;
    style?: any;
    width?: number;
    height?: number;
    data?: any[];
    value?: any[] | Signal<any>;
    filter?: boolean;
    render?: (item: any) => any;
    onChange?: (value: any[]) => void;
};
export type TransferStore = {
    data: any[];
    sourceDisabled: boolean;
    targetDisabled: boolean;
    sourceIds: any[];
    targetIds: any[];
};
export declare function Transfer(props: TransferProps): import("solid-js").JSX.Element;
export {};
