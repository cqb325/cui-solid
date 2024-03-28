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

export function nextFrame (fn: () => void) {
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
        if (e.target && el().contains(e.target as Node)) {
            el().classList.remove(props.startClass);
            props.onLeave && props.onLeave();
        }
        el().removeEventListener("transitionend", endTransition);
    }

    onCleanup(() => {
        el() && el().removeEventListener("transitionend", endTransition);
    })
    return {
        enter () {
            if (el()) {
                el().classList.add(props.startClass);
                // 确保移除了事件
                el().removeEventListener("transitionend", endTransition);
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
