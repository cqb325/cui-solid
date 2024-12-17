import type { JSXElement } from "solid-js";
import { createUniqueId } from "solid-js";
import { createStore, produce } from "solid-js/store";
import { render } from "solid-js/web";
import usePortal from "../utils/usePortal";
import { Notices } from "./Notices";
import usezIndex from "../utils/usezIndex";

export interface NoticeConfig {
    dock?: 'topRight'|'topLeft'|'bottomLeft'|'bottomRight',
    key?: string,
    duration?: number,
    content?: any,
    title?: any,
    icon?: JSXElement,
    theme?: 'success' | 'warning' | 'error' | 'info' | 'help',
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
            config.theme = 'info';
            this.open(config);
        },
        success (config: NoticeConfig) {
            config.theme = 'success';
            this.open(config);
        },
        warning (config: NoticeConfig) {
            config.theme = 'warning';
            this.open(config);
        },
        error (config: NoticeConfig) {
            config.theme = 'error';
            this.open(config);
        },
        help (config: NoticeConfig) {
            config.theme = 'help';
            this.open(config);
        }
    }
}
export const notice = Notice();
