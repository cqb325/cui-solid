import { createSignal } from "solid-js";
import { Button } from "../Button";
import { InnerInput } from "../FormElements/Input/input";
import { FormItem } from "../FormItem";
import { Icon } from "../Icon";
import { Image } from "../Image";
import { Space } from "../Layout";
import useValidation from "../utils/useValidation";
import type { UserNameProps } from "./UserName";
import { useLoginContext } from "./Login";
import { CountDown } from "./CountDown";

export interface CaptchaProps extends UserNameProps {
    action?: string
    onGetCaptcha?():void
    field?: string
    countDownNumber?: number
}

export function Captcha (props: CaptchaProps) {
    const [action, setAction] = createSignal<string>(props.action ?? '');
    const [counting, setCounting] = createSignal<boolean>(false);
    const name = props.name ?? 'captcha';
    const icon = props.icon ?? <Icon name="key"/>;
    const rules = {require: useValidation().required, ...props.rules};
    const messages = {require: "请输入验证码！", ...props.messages};
    const placeholder = props.placeholder ?? '请输入验证码';
    const size = props.size ?? 'large';
    const countDownNumber = props.countDownNumber ?? 60;
    const text = () => {
        return action() ? <Image src={action()}/> : counting() ? <CountDown value={countDownNumber} format="s秒" onEnd={() => {
            setCounting(false);
        }}/> : '获取验证码';
    }
    const ctx: any = useLoginContext();
    const onGetCaptcha = async () => {
        const url = action();
        if (url) {
            const urls = url.split('?');
            const params = new URLSearchParams(urls[1]);
            params.set('_', `${Date.now()}`);
            setAction(urls[0] + '?' + params.toString());
        } else {
            const form = ctx?.form;
            if (props.field && form) {
                const valid = await form.checkField(props.field);
                if (!valid) {
                    return;
                }
            }
            setCounting(true);
            props.onGetCaptcha && props.onGetCaptcha();
        }
    }
    return <FormItem label={props.label} name={name} rules={rules} messages={messages}>
        <Space>
            <InnerInput prepend={icon} size={size} placeholder={placeholder}/>
            <Button size={size} onClick={onGetCaptcha} disabled={counting()} style={{flex: '0 0 120px'}}>{text()}</Button>
        </Space>
    </FormItem>
}
