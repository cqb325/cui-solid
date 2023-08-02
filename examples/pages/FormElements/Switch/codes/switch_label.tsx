export default `<Space dir="h">
    <Switch labels={['开', '关']}/>
    <Switch labels={['ON', 'OFF']} values={[1, 0]} onChange={(v: number) => {
        message.info({
            content: '值:' + v,
            duration: 1
        });
    }}/>
</Space>`