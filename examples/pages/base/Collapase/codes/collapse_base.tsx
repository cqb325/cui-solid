export default `const [open, setOpen] = createSignal(true);

<Button onClick={() => {
    setOpen(!open());
}} type='primary'>Toggle</Button>
<div>
    <Collapase open={open()}>
        <ul>
            <li>充分认识学习宣传贯彻党的二十大精神的重大意义。</li>
            <li>全面准确学习领会党的二十大精神。</li>
            <li>认真做好党的二十大精神的学习宣传。</li>
            <li>坚持知行合一，贯彻落实好党的二十大作出的重大决策部署。</li>
            <li>切实加强组织领导。</li>
        </ul>
    </Collapase>
</div>`