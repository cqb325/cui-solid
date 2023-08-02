export default `const [visible, setVisible] = createSignal(false);

<Drawer visible={[visible, setVisible]} title="侧边栏">
    content
</Drawer>
<Button type="primary" onClick={() => {
    setVisible(true);
}}>打开</Button>`;