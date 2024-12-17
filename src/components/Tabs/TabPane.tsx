import type { Component, JSX } from "solid-js";
export interface TabPaneProps {
	children?: JSX.Element,
    title?: JSX.Element,
    name: string,
    disabled?: boolean
    closeable?: boolean,
    icon?: JSX.Element
}
export const TabPane: Component<TabPaneProps> = (props) => {
	return props as unknown as JSX.Element
}
