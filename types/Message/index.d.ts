type MessageProps = {
    key?: string;
    duration?: number;
    type?: 'info' | 'success' | 'warning' | 'error';
    class?: string;
    style?: any;
    content?: any;
    closeable?: boolean;
    background?: any;
    loading?: boolean;
    onClose?: (item?: any) => void;
};
export declare const message: {
    close: (key: string) => void;
    open: (config: string | MessageProps, type: 'info' | 'success' | 'warning' | 'error') => void;
    info(config: string | MessageProps): void;
    success(config: string | MessageProps): void;
    warning(config: string | MessageProps): void;
    error(config: string | MessageProps): void;
};
export {};
