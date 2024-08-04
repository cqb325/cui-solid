import type { Signal } from "solid-js";
export * from './DropdownMenu';
export * from './DropdownItem';
export declare const useDropdownConext: () => unknown;
export interface DropdownPosition {
    x: number;
    y: number;
}
export type DropdownProps = {
    trigger?: 'hover' | 'click' | 'contextMenu' | 'custom';
    align?: 'bottom' | 'bottomLeft' | 'bottomRight' | 'right' | 'left' | 'rightTop' | 'leftTop';
    classList?: any;
    class?: any;
    style?: any;
    onSelect?: (name: string) => void;
    children: any;
    menu?: any;
    visible?: boolean | Signal<any>;
    transfer?: boolean;
    theme?: 'dark' | 'light';
    disabled?: boolean;
    revers?: boolean;
    handler?: string;
    fixWidth?: boolean;
    gradient?: string[];
    color?: string;
    position?: DropdownPosition;
    ref?: any;
    onMouseClick?: (e: MouseEvent) => void;
    onBeforeDrop?: (visible: boolean) => boolean;
};
export declare function Dropdown(props: DropdownProps): import("solid-js").JSX.Element;
