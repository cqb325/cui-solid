export default `const [strong, setStrong] = createSignal('强');
const [percent, setPercent] = createSignal(0);
const [color, setColor] = createSignal('');
const onChangePassword = (v: string) => {
    if (v.length < 6) {
        setStrong('太短');
        setColor('#ed4014');
    } else if (v.length < 10) {
        setStrong('中');
        setColor('#ff9900');
    } else {
        setStrong('强');
        setColor('#19be6b');
    }
    setPercent((v.length > 10 ? 10 : v.length) * 10)
}

<div style={{width: '450px', margin: 'auto'}}>
    <Login onSubmit={(valid, {u, p}) => {
        console.log(valid, u, p);
    }}>
        <Email />
        <Popover trigger="click" arrow theme="light" align="right" content={<div class="demo-register-tip" style={{width: '240px', "white-space": 'normal'}}>
            <div class="demo-register-tip-title">
                强度：{ strong() }
            </div>
            <Progress value={percent()} hidePercent strokeWidth={6} strokeColor={color()} />
            <div class="demo-register-tip-desc">
                请至少输入 6 个字符。请不要使用容易被猜到的密码。
            </div>
        </div>}>
            <Password name='password' rules={{pw: (v: string) => {
                if (v.length < 6) {
                    return false;
                }
                return true;
            }}} messages={{pw: '密码不能少于6位'}} onInput={(v) => {
                onChangePassword(v);
            }}/>
        </Popover>
        <Password name='confirmPassword' rules={{equalTo: 'password'}} messages={{equalTo: '密码不匹配'}} placeholder="请输入确认密码"/>
        <Submit />
    </Login>
</div>`