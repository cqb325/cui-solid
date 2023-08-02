export const propsData = [
    {name: 'classList', desc: '自定义class', type: 'Object', default: ''},
    {name: 'class', desc: '自定义class', type: 'string', default: ''},
    {name: 'style', desc: '自定义样式', type: 'Object', default: ''},
    {name: 'name', desc: 'input的name属性', type: 'string', default: ''},
    {name: 'disabled', desc: '禁用', type: 'boolean', default: ''},
    {name: 'size', desc: '尺寸大小,small|default|large', type: 'string', default: 'default'},
    {name: 'type', desc: '输入框的类型', type: 'string', default: 'text'},
    {name: 'append', desc: '后追加', type: 'JSXElement', default: ''},
    {name: 'prepend', desc: '前追加', type: 'JSXElement', default: ''},
    {name: 'prefix', desc: '前缀', type: 'JSXElement', default: ''},
    {name: 'suffix', desc: '后缀', type: 'JSXElement', default: ''},
    {name: 'suffixStyle', desc: '前缀样式', type: 'Object', default: ''},
    {name: 'prefixStyle', desc: '后缀样式', type: 'Object', default: ''},
    {name: 'clearable', desc: '是否可清空', type: 'boolean', default: ''},
    {name: 'trigger', desc: '值改变的触发事件', type: 'string', default: 'blur'},
    {name: 'notCreateFiled', desc: '非可控组件', type: 'boolean', default: 'false'},
    {name: 'value', desc: '值，可控属性', type: 'Function[]', default: ''},
    {name: 'autocomplete', desc: '自动填充选项', type: 'string', default: ''},
    {name: 'placeholder', desc: 'placeholder', type: 'string', default: ''},
    {name: 'onChange', desc: '值改变事件根据triggrt触发', type: 'Function', default: ''},
    {name: 'onEnter', desc: '回车按下事件', type: 'Function', default: ''},
    {name: 'onKeyDown', desc: '键盘按下事件', type: 'Function', default: ''},
    {name: 'onKeyUp', desc: '键盘弹起事件', type: 'Function', default: ''},
    {name: 'onInput', desc: '输入事件', type: 'Function', default: ''},
]


export const eventsData = [
    {name: 'onChange', desc: '值改变事件根据triggrt触发', params: 'value, Event'},
    {name: 'onEnter', desc: '回车按下事件', params: 'value'},
    {name: 'onKeyDown', desc: '键盘按下事件', params: 'Event'},
    {name: 'onKeyUp', desc: '键盘弹起事件', params: 'Event'},
    {name: 'onInput', desc: '输入事件', params: 'value, Event'},
]

export const anchorData = [
    {id: 'input_base', text: '基础用法'},
    {id: 'input_disabled', text: '禁用'},
    {id: 'input_placeholder', text: 'placeholder'},
    {id: 'input_clearable', text: '可清空'},
    {id: 'input_control', text: '可控'},
    {id: 'input_prefix', text: '前缀后缀'},
    {id: 'input_append', text: '追加'},
    {id: 'input_size', text: '尺寸'},
    {id: 'comp_api', text: 'API'},
    {id: 'comp_props', text: '属性'},
    {id: 'comp_events', text: '事件'},
]

import input_base from './codes/input_base';
import input_disabled from './codes/input_disabled';
import input_placeholder from './codes/input_placeholder';
import input_clearable from './codes/input_clearable';
import input_control from './codes/input_control';
import input_prefix from './codes/input_prefix';
import input_append from './codes/input_append';
import input_size from './codes/input_size';
export const codes = {
    input_base,
    input_disabled,
    input_placeholder,
    input_clearable,
    input_control,
    input_prefix,
    input_append,
    input_size,
};