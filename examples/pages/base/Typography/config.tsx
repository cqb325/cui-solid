/* eslint-disable camelcase */
export const propsData = [
    {name: 'classList', desc: '自定义class', type: 'Object', default: ''},
    {name: 'class', desc: '自定义class', type: 'string', default: ''},
    {name: 'style', desc: '自定义样式', type: 'Object', default: ''},
    {name: 'type', desc: '文本类型', type: 'default|secondary|warning|error|success|primary', default: 'default'},
    {name: 'disabled', desc: '禁用状态', type: 'boolean', default: ''},
    {name: 'link', desc: '链接地址', type: 'string', default: ''},
    {name: 'icon', desc: '图标', type: 'Icon', default: ''},
    {name: 'mark', desc: '标记类型', type: 'boolean', default: ''},
    {name: 'code', desc: '代码样式', type: 'boolean', default: ''},
    {name: 'underline', desc: '下划线文本', type: 'boolean', default: ''},
    {name: 'deleted', desc: '删除样式文本', type: 'boolean', default: ''},
    {name: 'strong', desc: '加粗文本', type: 'boolean', default: ''},
    {name: 'size', desc: '文本大小', type: 'small|default|large', default: 'default'},
]

export const titlePropsData = [
    {name: 'classList', desc: '自定义class', type: 'Object', default: ''},
    {name: 'class', desc: '自定义class', type: 'string', default: ''},
    {name: 'style', desc: '自定义样式', type: 'Object', default: ''},
    {name: 'type', desc: '文本类型', type: 'default|secondary|warning|error|success|primary', default: 'default'},
    {name: 'heading', desc: '标题等级1|2|3|4|5|6', type: 'number', default: '1'},
]

export const paragraphPropsData = [
    {name: 'classList', desc: '自定义class', type: 'Object', default: ''},
    {name: 'class', desc: '自定义class', type: 'string', default: ''},
    {name: 'style', desc: '自定义样式', type: 'Object', default: ''},
    {name: 'size', desc: '文本大小', type: 'small|default|large', default: 'default'},
    {name: 'spacing', desc: '间距 可选extended', type: 'string', default: ''},
    {name: 'copyable', desc: '可拷贝', type: 'boolean', default: ''},
    {name: 'copyText', desc: '自定义拷贝内容', type: 'string', default: ''},
    {name: 'onCopy', desc: '拷贝回调函数', type: 'Function', default: ''},
]

export const eventsData = [
    {name: 'onCopy', desc: '拷贝事件', params: ''}
]

export const anchorData = [
    {id: 'typography_title', text: '标题'},
    {id: 'typography_text', text: '内置文本'},
    {id: 'typography_copy', text: '可拷贝'},
    {id: 'typography_spacing', text: '行距'},
    {id: 'comp_api', text: 'API'},
    {id: 'comp_props', text: '文本属性'},
    {id: 'title_props', text: '标题属性'},
    {id: 'paragraph_props', text: '段落属性'},
    {id: 'paragraph_events', text: '段落事件'},
]

import typography_copy from "./codes/typography_copy"
import typography_title from "./codes/typography_title"
import typography_text from "./codes/typography_text"
import typography_spacing from "./codes/typography_spacing"
export const codes = {
    typography_copy,
    typography_title,
    typography_text,
    typography_spacing
}
