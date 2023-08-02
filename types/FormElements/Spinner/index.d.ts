type SpinnerProps = {
    classList?: any;
    class?: string;
    size?: 'small' | 'default' | 'large';
    name?: string;
    value?: number | Function[];
    style?: any;
    max?: number;
    min?: number;
    step?: number;
    loop?: boolean;
    onChange?: Function;
    onPlus?: Function;
    onSub?: Function;
    disabled?: boolean;
};
export declare function Spinner(props: SpinnerProps): import("solid-js").JSX.Element;
export {};
