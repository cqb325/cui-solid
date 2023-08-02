export const propsData = [
    {name: 'classList', desc: '自定义class', type: 'Object', default: ''},
    {name: 'class', desc: '自定义class', type: 'string', default: ''},
    {name: 'style', desc: '自定义样式', type: 'Object', default: ''},
    {name: 'action', desc: '上传的地址', type: 'string', default: ''},
    {name: 'name', desc: 'name属性', type: 'string', default: ''},
    {name: 'multiple', desc: '是否支持多选文件', type: 'boolean', default: ''},
    {name: 'webkitdirectory', desc: '是否开启选择文件夹，部分浏览器适用', type: 'boolean', default: ''},
    {name: 'accept', desc: '接受上传的文件类型', type: 'string', default: ''},
    {name: 'beforeUpload', desc: '上传文件之前的钩子，参数为上传的文件，若返回 false 或者 Promise 则停止上传', type: 'Function', default: ''},
    {name: 'format', desc: '支持的文件类型，与 accept 不同的是，format 是识别文件的后缀名', type: 'string[]', default: ''},
    {name: 'maxSize', desc: '文件大小限制，单位b', type: 'Number', default: ''},
    {name: 'headers', desc: '设置上传的请求头部', type: 'Object', default: ''},
    {name: 'withCredentials', desc: '支持发送 cookie 凭证信息', type: 'boolean', default: ''},
    {name: 'data', desc: '上传时附带的额外参数', type: 'Object', default: ''},
    {name: 'defaultFileList', desc: '默认已上传的文件列表', type: 'Array', default: ''},
    {name: 'type', desc: '上传控件的类型， select|drag', type: 'string', default: 'select'},
    {name: 'paste', desc: '是否支持粘贴上传文件', type: 'boolean', default: ''},
    {name: 'ref', desc: '组件引用', type: 'any', default: ''},
    {name: 'listType', desc: '列表的类型 picture', type: 'boolean', default: ''},
    {name: 'onProgress', desc: '文件上传时的钩子，返回字段为 event, file, fileList', type: 'Function', default: ''},
    {name: 'onSuccess', desc: '文件上传成功时的钩子，返回字段为 response, file, fileList', type: 'Function', default: ''},
    {name: 'onError', desc: '文件上传失败时的钩子，返回字段为 error, file, fileList', type: 'Function', default: ''},
    {name: 'onRemove', desc: '文件列表移除文件时的钩子，返回字段为 file, fileList', type: 'Function', default: ''},
    {name: 'onPreview', desc: '点击已上传的文件链接时的钩子，返回字段为 file， 可以通过 file.response 拿到服务端返回数据', type: 'Function', default: ''},
    {name: 'onFormatError', desc: '文件格式验证失败时的钩子，返回字段为 file, fileList', type: 'Function', default: ''},
    {name: 'onExceededSize', desc: '文件超出指定大小限制时的钩子，返回字段为 file, fileList', type: 'Function', default: ''},
]


export const eventsData = [
    {name: 'onProgress', desc: '文件上传时的钩子', params: 'event, file, fileList'},
    {name: 'onSuccess', desc: '文件上传成功时的钩子', params: 'response, file, fileList'},
    {name: 'onError', desc: '文件上传失败时的钩子', params: 'error, file, fileList'},
    {name: 'onRemove', desc: '文件列表移除文件时的钩子', params: 'file, fileList'},
    {name: 'onPreview', desc: '点击已上传的文件链接时的钩子', params: 'file'},
    {name: 'onFormatError', desc: '文件格式验证失败时的钩子', params: 'file, fileList'},
    {name: 'onExceededSize', desc: '文件超出指定大小限制时的钩子', params: 'file, fileList'},
]

export const anchorData = [
    {id: 'upload_base', text: '基础用法'},
    {id: 'upload_defaultList', text: '默认列表'},
    {id: 'upload_drag', text: '拖拽'},
    {id: 'upload_pictures', text: '照片墙'},
    {id: 'upload_getList', text: '获取列表'},
    {id: 'comp_api', text: 'API'},
    {id: 'comp_props', text: '属性'},
    {id: 'comp_events', text: '事件'},
]


import upload_base from "./codes/upload_base"
import upload_defaultList from "./codes/upload_defaultList"
import upload_drag from "./codes/upload_drag"
import upload_pictures from "./codes/upload_pictures"
import upload_getList from "./codes/upload_getList"
export const codes = {
    upload_base,
    upload_defaultList,
    upload_drag,
    upload_pictures,
    upload_getList,
}