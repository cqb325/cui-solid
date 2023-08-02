export default `const [visible4, setVisible4] = createSignal(false);

<Button type='primary' onClick={() => {
    setVisible4(true);
}}>打开</Button>
<Modal title='提示' visible={[visible4, setVisible4]} footer={false}>
    <div>modal 内容</div>
    <div>modal 内容</div>
    <div>modal 内容</div>
    <div>modal 内容</div>
</Modal>}`;