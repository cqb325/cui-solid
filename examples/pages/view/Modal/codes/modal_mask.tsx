export default `const [visible8, setVisible8] = createSignal(false);
    
<Button type='primary' onClick={() => {
    setVisible8(true);
}}>打开</Button>
<Modal title='提示' mask={false} visible={[visible8, setVisible8]} fullScreen={fullScreen()}>
    <div>modal 内容</div>
    <div>modal 内容</div>
    <div>modal 内容</div>
    <div>modal 内容</div>
</Modal>}`;