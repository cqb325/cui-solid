import type { Component, JSXElement } from "solid-js";
export interface TabProps {
    children: JSXElement;
    title?: any;
    name: string;
    disabled?: boolean;
    closeable?: boolean;
    icon?: any;
}
export declare const Tab: Component<TabProps>;
