import Link from "next/link"

import type { AnchorProps } from "@/types"

import styled from "styled-components"
import { type FlexProps, FlexStyle } from "@/styles"

type PassLinkProps = FlexProps & AnchorProps & {
	href: string,
	underlined?: true
}
export function PassLink({
	href,
	children,
	underlined,
	...props
}: PassLinkProps) {
	return (
		<Container
			href={href}
			$textDecoration={underlined && "underline"}
			{...props}>
			{children}
		</Container>
	)
}

const Container = styled(Link)<FlexProps>`
	${FlexStyle}
`
