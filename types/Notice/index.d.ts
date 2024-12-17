import type { JSXElement } from "solid-js";
export interface NoticeConfig {
    dock?: 'topRight' | 'topLeft' | 'bottomLeft' | 'bottomRight';
    key?: string;
    duration?: number;
    content?: any;
    title?: any;
    icon?: JSXElement;
    theme?: 'success' | 'warning' | 'error' | 'info' | 'help';
    btn?: any;
    style?: any;
    onClose?: () => void;
}
export declare const notice: {
    open(config: NoticeConfig): void;
    info(config: NoticeConfig): void;
    success(config: NoticeConfig): void;
    warning(config: NoticeConfig): void;
    error(config: NoticeConfig): void;
    help(config: NoticeConfig): void;
};
