import type { JSXElement, Signal } from "solid-js";
type Position = {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
};
type ModalProps = {
    bounds?: string;
    disabled?: boolean;
    style?: any;
    classList?: any;
    class?: string;
    title?: any;
    bodyStyle?: any;
    children?: any;
    footer?: boolean;
    footerAlign?: 'start' | 'center' | 'end';
    loading?: boolean | Signal<boolean>;
    onOk?: () => boolean | Promise<boolean> | undefined | void;
    onCancel?: () => void;
    onClosed?: () => void;
    onClickClose?: () => void;
    okText?: any;
    cancleText?: any;
    visible?: boolean | Signal<boolean>;
    defaultPosition?: Position;
    mask?: boolean;
    maskClosable?: boolean;
    resetPostion?: boolean;
    hasCloseIcon?: boolean;
    fullScreen?: boolean;
};
export declare function Modal(props: ModalProps): import("solid-js").JSX.Element;
export interface ModalConfig extends ModalProps {
    content?: JSXElement | (() => any);
    status?: 'success' | 'info' | 'warning' | 'error' | 'confirm';
}
export declare const modal: {
    open(config: ModalConfig): void;
    success(config: ModalConfig): void;
    info(config: ModalConfig): void;
    warning(config: ModalConfig): void;
    error(config: ModalConfig): void;
    confirm(config: ModalConfig): void;
    remove(): void;
};
export {};
