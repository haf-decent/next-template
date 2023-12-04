import type { AnchorProps, ReactChildren } from "@/types"

import styled from "styled-components"
import { type FlexProps, FlexStyle } from "@/styles"

export type ExternalLinkProps = FlexProps & AnchorProps & {
	href: string,
	underlined?: boolean,
	children: ReactChildren
}
export function ExternalLink({ underlined, children, ...props }: ExternalLinkProps) {
	return (
		<Link
			target="_blank"
			rel="noopener noreferrer"
			$textDecoration={underlined ? "underline": undefined}
			{...props}>
			{children}
		</Link>
	)
}

const Link = styled.a<FlexProps>`
		${FlexStyle}
		cursor: pointer;
`
