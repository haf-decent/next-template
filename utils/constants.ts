import { css } from "styled-components"

export type MediaWidth =
	"largerThanSmall"
	| "largerThanMedium"
	| "largerThanLarge"
export const MEDIA_WIDTHS: Record<MediaWidth, number> = {
	largerThanSmall: 576,
	largerThanMedium: 869,
	largerThanLarge: 1080,
}

export const mediaWidthTemplates: Record<MediaWidth, typeof css> =
	(Object.keys(MEDIA_WIDTHS) as MediaWidth[])
		.reduce((accumulator, size) => {
			(accumulator as any)[size] = (a: any, b: any, c: any) => css`
					@media (min-width: ${MEDIA_WIDTHS[size]}px) {
							${css(a, b, c)}
					}
			`
			return accumulator
		}, {}) as any
