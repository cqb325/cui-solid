import type { ComponentProps } from "solid-js";

export function useClassList (props: ComponentProps<any>, ...customClassList: any) {
    const obj = {
        ...props.classList,
    };
    if (props.class) {
        obj[props.class] = true;
    }
    if (customClassList) {
        for (let i = 0; i < customClassList.length; i++) {
            const item = customClassList[i];
            if (typeof item === 'string') {
                obj[item] = true;
            } else {
                for (const key in item) {
                    obj[key] = item[key];
                }
            }
        }
    }
    return obj;
}

export function useStyle (props: any | ComponentProps<'div'>, customStyle: any) {
    let obj = {
        ...customStyle,
    };
    if (props.style) {
        if (typeof props.style === 'string') {
            obj[props.style] = true;
        } else if (typeof props.style === 'object') {
            obj = {...obj, ...props.style};
        }
    }
    return obj;
}
