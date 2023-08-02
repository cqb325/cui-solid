export default `const [visible7, setVisible7] = createSignal(false);
    
<Button type='primary' onClick={() => {
    setVisible7(true);
}}>打开</Button>
<Modal title='提示' resetPostion visible={[visible7, setVisible7]} fullScreen={fullScreen()}>
    <div>modal 内容</div>
    <div>modal 内容</div>
    <div>modal 内容</div>
    <div>modal 内容</div>
</Modal>}`;