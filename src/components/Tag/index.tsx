import type { Signal } from 'solid-js';
import { Show } from 'solid-js';
import { Icon } from '../Icon';
import { useClassList } from '../utils/useProps';
import createModel from '../utils/createModel';

type TagProps = {
    classList?: any,
    class?: string,
    theme?: 'primary'|'danger'|'warning'|'success'|'info'|'magenta'|'red'|'volcano'|'orange'|'gold'|'yellow'|'lime'|'green'|'cyan'|'blue'|'geekblue'|'purple',
    value?: any,
    circle?: boolean,
    size?: 'small'|'large'|'xlarge',
    avatar?: any,
    onBeforeClose?: (e: any) => boolean,
    onClose?: (e: any) => void,
    style?: any,
    children?: any,
    closable?: boolean,
    border?: boolean,
    visible?: boolean | Signal<boolean>
}

export function Tag (props: TagProps) {
    const value = () => props.value || '';
    const classList = () => useClassList(props, 'cm-tag', {
        [`cm-tag-${props.theme}`]: props.theme,
        'cm-tag-has-badge': value() !== '',
        'cm-tag-border': props.border,
        'cm-tag-circle': !value() && props.circle,
        [`cm-tag-${props.size}`]: props.size,
        'cm-tag-has-avatar': props.avatar
    });

    const [visible, setVisible] = createModel(props, 'visible', true);

    const _onClose = (e: any) => {
        if (props.onBeforeClose) {
            const ret = props.onBeforeClose(e);
            if (ret) {
                doClose(e);
            }
        } else {
            doClose(e);
        }
    }

    const doClose = (e: any) => {
        setVisible(false);
        if (props.onClose) {
            props.onClose(e);
        }
    }

    return <Show when={visible()} fallback={null}>
        <div classList={classList()} style={props.style}>
            {props.avatar}
            <div class="cm-tag-content">
                <div class="cm-tag-text">{props.children}</div>
                {
                    props.closable
                        ? <Icon name="x" class="cm-tag-close" size={12} onClick={_onClose}/>
                        : null
                }
            </div>
            {
                value() !== '' ? <span class="cm-tag-badge">
                    <span class="cm-tag-badge-text">{value()}</span>
                </span> : null
            }
        </div>
    </Show>
}
