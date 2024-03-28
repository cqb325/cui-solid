import type { ComponentProps } from "solid-js";
import { createContext, splitProps } from "solid-js";
import { useClassList } from "../utils/useProps";

type ButtonGroupProps = {
    classList?: any,
    class?: any,
    children?: any,
    type?: 'primary'|'success'|'error'|'warning'|'default'|'dashed'|'link'|'text',
    size?: 'small'|'default'|'large',
    disabled?: boolean
} & ComponentProps<'div'>

export const ButtonGroupContext = createContext();
export function ButtonGroup (props: ButtonGroupProps) {
    const classList = () => useClassList(props, {'cm-button-group': true});
    const [local, others] = splitProps(props, ['classList', 'children', 'type', 'size', 'disabled']);
    return <ButtonGroupContext.Provider value={{
        type: local.type,
        size: local.size,
        disabled: local.disabled,
    }}>
        <div classList={classList()} {...others}>
            {local.children}
        </div>
    </ButtonGroupContext.Provider>
}
