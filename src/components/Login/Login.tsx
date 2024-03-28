import type { JSXElement} from "solid-js";
import { createContext, useContext } from "solid-js";
import { Form } from "../Form";
import type { useFormProps } from "../utils/useForm";
import useForm from "../utils/useForm";
import { useClassList } from "../utils/useProps";

export interface LoginProps {
    classList?: any
    class?: string
    style?: any
    children?: JSXElement
    onSubmit?(valid: boolean, data: useFormProps):void
    data?: {[key: string]: string}
}

export const LoginContext = createContext();
export function Login (props: LoginProps) {
    const form = useForm({
        data: props.data || {},
        validation: {
        },
        message: {
        }
    })
    const classList = () => useClassList(props, 'cm-login');
    const onSubmit = async () => {
        const valid = await form.isValid();
        props.onSubmit && props.onSubmit(valid, form);
    }
    return <LoginContext.Provider value={{onSubmit, form}}>
        <Form form={form} onBeforeSubmit={onSubmit} autocomplete="off" classList={classList()} style={props.style}>
            {props.children}
        </Form>
    </LoginContext.Provider>
}

export const useLoginContext = () => useContext(LoginContext);
