import type { JSX} from "solid-js";
import { createComponent, createSignal, For, onMount, Show } from "solid-js"
import { useClassList } from "../utils/useProps";
import type { NoticeConfig } from ".";
import usezIndex from "../utils/usezIndex";
import { FeatherX } from "cui-solid-icons/feather";
import { F7ExclamationmarkTriangleFill, F7CheckmarkAltCircleFill, F7XmarkCircleFill, F7QuestionCircleFill, F7InfoCircleFill } from "cui-solid-icons/f7";
const icons = {
    info: F7InfoCircleFill,
    success: F7CheckmarkAltCircleFill,
    warning: F7ExclamationmarkTriangleFill,
    error: F7XmarkCircleFill,
    help: F7QuestionCircleFill
}

type NoticesProps = {
    data?: any,
    onClose?: (key: any, dock: any) => void,
    docker?: string
}

function NoticePanel (props: any) {
    const [visible, setVisible] = createSignal(false);
    const [closed, setClosed] = createSignal(false);
    let wrap: any;
    const data: NoticeConfig = props.data;
    const { style, icon, btn, theme, title, content } = data;
    const ic = () => icon === undefined ? (icons[theme!] ? createComponent(icons[theme!], {class: `cm-notice-icon-${theme}`}) : null) : icon;
    const hasIcon = () => icon || (icon === undefined ? icons[theme!] : null);
    const classList = () => useClassList(props, 'cm-notification-item', {
        'cm-notification-item-width-icon': hasIcon(),
        'cm-notification-item-open': visible(),
        'cm-notification-item-close': closed(),
        [`cm-notification-item-${theme}`]: theme,
    });


    onMount(() => {
        setTimeout(()=>{
            setVisible(true);
        });

        if (data.duration) {
            setTimeout(() => {
                hide();
            }, data.duration * 1000);
        }
    });

    const hide = () => {
        // 隐藏效果
        if (!closed()) {
            setClosed(true);
            setTimeout(() => {
                close()
            }, 250);
        }
    }

    const close = () => {
        props.onClose(data.key, data.dock);
        data.onClose && data.onClose();
    }

    return <div classList={classList()} style={style} ref={wrap}>
        <div class="cm-notification-item-wrap">
            <Show when={hasIcon()}>
                <div class="cm-notification-icon">
                    {ic()}
                </div>
            </Show>
            <div class="cm-notification-content">
                <Show when={title}>
                    <div class="cm-notification-head">
                        {title}
                        <a class="cm-notification-close" onClick={hide}><FeatherX/></a>
                    </div>
                </Show>
                <div class="cm-notification-body">{content}</div>
                <Show when={btn}>
                    <span class="cm-notification-btn-wrap">
                        {btn}
                    </span>
                </Show>
            </div>
        </div>
    </div>
}

export function NoticeBox (props: NoticesProps): JSX.Element {
    const data = () => props.data;
    const zindex = usezIndex();

    return <Show when={data() && data().length}>
        <div class={`cm-notification-box cm-notification-${props.docker}`} style={{"z-index": zindex}}>
            <For each={data()}>
                {(item: any) => {
                    return <NoticePanel data={item} onClose={props.onClose}/>
                }}
            </For>
        </div>
    </Show>
}

export function Notices (props: NoticesProps) {
    const data = () => props.data;

    return <div class="cm-notification">
        <NoticeBox data={data().topLeft} docker="top-left" onClose={props.onClose}/>
        <NoticeBox data={data().topRight} docker="top-right" onClose={props.onClose}/>
        <NoticeBox data={data().bottomLeft} docker="bottom-left" onClose={props.onClose}/>
        <NoticeBox data={data().bottomRight} docker="bottom-right" onClose={props.onClose}/>
    </div>
}
