export default `const [visible2, setVisible2] = createSignal(false);

<Button type='primary' onClick={() => {
    setVisible2(true);
}}>打开</Button>
<Modal disabled title='提示' visible={[visible2, setVisible2]}>
    <div>modal 内容</div>
    <div>modal 内容</div>
    <div>modal 内容</div>
    <div>modal 内容</div>
</Modal>`;