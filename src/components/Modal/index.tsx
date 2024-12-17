import { Portal, render } from "solid-js/web";
import createModel from "../utils/createModel";
import usePortal from "../utils/usePortal";
import { useClassList } from "../utils/useProps";
import { Draggable } from "../Draggable";
import type { ButtonProps } from "../Button";
import { Button } from "../Button";
import type { JSXElement, Setter, Signal} from "solid-js";
import { createComponent, createComputed, createEffect, createSignal, createUniqueId, Show } from "solid-js";
import usezIndex from "../utils/usezIndex";
import { F7ExclamationmarkTriangleFill, F7CheckmarkAltCircleFill, F7XmarkCircleFill, F7QuestionCircleFill, F7InfoCircleFill } from "cui-solid-icons/f7";
import { FeatherX } from "cui-solid-icons/feather";
import { useTransition } from "../utils/useTransition";

const icons: any = {
    info: F7InfoCircleFill,
    success: F7CheckmarkAltCircleFill,
    warning: F7ExclamationmarkTriangleFill,
    error: F7XmarkCircleFill,
    confirm: F7QuestionCircleFill
}

export interface Position {
    top?: string,
    bottom?: string,
    left?: string,
    right?: string,
}

export interface ModalProps {
    bounds?: string,
    disabled?: boolean,
    style?: any,
    classList?: any,
    class?: string,
    title?: any,
    headerStyle?: any,
    bodyStyle?: any,
    children?: any,
    footer?: boolean,
    footerAlign?: 'start' | 'center' | 'end',
    footerReverse?: boolean,
    loading?: boolean | Signal<boolean>,
    onOk?: () => boolean | Promise<boolean | void> | undefined | void,
    onCancel?: () => void,
    onClosed?: () => void,
    onClickClose?: () => void,
    okText?: any,
    okButtonType?: keyof ButtonProps['type'],
    cancleButtonType?: keyof ButtonProps['type'],
    cancleText?: any,
    visible?: boolean | Signal<boolean>,
    defaultPosition?: Position,
    mask?: boolean,
    maskClosable?: boolean,
    resetPostion?: boolean,
    hasCloseIcon?: boolean
    fullScreen?: boolean
    destroyOnClose?: boolean
}

export function Modal (props: ModalProps) {
    let wrap: any;
    let maskEle: any;
    let draggable: any;
    const [visible, setVisible] = createModel(props, 'visible', false);
    const [loading, setLoading] = createSignal(false);
    const [opened, setOpened] = createSignal(visible());
    const [destroyed, setDestroyed] = createSignal(props.destroyOnClose && !open());
    let setOverflow = false;
    let originOverflow = '';
    const footerAlign = props.footerAlign ?? 'end';
    const footerReverse = props.footerReverse ?? false;
    const okButtonType = props.okButtonType ?? 'primary';
    const cancleButtonType = props.cancleButtonType ?? 'default';
    const classList = () => useClassList(props, 'cm-modal');
    const zindex = usezIndex();

    const wrapClass = () => ({
        'cm-modal-wrap': true,
        // 'cm-modal-visible': visible(),
        'cm-modal-fullscreen': props.fullScreen,
    });

    const maskClass = () => ({
        'cm-modal-mask': true,
        'cm-modal-mask-visible': visible()
    });

    const onClickClose = () => {
        props.onClickClose && props.onClickClose();
        onClose();
    }

    const onClose = () => {
        props.onClosed && props.onClosed();
        setVisible(false);
    }

    const onCancel = () => {
        onClose();
        props.onCancel && props.onCancel();
    }

    const onOk = async () => {
        // 先判断显示loading
        if (props.loading) {
            if (!loading()) {
                setLoading(true);
            }
        }
        // 如果存在onOK回调判断是否返回值
        if (props.onOk) {
            const ret = await props.onOk?.();
            // 没有返回值并且非loading直接关闭
            if (ret === undefined && !loading()) {
                onClose();
            }
            // 返回true直接关闭
            if (ret === true) {
                onClose();
            }
            // 返回false，重置loading
            if (ret === false) {
                setLoading(false);
            }
        } else {
            if (!loading()) {
                onClose();
            }
        }
    }

    createEffect(() => {
        const show = opened();
        if (!show) {
            setLoading(false);
            if (setOverflow) {
                document.body.style.overflow = originOverflow;
                setOverflow = false;
            }
        } else {
            if (wrap) {
                const wrapH = wrap.getBoundingClientRect().height;
                const contentH = wrap.children[0].getBoundingClientRect().height;
                // 超出显示内容
                if (contentH > wrapH) {
                    wrap.style.overflow = 'auto';
                    wrap.children[0].style.top = 0;
                    const bodyStyle = window.getComputedStyle(document.body, null);
                    originOverflow = bodyStyle.overflow;
                    if (originOverflow !== 'hidden') {
                        document.body.style.overflow = 'hidden';
                        setOverflow = true;
                    }
                } else {
                    wrap.style.overflow = 'none';
                    setOverflow = false;
                }
                setTimeout(() => {
                    wrap.focus();
                }, 300);
            }
            if (resetPostion) {
                if (draggable) {
                    draggable.reset();
                }
            }
        }
    })

    const transition = useTransition({
        el: () => wrap,
        startClass: 'cm-modal-visible',
        activeClass: 'cm-modal-open',
        enterEndClass: 'cm-modal-opened',
        onLeave: () => {
            setOpened(false);
            props.destroyOnClose && setDestroyed(true);
        },
        onEnter: () => {
            setOpened(true);
        }
    })

    createComputed(() => {
        const v = visible();
        if (v) {
            props.destroyOnClose && setDestroyed(false);
            transition.enter();
        } else {
            transition.leave();
        }
    })

    const onMaskClick = (e: any) => {
        if (maskClosable) {
            if (e.target === maskEle) {
                setVisible(false);
            }
        }
    }

    const onkeydown = (e: any) => {
        // e.preventDefault && e.preventDefault();
        // e.stopPropagation && e.stopPropagation();
        if (e.keyCode === 27) {
            setVisible(false);
        }
    }

    const id = 'cm-modal-portal';
    const footer = props.footer ?? true;
    const hasCloseIcon = props.hasCloseIcon ?? true;
    const modalId = createUniqueId();
    const okText = props.okText || '确 定';
    const cancleText = props.cancleText || '取 消';
    const mask = props.mask ?? true;
    const maskClosable = props.maskClosable ?? true;
    const resetPostion = props.resetPostion ?? false;

    return <Portal mount={usePortal(id, id)}>
        <Show when={mask}>
            <div classList={maskClass()} onClick={onMaskClick} ref={maskEle} style={{"z-index": (zindex - 1)}} />
        </Show>
        <div classList={wrapClass()} ref={wrap} tabIndex="1" onKeyDown={onkeydown} style={{"z-index": zindex}}>
            <Draggable ref={draggable} bounds={props.bounds || 'body'} style={props.defaultPosition} handle={'.cm-modal-header[data-id="' + modalId + '"]'}
                disabled={props.disabled}>
                <div classList={classList()} style={props.style}>
                    <div class="cm-modal-header" style={props.headerStyle} data-id={`${modalId}`}>
                        { props.title ? <div class="cm-modal-title">{props.title}</div> : null }
                        <Show when={hasCloseIcon}>
                            <span class="cm-modal-close" onClick={onClickClose}><FeatherX /></span>
                        </Show>
                    </div>
                    <div class="cm-modal-body" style={props.bodyStyle}>
                        {destroyed() ? null : props.children}
                    </div>
                    <Show when={footer}>
                        <div classList={{
                            'cm-modal-footer': true,
                            'cm-modal-footer-reverse': footerReverse,
                            [`cm-modal-footer-${footerAlign}`]: !!footerAlign
                        }}>
                            <Button type={okButtonType} loading={loading()} onClick={onOk}>{okText}</Button>
                            <Button type={cancleButtonType} onClick={onCancel}>{cancleText}</Button>
                        </div>
                    </Show>
                </div>
            </Draggable>
        </div>
    </Portal>
}


export interface ModalConfig extends ModalProps{
    content?: JSXElement | (() => any),
    status?: 'success'|'info'|'warning'|'error'|'confirm'
}

function ModalFun () {
    let disposeFn: (() => void) | null;
    return {
        open (config: ModalConfig) {
            const [visible, setVisible] = createSignal(false);
            let icon = null;
            icon = ()=> createComponent(icons[config.status!], {class: `cm-modal-icon-${config.status}`, size: 24})
            const close = () => {
                setTimeout(() => {
                    disposeFn?.()
                }, 250)
            }
            config.style = {'min-width': '24vw', ...config.style};
            config.defaultPosition = {top: '200px', ...config.defaultPosition};
            const ele = usePortal('cm-modal-portal-instance', 'cm-modal-portal');

            setTimeout(() => {
                setVisible(true);
            })

            disposeFn = ele ? render(() => <Modal {...config} visible={[visible, setVisible]} onClosed={() => close()} class="cm-modal-instance">
                <div class="cm-modal-left">
                    <div class="cm-modal-icon">
                        {icon()}
                    </div>
                </div>
                <div class="cm-modal-right">
                    {typeof config.content === 'function' ? config.content() : config.content}
                </div>
            </Modal>, ele) : null;
        },
        success (config: ModalConfig) {
            config.status = 'success';
            return this.open(config);
        },
        info (config: ModalConfig) {
            config.status = 'info';
            return this.open(config);
        },
        warning (config: ModalConfig) {
            config.status = 'warning';
            return this.open(config);
        },
        error (config: ModalConfig) {
            config.status = 'error';
            return this.open(config);
        },
        confirm (config: ModalConfig) {
            config.status = 'confirm';
            return this.open(config);
        },
        remove () {
            setTimeout(() => {
                disposeFn?.()
            }, 250)
        }
    }
}

export const modal = ModalFun();
