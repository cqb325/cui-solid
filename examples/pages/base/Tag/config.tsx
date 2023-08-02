export const propsData = [
    {name: 'style', desc: '自定义样式', type: 'Object', default: ''},
    {name: 'theme', desc: '内置样式primary|danger|warning|success|info|magenta|red|volcano|orange|gold|yellow|lime|green|cyan|blue|geekblue|purple', type: 'string', default: 'default'},
    {name: 'value', desc: '数值', type: 'number', default: ''},
    {name: 'circle', desc: '圆角标签', type: 'boolean', default: ''},
    {name: 'size', desc: '标签尺寸small|large', type: 'string', default: ''},
    {name: 'avatar', desc: '头像', type: 'Avatar', default: ''},
    {name: 'closable', desc: '可关闭标签', type: 'boolean', default: ''},
    {name: 'visible', desc: '可见性绑定属性', type: 'Function[]', default: ''},
    {name: 'onBeforeClose', desc: '关闭标签前置回调', type: 'Function', default: ''},
    {name: 'onClose', desc: '关闭标签回调', type: 'Function', default: ''},
]


export const eventsData = [
    {name: 'onBeforeClose', desc: '关闭标签前置回调', params: 'Event'},
    {name: 'onClose', desc: '关闭标签回调', params: 'Event'}
]

export const anchorData = [
    {id: 'tag_base', text: '基础用法'},
    {id: 'tag_type', text: '标签类型'},
    {id: 'tag_theme', text: '内置样式'},
    {id: 'tag_closeable', text: '可关闭'},
    {id: 'tag_size', text: '尺寸'},
    {id: 'tag_control', text: '可控'},
    {id: 'tag_group', text: '标签组'},
    {id: 'comp_api', text: 'API'},
    {id: 'comp_props', text: '属性'},
    {id: 'comp_events', text: '事件'},
]

import tag_base from "./codes/tag_base"
import tag_type from "./codes/tag_type"
import tag_theme from "./codes/tag_theme"
import tag_closeable from "./codes/tag_closeable"
import tag_size from "./codes/tag_size"
import tag_control from "./codes/tag_control"
import tag_group from "./codes/tag_group"
export const codes = {
    tag_base,
    tag_type,
    tag_theme,
    tag_closeable,
    tag_size,
    tag_control,
    tag_group
}