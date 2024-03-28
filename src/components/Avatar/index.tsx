import { useClassList } from "../utils/useProps";
import type { JSX, JSXElement} from 'solid-js';
import { Match, Show, Switch, createSignal, onMount } from 'solid-js'

export interface AvatarProps {
    classList?: any,
    class?: string,
    size?: number|'small'|'large'
    icon?: any
    src?: string
    shape?: string
    style?: any
    onClick?: JSX.EventHandlerUnion<HTMLSpanElement, MouseEvent>
    children?: any
    title?: string | number | JSXElement
    asProps?: boolean
    onMouseEnter?(e: any): void
    onMouseLeave?(e: any): void
    hoverMask?: JSXElement
}

export function Avatar (props: AvatarProps) {
    if (props.asProps) {
        return props as unknown as JSXElement;
    }
    const [hover, setHover] = createSignal(false);
    const classList = () => useClassList(props, 'cm-avatar', {
        [`cm-avatar-${props.size}`]: props.size,
        'cm-avatar-icon': props.icon,
        'cm-avatar-img': props.src,
        'cm-avatar-square': props.shape === 'square'
    });

    let string: any;
    let wrap: any;

    onMount(() => {
        if (wrap && string) {
            string.style.Transform = '';
            string.style.webkitTransform = '';
            string.style.mozTransform = '';
            const wrapW = wrap.clientWidth;
            const strRect = string.getBoundingClientRect();
            const strW = strRect.width;
            const strH = 21;
            const theta = Math.acos(strH / wrapW);
            const w = Math.sin(theta) * wrapW;
            const ratio = strW > wrapW ? w / strW : 1;
            string.style.Transform = `scale(${ratio})`;
            string.style.webkitTransform = `scale(${ratio})`;
            string.style.mozTransform = `scale(${ratio})`;
        }
    })

    const style = () => {
        const obj = {...props.style};
        if (typeof props.size === 'number') {
            obj.width = props.size + 'px';
            obj.height = props.size + 'px';
        }
        return obj;
    }

    const onMouseEnter = (e: any) => {
        setHover(true);
        props.onMouseEnter && props.onMouseEnter(e);
    }

    const onMouseLeave = (e: any) => {
        setHover(false);
        props.onMouseLeave && props.onMouseLeave(e);
    }

    return <span classList={classList()} style={style()} onClick={props.onClick} ref={wrap}
        onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <Show when={hover()}>
            <div class="cm-avatar-hover">
                {props.hoverMask}
            </div>
        </Show>
        <Switch fallback={<span class="cm-avatar-string" ref={string}>{props.children}</span>}>
            <Match when={props.src}>
                <img src={props.src} alt="" />
            </Match>
            <Match when={props.icon}>
                {props.icon}
            </Match>
        </Switch>
    </span>
}
