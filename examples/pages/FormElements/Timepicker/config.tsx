export const propsData = [
    {name: 'classList', desc: '自定义class', type: 'Object', default: ''},
    {name: 'class', desc: '自定义class', type: 'string', default: ''},
    {name: 'style', desc: '自定义样式', type: 'Object', default: ''},
    {name: 'name', desc: 'name属性', type: 'string', default: ''},
    {name: 'value', desc: '值，可控属性', type: 'Function[]', default: ''},
    {name: 'disabled', desc: '禁用', type: 'boolean', default: ''},
    {name: 'size', desc: '尺寸 small | large', type: 'string', default: ''},
    {name: 'clearable', desc: '可清空', type: 'boolean', default: ''},
    {name: 'align', desc: '下拉位置bottomLeft|bottomRight', type: 'string', default: 'bottomRight'},
    {name: 'format', desc: '时间格式化同dayjs', type: 'string', default: ''},
    {name: 'prepend', desc: '前缀', type: 'JSXElement', default: ''},
    {name: 'disabledTime', desc: '禁用时间的回调函数，参数number和type', type: 'Function', default: ''},
    {name: 'hourStep', desc: '小时步长', type: 'number', default: '1'},
    {name: 'minuteStep', desc: '分钟步长', type: 'number', default: '1'},
    {name: 'secondStep', desc: '分钟步长', type: 'number', default: '1'},
    {name: 'header', desc: '头部内容', type: 'JSXElement', default: ''},
    {name: 'footer', desc: '底部内容', type: 'JSXElement', default: ''},
    {name: 'seperator', desc: 'timeRange的分隔符', type: 'string', default: '~'},
    {name: 'transfer', desc: '下拉内容使用Portal渲染', type: 'boolean', default: ''},
    {name: 'placeholder', desc: 'placeholder', type: 'string', default: ''},
    {name: 'onChange', desc: '值改变事件', type: 'Function', default: ''},
    {name: 'theme', desc: '主题 light|dark', type: 'string', default: 'light'},
]


export const eventsData = [
    {name: 'onChange', desc: '值改变事件', params: 'checked,value'},
]

export const anchorData = [
    {id: 'time_base', text: '基础用法'},
    {id: 'time_disabled', text: '禁用'},
    {id: 'time_size', text: '尺寸'},
    {id: 'time_clearable', text: '可清空'},
    {id: 'time_format', text: '格式化'},
    {id: 'time_step', text: '步长'},
    {id: 'time_head', text: '头部底部'},
    {id: 'time_disable_time', text: '不可用时间'},
    {id: 'time_range', text: '时间范围'},
    {id: 'time_trigger', text: '触发元素'},
    {id: 'comp_api', text: 'API'},
    {id: 'comp_props', text: '属性'},
    {id: 'comp_events', text: '事件'},
]


import time_base from "./codes/time_base"
import time_disabled from "./codes/time_disabled"
import time_size from "./codes/time_size"
import time_clearable from "./codes/time_clearable"
import time_format from "./codes/time_format"
import time_step from "./codes/time_step"
import time_head from "./codes/time_head"
import time_disable_time from "./codes/time_disable_time"
import time_range from "./codes/time_range"
import time_trigger from "./codes/time_trigger"
export const codes = {
    time_base,
    time_disabled,
    time_size,
    time_clearable,
    time_format,
    time_step,
    time_head,
    time_disable_time,
    time_range,
    time_trigger,
}