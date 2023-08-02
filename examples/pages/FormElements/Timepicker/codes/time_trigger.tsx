export default `const [time, setTime] = createSignal('');

<Input type='time' value={[time, setTime]} trigger={() => {
    return <Button type='primary' >
        {time() ? dayjs(time()).format('HH:mm:ss') : '请选择时间'}
    </Button>
}}/>`