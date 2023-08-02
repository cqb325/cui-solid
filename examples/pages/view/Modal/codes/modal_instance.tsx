export default `<Space dir="h">
    <Button type='primary' onClick={() => {
        modal.info({
            title: '信息',
            content: <div>信息</div>
        });
    }}>信息</Button>

    <Button type='success' onClick={() => {
        modal.success({
            title: '成功',
            content: <div>成功</div>
        });
    }}>成功</Button>

    <Button type='warning' onClick={() => {
        modal.warning({
            title: '警告',
            content: <div>警告</div>
        });
    }}>警告</Button>

    <Button type='error' onClick={() => {
        modal.error({
            title: '错误',
            content: <div>错误提示</div>
        });
    }}>错误</Button>

    <Button type='error' onClick={() => {
        modal.confirm({
            title: '提示',
            content: <div>确认信息</div>
        });
    }}>确认</Button>
</Space>}`;