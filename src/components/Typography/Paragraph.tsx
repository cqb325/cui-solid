import { createSignal, Show } from "solid-js";
import useCopy from "../utils/useCopy";
import type { ParagraphProps } from "./paragraph.d";
import { useClassList } from "../utils/useProps";
import { FeatherCheck, FeatherCopy } from "cui-solid-icons/feather";

export function Paragraph (props: ParagraphProps) {
    const [copyed, setCopyed] = createSignal(false);
    const size = () => props.size || 'normal';
    const classList = () => useClassList(props, 'cm-typograghy-paragraph', {
        [`cm-typograghy-paragraph-${size()}`]: size(),
        [`cm-typograghy-paragraph-${props.type}`]: !!props.type,
        'cm-typograghy-extended': props.spacing === 'extended',
    });
    let ref: any;

    async function onCopy () {
        const ret = await useCopy(props.copyText ?? ref.innerText);
        setCopyed(ret);
        if (ret) {
            props.onCopy && props.onCopy();
            setTimeout(() => {
                setCopyed(false);
            }, 4000);
        }
    }

    return <div style={props.style} classList={classList()} ref={ref}>
        {props.children}
        <Show when={props.copyable}>
            <Show when={copyed()} fallback={<span class="cm-typograghy-copy" onClick={onCopy}><FeatherCopy /></span>}>
                <span class="cm-typograghy-copyed"><FeatherCheck /></span>
            </Show>
        </Show>
    </div>;
}
