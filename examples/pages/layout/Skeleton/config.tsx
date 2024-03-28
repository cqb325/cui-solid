/* eslint-disable camelcase */
export const propsData = [
    {name: 'style', desc: '自定义样式', type: 'Object', default: ''},
    {name: 'classList', desc: '自定义class', type: 'Object', default: ''},
    {name: 'class', desc: '自定义class', type: 'string', default: ''},
    {name: 'active', desc: '动画效果', type: 'boolean', default: ''},
    {name: 'loading', desc: '加载中', type: 'boolean', default: ''},
    {name: 'placeholder', desc: '骨架屏内容', type: 'JSXElement', default: ''},
    {name: 'width', desc: '宽度', type: 'string', default: ''},
    {name: 'height', desc: '高度', type: 'string', default: ''},
]

export const itemPropsData = [
    {name: 'style', desc: '自定义样式', type: 'Object', default: ''},
    {name: 'classList', desc: '自定义class', type: 'Object', default: ''},
    {name: 'class', desc: '自定义class', type: 'string', default: ''},
    {name: 'inline', desc: '内联项', type: 'boolean', default: ''},
    {name: 'width', desc: '宽度', type: 'string', default: ''},
    {name: 'height', desc: '高度', type: 'string', default: ''},
]

export const avatarPropsData = [
    {name: 'style', desc: '自定义样式', type: 'Object', default: ''},
    {name: 'classList', desc: '自定义class', type: 'Object', default: ''},
    {name: 'class', desc: '自定义class', type: 'string', default: ''},
    {name: 'inline', desc: '内联项', type: 'boolean', default: ''},
    {name: 'width', desc: '宽度', type: 'string', default: ''},
    {name: 'height', desc: '高度', type: 'string', default: ''},
    {name: 'size', desc: '大小尺寸 extra-small|small|medium|large|extra-large|number', type: 'string|number', default: 'medium'},
    {name: 'shape', desc: '形状', type: 'circle|square', default: 'circle'},
]

export const paragraphPropsData = [
    {name: 'style', desc: '自定义样式', type: 'Object', default: ''},
    {name: 'classList', desc: '自定义class', type: 'Object', default: ''},
    {name: 'class', desc: '自定义class', type: 'string', default: ''},
    {name: 'inline', desc: '内联项', type: 'boolean', default: ''},
    {name: 'width', desc: 'string类型为容器宽度，数组为子元素对应行的宽度', type: 'string|string[]', default: ''},
    {name: 'height', desc: '高度', type: 'string', default: ''},
    {name: 'rows', desc: '行数', type: 'number', default: '4'},
]

export const eventsData = [

]

export const anchorData = [
    {id: 'skeleton_base', text: '基础用法'},
    {id: 'skeleton_img', text: '图形'},
    {id: 'skeleton_combine', text: '组合'},
    {id: 'skeleton_active', text: '动画'},
    {id: 'comp_api', text: 'API'},
    {id: 'comp_props', text: 'Skeleton属性'},
    {id: 'comp_item_props', text: 'Item属性'},
    {id: 'comp_avatar_props', text: 'Avatar属性'},
    {id: 'comp_paragraph_props', text: 'Paragraph属性'},
]

import skeleton_base from "./codes/skeleton_base"
import skeleton_img from "./codes/skeleton_img"
import skeleton_combine from "./codes/skeleton_combine"
import skeleton_active from "./codes/skeleton_active"

export const codes = {
    skeleton_base,
    skeleton_img,
    skeleton_combine,
    skeleton_active,
}
