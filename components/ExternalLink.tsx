import { type HTMLProps } from "react"

import type { ReactChildren } from "@/types"

import styled from "styled-components"
import { TextStyle, type TextProps } from "@/styles"

export type ExternalLinkProps = TextProps & Omit<HTMLProps<HTMLAnchorElement>, "ref" | "as"> & {
	underlined?: true,
	children: ReactChildren
}

export function ExternalLink({ underlined, children, ...props }: ExternalLinkProps) {
	return (
		<Link
			target="_blank"
			rel="noopener noreferrer"
			$textDecoration={underlined && "underline"}
			{...props}>
			{children}
		</Link>
	)
}

const Link = styled.a<TextProps>`
		${TextStyle}
		cursor: pointer;
`
