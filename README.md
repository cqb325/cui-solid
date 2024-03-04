<p align="center">
    <a href="https://cqb325.gitee.io/cui-solid-doc">
        <img width="200" src="https://gitee.com/cqb325/cui-solid/raw/master/examples/assets/images/logo.svg">
    </a>
</p>

<h1>
CUI-SOLID
    <h3>An UI component library and front-end solution based on solidjs</h3>
</h1>

[![CUI SolidJS](https://img.shields.io/npm/v/cui-solid.svg?style=flat-square)](https://www.npmjs.org/package/cui-solid)
[![NPM downloads](https://img.shields.io/npm/dm/cui-solid.svg?style=flat-square)](https://npmjs.org/package/cui-solid)
[![NPM downloads](https://img.shields.io/npm/dt/cui-solid.svg?style=flat-square)](https://npmjs.org/package/cui-solid)
![JS gzip size](https://img.badgesize.io/https:/unpkg.com/cui-solid/dist/cui.min.esm.js?label=gzip%20size%3A%20JS&compression=gzip&style=flat-square)
![CSS gzip size](https://img.badgesize.io/https://unpkg.com/cui-solid/dist/styles/cui.css?compression=gzip&label=gzip%20size:%20CSS&style=flat-square)
## Docs
[documents on gitee](https://cqb325.gitee.io/cui-solid-doc "cui-solid-doc")

[documents on github](https://cqb325.github.io/cui-solid-doc "cui-solid-doc")

## Repository

[Gitee](https://gitee.com/cqb325/cui-solid "Gitee")

[Github](https://github.com/cqb325/cui-solid "Github")

## Other Packages

[solid-vue-router a router package by vue-router](https://gitee.com/cqb325/solid-vue-router "solid-vue-router")

[cui-pin a pin field input component](https://gitee.com/cqb325/cui-pin "cui-pin")

[cui-solid-draggable followed by react-draggable](https://gitee.com/cqb325/cui-solid-draggable "cui-solid-draggable")

## Install

    # npm
    npm install cui-solid
    # yarn
    yarn add cui-solid

## changeLog
    v0.1.34
    1、Select支持远程过滤和默认值
    2、badge添加offset属性
    3、popover支持confirm
    4、Tag默认无border添加border属性
    
    v0.1.33
    1、修复Modal溢出出现滚动条问题

    v0.1.32
    1、修改Upload clearFiles和手动clear的逻辑

    v0.1.31
    1、修复Notice 和 Messages 在Modal中被遮盖问题
    2、Upload添加自定义getFileUrl属性
    3、Modal添加hasCloseIcon属性

    v0.1.30
    1、修复Timepicker和DatePicker无法显示初始化值问题
    2、修复Month选择错误问题

    v0.1.29
    1、修复Modal实例方式调用增加dom的bug

    v0.1.28
    1、新增SideBySide组件

    v0.1.27
    1、修改menu dark模式下的style
    2、修复Drawer close mask 遮盖问题
    3、useTransition修复监听未注销问题
    4、修复Progress值溢出问题

    v0.1.26
    1、修改Exception减少打包尺寸
    2、Dropdown 定位和样式修改
    
    v0.1.25
    1、Pagination重构分页显示规则并添加mini型

    v0.1.24
    1、Pagination添加innerDisplayedPages属性

    v0.1.23
    1、List取消使用Slots
    
    v0.1.21
    1、新增Banner组件

    v0.1.16
    1、更新router依赖版本至v1.0.12
    
    v0.1.15
    1、修改popover采用useTransition
    
    v0.1.14
    1、修改anchor-link样式
    2、修改dropdown样式和动画采用useTransition
    3、添加Skeleton骨架屏组件

    v0.1.13
    1、添加IndexList索引列表组件
    2、添加WordCount数字统计组件
    3、添加PageFooter页脚组件

    v0.1.12
    1、Form 增加 checkField 单字段验证
    2、FormItem 增加 messages 字段， check函数参数由form.getFormData() 改为 form
    3、添加Login组件
    4、优化Progress样式
    5、update cui-virtual-list to v1.0.5

    v0.1.11
    1、Progress 新增圆形进度条
    2、更新solid-js 到最新1.7.8 typescript>=5.1.6

    v0.1.10
    1、添加Steps组件
    2、添加虚拟列表Demo

    v0.1.9
    1、添加Drawer组件
    2、优化一些响应性属性
    
    v0.1.8
    1、优化dark模式样式
    2、timeline优化
    3、fix：bugs

    v0.1.7 
    1、Select/Table support large data uses cui-virtaul-list