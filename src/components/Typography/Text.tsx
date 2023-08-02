import { splitProps } from "solid-js";
import { useClassList } from "../utils/useProps";
import type { ParagraphProps } from "./paragraph.d";


export function Text (props: ParagraphProps) {
    const [local, others] = splitProps(props, ['classList', 'class', 'children', 'type', 'disabled', 'link', 'icon',
    'mark', 'code', 'underline', 'deleted', 'strong', 'size', 'onCopy']);
    const size = () => local.size || 'normal';
    const classList = () => useClassList(props, 'cm-text', {
        [`cm-text-${local.type}`]: local.type,
        'cm-text-disabled': local.disabled,
        'cm-text-underline': local.underline,
        'cm-text-link': local.link,
        'cm-text-deleted': local.deleted,
        'cm-text-strong': local.strong,
        [`cm-text-${size()}`]: size(),
    });
    return <span classList={classList()} {...others}>{local.mark ? <mark>{local.children}</mark> : local.code ? <code>{local.children}</code> : local.link ? <a href={local.link}>{local.icon}<span>{local.children}</span></a> : local.children}</span>
}
