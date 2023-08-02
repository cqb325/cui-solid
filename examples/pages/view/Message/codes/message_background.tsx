export default `<Space dir='h'>
    <Button type='primary' onClick={() => {
        message.info({
            content: '提示信息',
            background: true
        })
    }}>消息</Button>
    <Button type='primary' onClick={() => {
        message.success({
            content: '登录成功',
            background: true
        })
    }}>成功</Button>
    <Button type='primary' onClick={() => {
        message.error({
            content: '添加错误',
            background: true,
        })
    }}>错误</Button>
    <Button type='primary' onClick={() => {
        message.warning({
            content: '需要数字类型',
            background: true,
        })
    }}>警告</Button>
</Space>`;