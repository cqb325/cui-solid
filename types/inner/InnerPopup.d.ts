import type { JSX, Signal } from "solid-js";
import type { ButtonProps } from "../Button";
export interface InnerPopupProps extends Omit<JSX.HTMLAttributes<HTMLDivElement>, 'title'> {
    align?: 'top' | 'bottom' | 'left' | 'right' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom';
    trigger?: 'hover' | 'click' | 'focus';
    disabled?: boolean;
    arrow?: boolean;
    hideDelay?: number;
    onVisibleChange?: (open: boolean) => void;
    content?: JSX.Element;
    contentStyle?: JSX.CSSProperties | string;
    visible?: Signal<boolean>;
    theme?: string | 'light' | 'primary' | 'success' | 'info' | 'warning' | 'error' | 'blue' | 'green' | 'red' | 'yellow' | 'pink' | 'magenta' | 'volcano' | 'orange' | 'gold' | 'lime' | 'cyan' | 'geekblue' | 'purple';
    ref?: any;
    confirm?: boolean;
    okText?: any;
    okType?: ButtonProps['type'];
    title?: JSX.Element;
    cancelText?: any;
    cancelType?: ButtonProps['type'];
    offset?: number;
    clsPrefix?: string;
    varName?: string;
    onOk?: () => void | Promise<boolean | void>;
    onCancel?: () => void;
    arrowPointAtCenter?: boolean;
    showCancel?: boolean;
}
export declare function InnerPopup(props: InnerPopupProps): JSX.Element;
