import type { Component, JSXElement } from "solid-js"
import type { SlotProps } from "../utils/useSlots"

export const Slot: Component<SlotProps> = (props) => {
	return props as unknown as JSXElement
}
