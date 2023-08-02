export default `<Space dir="h">
    <Button onClick={() => {
        notice.info({
            title: '提示',
            content: '提示内容',
        });
    }}>消息</Button>
    <Button type='success' onClick={() => {
        notice.success({
            title: '提示',
            content: '成功信息',
        });
    }}>成功</Button>
    <Button type='warning' onClick={() => {
        notice.warning({
            title: '告警',
            content: '告警事件2023年3月24日11:40:29',
        });
    }}>告警</Button>
    <Button type='error' onClick={() => {
        notice.error({
            title: '错误',
            content: '事件提交失败',
        });
    }}>错误</Button>
    <Button type='default' onClick={() => {
        notice.help({
            title: '帮助',
            content: 'ls 命令',
        });
    }}>帮助</Button>
</Space>`