import { FeatherMail } from "cui-solid-icons/feather";
import { Input } from "../FormElements/Input";
import { FormItem } from "../FormItem";
import useValidation from "../utils/useValidation";
import type { UserNameProps } from "./UserName";


export function Email (props: UserNameProps) {
    const name = props.name ?? 'email';
    const icon = props.icon ?? <FeatherMail />;
    const rules = {require: useValidation().required, email: true, ...props.rules};
    const messages = {require: "请输入邮箱！", "email": "输入的邮箱地址不正确！", ...props.messages};
    const placeholder = props.placeholder ?? '请输入邮箱';
    const size = props.size ?? 'large';
    return <FormItem label={props.label} name={name} rules={rules} messages={messages}>
        <Input prepend={icon} size={size} placeholder={placeholder} onInput={props.onInput} autocomplete="off"/>
    </FormItem>
}
