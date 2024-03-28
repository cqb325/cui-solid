/* eslint-disable camelcase */
export const propsData = [
    {name: 'classList', desc: '自定义class', type: 'Object', default: ''},
    {name: 'class', desc: '自定义class', type: 'string', default: ''},
    {name: 'style', desc: '自定义样式', type: 'Object', default: ''},
    {name: 'disabled', desc: '禁用', type: 'boolean', default: ''},
    {name: 'name', desc: 'name属性', type: 'string', default: ''},
    {name: 'icon', desc: '进行显示的图标', type: 'JSXElement', default: ''},
    {name: 'value', desc: '值，可控属性', type: 'Function[]', default: ''},
    {name: 'count', desc: '图标的数量', type: 'number', default: '5'},
    {name: 'allowHalf', desc: '允许选中半星', type: 'boolean', default: ''},
    {name: 'onChange', desc: '值改变事件', type: 'Function', default: ''},
]


export const eventsData = [
    {name: 'onChange', desc: '值改变事件', params: 'value'},
]

export const anchorData = [
    {id: 'rate_base', text: '基础用法'},
    {id: 'rate_disabled', text: '禁用'},
    {id: 'rate_count', text: '数量'},
    {id: 'rate_half', text: '半星'},
    {id: 'comp_api', text: 'API'},
    {id: 'comp_props', text: '属性'},
    {id: 'comp_events', text: '事件'},
]

import rate_base from "./codes/rate_base"
import rate_disabled from "./codes/rate_disabled"
import rate_count from "./codes/rate_count"
import rate_half from "./codes/rate_half"

export const codes = {
    rate_base,
    rate_disabled,
    rate_count,
    rate_half,
}
