import type { Signal } from "solid-js";
import type { DropdownItemProps } from "./DropdownItem";
export * from './DropdownMenu';
export * from './DropdownItem';
export declare const useDropdownConext: () => unknown;
export interface DropdownPosition {
    x: number;
    y: number;
}
export interface DropdownNode extends DropdownItemProps {
    title: string;
    children?: DropdownNode[];
    [key: string]: any;
}
export interface DropdownProps {
    trigger?: 'hover' | 'click' | 'contextMenu' | 'custom';
    align?: 'bottom' | 'bottomLeft' | 'bottomRight' | 'right' | 'rightBottom' | 'left' | 'leftBottom' | 'top' | 'topLeft' | 'topRight' | 'rightTop' | 'leftTop';
    classList?: any;
    class?: any;
    style?: any;
    onSelect?: (name: string, data: any) => void;
    children: any;
    menu?: any;
    visible?: boolean | Signal<any>;
    transfer?: boolean;
    theme?: string | 'dark' | 'light' | 'primary' | 'success' | 'warning' | 'error' | 'info' | 'blue' | 'green' | 'red' | 'yellow' | 'pink' | 'magenta' | 'volcano' | 'orange' | 'gold' | 'lime' | 'cyan' | 'geekblue' | 'purple';
    data?: DropdownNode[];
    disabled?: boolean;
    revers?: boolean;
    handler?: string;
    fixWidth?: boolean;
    gradient?: string[];
    color?: string;
    arrow?: boolean;
    offset?: number;
    position?: DropdownPosition;
    ref?: any;
    onMouseClick?: (e: MouseEvent) => void;
    onBeforeDrop?: (visible: boolean) => boolean;
}
export declare function Dropdown(props: DropdownProps): import("solid-js").JSX.Element;
