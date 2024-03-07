import { useEffect, useRef, useState } from "react"
import { type Breakpoint, BREAKPOINTS } from "@/utils"

export function useMediaQuery(query: Breakpoint | string) {
	const [ matches, setMatches ] = useState(false)
	const matchesRef = useRef(matches)
	matchesRef.current = matches

	useEffect(() => {
		const media = window.matchMedia(
			Object.prototype.hasOwnProperty.call(BREAKPOINTS, query)
				? `(min-width: ${BREAKPOINTS[ query as Breakpoint ]}px)`
				: query
		)

		const onChange = () => {
			if (media.matches !== matchesRef.current) {
				setMatches(media.matches)
			}
		}
		onChange()
		media.addEventListener("change", onChange)

		return () => media.removeEventListener("change", onChange)
	}, [ query ])

	return matches
}
