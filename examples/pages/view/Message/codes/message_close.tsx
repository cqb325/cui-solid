export default `<Space dir='h'>
    <Button type='primary' onClick={() => {
        message.info({
            content: '可关闭message',
            background: true,
            closeable: true,
            duration: 0
        })
    }}>可关闭</Button>
</Space>`;