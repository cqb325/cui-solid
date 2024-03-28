import type { Component, JSXElement } from "solid-js";
// type TabProps = {
//     children?: any,
//     title?: any,
//     name: string,
//     disabled?: boolean
//     closeable?: boolean,
//     icon?: any
// }

// export function Tab (props: TabProps){
//     const ctx: any = useTabsContext();
//     const classList = () => useClassList(props, 'cm-tab-panel', {
//         'cm-tab-panel-active': props.name === ctx?.store.activeName
//     });
//     if (ctx) {
//         ctx.addTab({
//             title: props.title,
//             name: props.name,
//             disabled: props.disabled,
//             icon: props.icon,
//             closeable: props.closeable
//         } as TabConfig);
//     }

//     const isShow = () => {
//         const tab = ctx?.store.tabs.find((tab: any) => tab.name === props.name);
//         return !!tab;
//     }

//     return <Show when={isShow()}>
//         <div classList={classList()} >{props.children}</div>
//     </Show>
// }


export interface TabProps {
	children: JSXElement,
    title?: any,
    name: string,
    disabled?: boolean
    closeable?: boolean,
    icon?: any
}
export const Tab: Component<TabProps> = (props) => {
	return props as unknown as JSXElement
}
