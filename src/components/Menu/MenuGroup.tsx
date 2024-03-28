import type { JSXElement} from "solid-js";
import { createEffect, onMount } from "solid-js";
import { useClassList } from "../utils/useProps";
import { MenuItem } from "./MenuItem";
import { useMenuContext } from ".";

type MenuGroupProps = {
    name?: string,
    icon?: JSXElement,
    title?: any,
    children?: any
}

export function MenuGroup (props: MenuGroupProps) {
    if (!props.name) {
        console.warn("MenuGroup need name prop");
    }
    const classList = () => useClassList(props, 'cm-menu-group');
    const ctx: any = useMenuContext();
    let self: any;
    let listEle: any;
    onMount(() => {
        const parentPadding = self.parentElement.getAttribute('x-padding');
        self.setAttribute('x-padding', parentPadding);
        listEle.setAttribute('x-padding', parentPadding);

        const parentName = self.parentElement.getAttribute('x-name');
        const item = {
            name: props.name,
            parent: null,
            children: []
        }
        if (ctx && props.name) {
            ctx.treeMap[props.name] = item;
            if (parentName === '__root') {
                ctx?.tree.push(item)
            } else {
                const parent = ctx.treeMap[parentName];
                item.parent = parent;
                parent.children.push(item);
            }
        }
    });

    createEffect(() => {
        let flag = false;
        if (ctx && self) {
            const parentName = self.parentElement.getAttribute('x-name');
            flag = ctx.store.min && parentName === '__root';
        }
        if (!flag && ctx?.dir === 'v') {
            setTimeout(() => {
                const parentPadding = self.parentElement.getAttribute('x-padding');
                const padding = parseInt(parentPadding) + 16;

                self.setAttribute('x-padding', parentPadding);
                listEle.setAttribute('x-padding', padding);
            });
        }
    });

    return <li classList={classList()} ref={self}>
        <MenuItem icon={props.icon} isSubmenuTitle>{props.title}</MenuItem>
        <ul class="cm-menu-group-list" ref={listEle} x-name={props.name}>{props.children}</ul>
    </li>
}
