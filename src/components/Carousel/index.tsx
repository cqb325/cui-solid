import { createStore } from "solid-js/store";
import { useClassList, useStyle } from "../utils/useProps"
import type { Accessor, Signal } from "solid-js";
import { For, createContext, createEffect, onMount, useContext, onCleanup, children, createComputed, createSignal, untrack, Show, batch, createMemo } from "solid-js";
import type { CarouselItemProps } from "./Item";
import { CarouselItem } from "./Item";
import createModel from "../utils/createModel";
import { InnerCarouselItem } from "./InnerItem";
import { Space } from "../Layout";
import { FeatherChevronLeft } from "cui-solid-icons/feather";

export interface CarouselProps {
    classList?: any,
    class?: string,
    style?: any,
    height?: number,
    arrow?: boolean,
    children?: any,
    autoPlay?: boolean,
    duration?: number,
    effect?: 'fade'|'slide'|'card',
    dotType?: 'dot'|'line'|'columnar',
    dotAlign?: 'left'|'right'|'top'|'bottom',
    dotColor?: string,
    dotActiveColor?: string,
    activeIndex?: Signal<any>,
    itemsPerView?: number | 'auto',
    gutter?: number,
    draggable?: boolean,
    dir?: 'h'|'v',
    onChange?: (v: any) => void
}

type CarouselStore = {
    data: any[],
    activeIndex: number,
    unActiveIndex: number,
    activeKey: string,
    unActiveKey: string,
    nextKey: string,
    prevKey: string,
    startPos: number,
    currentPos: number,
    isSwiping: boolean,
    dir: 'normal'|'reverse'
}

const CarouselContext = createContext();

export function Carousel (props: CarouselProps) {
    const [activeIndex, setActiveIndex] = createModel(props, 'activeIndex', 0);
    const [current, setCurrent] = createSignal(activeIndex());
    const arrow = () => props.arrow ?? false;
    const dotType = () => props.dotType ?? 'dot';
    const autoPlay = props.autoPlay ?? false;
    const duration = props.duration ?? 4000;
    const draggable = props.draggable ?? false;
    const effect = () => props.effect ?? 'slide';
    const itemsPerView = props.itemsPerView ?? 1;
    const dir = () => props.dir ?? 'h';
    const dotColor = props.dotColor ?? 'rgba(var(--cui-grey-8), 0.3)';
    const dotActiveColor = props.dotActiveColor ?? 'rgba(var(--cui-white), 1)';
    const dotAlign = () => props.dotAlign ?? (dir() === 'h' ? 'bottom' : 'right');
    const gutter = props.gutter ?? 0;
    const items = children(() => props.children)
    const evaluatedItems = () => items.toArray() as unknown as CarouselItemProps[];
    const classList = () => useClassList(props, 'cm-carousel', {
        [`cm-carousel-${effect()}`]: effect(),
        [`cm-carousel-${dir()}`]: dir()
    });

    let wrap: any;
    let list: any;
    let playTimer: any = null;
    const arrowClasses = () => ({
        'cm-carousel-arrow': true,
        [`cm-carousel-arrow-${arrow()}`]: arrow(),
    })
    const arrowsClasses = () => ({
        'cm-carousel-actions': true,
        'cm-carousel-actions-with-arrow': arrow(),
        [`cm-carousel-actions-${dotAlign()}`]: !!dotAlign(),
    })
    const dotClasses = () => ({
        'cm-carousel-dots': true,
        [`cm-carousel-dots-${dotType()}`]: !!dotType(),
        [`cm-carousel-dots-${dotAlign()}`]: !!dotAlign(),
    })
    let inited = false;
    const [store, setStore] = createStore({
        data: evaluatedItems(),
        activeIndex: activeIndex(),
        unActiveIndex: -1,
        activeKey: '',
        unActiveKey: '',
        nextKey: '',
        prevKey: '',
        startPos: 0,
        isSwiping: false,
        currentPos: 0,
        dir: 'normal'
    } as CarouselStore);

    const [views, setViews] = createSignal<number[]>(itemsPerView !== 'auto' ? new Array(Math.ceil(store.data.length / itemsPerView)).fill(1) : []);
    const loop = () => (effect() === 'slide' && itemsPerView === 1) || effect() === 'card' || effect() === 'fade';

    const [listStyle, setListStyle] = createSignal({});

    const getWidth = () => {
        return list ? (dir() === 'h' ? list.getBoundingClientRect().width : list.getBoundingClientRect().height) : 0;
    }

    // 获取子元素的总长度
    const getItemsWidth = () => {
        if (list) {
            const items: any[] = list.querySelectorAll('.cm-carousel-item');
            const allW = Array.from(items).reduce((a, b) => {
                return a += dir() === 'h' ? b.getBoundingClientRect().width : b.getBoundingClientRect().height;
            }, 0);
            return allW + gutter * (items.length - 1);
        }
        return 0;
    }

    createEffect(() => {
        if (!list) {
            return {};
        }

        if (effect() === 'slide') {
            slideEffect();
        }
    });

    const slideEffect = () => {
        const index = current();
        activeIndex();
        dir();

        if (index === views().length) {
            list.style.transitionDuration = '0ms';
            let offset = 0;
            untrack(() => {
                if (store.isSwiping && store.activeIndex === views().length - 1) {
                    offset = store.currentPos - store.startPos;
                }
                list.style.transform = dir() === 'h' ? `translateX(${offset}px)` : `translateY(${offset}px)`;
            });
        }
        if (index === -1) {
            const w = getWidth() + gutter;
            list.style.transitionDuration = '0ms';
            let offset = 0;
            untrack(() => {
                if (store.isSwiping && store.activeIndex === 0) {
                    offset = store.currentPos - store.startPos;
                }
                list.style.transform = dir() === 'h' ? `translateX(${-(views().length + 1) * w + offset}px)` : `translateY(${-(views().length + 1) * w + offset}px)`;
            });
        }
        untrack(() => {
            transToActive();
        })
    }

    const transToActive = () => {
        if (effect() !== 'slide') {
            return;
        }
        setTimeout(() => {
            const index = activeIndex() + (loop() ? 1 : 0);
            const w = getWidth() + gutter;
            const duration = !inited ? 0 : 300;
            let offset = index * w;
            const allW = getItemsWidth();
            // 当前视窗超过了总长度
            if (offset + getWidth() > allW) {
                offset = offset - getWidth() + allW % getWidth()
            }

            const transform = dir() === 'h' ? `translateX(${-offset}px)` : `translateY(${-offset}px)`;
            setListStyle({
                'gap': `${gutter}px`,
                'transition-duration': `${duration}ms`,
                'transform': transform
            });
            list.setAttribute('data-offset', -offset);
            inited = true;
        })
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
            // 自定义width在effect里面会有延迟
            setTimeout(() => {
                if (itemsPerView === 'auto') {
                    const w = getWidth();
                    const allW = getItemsWidth();
                    const views = Math.ceil(allW / w);
                    if (w) {
                        setViews(new Array(views).fill(1));
                    }
                } else {
                    setViews(new Array(Math.ceil(store.data.length / itemsPerView)).fill(1));
                }
            })

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
        store.unActiveIndex >= 0 && (effect() === 'fade' || effect() === 'card') ? setStore('unActiveKey', store.data[store.unActiveIndex].id) : false;
    })

    createEffect(() => {
        const index = activeIndex();
        batch(() => {
            setStore('activeIndex', index);
            if (effect() === 'fade' || effect() === 'card') {
                setStore('prevKey', store.data[(views().length + index - 1) % views().length].id);
                setStore('activeKey', store.data[index].id);
                setStore('nextKey', store.data[(index + 1) % views().length].id);
            }
        });
    })

    const onNext = () => {
        batch(() => {
            setStore('unActiveIndex', store.activeIndex);
            if (loop()) {
                setCurrent(store.activeIndex + 1);
                setActiveIndex((store.activeIndex + 1) % views().length);
            } else {
                const lastIndex = store.activeIndex;
                const cur = Math.min(lastIndex + 1, views().length - 1);
                setCurrent(cur);
                setActiveIndex(cur);
                if (cur === lastIndex && draggable) {
                    transToActive();
                }
            }
        });
        // setStore('dir', 'normal');
        props.onChange && props.onChange(activeIndex());
    }

    const onPrev = () => {
        batch(() => {
            setStore('unActiveIndex', store.activeIndex);
            if (loop()) {
                setCurrent(store.activeIndex - 1);
                setActiveIndex((views().length + store.activeIndex - 1) % views().length);
            } else {
                const lastIndex = store.activeIndex;
                const cur = Math.max(store.activeIndex - 1, 0);
                setCurrent(cur);
                setActiveIndex(cur);
                if (cur === lastIndex && draggable) {
                    transToActive();
                }
            }
        })
        // setStore('dir', 'reverse');
        props.onChange && props.onChange(activeIndex());
    }

    const onDotClick = (num: number) => {
        batch(() => {
            setStore('unActiveIndex', store.activeIndex);
            // setStore('dir', store.activeIndex - num < 0 ? 'normal' : 'reverse');
            setCurrent(num);
            setActiveIndex(num);
        })
        props.onChange && props.onChange(activeIndex());
    }

    const onSwipe = (swipe: any) => {
        if (effect() === 'slide') {
            setListStyle({
                'gap': `${gutter}px`,
                'transition-duration': `0ms`,
                'transform': dir() === 'h' ? `translateX(${store.startPos - swipe.distanceX()}px)` : `translateY(${store.startPos - swipe.distanceY()}px)`
            });
        }
        setStore('currentPos', store.startPos - (dir() === 'h' ? swipe.distanceX() : swipe.distanceY()));
    }

    const onSwipeStart = () => {
        const offset = list.getAttribute('data-offset');
        setStore('isSwiping', true);
        setStore('startPos', parseFloat(offset));
    }

    const onSwipeEnd = (direction: string, duration: number) => {
        if (duration && duration > 500) {
            effect() === 'slide' ? transToActive() : false;
            return;
        }

        if (dir() === 'h') {
            if (direction === 'right') {
                onPrev();
            } else if (direction === 'left') {
                onNext();
            } else {
                effect() === 'slide' ? transToActive() : false;
            }
        }
        if (dir() === 'v') {
            if (direction === 'down') {
                onPrev();
            } else if (direction === 'up') {
                onNext();
            } else {
                effect() === 'slide' ? transToActive() : false;
            }
        }
        setStore('isSwiping', false);
    }

    const style = () => useStyle(props, {height: (props.height ?? 250) + 'px'});

    return <CarouselContext.Provider value={{store, effect: effect(), itemsPerView, onSwipe, onSwipeStart, onSwipeEnd, draggable}}>
        <div classList={classList()} style={style()} ref={wrap}>
            <div classList={arrowsClasses()}>
                <ul classList={dotClasses()} style={{
                    "--cui-carousel-dot-color": dotColor,
                    "--cui-carousel-active-dot-color": dotActiveColor,
                }}>
                    <For each={views()}>
                        {(item: any, index: Accessor<number>) => {
                            const dotClass = () => ({'cm-carousel-dot': true, 'cm-carousel-dot-active': store.activeIndex === index()})
                            return <li classList={dotClass()} onClick={() => {
                                onDotClick(index())
                            }} />
                        }}
                    </For>
                </ul>
                <Show when={arrow()}>
                    <Space dir={dotAlign() === 'bottom' || dotAlign() === 'top' ? 'h' : 'v'}>
                        <div classList={arrowClasses()} x-placement="left" onClick={onPrev}>
                            {
                                dir() === 'h' ? <FeatherChevronLeft /> : <FeatherChevronLeft rotate={90}/>
                            }
                        </div>
                        <div classList={arrowClasses()} x-placement="right" onClick={onNext}>
                            {
                                dir() === 'h' ? <FeatherChevronLeft rotate={180}/> : <FeatherChevronLeft rotate={-90}/>
                            }
                        </div>
                    </Space>
                </Show>
            </div>
            <div class="cm-carousel-list" ref={list} style={listStyle()}>
                <Show when={loop()}>
                    <InnerCarouselItem index={-1} data={store.data[store.data.length - 1]} {...store.data[store.data.length - 1]}/>
                </Show>
                <For each={store.data}>
                    {(item: any, index: Accessor<number>) => {
                        return <InnerCarouselItem key={item.id} index={index()} data={item} {...item}/>
                    }}
                </For>
                <Show when={loop()}>
                    <InnerCarouselItem index={store.data.length} data={store.data[0]} {...store.data[0]}/>
                </Show>
            </div>
        </div>
    </CarouselContext.Provider>
}

Carousel.Item = CarouselItem;

export const useCarouselContext = () => useContext(CarouselContext);
