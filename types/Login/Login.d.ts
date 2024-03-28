import type { JSXElement } from "solid-js";
import type { useFormProps } from "../utils/useForm";
export interface LoginProps {
    classList?: any;
    class?: string;
    style?: any;
    children?: JSXElement;
    onSubmit?(valid: boolean, data: useFormProps): void;
    data?: {
        [key: string]: string;
    };
}
export declare const LoginContext: import("solid-js").Context<unknown>;
export declare function Login(props: LoginProps): import("solid-js").JSX.Element;
export declare const useLoginContext: () => unknown;
