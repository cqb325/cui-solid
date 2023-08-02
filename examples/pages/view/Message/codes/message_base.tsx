export default `<Space dir='h'>
    <Button type='primary' onClick={() => {
        message.info('提示信息')
    }}>消息</Button>
    <Button type='primary' onClick={() => {
        message.success('登录成功')
    }}>成功</Button>
    <Button type='primary' onClick={() => {
        message.error('添加错误')
    }}>错误</Button>
    <Button type='primary' onClick={() => {
        message.warning('需要数字类型')
    }}>警告</Button>
</Space>`;