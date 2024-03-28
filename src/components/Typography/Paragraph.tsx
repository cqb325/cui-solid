import { createSignal } from "solid-js";
import { Icon } from "../Icon";
import useCopy from "../utils/useCopy";
import type { ParagraphProps } from "./paragraph.d";
import { useClassList } from "../utils/useProps";

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

    return <p style={props.style} classList={classList()} ref={ref}>
        {props.children}
        {
            props.copyable ? (copyed() ? <span class="cm-typograghy-copyed"><Icon name="check"/></span>
            : <span class="cm-typograghy-copy" onClick={onCopy}><Icon name="copy"/></span>) : null
        }
    </p>;
}
