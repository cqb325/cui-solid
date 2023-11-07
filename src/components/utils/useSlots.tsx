import { JSXElement, children, createComputed, on } from "solid-js"
import { createStore } from "solid-js/store"

export interface SlotProps {
	name: string
	children: JSXElement
}

export const useSlots = (_children: JSXElement) => {
	const parts = children(() => _children)
	const [slots, setSlots] = createStore<any>({default: []})
	createComputed(
		on(parts, () => {
			setSlots('default', []);
			for (const part of parts.toArray() as unknown as SlotProps[]) {
				if (!part.name) {
					setSlots('default', [...slots.default, () => part])
					continue
				}
				setSlots(part.name, () => part.children)
			}
		})
	)
	return slots
}