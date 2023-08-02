export default `const [value2, setValue2] = createSignal(20);

<Space dir="h" inline>
    <Progress type='circle' value={value2()}/>
    </Space>
    <Space dir="h">
    <Button type='primary' icon={<Icon name='plus'/>} onClick={() => {
        setValue2(value2() + 5);
    }}></Button>
    <Button type='primary' icon={<Icon name='minus'/>} onClick={() => {
        setValue2(value2() - 5);
    }}></Button>
</Space>`