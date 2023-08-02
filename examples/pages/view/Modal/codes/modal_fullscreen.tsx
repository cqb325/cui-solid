export default `const [visible6, setVisible6] = createSignal(false);
const [fullScreen, setFullScreen] = createSignal(false);
    
<Button type='primary' onClick={() => {
    setVisible6(true);
}}>打开</Button>
<Modal title='提示' resetPostion visible={[visible6, setVisible6]} fullScreen={fullScreen()}>
    <div><Button onClick={() => {
        setFullScreen(!fullScreen());
    }}>全屏</Button></div>
    <div>modal 内容</div>
    <div>modal 内容</div>
    <div>modal 内容</div>
    <div>modal 内容</div>
</Modal>}`;