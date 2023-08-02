
export const propsData = [
    {name: 'style', desc: '自定义样式', type: 'Object', default: ''},
    {name: 'key', desc: '消息的标识，调用close可根据key进行关闭', type: 'string', default: ''},
    {name: 'duration', desc: '显示时间，为0时不销毁', type: 'number', default: '4'},
    {name: 'dock', desc: '通知弹出的位置 topRight|topLeft|bottomLeft|bottomRight', type: 'string', default: 'topRight'},
    {name: 'content', desc: '内容', type: 'JSXElement', default: ''},
    {name: 'title', desc: '标题', type: 'string|JSXElement', default: ''},
    {name: 'icon', desc: '图标', type: 'JSXElement', default: ''},
    {name: 'theme', desc: '主题 success|warning|error|info', type: 'any', default: ''},
    {name: 'btn', desc: '按钮', type: 'JSXElement', default: ''},
    {name: 'onClose', desc: '关闭回调函数', type: 'Function', default: ''},
]


export const eventsData = [
    {name: 'onClose', desc: '关闭回调函数', params: ''},
]


export const anchorData = [
    {id: 'notice_base', text: '基础用法'},
    {id: 'notice_type', text: '类型'},
    {id: 'notice_dock', text: '位置'},
    {id: 'comp_api', text: 'API'},
    {id: 'comp_props', text: '属性'},
    {id: 'comp_events', text: '事件'},
]

import notice_base from "./codes/notice_base"
import notice_type from "./codes/notice_type"
import notice_dock from "./codes/notice_dock"

export const codes = {
    notice_base,
    notice_type,
    notice_dock,
}