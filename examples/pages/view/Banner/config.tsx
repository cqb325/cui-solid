/* eslint-disable camelcase */
export const propsData = [
    {name: 'classList', desc: '自定义Class', type: 'Object', default: ''},
    {name: 'class', desc: '自定义Class', type: 'string', default: ''},
    {name: 'type', desc: '样式类型 warning|info|success|error', type: 'string', default: 'info'},
    {name: 'bordered', desc: '显示border', type: 'boolean', default: ''},
    {name: 'title', desc: '标题', type: 'string|JSXElement', default: ''},
    {name: 'icon', desc: '可自定义图标', type: 'JSXElement', default: ''},
    {name: 'closeIcon', desc: '关闭的icon', type: 'JSXElement', default: ''},
    {name: 'fullMode', desc: '全屏模式', type: 'boolean', default: 'true'},
    {name: 'visible', desc: '控制显示', type: 'Function[]', default: ''},
    {name: 'onClose', desc: '关闭时回调', type: 'Function', default: ''},
]

export const eventsData = [
    {name: 'onClose', desc: '关闭时回调', params: ''},
]

export const anchorData = [
    {id: 'banner_base', text: '基础用法'},
    {id: 'banner_fullmode', text: '非全屏模式'},
    {id: 'banner_custom', text: '自定义内容'},
    {id: 'comp_api', text: 'API'},
    {id: 'comp_props', text: '属性'},
]


import banner_base from "./codes/banner_base"
import banner_fullmode from "./codes/banner_fullmode"
import banner_custom from "./codes/banner_custom"

export const codes = {
    banner_base,
    banner_fullmode,
    banner_custom,
}
