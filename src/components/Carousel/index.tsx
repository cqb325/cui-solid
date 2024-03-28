import { createStore } from "solid-js/store";
import { Icon } from "../Icon";
import { useClassList } from "../utils/useProps"
import type { Accessor, Signal } from "solid-js";
import { For, createContext, createEffect, onMount, useContext, onCleanup } from "solid-js";
import { CarouselItem } from "./Item";
import createModel from "../utils/createModel";

type CarouselProps = {
    classList?: any,
    class?: string,
    style?: any,
    arrow?: 'hover'|'always'|'never',
    children?: any,
    autoPlay?: boolean,
    duration?: number,
    effect?: 'fade'|'slide',
    dotType?: 'dot'|'line'|'columnar',
    dotAlign?: 'left'|'center'|'right',
    activeIndex?: Signal<any>,
    onChange?: (v: any) => void
}

type CarouselStore = {
    data: any[],
    activeIndex: number,
    activeKey: string,
    nextKey: string,
    prevKey: string,
    dir: 'normal'|'reverse'
}

const CarouselContext = createContext();

export function Carousel (props: CarouselProps) {
    const classList = () => useClassList(props, 'cm-carousel');
    const [activeIndex, setActiveIndex] = createModel(props, 'activeIndex', 0);
    const arrow = props.arrow ?? 'hover';
    const dotType = props.dotType ?? 'dot';
    const dotAlign = props.dotAlign ?? 'center';
    const autoPlay = props.autoPlay ?? false;
    const duration = props.duration ?? 4000;
    const effect = props.effect ?? 'slide';
    let wrap: any;
    let list: any;
    let playTimer: any = null;
    const arrowClasses = () => ({
        'cm-carousel-arrow': true,
        [`cm-carousel-arrow-${arrow}`]: !!arrow,
    })
    const dotClasses = () => ({
        'cm-carousel-dots': true,
        [`cm-carousel-dots-${dotType}`]: !!dotType,
        [`cm-carousel-dots-${dotAlign}`]: !!dotAlign,
    })
    let inited = false;
    const [store, setStore] = createStore({
        data: [],
        activeIndex: activeIndex(),
        activeKey: '',
        nextKey: '',
        prevKey: '',
        dir: 'normal'
    } as CarouselStore);

    // 添加元素
    const addItem = (item: any) => {
        item.index = store.data.length;
        setStore('data', [...store.data, item]);
    }

    // 播放
    const play = () => {
        clearTimeout(playTimer);
        onNext();
        playTimer = setTimeout(() => {
            play()
        }, duration);
    }

    onMount(() => {
        if (wrap) {
            const items = wrap.querySelectorAll('.cm-carousel-item');
            if (items.length) {
                const rect = items[0].getBoundingClientRect();
                list.style.height = rect.height + 'px';
            }

            if (autoPlay) {
                playTimer = setTimeout(() => {
                    play()
                }, duration);
            }
        }
    })

    onCleanup(() => {
        if (playTimer) {
            clearTimeout(playTimer);
        }
    });

    createEffect(() => {
        const index = activeIndex();
        setStore('activeIndex', index);
    })

    createEffect(() => {
        const index = store.activeIndex;
        const data = store.data;
        if (data && data.length) {
            if (!inited) {
                list.children[store.activeIndex].classList.add('cm-carousel-item-active-init');
                inited = true;
            } else {
                const el = list.querySelector('.cm-carousel-item-active-init');
                el && el.classList.remove('cm-carousel-item-active-init');
                setStore('activeKey', data[index].id);
                setStore('prevKey', data[(data.length + index - 1) % data.length].id);
                setStore('nextKey', data[(data.length + index + 1) % data.length].id);
            }
        }
    })

    const onNext = () => {
        setActiveIndex((store.activeIndex + 1) % store.data.length);
        // setStore('activeIndex', (store.activeIndex + 1) % store.data.length);
        setStore('dir', 'normal');
        props.onChange && props.onChange(activeIndex());
    }

    const onPrev = () => {
        setActiveIndex((store.data.length + store.activeIndex - 1) % store.data.length);
        // setStore('activeIndex', (store.data.length + store.activeIndex - 1) % store.data.length);
        setStore('dir', 'reverse');
        props.onChange && props.onChange(activeIndex());
    }

    const onDotClick = (num: number) => {
        setStore('dir', store.activeIndex - num < 0 ? 'normal' : 'reverse');
        // setStore('activeIndex', num);
        setActiveIndex(num);
        props.onChange && props.onChange(activeIndex());
    }

    return <CarouselContext.Provider value={{addItem, store, effect}}>
        <div classList={classList()} style={props.style} ref={wrap}>
            <div classList={arrowClasses()} x-placement="left" onClick={onPrev}>
                <Icon name="chevron-left" size={24}/>
            </div>
            <div class="cm-carousel-list" ref={list}>
                {props.children}
            </div>
            <div classList={arrowClasses()} x-placement="right" onClick={onNext}>
                <Icon name="chevron-right" size={24}/>
            </div>
            <ul classList={dotClasses()}>
                <For each={store.data}>
                    {(item: any, index: Accessor<number>) => {
                        const dotClass = () => ({'cm-carousel-dot': true, 'cm-carousel-dot-active': store.activeIndex === index()})
                        return <li classList={dotClass()} onClick={() => {
                            onDotClick(index())
                        }} />
                    }}
                </For>
            </ul>
        </div>
    </CarouselContext.Provider>
}

Carousel.Item = CarouselItem;

export const useCarouselContext = () => useContext(CarouselContext);
