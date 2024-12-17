import { splitProps, Show, JSXElement } from "solid-js";
import { useClassList } from "../utils/useProps";
import { Space } from "../Layout";
import type { BreadcrumbItemProps } from "./Item";

export function InnerItem (props: BreadcrumbItemProps) {
    const [local, others] = splitProps(props, ['classList', 'link', 'icon', 'children']);
    const classList = () => useClassList(props, 'cm-breadcrumb-item');
    return <span class="cm-breadcrumb-wrap">
        <a classList={classList()} href={props.link}>
            <Space size={4} align="center">
                <Show when={local.icon}>
                    {local.icon}
                </Show>
                <span>{local.children}</span>
            </Space>
        </a>
        <span class="cm-breadcrumb-separator">{props.separator || '/'}</span>
    </span>
}
