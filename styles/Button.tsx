import styled, { css } from "styled-components"
import { FlexStyle, type FlexProps } from "./Flex"

export type ButtonProps = FlexProps & {
	disabled?: boolean,
	$variant?: "default",
	$unbordered?: boolean
}

export const ButtonStyle = css<ButtonProps>`
	${FlexStyle}

	padding: 8px 20px;
	border-radius: 999px;

	${({ theme, $variant = "default" }) => ($variant === "default"
		? css`background: ${theme.colors.background};`
		: css`background: ${(theme.colors as any)[$variant] || "transparent"};`
	)}
	outline: none;
	border: ${({ theme, $unbordered }) => $unbordered ? "none": theme.border.medium};
	box-shadow: none;

	font-size: ${({ theme }) => theme.font.small};
	line-height: 24px;
	font-weight: 600;
	white-space: nowrap;

	transition: all 0.3s ease;
	
	cursor: pointer;

	&:disabled {
		opacity: 0.7;
		cursor: not-allowed;
	}
`

export const Button = styled.button.attrs(props => ({
	$justify: "center",
	$align: "center",
	$gap: 12,
	...props
}))<ButtonProps>`
	${ButtonStyle}
`
