import type { JSXElement } from "solid-js";
import type { PopoverProps } from "../Popover";
export interface TagConfig {
    id: string | number;
    title: string;
    theme?: 'primary' | 'danger' | 'warning' | 'success' | 'info' | 'magenta' | 'red' | 'volcano' | 'orange' | 'gold' | 'yellow' | 'lime' | 'green' | 'cyan' | 'blue' | 'geekblue' | 'purple';
    avatar?: JSXElement;
    [key: string]: any;
}
export interface TagGroupProps {
    style?: any;
    classList?: any;
    class?: string;
    data: TagConfig[];
    closable?: boolean;
    max?: number | 'auto';
    showMore?: boolean;
    moreCloseable?: boolean;
    tooltipAlign?: PopoverProps['align'];
    tooltipTheme?: PopoverProps['color'];
    tooltipTrigger?: PopoverProps['trigger'];
    tooltipStyle?: PopoverProps['style'];
    size?: 'small' | 'large' | 'xlarge';
    extra?: JSXElement;
    onClose?(item: TagConfig, e: any): void;
}
export declare function TagGroup(props: TagGroupProps): import("solid-js").JSX.Element;
