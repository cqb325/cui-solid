import { useClassList, useStyle } from "../utils/useProps"
import { useCarouselContext } from '.';
import { createEffect, createSignal, onCleanup, onMount } from "solid-js";
import { useSwipe } from "../utils/useSwipe";
import type { TransitionReturn} from "../utils/useTransition";
import { useTransition } from "../utils/useTransition";

export function InnerCarouselItem (props: any) {
    const ctx: any = useCarouselContext();
    let item: any;
    let transition: TransitionReturn;

    const [style, setStyle] = createSignal({});
    createEffect(() => {
        const activeKey = ctx?.store.activeKey;
        const prevKey = ctx?.store.prevKey;
        const nextKey = ctx?.store.nextKey;

        const obj: any = {
            "width": typeof ctx?.itemsPerView === 'number' ? `${1/ctx?.itemsPerView * 100}%` : ''
        }

        if (ctx?.effect === 'card') {
            if (activeKey === props.data.id) {
                Object.assign(obj, {
                    width: '60%',
                    opacity: 1,
                    'z-index': 1,
                    transform: 'translateX(-50%) translateZ(0)'
                })
            } else if (prevKey === props.data.id) {
                Object.assign(obj, {
                    width: '60%',
                    opacity: 0.4,
                    transform: 'translateX(-100%) translateZ(-200px)'
                })
            } else if (nextKey === props.data.id) {
                Object.assign(obj, {
                    width: '60%',
                    opacity: 0.4,
                    transform: 'translateX(0%) translateZ(-200px)'
                })
            } else {
                Object.assign(obj, {
                    width: '50%',
                    opacity: 0,
                    transform: 'translateX(-50%) translateZ(-400px)'
                })
            }
        }

        return setStyle(useStyle(props, obj));
    });

    const classList = () => useClassList(props, 'cm-carousel-item');

    onMount(() => {
        if (ctx?.draggable) {
            const swipe = useSwipe(item, {
                threshold: 10,
                onSwipe: () => {
                    ctx?.onSwipe(swipe);
                },
                onSwipeEnd: (e, direction, duration) => {
                    ctx?.onSwipeEnd(direction, duration)
                },
                onSwipeStart: () => {
                    ctx?.onSwipeStart(swipe)
                }
            });

            onCleanup(() => {
                swipe.stop();
            });
        }

        transition = useTransition({
            el: () => item,
            startClass: 'cm-carousel-item-fade-start',
            activeClass: 'cm-carousel-item-fade-active',
        })
    })

    createEffect(() => {
        const activeKey = ctx?.store.activeKey;
        const unActiveKey = ctx?.store.unActiveKey;
        if (ctx?.effect === 'fade') {
            if (activeKey === props.data.id) {
                transition.enter();
            }
            if (unActiveKey === props.data.id) {
                transition.leave();
            }
        }
    })

    return <div classList={classList()} ref={item} style={style()}>
        {props.data.children}
    </div>
}
