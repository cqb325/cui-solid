export default `<div style={{height: '300px', border: '1px solid #ccc'}}>
    <Split dir='h' split={0.3}>
        <Slot name="prev"><div>TOP</div></Slot>
        <Slot name="next"><div>BOTTOM</div></Slot>
    </Split>
</div>`;