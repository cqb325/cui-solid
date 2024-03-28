/* eslint-disable camelcase */
export const propsData = [
    {name: 'classList', desc: '自定义class', type: 'Object', default: ''},
    {name: 'class', desc: '自定义class', type: 'string', default: ''},
    {name: 'style', desc: '自定义样式', type: 'Object', default: ''},
    {name: 'data', desc: '初始化数据', type: 'Object', default: ''},
    {name: 'onSubmit', desc: '表单提交事件', type: 'Function', default: ''},
]

export const usernamePropsData = [
    {name: 'label', desc: '表单项文案', type: 'string', default: ''},
    {name: 'size', desc: '尺寸 small|large', type: 'string', default: 'large'},
    {name: 'placeholder', desc: 'placeholder', type: 'string', default: '请输入用户名'},
    {name: 'name', desc: '表单项name', type: 'string', default: 'username'},
    {name: 'icon', desc: '图标', type: 'JSXElement', default: '<Icon name="user"/>'},
    {name: 'rules', desc: '验证规则', type: 'Object', default: ''},
    {name: 'messages', desc: '验证错误提示信息', type: 'Object', default: ''},
    {name: 'onInput', desc: '输入事件 value, event', type: 'Function', default: ''},
]

export const passwordPropsData = [
    {name: 'label', desc: '表单项文案', type: 'string', default: ''},
    {name: 'size', desc: '尺寸 small|large', type: 'string', default: 'large'},
    {name: 'placeholder', desc: 'placeholder', type: 'string', default: '请输入密码'},
    {name: 'name', desc: '表单项name', type: 'string', default: 'password'},
    {name: 'icon', desc: '图标', type: 'JSXElement', default: '<Icon name="lock"/>'},
    {name: 'rules', desc: '验证规则', type: 'Object', default: ''},
    {name: 'messages', desc: '验证错误提示信息', type: 'Object', default: ''},
    {name: 'onInput', desc: '输入事件 value, event', type: 'Function', default: ''},
]

export const captchaPropsData = [
    {name: 'label', desc: '表单项文案', type: 'string', default: ''},
    {name: 'size', desc: '尺寸 small|large', type: 'string', default: 'large'},
    {name: 'placeholder', desc: 'placeholder', type: 'string', default: '请输入密码'},
    {name: 'name', desc: '表单项name', type: 'string', default: 'password'},
    {name: 'icon', desc: '图标', type: 'JSXElement', default: '<Icon name="lock"/>'},
    {name: 'rules', desc: '验证规则', type: 'Object', default: ''},
    {name: 'messages', desc: '验证错误提示信息', type: 'Object', default: ''},
    {name: 'action', desc: '图形验证码获取地址', type: 'string', default: ''},
    {name: 'field', desc: '前提校验的字段名称', type: 'string', default: ''},
    {name: 'countDownNumber', desc: '倒计时初始数字', type: 'number', default: '60'},
    {name: 'onInput', desc: '输入事件 value, event', type: 'Function', default: ''},
    {name: 'onGetCaptcha', desc: '点击获取验证码事件', type: 'Function', default: ''},
]

export const eventsData = [
    {name: 'onSubmit', desc: '表单提交事件', params: 'valid, data'},
]

export const anchorData = [
    {id: 'login_base', text: '基础用法'},
    {id: 'login_get_captcha', text: '获取验证码'},
    {id: 'login_img_captcha', text: '图形验证码'},
    {id: 'login_init', text: '初始化'},
    {id: 'login_custom_rule', text: '自定义校验及组合'},
    {id: 'comp_api', text: 'API'},
    {id: 'comp_props', text: 'Login属性'},
    {id: 'comp_usernameprops', text: 'UserName属性'},
    {id: 'comp_passwordprops', text: 'Password属性'},
    {id: 'comp_captchaprops', text: 'Captcha属性'},
    {id: 'comp_events', text: '事件'},
]

import login_base from './codes/login_base';
import login_get_captcha from './codes/login_get_captcha';
import login_img_captcha from './codes/login_img_captcha';
import login_init from './codes/login_init';
import login_custom_rule from './codes/login_custom_rule';
export const codes = {
    login_base,
    login_get_captcha,
    login_img_captcha,
    login_init,
    login_custom_rule,
};
