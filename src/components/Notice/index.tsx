import { createUniqueId } from "solid-js";
import { createStore, produce } from "solid-js/store";
import { render } from "solid-js/web";
import usePortal from "../utils/usePortal";
import { Notices } from "./Notices";
import usezIndex from "../utils/usezIndex";

export type NoticeConfig = {
    dock?: 'topRight'|'topLeft'|'bottomLeft'|'bottomRight',
    key?: string,
    duration?: number,
    content?: any,
    title?: any,
    icon?: any,
    theme?: 'success' | 'warning' | 'error' | 'info',
    btn?: any,
    style?: any,
    onClose?: () => void
}

type StoreData = {
    topLeft: NoticeConfig[],
    topRight: NoticeConfig[],
    bottomLeft: NoticeConfig[],
    bottomRight: NoticeConfig[],
}

/**
 * Notice
 * @returns
 */
function Notice () {
    const [store, setStore] = createStore({
        topLeft: [],
        topRight: [],
        bottomLeft: [],
        bottomRight: [],
    } as StoreData);
    const onClose = (key: string, dock: 'topRight'|'topLeft'|'bottomLeft'|'bottomRight') => {
        const arr: NoticeConfig[] = store[dock].filter((item: NoticeConfig) => {
            return item.key !== key;
        })
        setStore(dock, arr);
    }
    const ele: any = usePortal('cm-notice-portal', 'cm-notices-wrap');
    render(() => <Notices data={store} onClose={onClose}/>, ele);
    return {
        open (config: NoticeConfig) {
            if (!config.dock) {
                config.dock = 'topRight';
            }
            if (config.key === undefined) {
                config.key = createUniqueId();
            }
            if (config.duration === undefined) {
                config.duration = 4.5;
            }

            setStore(config.dock, produce((list: any) => {
                list.push(config);
            }));
            ele.style.zIndex = usezIndex();
        },
        info (config: NoticeConfig) {
            config.icon = 'info';
            config.theme = 'info';
            this.open(config);
        },
        success (config: NoticeConfig) {
            config.icon = 'check-circle';
            config.theme = 'success';
            this.open(config);
        },
        warning (config: NoticeConfig) {
            config.icon = 'alert-circle';
            config.theme = 'warning';
            this.open(config);
        },
        error (config: NoticeConfig) {
            config.icon = 'x-circle';
            config.theme = 'error';
            this.open(config);
        },
        help (config: NoticeConfig) {
            config.icon = 'help-circle';
            config.theme = 'info';
            this.open(config);
        }
    }
}
export const notice = Notice();
