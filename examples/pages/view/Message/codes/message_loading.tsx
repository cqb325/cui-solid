export default `<Space dir='h'>
    <Button type='primary' onClick={() => {
        const key = createUniqueId();
        message.info({
            key,
            content: 'Loading...',
            background: true,
            loading: true,
            duration: 0
        })

        setTimeout(() => {
            message.close(key);
        }, 4000)
    }}>加载</Button>
</Space>`;