export const propsData = [
    {name: 'classList', desc: '自定义class', type: 'Object', default: ''},
    {name: 'class', desc: '自定义class', type: 'string', default: ''},
    {name: 'style', desc: '自定义样式', type: 'Object', default: ''},
    {name: 'name', desc: 'name属性', type: 'string', default: ''},
    {name: 'disabled', desc: '禁用', type: 'boolean', default: ''},
    {name: 'range', desc: '使用范围滑块', type: 'boolean', default: ''},
    {name: 'min', desc: '最小值', type: 'number', default: '0'},
    {name: 'max', desc: '最大值', type: 'number', default: '100'},
    {name: 'step', desc: '步长', type: 'number', default: '1.0'},
    {name: 'prepend', desc: '前缀', type: 'JSXElement', default: ''},
    {name: 'value', desc: '值，可控属性', type: 'Function[]', default: ''},
    {name: 'tipFormatter', desc: '提示格式化', type: 'Function', default: ''},
    {name: 'marks', desc: '显示的标记', type: 'Object', default: ''},
    {name: 'onChange', desc: '值改变事件', type: 'Function', default: ''},
]


export const eventsData = [
    {name: 'onChange', desc: '值改变事件', params: 'value: number | number[]'},
]

export const anchorData = [
    {id: 'slider_base', text: '基础用法'},
    {id: 'slider_disabled', text: '禁用'},
    {id: 'slider_step', text: '步长'},
    {id: 'slider_init', text: '初始化'},
    {id: 'slider_minMax', text: '最大最小值'},
    {id: 'slider_range', text: '范围'},
    {id: 'slider_tip', text: '格式化'},
    {id: 'slider_marks', text: '标记'},
    {id: 'comp_api', text: 'API'},
    {id: 'comp_props', text: '属性'},
    {id: 'comp_data_props', text: '数据属性'},
    {id: 'comp_events', text: '事件'},
]


import slider_base from "./codes/slider_base"
import slider_disabled from "./codes/slider_disabled"
import slider_step from "./codes/slider_step"
import slider_init from "./codes/slider_init"
import slider_minMax from "./codes/slider_minMax"
import slider_range from "./codes/slider_range"
import slider_tip from "./codes/slider_tip"
import slider_marks from "./codes/slider_marks"
export const codes = {
    slider_base,
    slider_disabled,
    slider_step,
    slider_init,
    slider_minMax,
    slider_range,
    slider_tip,
    slider_marks,
}