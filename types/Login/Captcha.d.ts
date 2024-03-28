import type { UserNameProps } from "./UserName";
export interface CaptchaProps extends UserNameProps {
    action?: string;
    onGetCaptcha?(): void;
    field?: string;
    countDownNumber?: number;
}
export declare function Captcha(props: CaptchaProps): import("solid-js").JSX.Element;
