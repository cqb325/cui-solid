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
    {name: 'onChange', desc: '值改变事件', type: 'Function', default: ''},
]


export const eventsData = [
    {name: 'onChange', desc: '值改变事件', params: 'checked,value'},
]

export const anchorData = [
    {id: 'checkbox_base', text: '基础用法'},
    {id: 'checkbox_disabled', text: '禁用'},
    {id: 'checkbox_group', text: '组合'},
    {id: 'checkbox_group_disabled', text: '组合禁用'},
    {id: 'checkbox_block', text: '垂直排列'},
    {id: 'checkbox_field', text: '自定义字段'},
    {id: 'comp_api', text: 'API'},
    {id: 'comp_props', text: '属性'},
    {id: 'comp_group_props', text: '组合属性'},
    {id: 'comp_events', text: '事件'},
]

import checkbox_base from "./codes/checkbox_base"
import checkbox_disabled from "./codes/checkbox_disabled"
import checkbox_group from "./codes/checkbox_group"
import checkbox_group_disabled from "./codes/checkbox_group_disabled"
import checkbox_block from "./codes/checkbox_block"
import checkbox_field from "./codes/checkbox_field"

export const codes = {
    checkbox_base,
    checkbox_disabled,
    checkbox_group,
    checkbox_group_disabled,
    checkbox_block,
    checkbox_field,
}
