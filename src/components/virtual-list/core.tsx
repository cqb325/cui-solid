import { createComponent, createComputed, createEffect, createMemo, createSignal, For, onCleanup, onMount, untrack } from "solid-js"
import { createStore } from "solid-js/store"
import type { CustomComponentProps } from "."

export interface VirtualListCoreProps {
    height?: number,
    maxHeight?: number,
    itemEstimatedSize: number
    overscan?: number,
    items: any[],
    itemComponent: CustomComponentProps, // 列表项组件
    scrollElement: HTMLDivElement,
    contentElement: HTMLDivElement,
    bodyElement: HTMLDivElement,
    displayDelay?: number,
    onScroll?: (scrollTop: number) => void,
    ref?: any
}

export interface MeasuredData {
    size: number,
    offset: number,
}
export interface IMeasuredDataMap {
    [key: number]: MeasuredData
}

export function VirtualListCore (props: VirtualListCoreProps) {
    const wrap = props.scrollElement;
    const content = props.bodyElement;

    const [scrollOffset, setScrollOffset] = createSignal(0);
    // 使用Object对象不使用number，防止同一个数字不会响应
    const [start, setStart] = createSignal({ value: 0 });
    // height变化之后会自动触发scroll，不知道为啥，需要通过标志控制并重置scrollTop
    let heightMeasuring = false;
    const measuredDataMap: WeakMap<any, MeasuredData> = new WeakMap();

    const getMeasuredData = (index: number) => {
        const item = props.items[index];
        if (item && measuredDataMap.has(item)) {
            return measuredDataMap.get(item);
        }
        return null;
    }

    const getMeasuredOffset = (index: number) => {
        return getMeasuredData(index)?.offset || 0;
    }

    const setMeasuredData = (index: number, data: MeasuredData) => {
        const item = props.items[index];
        if (item) {
            if (measuredDataMap.has(item)) {
                const oldData: MeasuredData = measuredDataMap.get(item)!;
                oldData.size = data.size;
                oldData.offset = data.offset;
            } else {
                measuredDataMap.set(item, data);
            }
        }
    }
    // 计算每项的高度和offset，size可以使用缓存的数据，offset需要重新计算，
    // 有些数据项在某些过滤场景下索引值会发生变化
    const measures = () => {
        const count = props.items.length;
        for (let i = 0; i < count; i++) {
            const prevItem = getMeasuredData(i - 1);
            const offset = i === 0 ? 0 : (prevItem ? prevItem.offset + prevItem.size : 0);
            if (!measuredDataMap.has(props.items[i])) {
                setMeasuredData(i, { size: props.itemEstimatedSize, offset })
            } else {
                const oldItem = getMeasuredData(i);
                setMeasuredData(i, { size: oldItem!.size, offset })
            }
        }
    }

    measures();

    // 二分法搜索
    const binarySearch = ({ low, high, scrollOffset }: any) => {
        let middle = 0;
        let currentOffset = 0;
        while (low <= high) {
            middle = low + Math.floor((high - low) / 2);
            currentOffset = getMeasuredOffset(middle);
            if (currentOffset === scrollOffset) {
                return middle;
            } else if (currentOffset < scrollOffset) {
                low = middle + 1;
            } else {
                high = middle - 1
            }
        }
        if (low > 0) {
            return low - 1;
        }
        return 0;
    }

    // 指数搜索
    const exponentialSearch = (scrollOffset: number) => {
        const itemCount = props.items.length;
        let interval = 1;
        let index = 0;
        while (index < itemCount && getMeasuredOffset(index) < scrollOffset) {
            index += interval;
            interval *= 2;
        }
        return binarySearch({
            low: Math.floor(index / 2),
            high: Math.min(index, itemCount - 1),
            scrollOffset
        })
    }

    // 获取第一个索引
    const getStartIndex = (scrollOffset: number) => {
        return exponentialSearch(scrollOffset);
    }

    // 获取容器最后一个索引
    const getEndIndex = (startIndex: number) => {
        const itemCount = props.items.length;
        if (itemCount === 0) {
            return 0;
        }
        // 获取可视区内开始的项
        const startItem = getMeasuredData(startIndex);
        // 可视区内最大的offset值
        const maxOffset = (startItem?.offset || 0) + (props.scrollElement.clientHeight ?? 0);
        // 开始项的下一项的offset，之后不断累加此offset，直到等于或超过最大offset，就是找到结束索引了
        let offset = (startItem?.offset || 0) + (startItem?.size || 0);
        // 结束索引
        let endIndex = startIndex;
        // 累加offset
        while (offset <= maxOffset && endIndex < (itemCount - 1)) {
            endIndex++;
            const currentItem = getMeasuredData(endIndex);
            if (currentItem) {
                offset += currentItem.size;
            }
        }
        return endIndex;
    };

    // 计算渲染的范围
    const getRangeToRender = (scrollOffset: number) => {
        const itemCount = props.items.length;
        if (itemCount === 0) {
            return [-1, -1];
        }
        const startIndex = getStartIndex(scrollOffset);
        const endIndex = getEndIndex(startIndex);
        return [
            Math.max(0, startIndex - (props.overscan || 3)),
            Math.min(itemCount - 1, endIndex + (props.overscan || 3)),
            startIndex,
            endIndex,
        ];
    };

    const estimatedHeight = () => {
        const itemCount = props.items.length;
        let h = 0;
        for (let i = 0; i < itemCount; i++) {
            h += getMeasuredData(i)?.size || 0;
        }
        return h;
    }

    const [height, setHeight] = createSignal(estimatedHeight());

    createComputed(() => {
        if (!props.scrollElement) return;
        let originHeight: number | undefined = props.height;
        if (props.maxHeight) {
            originHeight = height() > props.maxHeight ? props.maxHeight : height();
        }
        props.scrollElement.style.height = originHeight + 'px';

        if (!(props.height || props.maxHeight)) {
            Promise.resolve().then(() => {
                originHeight = wrap.parentElement?.clientHeight;
                const height = wrap.parentElement?.style.height || '';
                const maxheight = wrap.parentElement?.style.maxHeight || '';
                const setedHeight = parseInt(height) || parseInt(maxheight);
                if (setedHeight) {
                    props.scrollElement.style.height = setedHeight + 'px';
                }
            })
        }
    })

    createEffect(() => {
        props.contentElement.style.height = height() + 'px';
        setTimeout(() => {
            heightMeasuring = false;
        }, 300);
    })

    createEffect(() => {
        props.bodyElement.style.transform = `translateY(${getMeasuredData(start().value)?.offset}px)`;
    })

    const scrollHandle = (event: any) => {
        const { scrollTop } = event.target;
        // height变化之后会自动触发scroll，不知道为啥，需要通过标志控制并重置scrollTop
        if (heightMeasuring) {
            if (scrollTop !== scrollOffset()) {
                event.target.scrollTop = scrollOffset();
            }
            return;
        }
        props.onScroll && props.onScroll(scrollTop);
        setScrollOffset(scrollTop);
    }

    // 子元素项尺寸计算并重新计算offset
    const measureElement = (el: HTMLElement, index: number) => {
        const h = el.offsetHeight;
        const item = getMeasuredData(index);
        // 元素未显示或父元素未显示，则不进行计算
        if (h === 0) {
            return;
        }
        if (item && item.size === h) {
            return;
        }

        if (item) {
            item.size = h;
        }
        const itemCount = props.items.length;
        for (let i = index + 1; i < itemCount; i++) {
            const item = getMeasuredData(i);
            const prevItem = getMeasuredData(i - 1);
            if (item) {
                item.offset = prevItem ? prevItem.offset + prevItem.size : 0;
            }
        }
        setHeight(estimatedHeight());
    }

    // 数据源更改触发
    createEffect(() => {
        heightMeasuring = true;
        props.items;
        measures();
        setHeight(estimatedHeight());
        untrack(() => {
            setScrollOffset(scrollOffset() + 0.0000001);
        })
    });

    props.ref && props.ref({
        update: () => {
            measures();
            setHeight(estimatedHeight());
        },
        setScrollOffset,
        getScrollElement: () => props.scrollElement
    })

    const [list, setList] = createStore<any[]>([]);
    let indexes: number[] = [];
    // 子元素
    const getCurrentChildren = createMemo(() => {
        const wrapRect = wrap.getBoundingClientRect();
        const [startIndex, endIndex] = getRangeToRender(Math.ceil(scrollOffset()));
        // 高度为0可能是隐藏状态，不渲染
        if (wrapRect.height === 0 && wrapRect.width === 0) {
            return [];
        }
        setStart({ value: startIndex });

        const items = [];
        const arr = [];
        if (startIndex >= 0) {
            for (let i = startIndex; i <= endIndex; i++) {
                const item = props.items[i];
                items.push(item);
                arr.push(i)
            }
        }
        setList(items);
        indexes = arr;
    })

    // 容器尺寸变化时重新计算当前可视区域元素的尺寸，触发高度变化，之后重新触发scroll变化重新计算可视区域索引,刷新可视区域元素
    const onWrapEntry = async (entry: ResizeObserverEntry) => {
        // const [startIndex, endIndex] = getRangeToRender(scrollOffset());
        // const childs = content.children;
        // for (let i = startIndex; i <= endIndex; i++) {
        //     const el = childs[i - startIndex];
        //     if (el) {
        //         measureElement(el, i);
        //     }
        // }
        // 确认是当前元素
        if (entry.target === wrap) {
            Promise.resolve().then(() => {
                setScrollOffset(scrollOffset() + 0.0000001);
            })
        }
    }

    onMount(() => {
        const ro = new ResizeObserver((entries) => {
            entries.forEach((entry) => onWrapEntry(entry));
        });

        // 容器初始隐藏的情况下，不渲染，需要监听容器显示状态，显示后触发重新渲染，并停止监控
        const wrapRect = wrap.getBoundingClientRect();
        let observer: IntersectionObserver|null = null;
        if (wrapRect.height === 0 && wrapRect.width === 0) {
            observer = new IntersectionObserver((entries) => {
                if (entries[0]?.isIntersecting) {
                    queueMicrotask(()=> {
                        setScrollOffset(scrollOffset() + 0.0000001);
                        observer?.disconnect();
                        observer = null;
                    });
                }
            }, {
                root: props.scrollElement,
                threshold: 0.5,
            });
            observer.observe(props.contentElement)
        }


        // 容器尺寸变化
        ro.observe(wrap);
        onCleanup(() => {
            ro.disconnect();
            observer?.disconnect();
            observer = null;
        });

        // 列表元素大小变化时，导致容器高度不够或超长问题
        ro.observe(props.bodyElement);
        onCleanup(() => {
            ro.unobserve(props.bodyElement);
        });

        props.scrollElement.addEventListener('scroll', scrollHandle, false);
        onCleanup(() => {
            props.scrollElement.removeEventListener('scroll', scrollHandle, false);
        })
    });

    return <For each={list}>
        {(item: any, index) => {
            const a = createComponent(props.itemComponent.component, {
                ...props.itemComponent.props, item: item, index: index(), ref: (el: HTMLElement) => {
                    Promise.resolve().then(() => {
                        measureElement(el, indexes[index()])
                    })
                }
            });
            return a;
        }}
    </For>
}
