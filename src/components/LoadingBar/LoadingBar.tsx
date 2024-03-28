import { createStore } from "solid-js/store";
import { useClassList } from "../utils/useProps";

export interface LoadingBarProps {
    classList?: any,
    class?: string,
    style?: any,
    ref?: any
}

export function LoadingBar (props: LoadingBarProps) {
    const [store, setStore] = createStore({
        show: false,
        status: 'success',
        percent: 0
    });
    const classList = () => useClassList(props, 'cm-loading-bar', {
        "cm-loading-bar-show": store.show
    });

    const innerClass = () => ({
        'cm-loading-bar-inner': true,
        [`cm-loading-bar-status-${store.status}`]: !!store.status
    })

    const update = (options: any) => {
        if (options.percent !== undefined) {
            setStore('percent', options.percent);
        }
        if (options.status !== undefined) {
            setStore('status', options.status);
        }
        if (options.show !== undefined) {
            setStore('show', options.show);
        }
    }

    const innerStyle = () => ({
        width: `${store.percent}%`
    })

    props.ref && props.ref({
        update
    })

    return <div classList={classList()} >
        <div classList={innerClass()} style={innerStyle()} />
    </div>
}
