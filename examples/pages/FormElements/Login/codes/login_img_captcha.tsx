export default `<div style={{width: '450px', margin: 'auto'}}>
    <Login onSubmit={(valid, {u, p}) => {
        console.log(valid, u, p);
    }}>
        <UserName name='username'/>
        <Password name='password'/>
        <Captcha action="https://zitie.cqb325.cn/cui/manager/user/captchaGet"/>
        <Submit />
    </Login>
</div>`