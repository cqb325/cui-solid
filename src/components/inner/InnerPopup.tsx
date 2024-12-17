import { isServer, Portal } from "solid-js/web";
import usePortal from "../utils/usePortal";
import useAlignPostion from "../utils/useAlignPostion";
import type { JSX, Signal} from "solid-js";
import { createSignal, createUniqueId, onCleanup, onMount, Show, splitProps } from "solid-js";
import { useClassList } from "../utils/useProps";
import { useClickOutside } from "../utils/useClickOutside";
import createModel from "../utils/createModel";
import usezIndex from "../utils/usezIndex";
import { useTransition } from "../utils/useTransition";
import { createComputed } from "solid-js";
import type { ButtonProps } from "../Button";
import { Button } from "../Button";
import { Space } from "../Layout";
import { getRandomIntInclusive, isColor } from "../utils/utils";

export interface InnerPopupProps extends Omit<JSX.HTMLAttributes<HTMLDivElement>, 'title'> {
    align?: 'top'|'bottom'|'left'|'right'|'topLeft'|'topRight'|'bottomLeft'|'bottomRight'|'leftTop'|'leftBottom'|'rightTop'|'rightBottom'
    trigger?: 'hover'|'click'|'focus'
    disabled?: boolean
    arrow?: boolean
    hideDelay?: number
    onVisibleChange?: (open: boolean) => void
    content?: JSX.Element
    contentStyle?: JSX.CSSProperties | string
    visible?: Signal<boolean>
    theme?: string |'light'|'primary'|'success'|'info'|'warning'|'error'|'blue'|'green'|'red'|'yellow'|'pink'|'magenta'|'volcano'|'orange'|'gold'|'lime'|'cyan'|'geekblue'|'purple',
    ref?: any
    confirm?: boolean
    okText?: any
    okType?: ButtonProps['type']
    title?: JSX.Element
    cancelText?: any
    cancelType?: ButtonProps['type']
    offset?: number
    clsPrefix?: string
    varName?: string
    onOk?: () => void | Promise<boolean|void>
    onCancel?: () => void
    arrowPointAtCenter?: boolean
    showCancel?: boolean
}

export function InnerPopup (props: InnerPopupProps) {
    const [local, rest] = splitProps(props, ['align', 'trigger', 'disabled', 'arrow', 'style', 'class', 'classList',
        'hideDelay', 'onVisibleChange', 'title', 'content', 'visible', 'theme', 'ref', 'confirm', 'okText', 'okType',
        'cancelText', 'cancelType', 'onOk', 'onCancel', 'children', 'contentStyle', 'offset', 'clsPrefix', 'varName',
        'showCancel', 'arrowPointAtCenter']);
    const [visible, setVisible] = createModel(local, 'visible', false);
    const [opened, setOpened] = createSignal(visible());
    const [_, update] = createSignal(getRandomIntInclusive(0, 1000000));
    const [buttonLoading, setButtonLoading] = createSignal(false);
    let inner: any;
    const clsPrefix = local.clsPrefix ?? 'cm-popover';
    const varName = local.varName ?? 'popover';
    let nextElementSibling: any;
    let removeClickOutside: () => void;
    let wrap: any;
    const offset = () => local.offset || 0;
    const align = () => local.align || 'top';
    const trigger = () => local.confirm ? 'click' : local.trigger || 'hover';
    const zindex = usezIndex();

    let timer: any = null;
    const hideDelay = local.hideDelay || 200;
    const clearDelayTimer = () => {
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
    }

    const onMouseEnter = () => {
        if (local.disabled) {
            return;
        }
        if (trigger() === 'hover') {
            clearDelayTimer();
            setVisible(true);
            local.onVisibleChange && local.onVisibleChange(true);
        }
    }

    const onPopMouseEnter = () => {
        if (trigger() === 'hover') {
            clearDelayTimer();
        }
    }

    const onMouseLeave = () => {
        if (local.disabled) {
            return;
        }
        if (trigger() === 'hover') {
            timer = setTimeout( () => {
                setVisible(false);
                local.onVisibleChange && local.onVisibleChange(false);
            }, hideDelay);
        }
    }

    const onPopMouseLeave = () => {
        onMouseLeave();
    }

    const onFocus = () => {
        if (local.disabled) {
            return;
        }
        clearDelayTimer();
        if (trigger() === 'focus') {
            setVisible(true);
            local.onVisibleChange && local.onVisibleChange(true);
        }
    }

    const onBlur = () => {
        if (trigger() === 'focus') {
            timer = setTimeout( () => {
                setVisible(false);
                local.onVisibleChange && local.onVisibleChange(false);
            }, hideDelay);
        }
    }

    const onClick = (e: any) => {
        if (local.disabled) {
            return;
        }
        e.preventDefault();
        e.stopPropagation();
        if (trigger() === 'click') {
            const show = visible();
            setVisible(!show);
            local.onVisibleChange && local.onVisibleChange(!show);
        }
    }

    const color = isColor(local.theme) ? '' : local.theme;
    const classList = () => useClassList(local, `${clsPrefix}-inner`, {
        [`${clsPrefix}-with-arrow`]: local.arrow,
        [`${clsPrefix}-with-arrow-center`]: local.arrowPointAtCenter,
        [`${clsPrefix}-confirm`]: local.confirm,
        [`${clsPrefix}-${color}`]: color,
    });

    const transition = useTransition({
        el: ()=> wrap,
        startClass: `${clsPrefix}-inner-visible`,
        activeClass: `${clsPrefix}-inner-show`,
        onLeave: () => {
            setOpened(false);
        },
        onEnter: () => {
            setOpened(true);
        }
    })

    createComputed(() => {
        const v = visible();
        if (v) {
            transition.enter();
        } else {
            transition.leave();
        }
    })

    const posStyle = () => {
        opened()
        _();
        if (nextElementSibling) {
            let placement = align();
            if (local.arrowPointAtCenter) {
                if (['top', 'topLeft', 'topRight'].includes(placement)) {
                    placement = 'top';
                }
                if (['bottom', 'bottomLeft', 'bottomRight'].includes(placement)) {
                    placement = 'bottom';
                }
                if (['left', 'leftTop', 'leftBottom'].includes(placement)) {
                    placement = 'left';
                }
                if (['right', 'rightTop', 'rightBottom'].includes(placement)) {
                    placement = 'right';
                }
            }
            const pos: any = useAlignPostion(placement, nextElementSibling);
            pos.top = pos.top + document.documentElement.scrollTop + 'px';
            pos.left = pos.left + document.documentElement.scrollLeft + 'px';
            pos['z-index'] = zindex;
            Object.assign(pos, local.style || {}, {
                [`--cui-${varName}-background-color`]: isColor(local.theme) ? local.theme : '',
                [`--cui-${varName}-offset`]: `${offset()}px`,
            });
            return pos;
        }
    };

    const onOk = async () => {
        setButtonLoading(true);
        const ret = await local.onOk?.();
        setButtonLoading(false);
        if (ret === undefined || ret === true) {
            setVisible(false);
            local.onVisibleChange && local.onVisibleChange(false);
        }
    }

    const onCancel = () => {
        local.onCancel?.();
        setVisible(false);
        local.onVisibleChange && local.onVisibleChange(false);
    }

    onMount(() => {
        if (isServer) return;
        nextElementSibling = inner.nextElementSibling;
        inner.parentNode.removeChild(inner);
        if (nextElementSibling) {
            if (trigger() === 'hover') {
                nextElementSibling.addEventListener('mouseenter', onMouseEnter, false);
                nextElementSibling.addEventListener('mouseleave', onMouseLeave, false);
            }
            if (trigger() === 'click') {
                nextElementSibling.addEventListener('click', onClick, false);
                removeClickOutside = useClickOutside([wrap, nextElementSibling], () => {
                    if (buttonLoading()) {
                        return;
                    }
                    setVisible(false);
                });
            }
            if (trigger() === 'focus') {
                nextElementSibling.addEventListener('focus', onFocus, false);
                nextElementSibling.addEventListener('blur', onBlur, false);
            }
        }
    })

    onCleanup(() => {
        if (isServer) return;
        if (nextElementSibling) {
            if (trigger() === 'hover') {
                nextElementSibling.removeEventListener('mouseenter', onMouseEnter);
                nextElementSibling.removeEventListener('mouseleave', onMouseLeave);
            }
            if (trigger() === 'click') {
                nextElementSibling.removeEventListener('click', onClick);
            }
            if (trigger() === 'focus') {
                nextElementSibling.removeEventListener('focus', onFocus, false);
                nextElementSibling.removeEventListener('blur', onBlur, false);
            }
        }
        removeClickOutside && removeClickOutside();
    });

    const id = `${clsPrefix}-portal`;

    local.ref && local.ref({
        updatePosition () {
            update(getRandomIntInclusive(0, 1000000));
        }
    });

    const okText = local.okText ?? '确 定';
    const cancelText = local.cancelText ?? '取 消';
    return <>
        <span style={{display: 'none'}} ref={inner} />
        {local.children}
        <Portal mount={usePortal(id, id)}>
            <div ref={wrap} {...rest} style={posStyle()} x-placement={align()} classList={classList()}
                onMouseEnter={onPopMouseEnter} onMouseLeave={onPopMouseLeave}>
                <Show when={local.title}>
                    <div class={`${clsPrefix}-title`}>{local.title}</div>
                </Show>
                <div class={`${clsPrefix}-body`} style={local.contentStyle}>
                    {local.content}
                </div>
                <Show when={local.confirm}>
                    <Space class={`${clsPrefix}-tools`} justify="end">
                        <Show when={local.showCancel}>
                            <Button type={local.cancelType || 'default'} size="small" onClick={onCancel}>{cancelText}</Button>
                        </Show>
                        <Button type={local.okType || 'primary'} size="small" onClick={onOk} loading={buttonLoading()}>{okText}</Button>
                    </Space>
                </Show>
                <Show when={local.arrow}>
                    <svg width="24" height="8" xmlns="http://www.w3.org/2000/svg" class={`${clsPrefix}-icon-arrow`}>
                        <path d="M0.5 0L1.5 0C1.5 4, 3 5.5, 5 7.5S8,10 8,12S7 14.5, 5 16.5S1.5,20 1.5,24L0.5 24L0.5 0z" opacity="1" />
                        <path d="M0 0L1 0C1 4, 2 5.5, 4 7.5S7,10 7,12S6 14.5, 4 16.5S1,20 1,24L0 24L0 0z" />
                    </svg>
                </Show>
            </div>
        </Portal>
    </>
}
