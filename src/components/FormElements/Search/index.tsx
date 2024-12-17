import { Input } from "../Input";
import { splitProps } from "solid-js";
import type { InputProps } from "../Input";
import { FeatherSearch } from "cui-solid-icons/feather";

interface SearchProps extends InputProps {
    enterButton?: any,
    onSearch?: any,
}

export function Search (props: SearchProps) {
    const [local, others] = splitProps(props, ['enterButton', 'onEnter', 'onSearch']);
    const suffix = !local.enterButton ? <FeatherSearch style={{cursor: 'pointer'}} onClick={local.onSearch}/> : null;
    let append = null;
    if (local.enterButton) {
        append = typeof local.enterButton === 'string' ? local.enterButton : <FeatherSearch onClick={local.onSearch}/>;
    }
    return <Input onEnter={local.onEnter} suffix={suffix} append={append} {...others}/>
}
