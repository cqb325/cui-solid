import { createStore, produce } from "solid-js/store"
import { render } from "solid-js/web";
import usePortal from "../utils/usePortal";
import { Messages } from "./Message";
import { createUniqueId } from "solid-js";
import usezIndex from "../utils/usezIndex";

export interface MessageProps {
    key?: string,
    duration?: number,
    type?: 'info'|'success'|'warning'|'error',
    class?: string,
    style?: any,
    content?: any,
    closeable?: boolean,
    background?: any,
    loading?: boolean,
    onClose?: (item?: any) => void
}

function Message () {
    const [store, setStore] = createStore({list: []} as any);
    const ele: any = usePortal('cm-message-portal', 'cm-messages-wrap');
    const onClose = (item: any) => {
        const items = store.list.filter((aitem: any) => {
            return aitem.key !== item.key;
        });
        setStore(
            'list',
            () => [...items],
        );
    }
    render(() => <Messages data={store.list} onClose={onClose}/>, ele);
    return {
        close: (key: string) => {
            const item: undefined | MessageProps = store.list.find((aitem: any) => {
                return aitem.key === key;
            });
            onClose(item);

            if (item) {
                item.onClose && item.onClose();
            }
        },
        open: (config: string | MessageProps, type: 'info'|'success'|'warning'|'error') => {
            if (typeof config === 'string') {
                config = {
                    content: config
                }
            }
            if (!config.key) {
                config.key = createUniqueId()
            }
            config.type = type;

            setStore(
                'list',
                produce((list: any) => {
                    list.push(config);
                }),
            );
            ele.style.zIndex = usezIndex();
        },
        info (config: string | MessageProps) {
            this.open(config, 'info');
        },
        success (config: string | MessageProps) {
            this.open(config, 'success');
        },
        warning (config: string | MessageProps) {
            this.open(config, 'warning');
        },
        error (config: string | MessageProps) {
            this.open(config, 'error');
        }
    }
}

export const message = Message();
