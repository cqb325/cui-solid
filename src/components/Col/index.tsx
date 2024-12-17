import type { Signal} from 'solid-js';
import { createSignal, useContext } from 'solid-js';
import { Context } from '../Row';
import { useClassList } from '../utils/useProps';
import type { responsiveType } from '../utils/createGridOffset';
import { createGrid, createOffset } from '../utils/createGridOffset';

export interface ColResponsiveProps {
    grid?: number,
    offset?: number
}
export interface ColProps {
    classList?: any,
    class?: any,
    children?: any,
    style?: any,
    grid?: number,
    push?: number,
    pull?: number,
    offset?: number,
    flex?: string,
    fixWidth?: boolean,
    xs?: number | ColResponsiveProps,
    sm?: number | ColResponsiveProps,
    md?: number | ColResponsiveProps,
    lg?: number | ColResponsiveProps,
    xl?: number | ColResponsiveProps,
    xxl?: number | ColResponsiveProps,
}

export const Col = (props: ColProps) => {
    const ctx: any = useContext(Context);
    let ref: any;
    const respClassList: any = {};
    const offsetClassList: any = {};
    const responsiveTypes: string[] = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
    responsiveTypes.forEach((type: string) => {
        if (props[type as keyof ColProps]) {
            const w = typeof props[type as keyof ColProps] === 'number'
                ? props[type as keyof ColProps] : props[type as keyof ColProps].grid;
            const respClass: string = createGrid(w, type as responsiveType);
            if (respClass) {
                respClassList[respClass] = true
            }
            const offset = typeof props[type as keyof ColProps] === 'object'
                ? props[type as keyof ColProps].offset : 0;

            const offsetClass: string = createOffset(offset, type as responsiveType);
            if (offsetClass) {
                offsetClassList[offsetClass] = true
            }
        }
    })
    const style = () => {
        const isResponsive = Object.keys(respClassList).length > 0;
        const isResponsiveOffset = Object.keys(offsetClassList).length > 0;
        const obj = {
            ...props.style,
        };
        if (!isResponsive) {
            obj.flex = `0 0 ${(props.grid || 1) * 100}%`;
            if (props.fixWidth) {
                obj['max-width'] = `${(props.grid || 1) * 100}%`;
            }
        }
        if (props.push) {
            obj.left = `${props.push * 100}%`;
        }
        if (props.pull) {
            obj.right = `${props.pull * 100}%`;
        }
        if (props.offset && !isResponsiveOffset) {
            obj['margin-left'] = `${props.offset * 100}%`;
        }
        let half = 0;
        if (typeof ctx?.gutter === 'number') {
            half = ctx.gutter ? ctx.gutter / 2 : 0;
        }
        if (Array.isArray(ctx?.gutter)) {
            half = ctx.gutter[0] ? ctx.gutter[0] / 2 : 0;
        }

        if (half) {
            obj['padding-left'] = half + 'px';
            obj['padding-right'] = half + 'px';
        }
        if (props.flex) {
            if (props.flex.indexOf(' ') > -1) {
                obj['flex'] = props.flex;
            } else {
                obj['flex'] = `0 0 ${props.flex}`;
            }
        }
        return obj;
    }
    const classList = () => useClassList(props, 'cm-col', {
        ...respClassList,
        ...offsetClassList
    });
    return <div ref={ref} classList={classList()} style={style()}>{props.children}</div>
}
