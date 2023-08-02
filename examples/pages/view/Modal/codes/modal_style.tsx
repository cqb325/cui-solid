export default `const [visible3, setVisible3] = createSignal(false);
    
<Button type='primary' onClick={() => {
    setVisible3(true);
}}>打开</Button>
<Modal title='提示' visible={[visible3, setVisible3]} defaultPosition={{top: '200px'}}>
    <div>modal 内容</div>
    <div>modal 内容</div>
    <div>modal 内容</div>
    <div>modal 内容</div>
</Modal>`;