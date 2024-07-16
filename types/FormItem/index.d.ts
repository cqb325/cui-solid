export type FormItemContextProps = {
    name?: string;
};
export declare const FormItemContext: import("solid-js").Context<FormItemContextProps | undefined>;
type FormItemProps = {
    classList?: any;
    class?: string;
    inline?: boolean;
    name?: string;
    children?: any;
    labelStyle?: any;
    label?: string;
    labelAlign?: 'start' | 'end' | 'center';
    style?: any;
    rules?: {
        [key: string]: any;
    };
    messages?: {
        [key: string]: string;
    };
    errorTransfer?: boolean;
    errorAlign?: 'top' | 'bottom' | 'left' | 'right' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom';
};
export declare function FormItem(props: FormItemProps): import("solid-js").JSX.Element;
export declare const useFormItem: () => FormItemContextProps | undefined;
export {};
