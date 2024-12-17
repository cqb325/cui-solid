import type { JSX } from "solid-js";
import type { TabPaneProps } from "./TabPane";
import type { DropdownProps } from "../Dropdown";
import { type TooltipProps } from "../Tooltip";
export * from './TabPane';
export interface TabsProps {
    type?: 'line' | 'card' | 'button';
    buttonTheme?: 'solid' | 'outline' | 'light' | 'borderless';
    style?: any;
    classList?: any;
    class?: any;
    children?: any;
    activeName?: string;
    ref?: any;
    append?: JSX.Element;
    prepend?: JSX.Element;
    centered?: boolean;
    bordered?: boolean;
    arrowPosition?: 'start' | 'both' | 'end';
    more?: boolean;
    moreDropdownProps?: Omit<DropdownProps, 'children' | 'menu'>;
    renderMore?: () => JSX.Element;
    data?: TabPaneProps[];
    onTabClick?: (item: any) => void;
    onRemove?: (name: string) => void;
    duration?: number;
    align?: 'top' | 'bottom' | 'left' | 'right';
    animation?: boolean;
    keepHeight?: boolean;
    maxTabSize?: number;
    tooltip?: boolean;
    tooltipProps?: TooltipProps;
    contextMenu?: JSX.Element;
    onContextMenu?: (e: any) => void;
    onSelectContextMenu?: (name: string, data: any) => void;
    dropdownProps?: Omit<DropdownProps, 'children' | 'menu'>;
}
export interface TabStore {
    tabs: TabPaneProps[];
    moreList: TabPaneProps[];
    morePrevList: TabPaneProps[];
    moreNextList: TabPaneProps[];
    scroll: boolean;
    scrollLeft: number;
}
export declare function Tabs(props: TabsProps): JSX.Element;
