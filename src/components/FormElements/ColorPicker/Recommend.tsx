import type { Accessor} from "solid-js";
import { For, Show } from "solid-js";

export function Recommend (props: any) {
    const colors = props.colors ?? [
        '#2d8cf0',
        '#19be6b',
        '#ff9900',
        '#ed4014',
        '#00b5ff',
        '#19c919',
        '#f9e31c',
        '#ea1a1a',
        '#9b1dea',
        '#00c2b1',
        '#ac7a33',
        '#1d35ea',
        '#8bc34a',
        '#f16b62',
        '#ea4ca3',
        '#0d94aa',
        '#febd79',
        '#5d4037',
        '#00bcd4',
        '#f06292',
        '#cddc39',
        '#607d8b',
        '#000000',
        '#ffffff',
    ];

    const onClick = (color: string) => {
        props.onChange && props.onChange({hex: color, source: 'hex'});
    }

    return <div class="cm-color-picker-recommend">
        <div class="cm-color-picker-recommend-container">
            <For each={colors}>
                {(color: string, index: Accessor<number>) => {
                    return <>
                        <div class="cm-color-picker-recommend-color" onClick={() => onClick(color)}>
                            <div style={{background: color}} />
                        </div>
                        <Show when={(index() + 1) % 12 === 0}>
                            <br/>
                        </Show>
                    </>
                }}
            </For>
        </div>
    </div>
}
