export default `<Input type='switch' onChange={(v: boolean) => {
    message.info({
        content: '状态改变:' + v,
        duration: 1
    });
}}/>`