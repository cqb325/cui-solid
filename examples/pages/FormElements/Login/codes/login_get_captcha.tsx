export default `<div style={{width: '450px', margin: 'auto'}}>
    <Login onSubmit={(valid, {u, p}) => {
        console.log(valid, u, p);
    }}>
        <Mobile />
        <Captcha field="mobile" onGetCaptcha={() => {
            message.info('获取验证码');
        }}/>
        <Submit />
    </Login>
</div>`