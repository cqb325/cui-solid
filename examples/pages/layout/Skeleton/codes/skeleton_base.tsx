export default `const [loading, setLoading] = createSignal(true)
const showContent = () => {
    setLoading(!loading());
}

<div>
    <Switch onChange={() => showContent()} />
    <span style={{ 'margin-left': '10px' }}>显示加载内容</span>
</div>
<br/>
<div>
    <Skeleton placeholder={<Skeleton.Avatar />} loading={loading()}>
        <Avatar style={{color: "blue", 'margin-bottom': '10px'}}>U</Avatar>
    </Skeleton>
    <br/>
    <Skeleton width="150px" height="150px" placeholder={<Skeleton.Image />} loading={loading()}>
        <Image
            src="https://cqb325.gitee.io/cui-solid-doc/logo.svg"
            width="150px"
            height="150px"
            alt="avatar"
        />
    </Skeleton>
    <br/>
    <Skeleton
        style={{ width: '80px' }}
        placeholder={<Skeleton.Title style={{ 'margin-bottom': '10px' }} />}
        loading={loading()}
    >
        <h4 style={{ 'margin-bottom': 0 }}>CUI/SolidJs</h4>
    </Skeleton>
    <br/>
    <Skeleton width="240px" placeholder={<Skeleton.Paragraph rows={2} />} loading={loading()}>
        <p style={{width: '240px'}}>精心打磨每一个组件的用户体验，从用户的角度考虑每个组件的使用场景。</p>
    </Skeleton>
    <br/>
    <Skeleton placeholder={<Skeleton.Button />} loading={loading()}>
        <Button>Button</Button>
    </Skeleton>
</div>`