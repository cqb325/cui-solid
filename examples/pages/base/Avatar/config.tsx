export const propsData = [
    {name: 'classList', desc: '自定义class', type: 'Object', default: ''},
    {name: 'class', desc: '自定义class', type: 'string', default: ''},
    {name: 'style', desc: '自定义样式', type: 'Object', default: ''},
    {name: 'size', desc: '头像大小,small|large|数字', type: 'number|string', default: ''},
    {name: 'icon', desc: '图标', type: 'Icon', default: ''},
    {name: 'src', desc: '图片地址', type: 'string', default: ''},
    {name: 'shape', desc: '头像形状,circle|square', type: 'string', default: 'circle'},
    {name: 'hoverMask', desc: '鼠标进入后的遮罩', type: 'JSXElement', default: ''},
    {name: 'onClick', desc: '点击回调函数', type: 'Function', default: ''},
    {name: 'onMouseEnter', desc: '鼠标进入回调函数', type: 'Function', default: ''},
    {name: 'onMouseLeave', desc: '鼠标离开回调函数', type: 'Function', default: ''},
]


export const anchorData = [
    {id: 'avatar_base', text: '头像尺寸'},
    {id: 'avatar_shape', text: '形状'},
    {id: 'avatar_type', text: '类型'},
    {id: 'avatar_hover', text: '遮罩'},
    {id: 'comp_api', text: 'API'},
    {id: 'comp_props', text: '头像属性'},
    {id: 'comp_events', text: '事件'},
]

export const eventsData = [
    {name: 'onClick', desc: '点击事件', params: 'Event'},
    {name: 'onMouseEnter', desc: '鼠标进入回调函数', params: 'Event'},
    {name: 'onMouseLeave', desc: '鼠标离开回调函数', params: 'Event'}
]

import avatar_base from "./codes/avatar_base"
import avatar_shape from "./codes/avatar_shape"
import avatar_type from "./codes/avatar_type"
import avatar_hover from "./codes/avatar_hover"

export const codes = {
    avatar_base,
    avatar_shape,
    avatar_type,
    avatar_hover
}