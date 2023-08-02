import { onCleanup } from "solid-js";

export interface UseTransitionProps {
    el(): Element
    target?(): Element
    // 动画初始化的class
    startClass: string
    // 动画执行class
    activeClass: string
    onEnter?(): void
    onLeave?(): void
}

export function nextFrame(fn: () => void) {
    requestAnimationFrame(() => requestAnimationFrame(fn));
}

/**
 * 简单动画指令
 * @param props 
 * @returns 
 */
export function useTransition (props: UseTransitionProps) {
    const { el } = props;
    
    const endTransition = (e: Event) => {
        const target = props.target ? props.target() : el();
        if (e.target === target) {
            el().removeEventListener("transitionend", endTransition);
            el().classList.remove(props.startClass);
            props.onLeave && props.onLeave();
        }
    }

    onCleanup(() => {
        el() && el().removeEventListener("transitionend", endTransition);
    })
    return {
        enter () {
            if (el()) {
                el().classList.add(props.startClass);
                nextFrame(() => {
                    el().classList.add(props.activeClass);
                    props.onEnter && props.onEnter();
                })
            }
        },
        leave () {
            if (el()) {
                el().classList.remove(props.activeClass);
                el().addEventListener("transitionend", endTransition);
            }
        }
    }
}