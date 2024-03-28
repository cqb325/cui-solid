import type { Signal } from "solid-js";
type SliderProps = {
    classList?: any;
    class?: string;
    style?: any;
    range?: boolean;
    min?: number;
    max?: number;
    step?: number;
    value?: number | number[] | Signal<any>;
    disabled?: boolean;
    tipFormatter?: (value: any) => any;
    marks?: any;
    onChange?: (value: any) => void;
};
export declare function Slider(props: SliderProps): import("solid-js").JSX.Element;
export {};
