export default `<Space dir="h">
    <Button onClick={() => {
        notice.info({
            title: '提示',
            content: '提示内容',
            dock: 'bottomRight'
        });
    }}>右下角</Button>

    <Button onClick={() => {
        notice.info({
            title: '提示',
            content: '提示内容',
            dock: 'topLeft'
        });
    }}>左上角</Button>

    <Button onClick={() => {
        notice.info({
            title: '提示',
            content: '提示内容',
            dock: 'bottomLeft'
        });
    }}>左下角</Button>
</Space>`