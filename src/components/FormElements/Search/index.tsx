import { InnerInput } from "../Input/input";
import { Icon } from "../../Icon";
import { splitProps } from "solid-js";
import type { InputProps } from "../Input/input";

interface SearchProps extends InputProps {
    enterButton?: any,
    onSearch?: any,
}

export function Search (props: SearchProps) {
    const [local, others] = splitProps(props, ['enterButton', 'onEnter', 'onSearch']);
    const suffix = !local.enterButton ? <Icon name="search" style={{cursor: 'pointer'}} onClick={local.onSearch}/> : null;
    let append = null;
    if (local.enterButton) {
        append = typeof local.enterButton === 'string' ? local.enterButton : <Icon name="search" onClick={local.onSearch}/>;
    }
    return <InnerInput onEnter={local.onEnter} suffix={suffix} append={append} {...others}/>
}
