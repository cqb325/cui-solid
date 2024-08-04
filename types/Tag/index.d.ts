import type { Signal } from 'solid-js';
type TagProps = {
    classList?: any;
    class?: string;
    theme?: 'primary' | 'danger' | 'warning' | 'success' | 'info' | 'magenta' | 'red' | 'volcano' | 'orange' | 'gold' | 'yellow' | 'lime' | 'green' | 'cyan' | 'blue' | 'geekblue' | 'purple';
    value?: any;
    circle?: boolean;
    size?: 'small' | 'large' | 'xlarge';
    avatar?: any;
    onBeforeClose?: (e: any) => boolean;
    onClose?: (e: any) => void;
    style?: any;
    children?: any;
    closable?: boolean;
    border?: boolean;
    visible?: boolean | Signal<boolean>;
};
export declare function Tag(props: TagProps): import("solid-js").JSX.Element;
export {};
