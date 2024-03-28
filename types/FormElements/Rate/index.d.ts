import type { Signal } from "solid-js";
type RateProps = {
    classList?: any;
    class?: string;
    disabled?: boolean;
    icon: any;
    style?: any;
    value?: number | Signal<any>;
    children?: any;
    count?: number;
    allowHalf?: boolean;
    onChange?: (value: number) => void;
    name?: string;
};
export declare function Rate(props: RateProps): import("solid-js").JSX.Element;
export {};
