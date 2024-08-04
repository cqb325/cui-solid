import useClickAnimating from "../utils/useClickAnimating";
import { Loading } from "../inner/Loading";
import type { ComponentProps } from "solid-js";
import { Show, splitProps, useContext } from "solid-js";
import { ButtonGroupContext } from "../ButtonGroup";
import { useClassList } from "../utils/useProps";

export type ButtonProps = {
    classList?: any,
    class?: string,
    link?: string,
    type?: 'primary'|'success'|'error'|'warning'|'default'|'dashed'|'link'|'text',
    block?: boolean,
    size?: 'small'|'default'|'large',
    active?: boolean,
    circle?: boolean,
    round?: boolean,
    disabled?: boolean,
    loading?: boolean,
    ghost?: boolean,
    icon?: any,
    danger?: boolean,
    iconAlign?: 'left' | 'right',
    ref?: any,
    onClick?: (e: any) => void
} & ComponentProps<any>;

export const Button = (props: ButtonProps) => {
        const [animating, setAnimating] = useClickAnimating();
        const iconPosition = props.iconAlign || 'left';
        const ctx: any = useContext(ButtonGroupContext);
        const type = () => props.type || ctx?.type;
        const size = () => props.size || ctx?.size;
        const disabled = () => props.disabled || ctx?.disabled;
        const classList = () => useClassList(props, {
            'cm-button': true,
            [`cm-button-icon-${iconPosition}`]: true,
            'cm-click-animating': animating(),
            'cm-button-ghost': props.ghost,
            'cm-button-danger': props.danger,
            'cm-button-block': props.block,
            [`cm-button-${type()}`]: type(),
            [`cm-button-${size()}`]: size(),
            'cm-button-active': props.active,
            'cm-button-circle': props.circle,
            'cm-button-round': props.round,
            'cm-button-icon-only': !!props.icon && !props.children,
            'cm-button-empty': !props.icon && !props.children
        });

        const [local, others] = splitProps(props, ['classList', 'class', 'onClick', 'link', 'style', 'title', 'type', 'block',
            'size', 'active', 'circle', 'icon', 'children', 'iconAlign', 'disabled', 'loading', 'ghost', 'ref']);

        function handleClick (e: any) {
            if (disabled() || local.loading) {
                return;
            }
            if (local.onClick) {
                local.onClick(e);
            }
        }

        const slots = iconPosition === 'left' ?
        <>
            { local.loading ? <Loading /> : local.icon ? <span class="cm-button-icon">{local.icon}</span> : null }
            {local.children}
        </> :
        <>
            {local.children}
            {local.loading ? <Loading /> : local.icon ? <span class="cm-button-icon">{local.icon}</span> : null}
        </>
    return <Show when={!local.link} fallback={<a classList={classList()} style={local.style} ref={local.ref} title={local.title} {...others} onMouseUp={setAnimating} onClick={handleClick}>{slots}</a>}>
        <button type="button" classList={classList()} style={local.style} ref={local.ref} title={local.title} disabled={disabled()} {...others} onMouseUp={setAnimating} onClick={handleClick}>{slots}</button>
    </Show>
}
