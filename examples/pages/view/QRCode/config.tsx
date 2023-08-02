export const propsData = [
    {name: 'style', desc: '自定义样式', type: 'Object', default: ''},
    {name: 'classList', desc: '自定义Class', type: 'Object', default: ''},
    {name: 'class', desc: '自定义Class', type: 'string', default: ''},
    {name: 'level', desc: '二维码纠错等级 L | M | Q | H', type: 'string', default: ''},
    {name: 'value', desc: '扫描后的文本', type: 'string', default: ''},
    {name: 'size', desc: '二维码大小', type: 'number', default: '128'},
    {name: 'color', desc: '二维码颜色', type: 'string', default: '#000'},
    {name: 'bgColor', desc: '二维码背景颜色', type: 'string', default: '#fff'},
    {name: 'icon', desc: '二维码图标', type: 'string', default: ''},
    {name: 'title', desc: '二维码标题', type: 'string', default: ''},
]


export const anchorData = [
    {id: 'qrcode_base', text: '基础用法'},
    {id: 'qrcode_img', text: '带图标'},
    {id: 'qrcode_color', text: '自定义颜色'},
    {id: 'qrcode_level', text: '自定义颜色'},
    {id: 'qrcode_download', text: '下载'},
    {id: 'comp_api', text: 'API'},
    {id: 'comp_props', text: '属性'},
]

import qrcode_base from "./codes/qrcode_base"
import qrcode_img from "./codes/qrcode_img"
import qrcode_color from "./codes/qrcode_color"
import qrcode_level from "./codes/qrcode_level"
import qrcode_download from "./codes/qrcode_download"

export const codes = {
    qrcode_base,
    qrcode_img,
    qrcode_color,
    qrcode_level,
    qrcode_download,
}