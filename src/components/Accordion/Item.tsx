import { Collapase } from "../inner/Collapase";
import { useAccordionContext } from ".";
import { useClassList } from "../utils/useProps";
import type { JSX, JSXElement} from "solid-js";
import { createEffect, createSignal, splitProps } from "solid-js";
import { FeatherChevronRight } from "cui-solid-icons/feather";

export interface AccordionItemProps extends JSX.HTMLAttributes<HTMLDivElement> {
    name?: string,
    title?: any,
    icon?: JSXElement,
    children?: any
}

export function Item (props: AccordionItemProps) {
    const ctx: any = useAccordionContext();
    const signal = ctx?.signal;
    const onSelect = ctx?.onSelect;
    const multi = ctx?.flex ? false : ctx?.multi;
    const [activeKey, setActiveKey] = signal;
    const [opened, setOpened] = createSignal(false);
    const [end, setEnd] = createSignal(false);

    const [local, rest] = splitProps(props, ['name', 'title', 'icon', 'children', 'class', 'classList']);

    const onTitleClick = () => {
        let v;
        let open = false;
        if (!multi) {
            if (activeKey() === local.name) {
                if (ctx?.flex) {
                    return;
                }
                v = '';
                open = false;
            } else {
                v = local.name;
                open = true;
            }
        } else {
            const currentKey = activeKey();
            if (currentKey.includes(local.name)) {
                const index = currentKey.indexOf(local.name);
                currentKey.splice(index, 1);
                v = [].concat(currentKey);
                open = false;
            } else {
                currentKey.push(local.name);
                v = [].concat(currentKey);
                open = true;
            }
        }
        setActiveKey(v);
        onSelect && onSelect(local.name, open, v);
    }

    createEffect(() => {
        let open = false;
        const currentKey = activeKey();
        if (!multi) {
            open = currentKey === local.name;
        } else {
            open = currentKey.includes(local.name);
        }
        setEnd(false);
        setOpened(open);
    });

    const classList = () => useClassList(local, 'cm-accordion-item', {
        'cm-accordion-item-active': opened(),
        'cm-accordion-item-full': opened() && end()
    });

    const onEnd = () => {
        setEnd(true);
    }
    return <div classList={classList()} {...rest}>
        <div class="cm-accordion-title" onClick={onTitleClick}>
            {local.icon}
            <div class="cm-accordion-item-title-text">{local.title}</div>
            <FeatherChevronRight class="cm-accordion-title-arrow" size={14}/>
        </div>
        <Collapase open={opened()} onEnd={onEnd}>
            <div class="cm-accordion-content">{local.children}</div>
        </Collapase>
    </div>
}
