import type { JSX } from "solid-js";
import { createComputed, createContext, splitProps } from "solid-js";
import { useClassList } from "../utils/useProps";
import type { ButtonProps } from "../Button";

export interface ButtonGroupProps extends JSX.HTMLAttributes<HTMLDivElement> {
    classList?: any,
    class?: any,
    children?: any,
    type?: ButtonProps['type'],
    theme?: ButtonProps['theme'],
    size?: 'small'|'default'|'large',
    disabled?: boolean
}

export const ButtonGroupContext = createContext();

export function ButtonGroup (props: ButtonGroupProps) {
    const classList = () => useClassList(props, {'cm-button-group': true});
    const [local, others] = splitProps(props, ['classList', 'children', 'type', 'theme', 'size', 'disabled']);
    return <ButtonGroupContext.Provider value={{
        type: local.type,
        theme: local.theme,
        size: local.size,
        disabled: local.disabled,
    }}>
        <div classList={classList()} {...others}>
            {local.children}
        </div>
    </ButtonGroupContext.Provider>
}
