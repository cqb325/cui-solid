import type { JSXElement } from "solid-js";
export declare const FormContext: import("solid-js").Context<FormContextOptions | undefined>;
export type FormContextOptions = {
    labelWidth?: number;
    inline?: boolean;
    form: any;
    errorTransfer?: boolean;
    errorAlign?: 'top' | 'bottom' | 'left' | 'right' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom';
    onChange: (name: string, value: any) => void;
};
type FormProps = {
    classList?: any;
    class?: string;
    children?: JSXElement;
    style?: any;
    labelWidth?: number;
    form?: any;
    inline?: boolean;
    errorTransfer?: boolean;
    errorAlign?: 'top' | 'bottom' | 'left' | 'right' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom';
    onChange?: (name: string, value: any) => void;
    onBeforeSubmit?: () => any;
    autocomplete?: string;
};
export declare function Form(props: FormProps): import("solid-js").JSX.Element;
export {};
