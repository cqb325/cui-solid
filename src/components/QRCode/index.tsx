import { createEffect, createSignal } from "solid-js";
import { useClassList } from "../utils/useProps";
import qrcodegen from "./qrcodegen";

interface QRCodeProps {
    classList?: any,
    class?: string,
    level?: string
    value: string
    size?: number
    color?: string
    bgColor?: string
    style?: any
    includeMargin?: boolean
    marginSize?: number
    icon?: string
    imageSettings?: ImageSettings
    title?: string,
    ref?: any
}


const ERROR_LEVEL_MAP: { [index: string]: qrcodegen.QrCode.Ecc } = {
    L: qrcodegen.QrCode.Ecc.LOW,
    M: qrcodegen.QrCode.Ecc.MEDIUM,
    Q: qrcodegen.QrCode.Ecc.QUARTILE,
    H: qrcodegen.QrCode.Ecc.HIGH,
};

type ImageSettings = {
    src: string;
    height?: number;
    width?: number;
    excavate: boolean;
    x?: number;
    y?: number;
};

const DEFAULT_SIZE = 128;
const DEFAULT_LEVEL = 'L';
const DEFAULT_BGCOLOR = '#FFFFFF';
const DEFAULT_FGCOLOR = '#000000';
const DEFAULT_INCLUDEMARGIN = false;
const DEFAULT_IMG_SCALE = 0.25;

const SPEC_MARGIN_SIZE = 4;
const DEFAULT_MARGIN_SIZE = 0;

type Modules = ReturnType<qrcodegen.QrCode['getModules']>;
type Excavation = { x: number; y: number; w: number; h: number };

function generatePath (modules: Modules, margin: number = 0): string {
    const ops: Array<string> = [];
    modules.forEach(function (row, y) {
        let start: number | null = null;
        row.forEach(function (cell, x) {
            if (!cell && start !== null) {
                // M0 0h7v1H0z injects the space with the move and drops the comma,
                // saving a char per operation
                ops.push(
                    `M${start + margin} ${y + margin}h${x - start}v1H${start + margin}z`
                );
                start = null;
                return;
            }

            // end of row, clean up or skip
            if (x === row.length - 1) {
                if (!cell) {
                    // We would have closed the op above already so this can only mean
                    // 2+ light modules in a row.
                    return;
                }
                if (start === null) {
                    // Just a single dark module.
                    ops.push(`M${x + margin},${y + margin} h1v1H${x + margin}z`);
                } else {
                    // Otherwise finish the current line.
                    ops.push(
                        `M${start + margin},${y + margin} h${x + 1 - start}v1H${start + margin
                        }z`
                    );
                }
                return;
            }

            if (cell && start === null) {
                start = x;
            }
        });
    });
    return ops.join('');
}

function getMarginSize (includeMargin: boolean, marginSize?: number): number {
    if (marginSize != null) {
        return Math.floor(marginSize);
    }
    return includeMargin ? SPEC_MARGIN_SIZE : DEFAULT_MARGIN_SIZE;
}

function getImageSettings (
    cells: Modules,
    size: number,
    margin: number,
    imageSettings?: ImageSettings
): null | {
    x: number;
    y: number;
    h: number;
    w: number;
    excavation: Excavation | null;
} {
    if (imageSettings == null) {
        return null;
    }
    const numCells = cells.length + margin * 2;
    const defaultSize = Math.floor(size * DEFAULT_IMG_SCALE);
    const scale = numCells / size;
    const w = (imageSettings.width || defaultSize) * scale;
    const h = (imageSettings.height || defaultSize) * scale;
    const x =
        imageSettings.x == null
            ? cells.length / 2 - w / 2
            : imageSettings.x * scale;
    const y =
        imageSettings.y == null
            ? cells.length / 2 - h / 2
            : imageSettings.y * scale;

    let excavation = null;
    if (imageSettings.excavate) {
        const floorX = Math.floor(x);
        const floorY = Math.floor(y);
        const ceilW = Math.ceil(w + x - floorX);
        const ceilH = Math.ceil(h + y - floorY);
        excavation = { x: floorX, y: floorY, w: ceilW, h: ceilH };
    }

    return { x, y, h, w, excavation };
}

function excavateModules (modules: Modules, excavation: Excavation): Modules {
    return modules.slice().map((row, y) => {
        if (y < excavation.y || y >= excavation.y + excavation.h) {
            return row;
        }
        return row.map((cell, x) => {
            if (x < excavation.x || x >= excavation.x + excavation.w) {
                return cell;
            }
            return false;
        });
    });
}

const SUPPORTS_PATH2D = (function () {
    try {
        new Path2D().addPath(new Path2D());
    } catch (e) {
        return false;
    }
    return true;
})();


export function QRCodeCanvas (props: any) {
    const {
        value,
        size = DEFAULT_SIZE,
        level = DEFAULT_LEVEL,
        bgColor = DEFAULT_BGCOLOR,
        color = DEFAULT_FGCOLOR,
        includeMargin = DEFAULT_INCLUDEMARGIN,
        marginSize,
        style,
        icon,
        ref,
        ...otherProps
    } = props;
    let { imageSettings } = props;
    imageSettings = imageSettings ?? icon ? {
        excavate: true
    } : undefined

    const imgSrc = icon;
    let _canvas: any;
    let _image: any;

    ref && ref({
        download: () => {
            const url = _canvas.toDataURL('image/png')
            if ('download' in document.createElement('a')) { // 非IE下载
                const elink = document.createElement('a');
                elink.download = '';
                elink.style.display = 'none';
                elink.href = url;
                document.body.appendChild(elink);
                elink.click();
                URL.revokeObjectURL(elink.href); // 释放URL 对象
                document.body.removeChild(elink);
            }
        }
    })


    // We're just using this state to trigger rerenders when images load. We
    // Don't actually read the value anywhere. A smarter use of useEffect would
    // depend on this value.
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [isImgLoaded, setIsImageLoaded] = createSignal(false);

    createEffect(() => {
        // Always update the canvas. It's cheap enough and we want to be correct
        // with the current state.
        if (_canvas) {
            const ctx = _canvas.getContext('2d');
            if (!ctx) {
                return;
            }

            let cells = qrcodegen.QrCode.encodeText(
                props.value,
                ERROR_LEVEL_MAP[level]
            ).getModules();

            const margin = getMarginSize(includeMargin, marginSize);
            const numCells = cells.length + margin * 2;
            ctx.clearRect(0, 0, numCells, numCells)
            const calculatedImageSettings = getImageSettings(
                cells,
                size,
                margin,
                imageSettings
            );

            const image = _image;
            const haveImageToRender = isImgLoaded() &&
                calculatedImageSettings != null &&
                image !== null &&
                image.complete &&
                image.naturalHeight !== 0 &&
                image.naturalWidth !== 0;

            if (haveImageToRender) {
                if (calculatedImageSettings.excavation != null) {
                    cells = excavateModules(cells, calculatedImageSettings.excavation);
                }
            }

            // We're going to scale this so that the number of drawable units
            // matches the number of cells. This avoids rounding issues, but does
            // result in some potentially unwanted single pixel issues between
            // blocks, only in environments that don't support Path2D.
            const pixelRatio = window.devicePixelRatio || 1;
            _canvas.height = _canvas.width = size * pixelRatio;
            const scale = (size / numCells) * pixelRatio;
            ctx.scale(scale, scale);

            // Draw solid background, only paint dark modules.
            ctx.fillStyle = bgColor;
            ctx.fillRect(0, 0, numCells, numCells);

            ctx.fillStyle = color;
            if (SUPPORTS_PATH2D) {
                // $FlowFixMe: Path2D c'tor doesn't support args yet.
                ctx.fill(new Path2D(generatePath(cells, margin)));
            } else {
                cells.forEach(function (row, rdx) {
                    row.forEach(function (cell, cdx) {
                        if (cell) {
                            ctx.fillRect(cdx + margin, rdx + margin, 1, 1);
                        }
                    });
                });
            }

            if (haveImageToRender) {
                ctx.drawImage(
                    image,
                    calculatedImageSettings.x + margin,
                    calculatedImageSettings.y + margin,
                    calculatedImageSettings.w,
                    calculatedImageSettings.h
                );
            }
        }
    });

    // Ensure we mark image loaded as false here so we trigger updating the
    // canvas in our other effect.
    createEffect(() => {
        imgSrc;
        setIsImageLoaded(false);
    });

    const canvasStyle = { height: size + 'px', width: size + 'px', ...style };
    let img = null;
    if (imgSrc != null) {
        img = (
            <img
                src={imgSrc}
                style={{ display: 'none' }}
                onLoad={() => {
                    setIsImageLoaded(true);
                }}
                ref={_image}
            />
        );
    }
    return (
        <>
            <canvas
                style={canvasStyle}
                height={size}
                width={size}
                ref={_canvas}
                {...otherProps}
            />
            {img}
        </>
    );
}

export function QRCode (props: QRCodeProps) {
    const classList = () => useClassList(props, 'cm-qrcode');
    return <div classList={classList()} style={{"background-color": props.bgColor || DEFAULT_BGCOLOR}}>
        {
            <QRCodeCanvas {...props} />
        }
    </div>;
}
