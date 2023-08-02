export default `const [visible9, setVisible9] = createSignal(false);
    
<Button type='primary' onClick={() => {
    setVisible9(true);
}}>打开</Button>
<Modal title='提示' maskClosable={false} visible={[visible9, setVisible9]} fullScreen={fullScreen()}>
    <div>modal 内容</div>
    <div>modal 内容</div>
    <div>modal 内容</div>
    <div>modal 内容</div>
</Modal>}`;