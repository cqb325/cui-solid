export interface TextareaProps {
    classList?: any;
    class?: any;
    style?: any;
    disabled?: boolean;
    autoHeight?: boolean;
    value?: any;
    name?: string;
    trigger?: 'input' | 'blur';
    wordCount?: boolean;
    maxLength?: number;
    onChange?: (value: any) => void;
    onInput?: (value: any, e: any) => void;
    onKeyUp?: (value: any, e: any) => void;
    onEnter?: (value: any, e: any) => void;
}
export declare function Textarea(props: TextareaProps): import("solid-js").JSX.Element;
