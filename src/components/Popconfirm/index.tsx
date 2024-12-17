import { splitProps, type JSX } from "solid-js";
import type { InnerPopupProps } from "../inner/InnerPopup";
import { InnerPopup } from "../inner/InnerPopup";
import type { ButtonProps } from "../Button";

export interface PopconfirmProps extends InnerPopupProps {
    okText?: string
    cancelText?: string
    onOk?: () => void | Promise<boolean|void>
    onCancel?: () => void
    okType?: ButtonProps['type']
    cancelType?: ButtonProps['type']
    icon?: JSX.Element
    showCancel?: boolean
}
export function Popconfirm (props: PopconfirmProps) {
    const [local, rest] = splitProps(props, ['okText', 'theme', 'cancelText', 'title', 'onOk', 'onCancel',
        'okType', 'cancelType', 'icon', 'align', 'showCancel']);
    const title = () => <>
        {local.icon}
        <div class="cm-popconfirm-title-text">{local.title}</div>
    </>
    const showCancel = local.showCancel ?? true;
    return <InnerPopup {...rest} clsPrefix="cm-popconfirm" varName="popconfirm" theme={local.theme || 'light'} confirm okText={local.okText} align={local.align || 'top'}
        cancelText={local.cancelText} onOk={local.onOk} onCancel={local.onCancel}
        okType={local.okType} cancelType={local.cancelType} title={title()} showCancel={showCancel}/>
}
