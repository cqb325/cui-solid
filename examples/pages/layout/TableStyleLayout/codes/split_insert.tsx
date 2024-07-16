export default `<div style={{height: '300px', border: '1px solid #ccc'}}>
    <Split split={0.5}>
        <Slot name="prev">
            <Split dir='h' split={0.3}>
                <Slot name="prev"><div>TOP</div></Slot>
                <Slot name="next"><div>BOTTOM</div></Slot>
            </Split>
        </Slot>
        <Slot name="next"><div>Right</div></Slot>
    </Split>
</div>`;