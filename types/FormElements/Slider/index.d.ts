declare type SliderProps = {
    classList?: any;
    class?: string;
    style?: any;
    range?: boolean;
    min?: number;
    max?: number;
    step?: number;
    value?: number | number[] | Function[];
    disabled?: boolean;
    tipFormatter?: Function;
    marks?: any;
    onChange?: Function;
};
export declare function Slider(props: SliderProps): import("solid-js").JSX.Element;
export {};
