type TagProps = {
    classList?: any;
    class?: string;
    theme?: 'primary' | 'danger' | 'warning' | 'success' | 'info' | 'magenta' | 'red' | 'volcano' | 'orange' | 'gold' | 'yellow' | 'lime' | 'green' | 'cyan' | 'blue' | 'geekblue' | 'purple';
    value?: any;
    circle?: boolean;
    size?: 'small' | 'large';
    avatar?: any;
    onBeforeClose?: Function;
    onClose?: Function;
    style?: any;
    children?: any;
    closable?: boolean;
    visible?: boolean | Function[];
};
export declare function Tag(props: TagProps): import("solid-js").JSX.Element;
export {};
