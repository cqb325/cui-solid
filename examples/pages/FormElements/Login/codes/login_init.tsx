export default `<div style={{width: '450px', margin: 'auto'}}>
    <Login onSubmit={(valid, {u, p}) => {
        console.log(valid, u, p);
    }} data={{u: '1111', p: '111'}}>
        <UserName name='u'/>
        <Password name='p'/>
        <Submit />
    </Login>
</div>`