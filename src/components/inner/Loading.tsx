import { mergeProps } from "solid-js";

export const Loading = (_props: any) => {
      const props = mergeProps({ size: 14, color: '#fff' }, _props);
return <span style={{width: `${props.size}px`, height: `${props.size}px`}} class="cm-loading">
        <svg xmlns="http://www.w3.org/2000/svg" width={props.size} height={props.size} viewBox="0 0 38 38" stroke={props.color}>
            <g fill="none" fill-rule="evenodd">
                <g transform="translate(1 1)" stroke-width="2">
                    <circle stroke-opacity=".5" cx="18" cy="18" r="18"/>
                    <path d="M36 18c0-9.94-8.06-18-18-18" transform="rotate(113.635 18 18)">
                        <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"/>
                    </path>
                </g>
            </g>
        </svg>
    </span>;
}
