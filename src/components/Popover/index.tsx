import { Portal } from "solid-js/web";
import usePortal from "../utils/usePortal";
import useAlignPostion from "../utils/useAlignPostion";
import { createSignal, createUniqueId, onCleanup, onMount } from "solid-js";
import { useClassList } from "../utils/useProps";
import { useClickOutside } from "../utils/useClickOutside";
import createModel from "../utils/createModel";
import usezIndex from "../utils/usezIndex";

type PopoverProps = {
    classList?: any,
    class?: string,
    align?: 'top'|'bottom'|'left'|'right'|'topLeft'|'topRight'|'bottomLeft'|'bottomRight'|'leftTop'|'leftBottom'|'rightTop'|'rightBottom',
    trigger?: 'hover'|'click',
    disabled?: boolean,
    arrow?: boolean,
    theme?: string,
    hideDelay?: number,
    onOpen?: Function,
    children?: any,
    content?: any,
    visible?: any,
    ref?: any
}

export function Popover (props: PopoverProps) {
    const [visible, setVisible] = createModel(props, 'visible', false);
    const [_, update] = createSignal(createUniqueId());
    let inner: any;
    const align = () => props.align || 'right';
    const trigger = () => props.trigger || 'hover';
    const zindex = usezIndex();

    let timer: any = null;
    const hideDelay = props.hideDelay || 200;
    const clearDelayTimer = () => {
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
    }

    const onMouseEnter = () => {
        if (props.disabled) {
            return;
        }
        if (trigger() === 'hover') {
            clearDelayTimer();
            setVisible(true);
            props.onOpen && props.onOpen(true);
        }
    }

    const onMouseLeave = () => {
        if (props.disabled) {
            return;
        }
        if (trigger() === 'hover') {
            timer = setTimeout( () => {
                setVisible(false);
                props.onOpen && props.onOpen(false);
            }, hideDelay);
        }
    }

    const onClick = (e: any) => {
        if (props.disabled) {
            return;
        }
        e.preventDefault();
        e.stopPropagation();
        if (trigger() === 'click') {
            const show = visible();
            setVisible(!show);
            props.onOpen && props.onOpen(!show);
        }
    }

    const classList = () => useClassList(props, 'cm-popover-inner', {
        'cm-popover-inner-show': visible(),
        'cm-popover-with-arrow': props.arrow,
        [`cm-popover-${props.theme}`]: props.theme
    });

    const posStyle = () => {
        visible()
        _();
        if (inner && inner.nextElementSibling) {
            const pos: any = useAlignPostion(align(), inner.nextElementSibling);
            pos.top = pos.top + document.documentElement.scrollTop + 'px';
            pos.left = pos.left + document.documentElement.scrollLeft + 'px';
            pos['z-index'] = zindex;
            return pos;
        }
    };

    let removeClickOutside: Function;
    let wrap: any;
    onMount (() => {
        if (inner.nextElementSibling) {
            if (trigger() === 'hover') {
                inner.nextElementSibling.addEventListener('mouseenter', onMouseEnter, false);
                inner.nextElementSibling.addEventListener('mouseleave', onMouseLeave, false);
            }
            if (trigger() === 'click') {
                inner.nextElementSibling.addEventListener('click', onClick, false);
                removeClickOutside = useClickOutside([wrap, inner.nextElementSibling], () => {
                    setVisible(false);
                });
            }
        }
    })

    onCleanup (() => {
        if (inner.nextElementSibling) {
            if (trigger() === 'hover') {
                inner.nextElementSibling.removeEventListener('mouseenter', onMouseEnter);
                inner.nextElementSibling.removeEventListener('mouseleave', onMouseLeave);
            }
            if (trigger() === 'click') {
                inner.nextElementSibling.removeEventListener('click', onClick);
            }
        }
        removeClickOutside && removeClickOutside();
    });

    const id = 'cm-popover-portal';

    props.ref && props.ref({
        updatePosition () {
            update(createUniqueId());
        }
    });
    return <>
        <span style={{display: 'none'}} ref={inner}></span>
        {props.children}
        <Portal mount={usePortal(id, id)}>
            <div ref={wrap} style={posStyle()} x-placement={align()} classList={classList()}>
                {props.content}
                {
                    props.arrow ? <svg width="24" height="8" xmlns="http://www.w3.org/2000/svg" class="cm-popover-icon-arrow">
                        <path d="M0.5 0L1.5 0C1.5 4, 3 5.5, 5 7.5S8,10 8,12S7 14.5, 5 16.5S1.5,20 1.5,24L0.5 24L0.5 0z" fill="rgba(var(--semi-blue-4),1)" opacity="1"></path>
                        <path d="M0 0L1 0C1 4, 2 5.5, 4 7.5S7,10 7,12S6 14.5, 4 16.5S1,20 1,24L0 24L0 0z" fill="rgba(var(--semi-blue-4),1)"></path>
                    </svg>
                    : null
                }
            </div>
        </Portal>
    </>
}