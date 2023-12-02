import { css } from "styled-components"

export const DEV = process.env.NODE_ENV !== "production"

export const SITE_TITLE = ""
export const SITE_DESCRIPTION = ""
export const SITE_FAVICON = ""
export const SITE_BASE_URL = ""
export const SITE_OG_IMAGE = ""
export const SITE_OG_IMAGE_DIM: { width: string, height: string } | undefined = undefined

export const LINK_TO_TWITTER = ""

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
