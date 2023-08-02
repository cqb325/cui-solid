export default `<Space dir="v">
    <Space dir="h" align="center">
        <Button type='primary' loading size='small'>Sphinx</Button>
        <Button type='success' loading size='small'></Button>
        <Button type='success' loading size='small' circle></Button>
    </Space>
    <Space dir="h">
        <Button type='primary' loading>Loading</Button>
        <Button type='primary' loading={loading()} onClick={() => {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
            }, 2500)
        }}>Click Load</Button>
    </Space>
</Space>`