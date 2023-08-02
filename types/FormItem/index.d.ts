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
    labelStyle?: Object;
    label?: string;
    style?: any;
    rules?: {
        [key: string]: any;
    };
    messages?: {
        [key: string]: string;
    };
};
export declare function FormItem(props: FormItemProps): import("solid-js").JSX.Element;
export declare const useFormItem: () => FormItemContextProps | undefined;
export {};
