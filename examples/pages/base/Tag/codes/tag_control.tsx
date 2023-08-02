export default `const [visible, setVisible] = createSignal(true);

<Space dir="h">
    <Tag theme='primary' closable visible={[visible, setVisible]}>标签一</Tag>
    <Button size='small' onClick={() => {
        setVisible(!visible());
    }}>关闭/显示</Button>
</Space>`;