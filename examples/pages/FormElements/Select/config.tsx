export const propsData = [
    {name: 'classList', desc: '自定义class', type: 'Object', default: ''},
    {name: 'class', desc: '自定义class', type: 'string', default: ''},
    {name: 'style', desc: '自定义样式', type: 'Object', default: ''},
    {name: 'name', desc: 'name属性', type: 'string', default: ''},
    {name: 'value', desc: '值，可控属性', type: 'Function[]', default: ''},
    {name: 'disabled', desc: '禁用', type: 'boolean', default: ''},
    {name: 'size', desc: '尺寸 small | large', type: 'string', default: ''},
    {name: 'clearable', desc: '可清空', type: 'boolean', default: ''},
    {name: 'placeholder', desc: 'placeholder', type: 'string', default: ''},
    {name: 'multi', desc: '多选', type: 'boolean', default: ''},
    {name: 'prefix', desc: '前缀', type: 'string|JSXElement', default: ''},
    {name: 'data', desc: '传入的数据', type: 'Array', default: ''},
    {name: 'textField', desc: '文案字段', type: 'string', default: 'label'},
    {name: 'valueField', desc: '值字段', type: 'string', default: 'value'},
    {name: 'filter', desc: '支持过滤', type: 'boolean', default: ''},
    {name: 'renderOption', desc: '自定义选项渲染', type: 'Function', default: ''},
    {name: 'emptyOption', desc: '空选项', type: 'string', default: ''},
    {name: 'showMax', desc: '多选场景下最多显示个数', type: 'number', default: ''},
    {name: 'valueClosable', desc: '值可关闭', type: 'boolean', default: ''},
    {name: 'transfer', desc: '下拉内容使用Portal渲染', type: 'boolean', default: ''},
    {name: 'align', desc: '下拉内容位置 bottomLeft|bottomRight', type: 'string', default: 'bottomLeft'},
    {name: 'showMore', desc: '多选设置showMax后是否在数字上显示更多', type: 'boolean', default: ''},
    {name: 'ref', desc: '组件引用', type: 'any', default: ''},
    {name: 'remoteMethod', desc: '远程过滤', type: 'Function', default: ''},
    {name: 'debounceTime', desc: '防抖时间', type: 'number', default: '300'},
    {name: 'loading', desc: '远程过滤的状态', type: 'Boolean', default: 'false'},
    {name: 'defaultLabel', desc: '远程过滤的默认label,配合默认value使用', type: 'string|string[]', default: ''},
    {name: 'onChange', desc: '值改变事件', type: 'Function', default: ''},
]

export const optionPropsData = [
    {name: 'disabled', desc: '禁用', type: 'boolean', default: ''},
    {name: 'label', desc: '显示内容', type: 'string', default: ''},
    {name: 'value', desc: '值', type: 'string', default: ''},
]


export const eventsData = [
    {name: 'onChange', desc: '值改变事件', params: 'checked,value'},
]

export const anchorData = [
    {id: 'select_base', text: '基础用法'},
    {id: 'select_disabled', text: '禁用'},
    {id: 'select_size', text: '尺寸'},
    {id: 'select_clearable', text: '可清空'},
    {id: 'select_multi', text: '多选'},
    {id: 'select_showmax', text: '显示个数'},
    {id: 'select_valueClosable', text: '值可关闭'},
    {id: 'select_group', text: '分组显示'},
    {id: 'select_filter', text: '过滤'},
    {id: 'select_remote', text: '远程过滤'},
    {id: 'select_default_labels', text: '远程默认值'},
    {id: 'select_renderOption', text: '自定义渲染'},
    {id: 'select_prefix', text: '前缀'},
    {id: 'select_emptyOption', text: '空选项'},
    {id: 'select_control', text: '可控'},
    {id: 'select_largelist', text: '超大列表'},
    {id: 'comp_api', text: 'API'},
    {id: 'comp_props', text: '属性'},
    {id: 'comp_group_props', text: '组合属性'},
    {id: 'comp_events', text: '事件'},
]

import select_base from "./codes/select_base"
import select_disabled from "./codes/select_disabled"
import select_size from "./codes/select_size"
import select_clearable from "./codes/select_clearable"
import select_multi from "./codes/select_multi"
import select_showmax from "./codes/select_showmax"
import select_valueClosable from "./codes/select_valueClosable"
import select_group from "./codes/select_group"
import select_filter from "./codes/select_filter"
import select_remote from "./codes/select_remote"
import select_default_labels from "./codes/select_default_labels"
import select_renderOption from "./codes/select_renderOption"
import select_prefix from "./codes/select_prefix"
import select_emptyOption from "./codes/select_emptyOption"
import select_control from "./codes/select_control"
import select_largelist from "./codes/select_largelist"
export const codes = {
    select_base,
    select_disabled,
    select_size,
    select_clearable,
    select_multi,
    select_showmax,
    select_valueClosable,
    select_group,
    select_filter,
    select_remote,
    select_default_labels,
    select_renderOption,
    select_prefix,
    select_emptyOption,
    select_control,
    select_largelist,
}