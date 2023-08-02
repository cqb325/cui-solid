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
    {name: 'format', desc: '格式化同dayjs', type: 'string', default: ''},
    {name: 'theme', desc: '主题 light|dark', type: 'string', default: 'light'},
    {name: 'prepend', desc: '前缀', type: 'JSXElement', default: ''},
    {name: 'header', desc: '头部内容', type: 'JSXElement', default: ''},
    {name: 'footer', desc: '底部内容', type: 'JSXElement', default: ''},
    {name: 'seperator', desc: 'timeRange的分隔符', type: 'string', default: '~'},
    {name: 'transfer', desc: '下拉内容使用Portal渲染', type: 'boolean', default: ''},
    {name: 'disabledDate', desc: '禁用日期的回调函数，参数Date', type: 'Function', default: ''},
    {name: 'type', desc: '日期类型 支持 dateRange|monthRange|month|dateTime|dateTimeRange', type: 'string', default: 'date'},
    {name: 'trigger', desc: '触发内容', type: 'JSXElement', default: ''},
    {name: 'maxRange', desc: '日期范围可选最大跨度', type: 'number', default: ''},
    {name: 'shortCuts', desc: '快捷选择区域', type: 'Function|JSXElement', default: ''},
    {name: 'revers', desc: '超出后下拉是否翻转', type: 'boolean', default: 'true'},
    {name: 'stick', desc: 'daterange的月份是否粘连', type: 'boolean', default: ''},
    {name: 'onChange', desc: '值改变事件', type: 'Function', default: ''},
]


export const eventsData = [
    {name: 'onChange', desc: '值改变事件', params: 'checked,value'},
]

export const anchorData = [
    {id: 'date_base', text: '基础用法'},
    {id: 'date_disabled', text: '禁用'},
    {id: 'date_size', text: '尺寸'},
    {id: 'date_clearable', text: '可清空'},
    {id: 'date_custom_disable', text: '不可用日期'},
    {id: 'date_month', text: '月份'},
    {id: 'date_monthRange', text: '月份范围'},
    {id: 'date_align', text: '位置'},
    {id: 'date_dateRange', text: '日期范围'},
    {id: 'date_stick', text: '月份联动'},
    {id: 'date_shortcut', text: '快捷选择'},
    {id: 'date_dateTime', text: '日期时间'},
    {id: 'date_dateTimeRange', text: '日期时间范围'},
    {id: 'date_maxRange', text: '最大区间'},
    {id: 'comp_api', text: 'API'},
    {id: 'comp_props', text: '属性'},
    {id: 'comp_events', text: '事件'},
]

import date_base from "./codes/date_base"
import date_disabled from "./codes/date_disabled"
import date_size from "./codes/date_size"
import date_clearable from "./codes/date_clearable"
import date_custom_disable from "./codes/date_custom_disable"
import date_month from "./codes/date_month"
import date_monthRange from "./codes/date_monthRange"
import date_align from "./codes/date_align"
import date_dateRange from "./codes/date_dateRange"
import date_stick from "./codes/date_stick"
import date_shortcut from "./codes/date_shortcut"
import date_dateTime from "./codes/date_dateTime"
import date_dateTimeRange from "./codes/date_dateTimeRange"
import date_maxRange from "./codes/date_maxRange"
export const codes = {
    date_base,
    date_disabled,
    date_size,
    date_clearable,
    date_custom_disable,
    date_month,
    date_monthRange,
    date_align,
    date_dateRange,
    date_stick,
    date_shortcut,
    date_dateTime,
    date_dateTimeRange,
    date_maxRange,
}