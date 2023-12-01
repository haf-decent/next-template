import { useEffect, useRef, useState } from "react"
import { type MediaWidth, MEDIA_WIDTHS } from "@/utils"

export function useMediaQuery(query: MediaWidth | string) {
	const [ matches, setMatches ] = useState(false)
	const matchesRef = useRef(matches)
	matchesRef.current = matches

	useEffect(() => {
		const media = window.matchMedia(
			// eslint-disable-next-line no-prototype-builtins
			MEDIA_WIDTHS.hasOwnProperty(query)
				? `(min-width: ${MEDIA_WIDTHS[ query as MediaWidth ]}px)`
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
