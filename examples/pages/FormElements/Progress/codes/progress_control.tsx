export default `const [value, setValue] = createSignal(0);

<Space dir="v">
    <Progress value={value()} />
    <Space dir="h">
        <Button type='primary' icon={<Icon name='plus'/>} onClick={() => {
            setValue(value() + 1);
        }}></Button>
        <Button type='primary' icon={<Icon name='minus'/>} onClick={() => {
            setValue(value() - 1);
        }}></Button>
    </Space>
</Space>`