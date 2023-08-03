export interface TextareaProps {
    classList?: any;
    class?: any;
    style?: any;
    disabled?: boolean;
    autoHeight?: boolean;
    value?: any;
    name?: string;
    trigger?: 'input' | 'blur';
    onChange?: Function;
    onInput?: Function;
    onKeyUp?: Function;
    onEnter?: Function;
}
export declare function Textarea(props: TextareaProps): import("solid-js").JSX.Element;
