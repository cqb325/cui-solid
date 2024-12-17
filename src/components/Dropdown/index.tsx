import type { Signal } from "solid-js";
import { createComputed, createContext, createSignal, createUniqueId, For, onCleanup, onMount, Show, splitProps, useContext } from "solid-js";
import { isServer, Portal } from "solid-js/web";
import { useClassList } from "../utils/useProps";
import createModel from "../utils/createModel";
import usePortal from "../utils/usePortal";
import useAlignPostion from "../utils/useAlignPostion";
import { useClickOutside } from "../utils/useClickOutside";
import usezIndex from "../utils/usezIndex";
import { useTransition } from "../utils/useTransition";
import { useMoveObserver } from "../utils/useMoveObserver";
import { isColor } from "../utils/utils";
import type { DropdownItemProps } from "./DropdownItem";
import { DropdownItem } from "./DropdownItem";
import { DropdownMenu } from "./DropdownMenu";
import { useDebounce } from "../utils/useDebounce";

export * from './DropdownMenu';
export * from './DropdownItem';

const DropdownContext = createContext();

export const useDropdownConext = () => useContext(DropdownContext);

export interface DropdownPosition {
    x: number
    y: number
}

export interface DropdownNode extends DropdownItemProps {
    title: string
    children?: DropdownNode[]
    [key: string]: any
}

export interface DropdownProps {
    trigger?: 'hover' | 'click' | 'contextMenu' | 'custom',
    align?: 'bottom' | 'bottomLeft' | 'bottomRight' | 'right' | 'rightBottom' | 'left' | 'leftBottom' | 'top' |'topLeft'|'topRight'| 'rightTop' | 'leftTop',
    classList?: any,
    class?: any,
    style?: any,
    onSelect?: (name: string, data: any) => void,
    children: any,
    menu?: any,
    visible?: boolean | Signal<any>,
    transfer?: boolean,
    theme?: string|'dark'|'light'|'primary'|'success'|'warning'|'error'|'info'|'blue'|'green'|'red'|'yellow'|'pink'|'magenta'|'volcano'|'orange'|'gold'|'lime'|'cyan'|'geekblue'|'purple',
    data?: DropdownNode[]
    disabled?: boolean,
    revers?: boolean,
    handler?: string,
    fixWidth?: boolean,
    gradient?: string[],
    color?: string,
    arrow?: boolean
    offset?: number
    position?: DropdownPosition,
    ref?: any,
    onMouseClick?: (e: MouseEvent) => void,
    onBeforeDrop?: (visible: boolean) => boolean,
}

export function Dropdown (props: DropdownProps) {
    const [visible, setVisible] = createModel(props, 'visible', false);
    const [opened, setOpened] = createSignal(visible());
    const [_, setUpdate] = createSignal("");
    let targetEle: any;
    let target: any;
    const offset = () => props.offset || 0;
    let nextElementSibling: any;
    const trigger = props.trigger || 'hover';
    let timer: any;
    const align = props.align || 'bottom';
    const [placement, setPlacement] = createSignal(align);
    let wrap: any;
    const zindex = usezIndex();
    const revers = props.revers ?? true;
    const theme = isColor(props.theme) ? '' : props.theme;
    const classList = () => useClassList(props, 'cm-dropdown', {
        [`cm-dropdown-${theme}`]: theme,
        'cm-dropdown-with-arrow': props.arrow,
    });
    let lastEventTriggerTarget: any;

    let cleanup: any = null;
    const transition = useTransition({
        el: () => wrap,
        startClass: 'cm-dropdown-visible',
        activeClass: 'cm-dropdown-open',
        onLeave: () => {
            setOpened(false);
            if (cleanup) {
                cleanup();
            }
        },
        onEnter: () => {
            setOpened(true);
            // 监控元素移动
            cleanup = useMoveObserver(wrap, () => {
                setUpdate(createUniqueId());
            });
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

    // 防抖
    const clearDelayTimer = () => {
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
    }

    // 点击显示
    const onMouseClick = (e: any) => {
        if (!nextElementSibling.contains(e.target)) {
            return false;
        }
        if (props.handler) {
            const te = document.querySelector(props.handler);
            if (!te) {
                return;
            }
            if (!e.target.closest(props.handler) && !te.contains(e.target)) {
                return;
            }
        }

        if (props.disabled) {
            return;
        }

        e.preventDefault && e.preventDefault();
        e.stopPropagation && e.stopPropagation();
        targetEle = e.target;
        props.onMouseClick?.(e);

        const ret = props.onBeforeDrop && props.onBeforeDrop(visible());
        if (ret === undefined || ret) {
            // 触发的对象不一致，则重新定位，可能是使用handle进行触发,有多个触发元素的情况
            if (lastEventTriggerTarget !== e.target.closest(props.handler)) {
                setUpdate(createUniqueId());
            }
            setVisible(true);
            if (props.handler) {
                lastEventTriggerTarget = e.target.closest(props.handler);
            }
        }
    }

    const onMouseEnter = () => {
        if (props.disabled) {
            return;
        }
        if (trigger === 'hover') {
            clearDelayTimer();
            setVisible(true);
            if (wrap) {
                // dropdown容器注册划走事件进行关闭
                wrap.removeEventListener('mouseleave', onMouseLeave);
                wrap.addEventListener('mouseleave', onMouseLeave, false);
            }
        }
    }
    const onMouseLeave = () => {
        if (props.disabled) {
            return;
        }
        if (trigger === 'hover') {
            timer = setTimeout(() => {
                setVisible(false);
            }, 200);
        }
    }

    const getOffsetWidth = (align: string, rect: any) => {
        if (align === 'bottomRight' || align === 'topRight') {
            return 0;
        }
        if (align === 'top' || align === 'bottom') {
            return rect.width / 2;
        }
        if (align === 'topLeft' || align === 'bottomLeft') {
            return rect.width;
        }
        if (align === 'left' || align === 'leftTop' || align === 'leftBottom') {
            return 0;
        }
        if (align === 'right' || align === 'rightTop' || align === 'rightBottom') {
            return rect.width;
        }
    }

    const getOffsetHeight = (align: string, rect: any) => {
        if (align === 'leftBottom' || align === 'rightBottom') {
            return 0;
        }
        if (align === 'top' || align === 'topLeft' || align === 'topRight') {
            return 0;
        }
        if (align === 'leftTop' || align === 'rightTop') {
            return rect.height;
        }
        if (align === 'left' || align === 'right') {
            return rect.height / 2;
        }
        if (align === 'bottom' || align === 'bottomLeft' || align === 'bottomRight') {
            return rect.height;
        }
    }

    const getPositionByPlacement = (align: DropdownProps['align'], te: any) => {
        const parent = te.offsetParent;
        if (!parent) {
            return;
        }
        const parentPos = parent.getBoundingClientRect();
        const pos: any = useAlignPostion(align as string, te);
        if (props.transfer) {
            const targetReact = te.getBoundingClientRect();
            pos.top = pos.top + document.documentElement.scrollTop;
            pos.left = pos.left + document.documentElement.scrollLeft;
            props.fixWidth ? pos['min-width'] = targetReact.width + 'px' : false;
        } else {
            pos.top = pos.top + parent.scrollTop - parentPos.top;
            pos.left = pos.left + parent.scrollLeft - parentPos.left;
        }
        return pos;
    }

    const posStyle = () => {
        _();
        if (opened() && nextElementSibling) {
            let te = nextElementSibling;
            if (props.handler) {
                te = targetEle?.closest(props.handler);
            }
            if (!te) {
                return;
            }
            const parent = te.offsetParent;
            if (!parent) {
                return;
            }
            if (props.position) {
                const pos = {
                    left: props.position.x + 'px',
                    top: props.position.y + 'px'
                };
                Object.assign(pos, props.style || {}, {
                    '--cui-dropdown-background-color': isColor(props.theme) ? props.theme : '',
                    '--cui-dropdown-text-color': props.color,
                    '--cui-dropdown-offset': `${offset()}px`,
                });
                return pos;
            }
            const parentPos = parent.getBoundingClientRect();
            let pos: any = useAlignPostion(align, te);
            const originTop = pos.top;
            const originLeft = pos.left;
            if (props.transfer) {
                const targetReact = te.getBoundingClientRect();
                pos.top = pos.top + document.documentElement.scrollTop;
                pos.left = pos.left + document.documentElement.scrollLeft;
                props.fixWidth ? pos['min-width'] = targetReact.width + 'px' : false;
            } else {
                pos.top = pos.top + parent.scrollTop - parentPos.top;
                pos.left = pos.left + parent.scrollLeft - parentPos.left;
            }

            const rect = wrap.getBoundingClientRect();
            const offsetWidth = getOffsetWidth(align, rect);
            const offsetHeight = getOffsetHeight(align, rect);
            const h = originTop + offsetHeight;
            const w = originLeft + offsetWidth;

            const containerHeight = window.innerHeight || document.documentElement.clientHeight;
            const containerWidth = window.innerWidth || document.documentElement.clientWidth;
            const targetRect = te.getBoundingClientRect();

            if (revers) {
                let newAlign: DropdownProps['align'] = align;
                if (h > containerHeight) {
                    if (align === 'bottom' || align === 'bottomLeft' || align === 'bottomRight') {
                        newAlign = align.replace('bottom', 'top') as DropdownProps['align'];
                    } else if (align === 'leftTop' || align === 'left') {
                        newAlign = 'leftBottom' as DropdownProps['align'];
                    } else if (align === 'right' || align === 'rightTop') {
                        newAlign = 'rightBottom' as DropdownProps['align'];
                    }
                }
                // align 为 top bottom topLeft bottomLeft right rightTop rightBottom 存在该情况
                if (w > containerWidth - 5) {
                    if (align === 'bottom' || align === 'bottomLeft') {
                        // pos.left = pos.left - (rect.width - targetRect.width) / 2;
                        newAlign = 'bottomRight' as DropdownProps['align'];
                    } else if (align === 'top' || align === 'topLeft') {
                        // pos.left = pos.left - rect.width + targetRect.width;
                        newAlign = 'topRight' as DropdownProps['align'];
                    } else if (align === 'right') {
                        // pos.left = pos.left - rect.width - targetRect.width;
                        newAlign = 'left' as DropdownProps['align'];
                    } else if (align === 'rightTop') {
                        // pos.left = pos.left - rect.width - targetRect.width;
                        newAlign = 'leftTop' as DropdownProps['align'];
                    }
                }
                if (newAlign !== align) {
                    pos = getPositionByPlacement(newAlign, te);
                    setPlacement(newAlign!);
                } else {
                    pos = getPositionByPlacement(align, te);
                    setPlacement(align);
                }
            }
            pos.top = pos.top + 'px'
            pos.left = pos.left + 'px'

            pos['z-index'] = zindex;

            Object.assign(pos, props.style || {}, {
                '--cui-dropdown-background-color': isColor(props.theme) ? props.theme : '',
                '--cui-dropdown-text-color': props.color,
                '--cui-dropdown-offset': `${offset()}px`,
            });

            return pos;
        }
    };

    props.ref && props.ref({
        update: () => {
            setUpdate(createUniqueId())
        }
    })

    // 响应尺寸变化更新位置
    const onWrapEntry = useDebounce((entry: ResizeObserverEntry) => {
        setUpdate(createUniqueId());
    }, 100);

    let removeClickOutside: () => void;
    onMount(() => {
        if (isServer) return;
        nextElementSibling = target.nextElementSibling;
        target.parentNode.removeChild(target);
        if (nextElementSibling) {
            if (trigger === 'hover') {
                nextElementSibling.addEventListener('mouseenter', onMouseEnter, false);
                nextElementSibling.addEventListener('mouseleave', onMouseLeave, false);
            }
            if (trigger === 'click' || trigger === 'custom') {
                document.addEventListener('click', onMouseClick);
                if (trigger === 'click') {
                    const other = props.handler ? nextElementSibling.querySelectorAll(props.handler) : nextElementSibling;
                    removeClickOutside = useClickOutside([wrap, other], () => {
                        setVisible(false);
                    });
                }
            }
            if (trigger === 'contextMenu') {
                document.addEventListener('contextmenu', onMouseClick);
                const other = props.handler ? nextElementSibling.querySelectorAll(props.handler) : nextElementSibling;
                removeClickOutside = useClickOutside([wrap, other], () => {
                    setVisible(false);
                });
            }

            const ro = new ResizeObserver((entries) => {
                entries.forEach((entry) => onWrapEntry(entry));
            });
            // 目标元素尺寸变化需要更新位置
            ro.observe(nextElementSibling);
            // 清除监听
            onCleanup(() => {
                ro.disconnect();
            })
        }
    });

    onCleanup(() => {
        if (isServer) return;
        if (nextElementSibling) {
            if (trigger === 'hover') {
                nextElementSibling.removeEventListener('mouseenter', onMouseEnter);
                nextElementSibling.removeEventListener('mouseleave', onMouseLeave);
            }
            if (trigger === 'click' || trigger === 'custom') {
                document.removeEventListener('click', onMouseClick);
            }
            if (trigger === 'contextMenu') {
                document.removeEventListener('contextmenu', onMouseClick);
            }
        }
        removeClickOutside && removeClickOutside();
        if (cleanup) {
            cleanup();
        }
    });

    const onSelect = (name: string, data?: any) => {
        props.onSelect && props.onSelect(name, data);
        wrap.removeEventListener('mouseleave', onMouseLeave);
        setVisible(false);
    }

    const renderMenu = (arr?: DropdownNode[]) => {
        if (arr) {
            return <DropdownMenu>
                <For each={arr}>
                    {(item) => {
                        const [p, rest] = splitProps(item, ['children', 'title']);
                        return <DropdownItem {...rest} data={item} arrow={!!p.children?.length}>
                            {p.title}
                            <Show when={p.children?.length}>
                                {renderMenu(p.children!)}
                            </Show>
                        </DropdownItem>}}
                </For>
            </DropdownMenu>
        }
        return null;
    }

    const id = 'cm-dropdown-portal';
    return <>
        <span ref={target} style={{ display: 'none' }} />
        {props.children}
        <Show when={props.transfer} fallback={
            <DropdownContext.Provider value={{ onSelect, gradient: props.gradient, color: props.color }}>
                <div style={posStyle()} classList={classList()} x-placement={placement()}
                    onMouseEnter={onMouseEnter} ref={wrap}>
                    {props.menu}
                    {renderMenu(props.data)}
                    {
                        props.arrow ? <svg width="24" height="8" xmlns="http://www.w3.org/2000/svg" class="cm-dropdown-arrow">
                            <path d="M0.5 0L1.5 0C1.5 4, 3 5.5, 5 7.5S8,10 8,12S7 14.5, 5 16.5S1.5,20 1.5,24L0.5 24L0.5 0z" opacity="1" />
                            <path d="M0 0L1 0C1 4, 2 5.5, 4 7.5S7,10 7,12S6 14.5, 4 16.5S1,20 1,24L0 24L0 0z" />
                        </svg>
                        : null
                    }
                </div>
            </DropdownContext.Provider>
        }>
            <Portal mount={usePortal(id, id)}>
                <DropdownContext.Provider value={{ onSelect, gradient: props.gradient, color: props.color }}>
                    <div style={posStyle()} classList={classList()} x-placement={placement()}
                        onMouseEnter={onMouseEnter} ref={wrap}>
                        {props.menu}
                        {renderMenu(props.data)}
                        {
                            props.arrow ? <svg width="24" height="8" xmlns="http://www.w3.org/2000/svg" class="cm-dropdown-arrow">
                                <path d="M0.5 0L1.5 0C1.5 4, 3 5.5, 5 7.5S8,10 8,12S7 14.5, 5 16.5S1.5,20 1.5,24L0.5 24L0.5 0z" opacity="1" />
                                <path d="M0 0L1 0C1 4, 2 5.5, 4 7.5S7,10 7,12S6 14.5, 4 16.5S1,20 1,24L0 24L0 0z" />
                            </svg>
                            : null
                        }
                    </div>
                </DropdownContext.Provider>
            </Portal>
        </Show>
    </>
}
