import { createEffect, onCleanup, onMount } from "solid-js"
import { useClassList, useStyle } from "../utils/useProps"
import { getPixelRatio, getStyleStr, reRendering, rotateWatermark } from './utils';

export interface WatermarkFontType {
    color?: string
    fontSize?: number | string
    fontWeight?: 'normal' | 'light' | 'weight' | number
    fontStyle?: 'none' | 'normal' | 'italic' | 'oblique'
    fontFamily?: string
}

export interface WatermarkProps {
    children?: any
    class?: string
    classList?: any
    style?: any
    zIndex?: number
    rotate?: number
    width?: number
    height?: number
    image?: string
    content: string | string[]
    font?: WatermarkFontType
    gap?: number[]
    offset?: number[]
}

const BaseSize = 2;
const FontGap = 3;

export function Watermark (props: WatermarkProps) {
    const classList = () => useClassList(props, 'cm-watermark');
    let containerRef: any;
    let watermarkRef: any;
    let stopObservation = false;
    const gap = () => props.gap ?? [100, 100];

    const gapX = () => gap()?.[0] ?? 100;
    const gapY = () => gap()?.[1] ?? 100;
    const gapXCenter = () => gapX() / 2;
    const gapYCenter = () => gapY() / 2;
    const offsetLeft = () => props.offset?.[0] ?? gapXCenter();
    const offsetTop = () => props.offset?.[1] ?? gapYCenter();
    const fontSize = () => props.font?.fontSize ?? 14;
    const fontWeight = () => props.font?.fontWeight ?? 'normal';
    const fontStyle = () => props.font?.fontStyle ?? 'normal';
    const fontFamily = () => props.font?.fontFamily ?? 'sans-serif';
    const color = () => props.font?.color ?? 'rgba(0,0,0,.26)';

    const markStyle = () => {
        const markStyle = {
            'z-index': props.zIndex ?? 9,
            position: 'absolute',
            left: '0px',
            top: '0px',
            width: '100%',
            height: '100%',
            'pointer-events': 'none',
            'background-repeat': 'repeat',
            'background-position': ''
        };

        /** Calculate the style of the offset */
        let positionLeft = offsetLeft() - gapXCenter();
        let positionTop = offsetTop() - gapYCenter();
        if (positionLeft > 0) {
            markStyle.left = `${positionLeft}px`;
            markStyle.width = `calc(100% - ${positionLeft}px)`;
            positionLeft = 0;
        }
        if (positionTop > 0) {
            markStyle.top = `${positionTop}px`;
            markStyle.height = `calc(100% - ${positionTop}px)`;
            positionTop = 0;
        }
        markStyle['background-position'] = `${positionLeft}px ${positionTop}px`;

        return markStyle;
    };

    const destroyWatermark = () => {
        if (watermarkRef) {
            watermarkRef.remove();
            watermarkRef = undefined;
        }
    };

    const appendWatermark = (base64Url: string, markWidth: number) => {
        if (containerRef && watermarkRef) {
            stopObservation = true;
            watermarkRef.setAttribute(
                'style',
                getStyleStr({
                    ...markStyle(),
                    'background-image': `url('${base64Url}')`,
                    'background-size': `${(gapX() + markWidth) * BaseSize}px`
                })
            );
            containerRef?.append(watermarkRef);
            // Delayed execution
            setTimeout(() => {
                stopObservation = false;
            });
        }
    };

    const getMarkSize = (ctx: CanvasRenderingContext2D) => {
        let defaultWidth = 120;
        let defaultHeight = 64;
        const content = props.content;
        const image = props.image;
        const width = props.width;
        const height = props.height;
        if (!image && ctx.measureText) {
            ctx.font = `${Number(fontSize())}px ${fontFamily()}`;
            const contents = Array.isArray(content) ? content : [content];
            const widths = contents.map((item: string) => ctx.measureText(item).width);
            defaultWidth = Math.ceil(Math.max(...widths));
            defaultHeight = Number(fontSize()) * contents.length + (contents.length - 1) * FontGap;
        }
        return [width ?? defaultWidth, height ?? defaultHeight] as const;
    };

    const fillTexts = (
        ctx: CanvasRenderingContext2D,
        drawX: number,
        drawY: number,
        drawWidth: number,
        drawHeight: number
    ) => {
        const ratio = getPixelRatio();
        const content = props.content;
        const mergedFontSize = Number(fontSize()) * ratio;
        ctx.font = `${fontStyle()} normal ${fontWeight()} ${mergedFontSize}px/${drawHeight}px ${fontFamily()}`;
        ctx.fillStyle = color();
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';
        ctx.translate(drawWidth / 2, 0);
        const contents = Array.isArray(content) ? content : [content];
        contents?.forEach((item: string, index) => {
            ctx.fillText(item ?? '', drawX, drawY + index * (mergedFontSize + FontGap * ratio));
        });
    };

    createEffect(() => {
        renderWatermark();
    })

    const renderWatermark = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const image = props.image;
        const rotate = props.rotate ?? -22;

        if (ctx) {
            if (!watermarkRef) {
                watermarkRef = document.createElement('div');
            }

            const ratio = getPixelRatio();
            const [markWidth, markHeight] = getMarkSize(ctx);
            const canvasWidth = (gapX() + markWidth) * ratio;
            const canvasHeight = (gapY() + markHeight) * ratio;
            canvas.setAttribute('width', `${canvasWidth * BaseSize}px`);
            canvas.setAttribute('height', `${canvasHeight * BaseSize}px`);

            const drawX = (gapX() * ratio) / 2;
            const drawY = (gapY() * ratio) / 2;
            const drawWidth = markWidth * ratio;
            const drawHeight = markHeight * ratio;
            const rotateX = (drawWidth + gapX() * ratio) / 2;
            const rotateY = (drawHeight + gapY() * ratio) / 2;
            /** Alternate drawing parameters */
            const alternateDrawX = drawX + canvasWidth;
            const alternateDrawY = drawY + canvasHeight;
            const alternateRotateX = rotateX + canvasWidth;
            const alternateRotateY = rotateY + canvasHeight;

            ctx.save();
            rotateWatermark(ctx, rotateX, rotateY, rotate);

            if (image) {
                const img = new Image();
                img.onload = () => {
                    ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
                    /** Draw interleaved pictures after rotation */
                    ctx.restore();
                    rotateWatermark(ctx, alternateRotateX, alternateRotateY, rotate);
                    ctx.drawImage(img, alternateDrawX, alternateDrawY, drawWidth, drawHeight);
                    appendWatermark(canvas.toDataURL(), markWidth);
                };
                img.crossOrigin = 'anonymous';
                img.referrerPolicy = 'no-referrer';
                img.src = image;
            } else {
                fillTexts(ctx, drawX, drawY, drawWidth, drawHeight);
                /** Fill the interleaved text after rotation */
                ctx.restore();
                rotateWatermark(ctx, alternateRotateX, alternateRotateY, rotate);
                fillTexts(ctx, alternateDrawX, alternateDrawY, drawWidth, drawHeight);
                appendWatermark(canvas.toDataURL(), markWidth);
            }
        }
    };

    let observer: MutationObserver | undefined;
    const onMutate = (mutations: MutationRecord[]) => {
        if (stopObservation) {
            return;
        }
        mutations.forEach(mutation => {
            if (reRendering(mutation, watermarkRef)) {
                destroyWatermark();
                renderWatermark();
            }
        });
    };
    onMount(() => {
        observer = new MutationObserver(onMutate);
        observer.observe(containerRef, {
            attributes: true,
            subtree: true,
            childList: true,
            attributeFilter: ['style', 'class']
        });
    });

    onCleanup(() => {
        destroyWatermark();
        observer?.disconnect();
        observer = undefined;
    })

    const style = () => useStyle(props, { position: 'relative' })

    return <div
        ref={containerRef}
        classList={classList()}
        style={style()}
    >
        {props.children}
    </div>
}
