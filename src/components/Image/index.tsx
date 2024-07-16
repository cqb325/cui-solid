import type { JSXElement } from "solid-js";
import { Show, batch, createEffect, createSignal, onCleanup, onMount } from "solid-js"
import { ImagePreview } from "../ImagePreview";

type ImageProps = {
    classList?: any,
    class?: string,
    style?: any,
    failInfo?: string | JSXElement,
    preview?: boolean,
    previewTip?: string | JSXElement,
    previewList?: string[],
    fit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down',
    alt?: string,
    src?: string,
    lazy?: boolean,
    referrerPolicy?: any,
    scrollContainer?: string | HTMLElement,
    onLoad?: () => void,
    onError?: () => void,
    placeholder?: string | JSXElement,
    width?: number | string,
    height?: number | string,
    infinite?: boolean,
    maskClosable?: boolean,
    onClose?: () => void,
    onSwitch?: (index: number) => void,
    previewIndex?: number
}

export function Image(props: ImageProps) {
    const [imageError, setImageError] = createSignal(false);
    const [loading, setLoading] = createSignal(false);
    const [loadingImage, setLoadingImage] = createSignal(false);
    const [previewVisible, setPreviewVisible] = createSignal(false);

    const previewTip = props.previewTip ?? '预览';
    const fit = props.fit ?? ''
    let wrap: any;
    let scrollElement: any = null;

    const innerClass = () => ({
        'cm-image-inner': true,
        'cm-image-cursor': props.preview
    });

    const imgClasses = () => ({
        'cm-image-img': true,
        'cm-image-img-hidden': imageError() || loading()
    });

    // 进行预览
    const handlePreview = () => {
        setPreviewVisible(true);
    }

    // fit 样式
    const fitStyle = () => {
        const fitContains = ['fill', 'contain', 'cover', 'none', 'scale-down'];
        return fitContains.includes(fit) ? `object-fit:${fit};` : '';
    }

    const imageStyles = () => {
        return {
            width: typeof props.width === 'number' ? `${props.width}px` : props.width,
            height: typeof props.height === 'number' ? `${props.height}px` : props.height
        };
    }

    // img onload
    const handleImageLoad = () => {
        batch(() => {
            setLoading(false);
            setImageError(false);
        });
        props.onLoad && props.onLoad();
    }

    // img onError
    const handleImageError = () => {
        batch(() => {
            setLoading(false);
            setImageError(true);
            setLoadingImage(false);
        });
        props.onError && props.onError();
    }

    // 修改状态
    const loadImage = () => {
        batch(() => {
            setLoading(true);
            setImageError(false);
            setLoadingImage(true);
        });
    }

    // watch src 重新加载
    createEffect(() => {
        props.src;
        loadImage();
    });

    let observer: any;
    // 交叉监视器
    const handleLazy = () => {
        observer = new IntersectionObserver(handlerObserveImage, {
            root: scrollElement,
            rootMargin: "0px",
            threshold: 0
        });
        observer.observe(wrap);
    }

    // 停止监听
    const offObserver = () => {
        observer && observer.disconnect();
    }

    const handlerObserveImage = (entries: any) => {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                // destory new IntersectionObserver
                offObserver();
                // run image onload
                loadImage();
            }
        }
    }

    const addLazyImageListener = () => {
        const { scrollContainer } = props;
        if (typeof scrollContainer === 'object' && scrollContainer instanceof HTMLElement) {
            scrollElement = scrollContainer
        } else if (scrollContainer && typeof scrollContainer === 'string') {
            scrollElement = document.querySelector(scrollContainer);
        }

        // on scrollElement scroll
        handleLazy();
    }

    const handleImageEvent = () => {
        props.lazy ? addLazyImageListener() : loadImage();
    }

    const handleClose = () => {
        props.onClose && props.onClose();
    }

    onMount(() => {
        handleImageEvent();
    })

    onCleanup(() => {
        offObserver();
    })

    return <div class="cm-image" ref={wrap} style={imageStyles()}>
        <Show when={loading()}>
            <div class="cm-image-placeholder">
                <Show when={!props.placeholder} fallback={props.placeholder}>
                    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M0 0m512 0l0 0q512 0 512 512l0 0q0 512-512 512l0 0q-512 0-512-512l0 0q0-512 512-512Z" fill="#FFFFFF" p-id="5339" /><path d="M640 396.8m-51.2 0a51.2 51.2 0 1 0 102.4 0 51.2 51.2 0 1 0-102.4 0Z" fill="#82D2F7" p-id="5340" /><path d="M479.6416 472.8832l88.448 176.896A64 64 0 0 1 510.848 742.4H333.952a64 64 0 0 1-57.2416-92.6208l88.448-176.896a64 64 0 0 1 114.4832 0z" fill="#046EA7" p-id="5341" /><path d="M674.3424 555.0976l65.8688 131.7248A38.4 38.4 0 0 1 705.8688 742.4H574.1312a38.4 38.4 0 0 1-34.3424-55.5776l65.8688-131.7248a38.4 38.4 0 0 1 68.6848 0z" fill="#FCCF0A" /></svg>
                </Show>
            </div>
        </Show>
        <Show when={imageError()}>
            <div class="cm-image-error">
                <span>
                    <Show when={!props.failInfo} fallback={props.failInfo}>
                        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M948.622222 173.511111L506.311111 113.777778l-118.044444 133.688889 135.111111 251.733333L412.444444 750.933333l9.955556 99.555556-22.755556-99.555556 12.8-228.977777-193.422222-263.111112L307.2 113.777778 66.844444 180.622222c-25.6 7.111111-42.666667 32.711111-38.4 59.733334l95.288889 664.177777c4.266667 29.866667 31.288889 49.777778 61.155556 45.511111l237.511111-35.555555L851.911111 952.888889c28.444444 2.844444 54.044444-18.488889 58.311111-46.933333l85.333334-672.711112c4.266667-29.866667-17.066667-56.888889-46.933334-59.733333z m-164.977778 93.866667c35.555556 0 65.422222 29.866667 65.422223 65.422222S819.2 398.222222 783.644444 398.222222s-65.422222-29.866667-65.422222-65.422222 29.866667-65.422222 65.422222-65.422222z m88.177778 526.222222c-1.422222 11.377778-11.377778 21.333333-24.177778 19.911111l-304.355555-27.022222c-11.377778-1.422222-21.333333-11.377778-19.911111-24.177778 1.422222-11.377778 11.377778-21.333333 24.177778-19.911111l304.355555 27.022222c11.377778 1.422222 19.911111 11.377778 19.911111 24.177778z" fill="#BCC3C9" p-id="18709" /></svg>
                    </Show>
                </span>
            </div>
        </Show>
        <Show when={loadingImage()}>
            <div classList={innerClass()} onClick={handlePreview}>
                <img
                    classList={imgClasses()}
                    style={fitStyle()}
                    alt={props.alt}
                    src={props.src}
                    loading={props.lazy ? 'lazy' : 'eager'}
                    referrerPolicy={props.referrerPolicy}
                    onLoad={handleImageLoad}
                    onError={handleImageError}
                />
                <Show when={props.preview && previewTip}>
                    <div class="cm-image-mark">
                        <span>{previewTip}</span>
                    </div>
                </Show>
            </div>
        </Show>
        <Show when={props.preview}>
            <ImagePreview previewList={props.previewList || []} infinite={props.infinite} initIndex={props.previewIndex || 0}
                maskClosable={props.maskClosable} onClose={handleClose} visible={[previewVisible, setPreviewVisible]}
                onSwitch={props.onSwitch} />
        </Show>
    </div>
}
