import { JSXElement } from "solid-js";
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
    loading?: boolean | Function[];
    onOk?: Function;
    onCancel?: Function;
    onClosed?: Function;
    onClickClose?: Function;
    okText?: any;
    cancleText?: any;
    visible?: boolean | Function[];
    defaultPosition?: Position;
    mask?: boolean;
    maskClosable?: boolean;
    resetPostion?: boolean;
    fullScreen?: boolean;
};
export declare function Modal(props: ModalProps): import("solid-js").JSX.Element;
export interface ModalConfig extends ModalProps {
    content?: JSXElement;
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
