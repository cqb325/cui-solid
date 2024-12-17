import { createComponent, JSX, JSXElement, Show, splitProps } from "solid-js"
import { useClassList } from "../utils/useProps"
import { F7CheckmarkAltCircleFill, F7ExclamationmarkTriangleFill, F7InfoCircleFill, F7XmarkCircleFill } from "cui-solid-icons/f7"

export interface ResultProps extends Omit<JSX.HTMLAttributes<HTMLDivElement>, 'title'> {
    layout?: 'h' | 'v'
    icon?: JSXElement
    status?: 'success' | 'warning' | 'error' | 'info'
    title?: string | JSXElement
    subTitle?: string | JSXElement
    extra?: JSXElement
    desc?: string | JSXElement
}

const icons: any = {
    info: F7InfoCircleFill,
    success: F7CheckmarkAltCircleFill,
    warning: F7ExclamationmarkTriangleFill,
    error: F7XmarkCircleFill
}

const getIcon = (status: string) => {
    return createComponent(icons[status], {});
}

export function Result(props: ResultProps) {
    const [local, rest] = splitProps(props, ['layout', 'icon', 'status', 'title', 'subTitle', 'extra', 'desc', 'classList', 'class'])
    const status = local.status ?? 'info';
    const icon = local.icon ?? getIcon(status);
    const classList = () => useClassList(local, 'cm-result', {
        [`cm-result-${status}`]: !!status
    })

    return <div classList={classList()} {...rest}>
        <Show when={icon}>
            <div class="cm-result-icon">
                {icon}
            </div>
        </Show>
        <Show when={local.title}>
            <div class="cm-result-title">
                {local.title}
            </div>
        </Show>
        <Show when={local.subTitle}>
            <div class="cm-result-subtitle">
                {local.subTitle}
            </div>
        </Show>
        <Show when={local.extra}>
            <div class="cm-result-extra">
                {local.extra}
            </div>
        </Show>
        <Show when={local.desc}>
            <div class="cm-result-desc">
                {local.desc}
            </div>
        </Show>
    </div>
}
