import { Portal, Show, render } from "solid-js/web";
import createModel from "../utils/createModel";
import usePortal from "../utils/usePortal";
import { useClassList } from "../utils/useProps";
import { Draggable } from "../Draggable";
import { Icon } from "../Icon";
import { Button } from "../Button";
import { JSXElement, createEffect, createSignal, createUniqueId } from "solid-js";
import usezIndex from "../utils/usezIndex";

type Position = {
    top?: string,
    bottom?: string,
    left?: string,
    right?: string,
}

type ModalProps = {
    bounds?: string,
    disabled?: boolean,
    style?: any,
    classList?: any,
    class?: string,
    title?: any,
    bodyStyle?: any,
    children?: any,
    footer?: boolean,
    loading?: boolean | Function[],
    onOk?: Function,
    onCancel?: Function,
    onClosed?: Function,
    onClickClose?: Function,
    okText?: any,
    cancleText?: any,
    visible?: boolean | Function[],
    defaultPosition?: Position,
    mask?: boolean,
    maskClosable?: boolean,
    resetPostion?: boolean,
    fullScreen?: boolean
}

export function Modal (props: ModalProps) {
    let wrap: any;
    let maskEle: any;
    let draggable: any;
    const [visible, setVisible] = createModel(props, 'visible', false);
    const [loading, setLoading] = createSignal(false);
    const classList = () => useClassList(props, 'cm-modal');
    const zindex = usezIndex();

    const wrapClass = () => ({
        'cm-modal-wrap': true,
        'cm-modal-visible': visible(),
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

    const onOk = () => {
        props.onOk && props.onOk();
        if (props.loading) {
            if (!loading()) {
                setLoading(true);
            }
            return;
        }
        onClose();
    }

    createEffect(() => {
        const show = visible();
        if (!show) {
            setLoading(false);
        } else {
            if(wrap) {
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
    });

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
    const modalId = createUniqueId();
    const okText = props.okText || '确 定';
    const cancleText = props.cancleText || '取 消';
    const mask = props.mask ?? true;
    const maskClosable = props.maskClosable ?? true;
    const resetPostion = props.resetPostion ?? false;
    return <Portal mount={usePortal(id, id)}>
        <Show when={mask}>
            <div classList={maskClass()} onClick={onMaskClick} ref={maskEle} style={{"z-index": (zindex - 1)}}></div>
        </Show>
        <div classList={wrapClass()} ref={wrap} tabIndex="1" onKeyDown={onkeydown} style={{"z-index": zindex}}>
            <Draggable ref={draggable} bounds={props.bounds || 'body'} style={props.defaultPosition} handle={'.cm-modal-header[data-id="' + modalId + '"]'} 
                disabled={props.disabled}>
                <div classList={classList()} style={props.style}>
                    <div class='cm-modal-header' data-id={`${modalId}`}>
                        { props.title ? <div class='cm-modal-title'>{props.title}</div> : null }
                        <span class='cm-modal-close' onClick={onClickClose}><Icon name='x'/></span>
                    </div>
                    <div class='cm-modal-body' style={props.bodyStyle}>
                        {props.children}
                    </div>
                    <Show when={footer}>
                        <div class='cm-modal-footer'>
                            <Button type='primary' loading={loading()} onClick={onOk}>{okText}</Button>
                            <Button type='default' className='mr-10' onClick={onCancel}>{cancleText}</Button>
                        </div>
                    </Show>
                </div>
            </Draggable>
        </div>
    </Portal>
}


export interface ModalConfig extends ModalProps{
    content?: JSXElement,
    status?: 'success'|'info'|'warning'|'error'|'confirm'
}

function ModalFun () {
    const [dispose, setDispose] = createSignal(true);
    const [visible, setVisible] = createSignal(true);
    return {
        open (config: ModalConfig) {
            setVisible(true);
            setDispose(true);
            let icon = '';
            if (config.status === 'success') {
                icon = 'check-circle'
            }
            if (config.status === 'info') {
                icon = 'info'
            }
            if (config.status === 'warning') {
                icon = 'alert-circle'
            }
            if (config.status === 'error') {
                icon = 'x-circle'
            }
            if (config.status === 'confirm') {
                icon = 'help-circle'
            }
            const close = (v: boolean) => {
                setVisible(v);
                setTimeout(() => {
                    setDispose(v);
                }, 250)
            }
            config.style = {'min-width': '24vw', ...config.style};
            config.visible = [visible, close];
            config.defaultPosition = {top: '200px', ...config.defaultPosition};
            const ele = usePortal('cm-modal-portal', 'cm-modal-portal');
            render(() => <Show when={dispose()}><Modal {...config} class="cm-modal-instance">
                <div class="cm-modal-left">
                    <div class='cm-modal-icon'>
                        <Icon name={icon} size={24}/>
                    </div>
                </div>
                <div class="cm-modal-right">
                    {config.content}
                </div>
            </Modal></Show>, ele);
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
            setVisible(false);
            setTimeout(() => {
                setDispose(false);
            }, 250)
        }
    }
}

export const modal = ModalFun();