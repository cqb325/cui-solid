export default `const [visible2, setVisible2] = createSignal(false);
const [align, setAlign] = createSignal<'right'|'left'|'top'|'bottom'>('right');

<Drawer visible={[visible2, setVisible2]} title="侧边栏" align={align()}>
    content
</Drawer>
<Space dir="h">
    <RadioGroup stick value={[align, setAlign]} data={[{label: 'Left', value: 'left'}, {label: 'Top', value: 'top'}, {label: 'Right', value: 'right'}, {label: 'Bottom', value: 'bottom'}]} onChange={(v: any) => {
        setAlign(v);
    }}></RadioGroup>
    <Button type="primary" onClick={() => {
        setVisible2(true);
    }}>打开</Button>
</Space>`;