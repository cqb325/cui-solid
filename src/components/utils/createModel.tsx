import { createSignal } from 'solid-js';

export default function createModel<T> (props: any, field: string, defaultValue: T) {
    let value: Function;
    let setValue: Function;
    if (props[field] && props[field].length === 2 && typeof props[field][0] === 'function') {
        value = props[field][0];
        setValue = props[field][1];
    } else {
        [value, setValue] = createSignal<T>(props[field] || defaultValue);
    }

    // let newSetValue = (v: any) => {
    //     setValue(v);
    // }
    return [value, setValue];
}