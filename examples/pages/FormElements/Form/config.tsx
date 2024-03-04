export const propsData = [
    {name: 'classList', desc: '自定义class', type: 'Object', default: ''},
    {name: 'class', desc: '自定义class', type: 'string', default: ''},
    {name: 'style', desc: '自定义样式', type: 'Object', default: ''},
    {name: 'labelWidth', desc: 'label宽度', type: 'number', default: ''},
    {name: 'form', desc: '表单绑定', type: 'Object', default: ''},
    {name: 'inline', desc: '内联模式', type: 'boolean', default: ''},
    {name: 'autocomplete', desc: '自动填充选项', type: 'string', default: ''},
    {name: 'errorTransfer', desc: '使用popover显示错误提示', type: 'boolean', default: 'false'},
    {name: 'errorAlign', desc: '设置popover的显示位置', type: 'string', default: 'right'},
    {name: 'onChange', desc: '表单项改变事件', type: 'Function', default: ''},
]

export const itemPropsData = [
    {name: 'classList', desc: '自定义class', type: 'Object', default: ''},
    {name: 'class', desc: '自定义class', type: 'string', default: ''},
    {name: 'style', desc: '自定义样式', type: 'Object', default: ''},
    {name: 'inline', desc: '内联模式', type: 'boolean', default: ''},
    {name: 'labelStyle', desc: 'label样式', type: 'Object', default: ''},
    {name: 'label', desc: '表单项文本', type: 'string', default: ''},
    {name: 'name', desc: '表单项名称', type: 'string', default: ''},
    {name: 'errorTransfer', desc: '使用popover显示错误提示', type: 'boolean', default: 'false'},
    {name: 'errorAlign', desc: '设置popover的显示位置', type: 'string', default: 'right'},
]


export const useFormPropsData = [
    {name: 'data', desc: '表单数据， key对应FormItem的name字段', type: 'Object', default: ''},
    {name: 'validation', desc: '字段校验配置 key 与 data中的key对应', type: 'Object', default: ''},
    {name: 'messaes', desc: '校验失败的提示信息 key 与 data中的key对应', type: 'Object', default: ''},
]

export const eventsData = [
    {name: 'onChange', desc: '值改变事件', params: 'name, value'},
]

export const anchorData = [
    {id: 'form_base', text: '基础用法'},
    {id: 'form_fields', text: '支持的表单项'},
    {id: 'form_dynamic_rule', text: '动态校验'},
    {id: 'comp_api', text: 'API'},
    {id: 'comp_props', text: '属性'},
    {id: 'comp_events', text: '事件'},
]

import form_base from "./codes/form_base"
import form_fields from "./codes/form_fields"
import form_dynamic_rule from "./codes/form_dynamic_rule"
export const codes = {
    form_fields,
    form_dynamic_rule,
    form_base,
}