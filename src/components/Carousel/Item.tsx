import { useClassList } from "../utils/useProps"
import { useCarouselContext } from '.';
import { createUniqueId, onMount } from "solid-js";

export function CarouselItem (props: any) {
    const ctx: any = useCarouselContext();
    const id = createUniqueId();
    const classList = () => useClassList(props, 'cm-carousel-item', {
        'cm-carousel-item-active-fade': ctx && ctx.effect === 'fade' && ctx.store.activeKey === id,
        'cm-carousel-item-active': ctx && ctx.effect === 'slide' && ctx.store.dir=== 'normal' && ctx.store.activeKey === id,
        'cm-carousel-item-active-next': ctx && ctx.effect === 'slide' && ctx.store.dir=== 'normal' && ctx.store.prevKey === id,
        'cm-carousel-item-active-reverse': ctx && ctx.effect === 'slide' && ctx.store.dir=== 'reverse' && ctx.store.activeKey === id,
        'cm-carousel-item-active-reverse-next': ctx && ctx.effect === 'slide' && ctx.store.dir=== 'reverse' && ctx.store.nextKey === id
    });

    onMount(() => {
        ctx && ctx.addItem({
            id
        });
    })

    return <div classList={classList()} data-id={id}>
        {props.children}
    </div>
}
