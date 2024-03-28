import { For } from "solid-js"
import { Anchor } from "@/components/Anchor"

export function CompAnchor (props: any) {
    const docH = document.documentElement.clientHeight;

    return <div class="sys-ctx-main-right">
        <div class="sys-anchor" style={{position: 'sticky', top: '64px', "font-size": '12px', padding: '16px', "border-radius": '4px'}}>
            <Anchor mode="history" bounds={200} showInk scrollOffset={(docH - 80) / 2}>
                <For each={props.data}>
                    {(item: any) => {
                        if (item.children) {
                            return <Anchor.Link href={'#'+item.id} title={item.text} />
                        } else {
                            return <Anchor.Link href={'#'+item.id} title={item.text}>
                                <For each={item.children}>
                                    {(subItem: any) => {
                                        return <Anchor.Link href={'#'+subItem.id} title={subItem.text} />
                                    }}
                                </For>
                            </Anchor.Link>
                        }
                    }}
                </For>
            </Anchor>
        </div>
    </div>
}
