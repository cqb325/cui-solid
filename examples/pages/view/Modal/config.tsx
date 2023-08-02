export const propsData = [
    {name: 'style', desc: '自定义样式', type: 'Object', default: ''},
    {name: 'classList', desc: '自定义Class', type: 'Object', default: ''},
    {name: 'class', desc: '自定义Class', type: 'string', default: ''},
    {name: 'bounds', desc: '拖拽边界', type: 'string', default: 'body'},
    {name: 'disabled', desc: '禁用拖拽', type: 'boolean', default: ''},
    {name: 'title', desc: '对话框的标题', type: 'string|JSXElement', default: ''},
    {name: 'bodyStyle', desc: '内容区域的样式', type: 'Object', default: ''},
    {name: 'footer', desc: '是否显示底部', type: 'boolean', default: 'true'},
    {name: 'loading', desc: '加载中,可控', type: 'boolean|Function[]', default: ''},
    {name: 'okText', desc: '确认按钮文案', type: 'string', default: '确 定'},
    {name: 'cancleText', desc: '取消按钮文案', type: 'string', default: '取 消'},
    {name: 'visible', desc: '控制对话框的显示隐藏', type: 'boolean | Function[]', default: ''},
    {name: 'defaultPosition', desc: '默认位置', type: 'Position{left: string, top: string}', default: ''},
    {name: 'mask', desc: '显示mask', type: 'boolean', default: 'true'},
    {name: 'maskClosable', desc: '点击mask关闭', type: 'boolean', default: 'true'},
    {name: 'resetPostion', desc: '重新打开对话框进行位置重置', type: 'boolean', default: ''},
    {name: 'fullScreen', desc: '全屏控制', type: 'boolean | Function[]', default: ''},
    {name: 'onOk', desc: '点击确认按钮回调', type: 'Function', default: ''},
    {name: 'onCancel', desc: '点击取消按钮回调', type: 'Function', default: ''},
]


export const eventsData = [
    {name: 'onOk', desc: '点击确认按钮回调', params: ''},
    {name: 'onCancel', desc: '点击取消按钮回调', params: ''},
]


export const anchorData = [
    {id: 'modal_base', text: '基础用法'},
    {id: 'modal_disabled', text: '禁用拖拽'},
    {id: 'modal_style', text: '自定义位置'},
    {id: 'modal_footer', text: '影藏底部'},
    {id: 'modal_loading', text: '加载中'},
    {id: 'modal_fullscreen', text: '全屏'},
    {id: 'modal_reset', text: '重置位置'},
    {id: 'modal_mask', text: '不显示遮罩'},
    {id: 'modal_maskclose', text: '禁用遮罩关闭'},
    {id: 'modal_instance', text: '单实例使用'},
    {id: 'comp_api', text: 'API'},
    {id: 'comp_props', text: '属性'},
    {id: 'comp_events', text: '事件'},
]

import modal_base from "./codes/modal_base"
import modal_disabled from "./codes/modal_disabled"
import modal_style from "./codes/modal_style"
import modal_footer from "./codes/modal_footer"
import modal_loading from "./codes/modal_loading"
import modal_fullscreen from "./codes/modal_fullscreen"
import modal_reset from "./codes/modal_reset"
import modal_mask from "./codes/modal_mask"
import modal_maskclose from "./codes/modal_maskclose"
import modal_instance from "./codes/modal_instance"

export const codes = {
    modal_base,
    modal_disabled,
    modal_style,
    modal_footer,
    modal_loading,
    modal_fullscreen,
    modal_reset,
    modal_mask,
    modal_maskclose,
    modal_instance,
}