export default `<div style={{width: '450px', margin: 'auto'}}>
    <Login onSubmit={(valid, {u, p}) => {
        console.log(valid, u, p);
    }}>
        <UserName name='u'/>
        <Password name='p'/>
        <Submit />
    </Login>
</div>`