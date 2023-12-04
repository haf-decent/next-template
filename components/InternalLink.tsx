import Link from "next/link"

import type { AnchorProps } from "@/types"

import styled from "styled-components"
import { type FlexProps, FlexStyle } from "@/styles"

type InternalLinkProps = FlexProps & AnchorProps & {
	href: string,
	underlined?: boolean
}
export function InternalLink({ children, underlined, ...props }: InternalLinkProps) {
	return (
		<Container
			$textDecoration={underlined ? "underline": undefined}
			{...props}>
			{children}
		</Container>
	)
}

const Container = styled(Link)<FlexProps>`
	${FlexStyle}
	cursor: pointer;
`
