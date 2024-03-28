/* eslint-disable camelcase */
export const propsData = [
    {name: 'style', desc: '自定义样式', type: 'Object', default: ''},
    {name: 'classList', desc: '自定义Class', type: 'Object', default: ''},
    {name: 'class', desc: '自定义Class', type: 'string', default: ''},
    {name: 'failInfo', desc: '失败显示信息', type: 'JSXElement', default: ''},
    {name: 'preview', desc: '打开预览功能', type: 'boolean', default: ''},
    {name: 'previewTip', desc: '预览的提示文案', type: 'string', default: '预览'},
    {name: 'previewList', desc: '预览图片列表', type: 'String[]', default: ''},
    {name: 'fit', desc: '图片fit fill|contain|cover|none|scale-down', type: 'string', default: ''},
    {name: 'alt', desc: '图片alt', type: 'string', default: ''},
    {name: 'src', desc: '图片地址', type: 'string', default: ''},
    {name: 'lazy', desc: '懒加载', type: 'boolean', default: ''},
    {name: 'referrerPolicy', desc: '图片引用策略', type: 'string', default: ''},
    {name: 'scrollContainer', desc: '懒加载滚动的容器', type: 'string | HTMLElement', default: ''},
    {name: 'placeholder', desc: '占位', type: 'string| JSXElement', default: ''},
    {name: 'width', desc: '宽度', type: 'number | string', default: ''},
    {name: 'height', desc: '高度', type: 'number | string', default: ''},
    {name: 'infinite', desc: '预览的是否连续', type: 'boolean', default: 'true'},
    {name: 'maskClosable', desc: '点击遮罩进行关闭', type: 'boolean', default: ''},
    {name: 'previewIndex', desc: '预览默认索引', type: 'number', default: '0'},
    {name: 'onLoad', desc: '图片加载完成事件', type: 'Function', default: ''},
    {name: 'onError', desc: '图片加载失败事件', type: 'Function', default: ''},
    {name: 'onClose', desc: '预览关闭事件', type: 'Function', default: ''},
    {name: 'onSwitch', desc: '预览图片切换事件', type: 'Function', default: ''},
]

export const previewData = [
    {name: 'style', desc: '自定义样式', type: 'Object', default: ''},
    {name: 'classList', desc: '自定义Class', type: 'Object', default: ''},
    {name: 'class', desc: '自定义Class', type: 'string', default: ''},
    {name: 'failInfo', desc: '失败显示信息', type: 'JSXElement', default: ''},
    {name: 'previewList', desc: '预览图片列表', type: 'String[]', default: ''},
    {name: 'infinite', desc: '预览的是否连续', type: 'boolean', default: 'true'},
    {name: 'visible', desc: '预览控制显示', type: 'Function[]', default: ''},
    {name: 'initIndex', desc: '预览默认索引', type: 'number', default: '0'},
    {name: 'maskClosable', desc: '点击遮罩进行关闭', type: 'boolean', default: ''},
    {name: 'onClose', desc: '预览关闭事件', type: 'Function', default: ''},
    {name: 'onSwitch', desc: '预览图片切换事件', type: 'Function', default: ''},
]


export const eventsData = [
    {name: 'onLoad', desc: '图片加载完成事件', params: 'node'},
    {name: 'onError', desc: '图片加载失败事件', params: 'value'},
    {name: 'onClose', desc: '预览关闭事件', params: 'node'},
    {name: 'onSwitch', desc: '预览图片切换事件', params: 'name'},
]


export const previewEventsData = [
    {name: 'onClose', desc: '预览关闭事件', params: 'node'},
    {name: 'onSwitch', desc: '预览图片切换事件', params: 'name'},
]

export const anchorData = [
    {id: 'image_base', text: '基础用法'},
    {id: 'image_placeholder', text: '占位'},
    {id: 'image_error', text: '失败'},
    {id: 'image_lazy', text: '懒加载'},
    {id: 'image_preview', text: '预览'},
    {id: 'image_image_preview', text: '单独使用'},
    {id: 'comp_api', text: 'API'},
    {id: 'comp_props', text: '属性'},
    {id: 'comp_previewprops', text: '预览属性'},
    {id: 'comp_events', text: '事件'},
    {id: 'comp_previewevents', text: '预览事件'},
]

import image_base from "./codes/image_base"
import image_placeholder from "./codes/image_placeholder"
import image_error from "./codes/image_error"
import image_lazy from "./codes/image_lazy"
import image_preview from "./codes/image_preview"
import image_image_preview from "./codes/image_image_preview"

export const codes = {
    image_base,
    image_placeholder,
    image_error,
    image_lazy,
    image_preview,
    image_image_preview,
}
