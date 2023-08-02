export default `const [visible5, setVisible5] = createSignal(false);
    
<Button type='primary' onClick={() => {
    setVisible5(true);
}}>打开</Button>
<Modal title='提示' visible={[visible5, setVisible5]} loading onOk={() => {
    console.log('click ok');
    setTimeout(() => {
        setVisible5(false);
    }, 2000);
}}>
    <div>modal 内容</div>
    <div>modal 内容</div>
    <div>modal 内容</div>
    <div>modal 内容</div>
</Modal>}`;