export type NoticeConfig = {
    dock?: 'topRight' | 'topLeft' | 'bottomLeft' | 'bottomRight';
    key?: string;
    duration?: number;
    content?: any;
    title?: any;
    icon?: any;
    theme?: 'success' | 'warning' | 'error' | 'info';
    btn?: any;
    style?: any;
    onClose?: () => void;
};
export declare const notice: {
    open(config: NoticeConfig): void;
    info(config: NoticeConfig): void;
    success(config: NoticeConfig): void;
    warning(config: NoticeConfig): void;
    error(config: NoticeConfig): void;
    help(config: NoticeConfig): void;
};
