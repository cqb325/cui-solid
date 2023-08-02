export default `<Space dir="v">
    <Steps current={current()}>
        <Steps.Step title='已完成'/>
        <Steps.Step title='进行中' status='process' icon={<Icon name='cog' size={26}/>}/>
        <Steps.Step title='错误' status="error"/>
        <Steps.Step title='告警' status="warning"/>
        <Steps.Step title='等待' status="wait" icon={<Icon name='lock' size={26}/>}/>
    </Steps>
</Space>
`