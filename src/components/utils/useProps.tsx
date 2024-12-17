import type { ComponentProps, JSX } from "solid-js";

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

export function useStyle (props: any | ComponentProps<'div'>, customStyle: JSX.CSSProperties) {
    let obj = {
        ...customStyle,
    };
    if (props.style) {
        if (typeof props.style === 'string') {
            const tempEl = document.createElement('div');
            tempEl.setAttribute('style', props.style);
            const style = tempEl.style;
            const styleObj: any = {};
            for (let i = 0; i < style.length; i++) {
                const prop = style[i];
                styleObj[prop] = style.getPropertyValue(prop);
            }
            Object.assign(obj, styleObj);
        } else if (typeof props.style === 'object') {
            obj = {...obj, ...props.style};
        }
    }
    return obj;
}
