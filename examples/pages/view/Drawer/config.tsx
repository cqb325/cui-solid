/* eslint-disable camelcase */
export const propsData = [
    {name: 'style', desc: '自定义样式', type: 'Object', default: ''},
    {name: 'classList', desc: '自定义Class', type: 'Object', default: ''},
    {name: 'class', desc: '自定义Class', type: 'string', default: ''},
    {name: 'align', desc: '位置 left|right|top|bottom', type: 'string', default: 'right'},
    {name: 'size', desc: '尺寸大小', type: 'number', default: '256'},
    {name: 'title', desc: '标题', type: 'string|JSXElement', default: ''},
    {name: 'maskCloseable', desc: '点击遮罩进行关闭', type: 'boolean', default: 'true'},
    {name: 'hasClose', desc: '显示关闭按钮', type: 'boolean', default: 'true'},
    {name: 'escClose', desc: '使用ESC关闭', type: 'boolean', default: ''},
    {name: 'visible', desc: '控制显示', type: 'Function[]', default: ''},
    {name: 'onClose', desc: '关闭时回调', type: 'Function', default: ''},
    {name: 'onShow', desc: '显示时回调', type: 'Function', default: ''},
]

export const eventsData = [
    {name: 'onClose', desc: '关闭时回调', params: ''},
    {name: 'onShow', desc: '显示时回调', params: ''},
]

export const anchorData = [
    {id: 'drawer_base', text: '基础用法'},
    {id: 'drawer_align', text: '位置'},
    {id: 'drawer_size', text: '尺寸'},
    {id: 'comp_api', text: 'API'},
    {id: 'comp_props', text: '属性'},
]


import drawer_base from "./codes/drawer_base"
import drawer_align from "./codes/drawer_align"
import drawer_size from "./codes/drawer_size"

export const codes = {
    drawer_base,
    drawer_align,
    drawer_size,
}
