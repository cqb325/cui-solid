/* eslint-disable camelcase */
export const propsData = [
    {name: 'style', desc: '自定义样式', type: 'Object', default: ''},
    {name: 'key', desc: '消息的标识，调用close可根据key进行关闭', type: 'string', default: ''},
    {name: 'duration', desc: '显示时间，为0时不销毁', type: 'number', default: '4'},
    {name: 'type', desc: '类型 info|success|warning|error', type: 'string', default: 'info'},
    {name: 'class', desc: 'class类', type: 'string', default: ''},
    {name: 'content', desc: '内容', type: 'JSXElement', default: ''},
    {name: 'closeable', desc: '可显示关闭按钮', type: 'boolean', default: ''},
    {name: 'background', desc: '显示背景色', type: 'any', default: ''},
    {name: 'loading', desc: '加载中', type: 'boolean', default: ''},
    {name: 'onClose', desc: '关闭回调函数', type: 'Function', default: ''},
]


export const eventsData = [
    {name: 'onClose', desc: '关闭回调函数', params: ''},
]


export const anchorData = [
    {id: 'message_base', text: '基础用法'},
    {id: 'message_background', text: '背景色'},
    {id: 'message_close', text: '可关闭'},
    {id: 'message_loading', text: '加载中'},
    {id: 'comp_api', text: 'API'},
    {id: 'comp_props', text: '属性'},
    {id: 'comp_events', text: '事件'},
]

import message_base from "./codes/message_base"
import message_background from "./codes/message_background"
import message_close from "./codes/message_close"
import message_loading from "./codes/message_loading"
export const codes = {
    message_base,
    message_background,
    message_close,
    message_loading,
}
