import type { Signal } from "solid-js";
export interface TransferProps {
    classList?: any;
    class?: string;
    style?: any;
    width?: number;
    height?: number;
    data?: any[];
    rightText?: string;
    leftText?: string;
    value?: any[] | Signal<any>;
    filter?: boolean;
    asFormField?: boolean;
    render?: (item: any) => any;
    onChange?: (value: any[]) => void;
}
export declare type TransferStore = {
    data: any[];
    sourceDisabled: boolean;
    targetDisabled: boolean;
    sourceIds: any[];
    targetIds: any[];
};
export declare function Transfer(props: TransferProps): import("solid-js").JSX.Element;
