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
    {id: 'spinner_base', text: '基础用法'},
    {id: 'spinner_disabled', text: '禁用'},
    {id: 'spinner_size', text: '尺寸'},
    {id: 'spinner_minmax', text: '最小最大值'},
    {id: 'spinner_step', text: '步长'},
    {id: 'spinner_loop', text: '循环'},
    {id: 'comp_api', text: 'API'},
    {id: 'comp_props', text: '属性'},
    {id: 'comp_events', text: '事件'},
]


import spinner_base from "./codes/spinner_base"
import spinner_disabled from "./codes/spinner_disabled"
import spinner_size from "./codes/spinner_size"
import spinner_minmax from "./codes/spinner_minmax"
import spinner_step from "./codes/spinner_step"
import spinner_loop from "./codes/spinner_loop"
export const codes = {
    spinner_base,
    spinner_disabled,
    spinner_size,
    spinner_minmax,
    spinner_step,
    spinner_loop,
}