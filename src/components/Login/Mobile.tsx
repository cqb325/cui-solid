import { FeatherSmartphone } from "cui-solid-icons/feather";
import { Input } from "../FormElements/Input";
import { FormItem } from "../FormItem";
import useValidation from "../utils/useValidation";
import type { UserNameProps } from "./UserName";


export function Mobile (props: UserNameProps) {
    const name = props.name ?? 'mobile';
    const icon = props.icon ?? <FeatherSmartphone />;
    const rules = {require: useValidation().required, mobile: true, ...props.rules};
    const messages = {require: "请输入手机号码！", "mobile": "输入的手机号码不正确！", ...props.messages};
    const placeholder = props.placeholder ?? '请输入手机号码';
    const size = props.size ?? 'large';
    return <FormItem label={props.label} name={name} rules={rules} messages={messages}>
        <Input prepend={icon} size={size} placeholder={placeholder} onInput={props.onInput} autocomplete="off"/>
    </FormItem>
}
