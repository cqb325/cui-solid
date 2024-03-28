import type { JSXElement } from "solid-js";
import { children, For } from "solid-js";
import type { BreadcrumbItemProps} from "./Item";
import { Item } from "./Item";
import { useClassList } from "../utils/useProps";
import { InnerItem } from "./InnerItem";


type BreadcrumbProps = {
    classList?: any,
    class?: string,
    separator?: string,
    children?: JSXElement,
    style?: any
}

export function Breadcrumb (props: BreadcrumbProps) {
    const items = children(() => props.children)
	const evaluatedItems = () => items.toArray() as unknown as BreadcrumbItemProps[];
    const classList = () => useClassList(props, 'cm-breadcrumb');

    return <div classList={classList()} style={props.style}>
        <For each={evaluatedItems()}>
            {(item: BreadcrumbItemProps) => {
                item.separator = props.separator ?? '/';
                return <InnerItem {...item}/>
            }}
        </For>
    </div>
}

Breadcrumb.Item = Item;
