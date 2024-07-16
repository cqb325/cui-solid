import type { Signal } from "solid-js";
import { Show, onCleanup, onMount, createEffect } from "solid-js";
import { Spin } from "../Spin";
import usePortal from "../utils/usePortal";
import { isServer, Portal } from "solid-js/web";
import { createStore } from "solid-js/store";
import { Space } from "../Layout";
import { Icon } from "../Icon";
import createModel from "../utils/createModel";
import usezIndex from "../utils/usezIndex";

type ImagePreviewProps = {
    classList?: any,
    class?: string,
    style?: any,
    failInfo?: string,
    previewList: string[],
    infinite?: boolean,
    onClose?: () => void,
    visible?: Signal<boolean>,
    onSwitch?: (index: number) => void,
    maskClosable?: boolean,
    initIndex?: number
};

export async function downloadFile(url: string, name = 'unnamed') {
    try {
        if (isServer) return;
        const res = await fetch(url);
        const blob = await res.blob();

        if (!blob) return Promise.reject();

        const localUrl = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.setAttribute('href', localUrl);
        a.setAttribute('download', name);
        a.click();
        URL.revokeObjectURL(localUrl);
        return Promise.resolve();
    } catch (e) {
        return Promise.reject(e);
    }
}

export function ImagePreview(props: ImagePreviewProps) {
    const [visible, setVisible] = createModel(props, 'visible', false);
    const zindex = usezIndex();
    const [store, setStore] = createStore({
        transition: true,
        original: false,
        translate: { x: 0, y: 0 },
        currentIndex: props.initIndex || 0,
        scale: 1,
        degree: 0,
        startX: 0,
        startY: 0,
        prevOverflow: '', // prevent body scrolling
        status: 'loading', // image status
        downloading: false
    });
    const maskClosable = props.maskClosable ?? true;
    const infinite = props.infinite ?? true;
    const failInfo = props.failInfo ?? '失败';

    const handleClickMask = (e: any) => {
        e.preventDefault && e.preventDefault();
        e.stopPropagation && e.stopPropagation();

        if (maskClosable) {
            handleClose(e);
        }
    }

    // 显示的时候如果有默认index则重新设置currentIndex
    createEffect(() => {
        const v = visible();
        if (v) {
            setStore('currentIndex', props.initIndex || 0);
            resetStyle();
            setStore('original', false);
        }
    });

    createEffect(() => {
        store.currentIndex;
        setStore('status', 'loading');
    });

    const handleMousedown = (e: any) => {
        e.preventDefault && e.preventDefault();
        e.stopPropagation && e.stopPropagation();

        const { pageX, pageY, which } = e;
        if (which !== 1) return;
        setStore('startX', pageX);
        setStore('startY', pageY);
        setStore('transition', false);
        document.addEventListener('mousemove', handleMousemove);
        document.addEventListener('mouseup', handleMouseup);
    }

    const handleMousemove = (event: any) => {
        event.stopPropagation();
        const { pageX, pageY } = event;

        const x = store.translate.x + (pageX - store.startX);
        const y = store.translate.y + (pageY - store.startY);

        setStore('translate', 'x', x);
        setStore('translate', 'y', y);
        setStore('startX', pageX);
        setStore('startY', pageY);
    }

    const handleMouseup = () => {
        setStore('transition', true);
        document.removeEventListener('mousemove', handleMousemove);
        document.removeEventListener('mouseup', handleMouseup);
    }

    const handleKeydown = (e: any) => {
        if (!visible()) return;
        const { keyCode } = e;
        if (keyCode === 37) handleSwitch(false);
        if (keyCode === 39) handleSwitch(true);
        if (keyCode === 38) handleOperation(e, 'zoomIn');
        if (keyCode === 40) handleOperation(e, 'zoomOut');
        if (keyCode === 32) {
            e.preventDefault && e.preventDefault();
            setStore('original', !store.original);
        }
    }
    const handleKeyup = (e: any) => {
        if (!visible()) return;
        const { keyCode } = e;
        if (keyCode === 27) handleClose(e);
    }

    const handleWheel = (e: any) => {
        if (!visible()) return;
        e.preventDefault && e.preventDefault();
        e.stopPropagation && e.stopPropagation();
        e.stopImmediatePropagation && e.stopImmediatePropagation();
        handleOperation(e, e.deltaY < 0 ? 'zoomIn' : 'zoomOut');
        return false;
    }

    onMount(() => {
        if (isServer) return;
        document.addEventListener('wheel', handleWheel, { passive: false });
        document.addEventListener('keydown', handleKeydown);
        document.addEventListener('keyup', handleKeyup);
    })
    onCleanup(() => {
        if (isServer) return;
        document.removeEventListener('mousemove', handleMousemove);
        document.removeEventListener('mouseup', handleMouseup);
        document.removeEventListener('wheel', handleWheel);
        document.removeEventListener('keydown', handleKeydown);
        document.removeEventListener('keyup', handleKeyup);
    })

    const handleImageLoad = () => {
        setStore('status', 'loaded');
    }

    const handleImageError = () => {
        setStore('status', 'failed');
    }

    const handleOperation = (e: any, op: string) => {
        e.stopPropagation && e.stopPropagation();

        if (op === 'zoomIn' && store.scale < 6) {
            setStore('scale', store.scale + 0.25);
        }
        if (op === 'zoomOut' && store.scale > 0.25) {
            setStore('scale', store.scale - 0.25);
        }
        if (op === 'rotateLeft') {
            setStore('degree', store.degree - 90);
        }
        if (op === 'rotateRight') {
            setStore('degree', store.degree + 90);
        }
        if (op === 'original') {
            setStore('original', !store.original);
            setStore('transition', false);
            resetStyle();
            setTimeout(() => { setStore('transition', true); }, 0);
        }
        if (op === 'download') {
            setStore('downloading', true);
            downloadFile(props.previewList[store.currentIndex]).then(() => {
                setStore('downloading', false);
            }).catch(() => {
                setStore('downloading', false);
            });
        }
    }

    const resetStyle = () => {
        setStore('scale', 1);
        setStore('degree', 0);
        setStore('translate', 'x', 0);
        setStore('translate', 'y', 0);
    }

    // 左右切换
    const handleSwitch = (next: boolean) => {
        if (next) {
            if (store.currentIndex + 1 === props.previewList.length) {
                if (infinite) {
                    resetStyle();
                    setStore('currentIndex', 0)
                }
            } else {
                resetStyle();
                setStore('currentIndex', store.currentIndex + 1);
            }
        } else {
            if (store.currentIndex === 0) {
                if (infinite) {
                    resetStyle();
                    setStore('currentIndex', props.previewList.length - 1);
                }
            } else {
                resetStyle();
                setStore('currentIndex', store.currentIndex - 1);
            }
        }
        props.onSwitch && props.onSwitch(store.currentIndex);
    }

    const handleClose = (e: any) => {
        setVisible(false);
        e.stopPropagation && e.stopPropagation();
        props.onClose && props.onClose();
    }

    const imgClasses = () => ({
        'cm-image-preview-image': true,
        'cm-image-preview-grabbing': !store.transition,
        'cm-image-preview-hidden': store.status === 'failed',
        'cm-image-preview-transition': store.transition,
        'cm-image-preview-limit': !store.original
    })

    const imageStyle = () => {
        let translateX = store.translate.x / store.scale;
        let translateY = store.translate.y / store.scale;
        const mod = store.degree % 360;
        if ([90, -270].includes(mod)) {
            [translateX, translateY] = [translateY, -translateX];
        }
        if ([180, -180].includes(mod)) {
            [translateX, translateY] = [-translateX, -translateY];
        }
        if ([270, -90].includes(mod)) {
            [translateX, translateY] = [-translateY, translateX];
        }
        return {
            transform: `
                scale(${store.scale})
                rotate(${store.degree}deg)
                translate(${translateX}px, ${translateY}px)
            `
        };
    }

    const hasLeftSwitchEnd = () => {
        return infinite ? false : store.currentIndex === 0;
    }
    const hasRightSwitchEnd = () => {
        const len = props.previewList.length;
        return infinite ? false : store.currentIndex >= len - 1;
    }

    const leftClasses = () => ({ 'cm-image-preview-arrow-left': true, 'cm-image-preview-arrow-disabled': hasLeftSwitchEnd() })
    const rightClasses = () => ({ 'cm-image-preview-arrow-right': true, 'cm-image-preview-arrow-disabled': hasRightSwitchEnd() })

    const currentSrc = () => props.previewList[store.currentIndex];

    const stop = (e: any) => {
        e.stopPropagation && e.stopPropagation();
        e.preventDefault && e.preventDefault();
    }

    const id = 'cm-image-preview-portal';
    return <Portal mount={usePortal(id, id)}>
        <Show when={visible()}>
            <div class="cm-image-preview-mask" style={{ "z-index": (zindex - 1) }} />
            <div class="cm-image-preview-wrap" style={{ "z-index": zindex }}>
                <div class="cm-image-preview" onClick={handleClickMask}>
                    <Show when={store.status === 'loading'}>
                        <Spin class="cm-image-preview-loading" />
                    </Show>
                    <Show when={store.status === 'failed'}>
                        <div class="cm-image-preview-fail">{failInfo}</div>
                    </Show>
                    <img classList={imgClasses()} style={imageStyle()} src={currentSrc()}
                        onMouseDown={handleMousedown} onLoad={handleImageLoad}
                        onError={handleImageError} onClick={stop} />
                    <Space dir="h" class="cm-image-preview-operations" size={0}>
                        <span>
                            <svg class="cm-image-preview-operations-item" onClick={(e: any) => handleOperation(e, 'zoomIn')} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7197" width="200" height="200"><path d="M637 443H519V309c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v134H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h118v134c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V519h118c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" p-id="7198" fill="#ffffff" /><path d="M921 867L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z" p-id="7199" fill="#ffffff" /></svg>
                        </span>
                        <span>
                            <svg class="cm-image-preview-operations-item" onClick={(e: any) => handleOperation(e, 'zoomOut')} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7412" width="200" height="200"><path d="M637 443H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h312c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" p-id="7413" fill="#ffffff" /><path d="M921 867L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z" p-id="7414" fill="#ffffff" /></svg>
                        </span>
                        <span>
                            <Show when={store.original} fallback={
                                <svg class="cm-image-preview-operations-item" onClick={(e: any) => handleOperation(e, 'original')} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="26672" width="200" height="200"><path d="M358.058667 128H156.970667A28.970667 28.970667 0 0 0 128 157.013333v202.837334c0 7.978667 6.528 14.506667 14.506667 14.506666h43.434666a14.506667 14.506667 0 0 0 14.506667-14.506666V200.448h157.610667a14.506667 14.506667 0 0 0 14.506666-14.506667V142.506667a14.506667 14.506667 0 0 0-14.506666-14.506667zM881.493333 649.642667h-43.434666a14.506667 14.506667 0 0 0-14.506667 14.506666v159.402667h-157.610667a14.506667 14.506667 0 0 0-14.506666 14.506667v43.434666c0 7.978667 6.570667 14.506667 14.506666 14.506667h201.088c16 0 28.970667-12.928 28.970667-29.013333v-202.837334a14.506667 14.506667 0 0 0-14.506667-14.506666zM358.058667 823.552H200.448v-159.402667a14.506667 14.506667 0 0 0-14.506667-14.506666H142.506667a14.506667 14.506667 0 0 0-14.506667 14.506666v202.88c0 16 12.970667 28.970667 29.013333 28.970667h201.045334a14.506667 14.506667 0 0 0 14.506666-14.506667v-43.434666a14.506667 14.506667 0 0 0-14.506666-14.506667zM866.986667 128h-201.088a14.506667 14.506667 0 0 0-14.506667 14.506667v43.434666c0 7.978667 6.570667 14.506667 14.506667 14.506667h157.610666v159.402667c0 7.978667 6.528 14.506667 14.506667 14.506666h43.434667a14.506667 14.506667 0 0 0 14.506666-14.506666V156.970667A28.928 28.928 0 0 0 866.986667 128z" p-id="26673" fill="#ffffff" /></svg>
                            }>
                                <svg class="cm-image-preview-operations-item" onClick={(e: any) => handleOperation(e, 'original')} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1976" width="200" height="200"><path d="M864 128H160c-19.2 0-32 12.8-32 32v704c0 19.2 12.8 32 32 32h704c19.2 0 32-12.8 32-32V160c0-19.2-12.8-32-32-32z m-32 704H192V192h640v640z" p-id="1977" fill="#ffffff" /><path d="M320 384v288c0 19.2 12.8 32 32 32s32-12.8 32-32V352c0-19.2-12.8-32-32-32h-32c-19.2 0-32 12.8-32 32s12.8 32 32 32zM640 384v288c0 19.2 12.8 32 32 32s32-12.8 32-32V352c0-19.2-12.8-32-32-32h-32c-19.2 0-32 12.8-32 32s12.8 32 32 32z" p-id="1978" fill="#ffffff" /><path d="M512 384m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z" p-id="1979" fill="#ffffff" /><path d="M512 640m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z" p-id="1980" fill="#ffffff" /></svg>
                            </Show>
                        </span>
                        <span>
                            <svg class="cm-image-preview-operations-item" onClick={(e: any) => handleOperation(e, 'rotateLeft')} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13308" width="200" height="200"><path d="M672 418H144c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32z m-44 402H188V494h440v326z m191.3-491.5c-78.8-100.7-196-153.6-314.6-154.2l-0.2-64c0-6.5-7.6-10.1-12.6-6.1l-128 101c-4 3.1-3.9 9.1 0 12.3L492 318.6c5.1 4 12.7 0.4 12.6-6.1v-63.9c12.9 0.1 25.9 0.9 38.8 2.5 42.1 5.2 82.1 18.2 119 38.7 38.1 21.2 71.2 49.7 98.4 84.3 27.1 34.7 46.7 73.7 58.1 115.8 11 40.7 14 82.7 8.9 124.8-0.7 5.4-1.4 10.8-2.4 16.1h74.9c14.8-103.6-11.3-213-81-302.3z" p-id="13309" fill="#ffffff" /></svg>
                        </span>
                        <span>
                            <svg class="cm-image-preview-operations-item" onClick={(e: any) => handleOperation(e, 'rotateRight')} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13521" width="200" height="200"><path d="M480.5 251.2c13-1.6 25.9-2.4 38.8-2.5v63.9c0 6.5 7.5 10.1 12.6 6.1L660 217.6c4-3.2 4-9.2 0-12.3l-128-101c-5.1-4-12.6-0.4-12.6 6.1l-0.2 64c-118.6 0.5-235.8 53.4-314.6 154.2-69.6 89.2-95.7 198.6-81.1 302.4h74.9c-0.9-5.3-1.7-10.7-2.4-16.1-5.1-42.1-2.1-84.1 8.9-124.8 11.4-42.2 31-81.1 58.1-115.8 27.2-34.7 60.3-63.2 98.4-84.3 37-20.6 76.9-33.6 119.1-38.8zM880 418H352c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32z m-44 402H396V494h440v326z" p-id="13522" fill="#ffffff" /></svg>
                        </span>
                        <span>
                            <Show when={store.downloading} fallback={
                                <svg class="cm-image-preview-operations-item" onClick={(e: any) => handleOperation(e, 'download')} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8825" width="200" height="200"><path d="M505.7 621c3.2 4.1 9.4 4.1 12.6 0l112-141.7c4.1-5.2 0.4-12.9-6.3-12.9h-72.1V120c0-4.4-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8v346.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8z" p-id="8826" fill="#ffffff" /><path d="M903 516h-64c-4.4 0-8 3.6-8 8v300c0 4.4-3.6 8-8 8H199c-4.4 0-8-3.6-8-8V524c0-4.4-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8v372c0 8.8 7.2 16 16 16h768c8.8 0 16-7.2 16-16V524c0-4.4-3.6-8-8-8z" p-id="8827" fill="#ffffff" /></svg>
                            }>
                                <svg class="cm-image-preview-operations-item ivu-image-preview-operations-wait ivu-anim-loop" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7816" width="200" height="200"><path d="M512 64c247.2 0 448 200.8 448 448h-64c0-212-172-384-384-384V64z m0 832c-212 0-384-172-384-384H64c0 247.2 200.8 448 448 448v-64z" p-id="7817" fill="#ffffff" /></svg>
                            </Show>
                        </span>
                    </Space>

                    <Show when={props.previewList.length > 1}>
                        <Icon classList={leftClasses()} name="chevron-left" size={26} onClick={(e) => { stop(e); handleSwitch(false) }} />
                        <Icon classList={rightClasses()} name="chevron-right" size={26} onClick={(e) => { stop(e); handleSwitch(true) }} />
                    </Show>
                    <Icon class="cm-image-preview-arrow-close" name="x" onClick={handleClose} size={26} />
                </div>
            </div>
        </Show>
    </Portal>
}
