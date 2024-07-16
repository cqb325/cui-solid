import type { JSXElement} from "solid-js";
import { children, createComputed, on } from "solid-js"
import { createStore, unwrap } from "solid-js/store"

export interface SlotProps {
    name: string
    children: JSXElement
}

export const useSlots = (_children: JSXElement) => {
    const parts = children(() => _children)
    const [slots, setSlots] = createStore<any>({default: []})
    createComputed(
        on(parts, () => {
            setSlots('default', []);
            for (const part of parts.toArray() as unknown as SlotProps[]) {
                if (!part.name) {
                    setSlots('default', [...slots.default, () => part])
                    continue
                }
                setSlots(part.name, () => part)
            }
        })
    )
    // 在provider中读取children，才能获取到context数据，default如果需要获取context最好也是用具名插槽
    return new Proxy(unwrap(slots), {
        get (target, prop: string) {
            if (prop === 'default') {
                return target[prop];
            }
            return target[prop]?.children;
        },
    })
}
