import { type JSX } from "solid-js";
import type { InnerPopupProps } from "../inner/InnerPopup";
import type { ButtonProps } from "../Button";
export interface PopconfirmProps extends InnerPopupProps {
    okText?: string;
    cancelText?: string;
    onOk?: () => void | Promise<boolean | void>;
    onCancel?: () => void;
    okType?: ButtonProps['type'];
    cancelType?: ButtonProps['type'];
    icon?: JSX.Element;
    showCancel?: boolean;
}
export declare function Popconfirm(props: PopconfirmProps): JSX.Element;
