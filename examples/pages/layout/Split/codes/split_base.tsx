export default `<div style={{height: '300px', border: '1px solid #ccc'}}>
    <Split split="300px" max={500}>
        <Slot name="prev"><div>LEFT</div></Slot>
        <Slot name="next"><div>RIGHT</div></Slot>
    </Split>
</div>`;