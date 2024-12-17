import { useSwipe } from "@/components/utils/useSwipe";
import { createSignal, onMount } from "solid-js";

export default function useSwipePage (props: any) {
    let handler: any;
    const [left, setLeft] = createSignal(0);
    const [current, setCurrent] = createSignal(0);
    let swipe: any;
    onMount(() => {
        swipe = useSwipe(handler, {
            onSwipe: () => {
                setLeft(current() * - 500 - swipe.distanceX());
            },
            onSwipeEnd: (e, diraction, duration) => {
                if (duration && duration > 500) {
                    setLeft(current() * -500);
                    return;
                }
                if (swipe.distanceX() > 0) {
                    setCurrent((current() + 1) % 3);
                    setLeft(current() * -500);
                } else {
                    setCurrent((current() - 1 + 3) % 3);
                    setLeft(current() * -500);
                }
            },
            onSwipeStart: () => {
                // setLeft(swipe.distanceX());
            },
            threshold: 10
        });
    })
    return <div>
        <div style={{"width": "500px","height": "500px","background": "#ccc","margin": "0 auto", "position": "relative", "overflow": 'hidden'}}>
            <div ref={handler} style={{"width": "1500px","height": "100%", display: "flex", "flex-direction": "row",
                "position": "absolute","left": left() + 'px',"top": "0", "transition": swipe?.isSwiping() ? "none" : "all 0.3s"}} >
                <div style={{"background": "#f00","width": "500px","height": "100%"}} />
                <div style={{"background": "#700","width": "500px","height": "100%"}} />
                <div style={{"background": "#000","width": "500px","height": "100%"}} />
            </div>
        </div>
    </div>
}
