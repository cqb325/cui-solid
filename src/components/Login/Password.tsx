import type { JSXElement } from "solid-js";
import { InnerInput } from "../FormElements/Input/input";
import { FormItem } from "../FormItem";
import { Icon } from "../Icon";
import useValidation from "../utils/useValidation";

export interface PasswordProps {
    label?: string
    size?: 'small'|'large'
    placeholder?: string
    name?: string
    icon?: JSXElement
    rules?: {[key: string]: any}
    messages?: {[key: string]: string}
    onInput?(value: string, e: any): void
}
export function Password (props: PasswordProps) {
    const name = props.name ?? 'password';
    const icon = props.icon ?? <Icon name="lock"/>;
    const rules = {require: useValidation().required, ...props.rules};
    const messages = {require: "请输入密码！", ...props.messages};
    const placeholder = props.placeholder ?? '请输入密码';
    const size = props.size ?? 'large';
    return <FormItem label={props.label} name={name} rules={rules} messages={messages}>
        <InnerInput type="password" prepend={icon} size={size} placeholder={placeholder} onInput={props.onInput} autocomplete="off"/>
    </FormItem>
}
