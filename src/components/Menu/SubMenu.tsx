import type { JSXElement} from "solid-js";
import { createEffect, createSignal, onMount, Show } from "solid-js";
import { useClassList } from "../utils/useProps";
import { MenuItem } from "./MenuItem";
import { useMenuContext } from ".";
import { Dropdown } from "../Dropdown";

type SubMenuProps = {
    name?: string,
    align?: "bottom" | "right" | "bottomLeft" | "bottomRight" | "rightTop" | "left" | "leftTop",
    icon?: JSXElement,
    children?: any,
    title?: any
}

export function SubMenu (props: SubMenuProps) {
    if (!props.name) {
        console.warn("SubMenu need name prop");
    }
    const [min, setMin] = createSignal(false);
    const ctx: any = useMenuContext();
    const open = () => {
        let isOpen = false;
        if (ctx && ctx.store.openKeys && props.name) {
            isOpen = ctx.store.openKeys[props.name];
        }
        listEle.style.transition = 'none';
        listEle.style.height = 'auto';
        const oh = listEle.offsetHeight;
        listEle.style.transition = '';
        if (isOpen) {
            listEle.style.height = '0px';
            setTimeout(() => {
                listEle.style.height = oh + 'px';
            });
            setTimeout(() => {
                listEle.style.height = 'auto';
            }, 250);
        } else {
            listEle.style.height = oh + 'px';
            setTimeout(() => {
                listEle.style.height = '0px';
            });
        }
        return isOpen;
    }
    const classList = () => useClassList(props, 'cm-menu-submenu', {
        'cm-menu-submenu-open': open(),
    });
    let self: any;
    let listEle: any;

    createEffect(() => {
        let flag = false;
        if (ctx && self) {
            const parentName = self.parentElement.getAttribute('x-name');
            flag = ctx.store.min && parentName === '__root';
        }
        setMin(flag);
        if (!flag && ctx?.dir === 'v') {
            setTimeout(() => {
                const parentPadding = self.parentElement.getAttribute('x-padding');
                const padding = parseInt(parentPadding) + 16;

                self.setAttribute('x-padding', parentPadding);
                listEle.setAttribute('x-padding', padding);
            });
        }
    });

    onMount(() => {
        // 获取上级的padding
        const parentPadding = self.parentElement.getAttribute('x-padding');
        // 子菜单增加padding
        const padding = parseInt(parentPadding) + 16;

        self.setAttribute('x-padding', parentPadding);
        listEle.setAttribute('x-padding', padding);

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
    const onSelect = () => {
        ctx?.setOpen(props.name)
    }

    const align = props.align || (ctx?.dir === 'h' ? 'bottom' : 'rightTop');
    return <Show when={min() || ctx?.dir === 'h'} fallback={
        <li classList={classList()} ref={self}>
            <MenuItem icon={props.icon} cert isSubmenuTitle onSelect={onSelect}>{props.title}</MenuItem>
            <ul class="cm-menu-submenu-list" ref={listEle} x-name={props.name}>{props.children}</ul>
        </li>
    }>
        <li classList={classList()} ref={self}>
            <Dropdown align={align} theme={ctx?.theme} revers={false} menu={<ul class="cm-menu-submenu-list" ref={listEle} x-name={props.name}>{props.children}</ul>}>
                <MenuItem icon={props.icon} cert isSubmenuTitle onSelect={onSelect}>{props.title}</MenuItem>
            </Dropdown>
        </li>
    </Show>
}
