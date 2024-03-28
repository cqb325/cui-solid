import { createSignal, For, onMount } from "solid-js";
import { useClassList } from "../utils/useProps";
import { Icon } from "../Icon";
import { Loading } from "../inner/Loading";
import usezIndex from "../utils/usezIndex";

function getIcon (type: string) {
    let icon = '';
    switch (type) {
        case 'info': {
            icon = 'info';
            break;
        }
        case 'success': {
            icon = 'check-circle';
            break;
        }
        case 'warning': {
            icon = 'alert-circle';
            break;
        }
        case 'error': {
            icon = 'x-circle';
            break;
        }
    }
    return icon;
}

function Message (props: any) {
    const [visible, setVisible] = createSignal(false);
    const data = props.data;
    let wrap: any;
    const classList = () => useClassList(data, 'cm-message', {
        'cm-message-visible': visible(),
        [`cm-message-${data.type}`]: data.type,
        'cm-message-background': data.background
    });

    onMount(() => {
        // 设置效果
        setTimeout(() => {
            setVisible(true);
        });
        let duration = data.duration;
        if (duration === undefined || duration === null) {
            duration = 4;
        }

        if (duration) {
            setTimeout(() => {
                hide();
            }, duration * 1000);
        }
    });

    const hide = () => {
        // 隐藏效果
        setVisible(false);
    }

    const close = () => {
        if (!visible()) {
            props.onClose(data);
            data.onClose && data.onClose();
        }
    }

    const style = () => ({...data.style, 'z-index': usezIndex()})
    return <div classList={classList()} style={style()} ref={wrap} onTransitionEnd={close}>
        <div class="cm-message-inner">
            {
                data.loading ? <Loading /> : <Icon name={getIcon(data.type)} class="cm-message-icon" size={16}/>
            }
            <div class="cm-message-content">
                {data.content}
            </div>
            {
                data.closeable ? <div class="cm-message-close">
                    <Icon name="x" class="cm-message-close-icon" size={14} onClick={hide}/>
                </div> : null
            }
        </div>
    </div>
}

export function Messages (props: any) {
    return <div>
        <For each={props.data}>
            {(item: any) => {
                return <Message data={item} onClose={props.onClose}/>
            }}
        </For>
    </div>;
}
