/* eslint-disable camelcase */
export const propsData = [
    {name: 'style', desc: '自定义样式', type: 'Object', default: ''},
    {name: 'classList', desc: '自定义class', type: 'Object', default: ''},
    {name: 'class', desc: '自定义class', type: 'string', default: ''},
    {name: 'size', desc: '分页尺寸 small', type: 'string', default: ''},
    {name: 'current', desc: '当前步骤', type: 'number', default: '0'},
    {name: 'dir', desc: '方向 v|h', type: 'string', default: 'h'},
]

export const itempropsData = [
    {name: 'style', desc: '自定义样式', type: 'Object', default: ''},
    {name: 'classList', desc: '自定义class', type: 'Object', default: ''},
    {name: 'class', desc: '自定义class', type: 'string', default: ''},
    {name: 'title', desc: '标题', type: 'JSXElement|string', default: ''},
    {name: 'description', desc: '步骤描述', type: 'JSXElement|string', default: ''},
    {name: 'icon', desc: '自定义图标', type: 'JSXElement', default: ''},
    {name: 'status', desc: 'finished|process|error|warning|wait', type: 'string', default: ''},
]

export const anchorData = [
    {id: 'steps_base', text: '基础用法'},
    {id: 'steps_mini', text: '迷你型'},
    {id: 'steps_v', text: '垂直步骤'},
    {id: 'steps_icon', text: '状态和图标'},
    {id: 'comp_api', text: 'API'},
    {id: 'comp_props', text: '属性'},
    {id: 'comp_itemprops', text: 'Step属性'},
]


import steps_base from "./codes/steps_base"
import steps_mini from "./codes/steps_mini"
import steps_v from "./codes/steps_v"
import steps_icon from "./codes/steps_icon"
export const codes = {
    steps_base,
    steps_mini,
    steps_v,
    steps_icon,
}
