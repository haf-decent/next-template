import { useEffect, useState } from "react"

export function useOutsideClick<T extends HTMLElement>(onOutsideClick: () => void) {
	const [ ref, setRef ] = useState<T | null>(null)

	useEffect(() => {
		if (!ref) return

		const onClick = (event: MouseEvent) => {
			if (ref !== event.target && !ref.contains(event.target as any)) {
				onOutsideClick()
			}
		}
		window.addEventListener("click", onClick)

		return () => {
			window.removeEventListener("click", onClick)
		}
	}, [ ref, onOutsideClick ])

	return [ ref, setRef ]
}
