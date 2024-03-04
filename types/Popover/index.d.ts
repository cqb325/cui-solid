export interface PopoverProps {
    classList?: any;
    class?: string;
    align?: 'top' | 'bottom' | 'left' | 'right' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom';
    trigger?: 'hover' | 'click';
    disabled?: boolean;
    arrow?: boolean;
    theme?: string;
    hideDelay?: number;
    onOpen?: Function;
    children?: any;
    content?: any;
    visible?: any;
    ref?: any;
    confirm?: boolean;
    okText?: any;
    cancleText?: any;
    style?: any;
    onOk?: Function;
    onCancel?: Function;
}
export declare function Popover(props: PopoverProps): import("solid-js").JSX.Element;
