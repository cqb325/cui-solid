export const propsData = [
    {name: 'classList', desc: '自定义class', type: 'Object', default: ''},
    {name: 'class', desc: '自定义class', type: 'string', default: ''},
    {name: 'style', desc: '自定义样式', type: 'Object', default: ''},
    {name: 'name', desc: 'name属性', type: 'string', default: ''},
    {name: 'disabled', desc: '禁用', type: 'boolean', default: ''},
    {name: 'size', desc: '尺寸 small | large', type: 'string', default: ''},
    {name: 'clearable', desc: '可清空', type: 'boolean', default: ''},
    {name: 'align', desc: '下拉位置bottomLeft|bottomRight', type: 'string', default: 'bottomRight'},
    {name: 'prepend', desc: '前缀', type: 'JSXElement', default: ''},
    {name: 'value', desc: '值，可控属性', type: 'Function[]', default: ''},
    {name: 'placeholder', desc: 'placeholder', type: 'string', default: ''},
    {name: 'seperator', desc: '分隔符', type: 'string', default: '/'},
    {name: 'transfer', desc: '下拉内容使用Portal渲染', type: 'boolean', default: ''},
    {name: 'revers', desc: '是否需要翻转', type: 'boolean', default: 'true'},
    {name: 'data', desc: '传入的数据体', type: 'Array', default: ''},
    {name: 'trigger', desc: '展开触发条件 click|hover', type: 'string', default: 'click'},
    {name: 'changeOnSelect', desc: '点击选项及改变值', type: 'boolean', default: ''},
    {name: 'loadData', desc: '动态加载方法', type: 'Function', default: ''},
    {name: 'onChange', desc: '值改变事件', type: 'Function', default: ''},
    {name: 'onSelect', desc: '选项选择事件', type: 'Function', default: ''},
]

export const dataPropsData = [
    {name: 'value', desc: '选项值', type: 'string|number', default: ''},
    {name: 'title', desc: '选项显示信息', type: 'string', default: ''},
    {name: 'children', desc: '子元素', type: 'Array', default: ''},
    {name: 'disabled', desc: '选项禁用', type: 'boolean', default: ''},
]


export const eventsData = [
    {name: 'onChange', desc: '值改变事件', params: 'value: string[]'},
    {name: 'onSelect', desc: '选项选择事件', params: 'item: Object'},
]

export const anchorData = [
    {id: 'cascader_base', text: '基础用法'},
    {id: 'cascader_disabled', text: '禁用'},
    {id: 'cascader_size', text: '尺寸'},
    {id: 'cascader_sep', text: '分隔符'},
    {id: 'cascader_trigger', text: '触发事件'},
    {id: 'cascader_change', text: '选择及改变'},
    {id: 'cascader_control', text: '可控'},
    {id: 'cascader_loading', text: '动态加载'},
    {id: 'comp_api', text: 'API'},
    {id: 'comp_props', text: '属性'},
    {id: 'comp_data_props', text: '数据属性'},
    {id: 'comp_events', text: '事件'},
]

import cascader_base from "./codes/cascader_base"
import cascader_disabled from "./codes/cascader_disabled"
import cascader_size from "./codes/cascader_size"
import cascader_sep from "./codes/cascader_sep"
import cascader_trigger from "./codes/cascader_trigger"
import cascader_change from "./codes/cascader_change"
import cascader_control from "./codes/cascader_control"
import cascader_loading from "./codes/cascader_loading"

export const codes = {
    cascader_base,
    cascader_disabled,
    cascader_size,
    cascader_sep,
    cascader_trigger,
    cascader_change,
    cascader_control,
    cascader_loading,
};