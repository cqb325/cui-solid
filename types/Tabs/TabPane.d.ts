import type { Component, JSX } from "solid-js";
export interface TabPaneProps {
    children?: JSX.Element;
    title?: JSX.Element;
    name: string;
    disabled?: boolean;
    closeable?: boolean;
    icon?: JSX.Element;
}
export declare const TabPane: Component<TabPaneProps>;
