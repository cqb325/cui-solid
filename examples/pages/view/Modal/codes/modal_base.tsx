export default `const [visible, setVisible] = createSignal(false);

<Button type='primary' onClick={() => {
    setVisible(true);
}}>打开</Button>
<Modal title='提示' visible={[visible, setVisible]}>
    <div>modal 内容</div>
    <div>modal 内容</div>
    <div>modal 内容</div>
    <div>modal 内容</div>
</Modal>`;