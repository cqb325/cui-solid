/* eslint-disable camelcase */
export const propsData = [
    {name: 'classList', desc: '自定义class', type: 'Object', default: ''},
    {name: 'class', desc: '自定义class', type: 'string', default: ''},
    {name: 'style', desc: '自定义样式', type: 'Object', default: ''},
    {name: 'name', desc: 'name属性', type: 'string', default: ''},
    {name: 'disabled', desc: '禁用', type: 'boolean', default: ''},
    {name: 'checked', desc: '选中状态可控', type: 'Function[]', default: ''},
    {name: 'type', desc: '类型， radio|checkbox', type: 'string', default: 'checkbox'},
    {name: 'value', desc: '值，可控属性', type: 'Function[]', default: ''},
    {name: 'label', desc: '显示文案信息', type: 'string|JSXElement', default: ''},
    {name: 'onChange', desc: '值改变事件', type: 'Function', default: ''},
]

export const groupPropsData = [
    {name: 'classList', desc: '自定义class', type: 'Object', default: ''},
    {name: 'class', desc: '自定义class', type: 'string', default: ''},
    {name: 'style', desc: '自定义样式', type: 'Object', default: ''},
    {name: 'name', desc: 'name属性', type: 'string', default: ''},
    {name: 'disabled', desc: '禁用', type: 'boolean', default: ''},
    {name: 'data', desc: '数据', type: 'Array', default: ''},
    {name: 'value', desc: '值，可控属性', type: 'Function[]', default: ''},
    {name: 'textField', desc: '文案字段', type: 'string', default: 'label'},
    {name: 'valueField', desc: '值字段', type: 'string', default: 'value'},
    {name: 'block', desc: '垂直排列', type: 'boolean', default: ''},
    {name: 'stick', desc: '按钮样式', type: 'boolean', default: ''},
    {name: 'onChange', desc: '值改变事件', type: 'Function', default: ''},
]


export const eventsData = [
    {name: 'onChange', desc: '值改变事件', params: 'checked,value'},
]

export const anchorData = [
    {id: 'radio_base', text: '基础用法'},
    {id: 'radio_disabled', text: '禁用'},
    {id: 'radio_group', text: '组合'},
    {id: 'radio_group_disabled', text: '组合禁用'},
    {id: 'radio_stick', text: '垂直排列'},
    {id: 'radio_field', text: '自定义字段'},
    {id: 'comp_api', text: 'API'},
    {id: 'comp_props', text: '属性'},
    {id: 'comp_group_props', text: '组合属性'},
    {id: 'comp_events', text: '事件'},
]

import radio_base from "./codes/radio_base"
import radio_disabled from "./codes/radio_disabled"
import radio_group from "./codes/radio_group"
import radio_group_disabled from "./codes/radio_group_disabled"
import radio_stick from "./codes/radio_stick"
import radio_field from "./codes/radio_field"

export const codes = {
    radio_base,
    radio_disabled,
    radio_group,
    radio_group_disabled,
    radio_stick,
    radio_field,
}
