export default `const [visible3, setVisible3] = createSignal(false);

<Drawer visible={[visible3, setVisible3]} title="侧边栏" size={500}>
    content
</Drawer>
<Button type="primary" onClick={() => {
    setVisible3(true);
}}>打开</Button>`;