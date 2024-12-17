import type { Signal } from "solid-js";
export interface RateProps {
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
    asFormField?: boolean;
}
export declare function Rate(props: RateProps): import("solid-js").JSX.Element;
