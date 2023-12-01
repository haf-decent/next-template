import styled, { css } from "styled-components"
import { FlexStyle, type FlexProps } from "./Flex"

export type ButtonProps = FlexProps & {
	disabled?: boolean,
	$variant?: "default",
	$unbordered?: boolean
}

export const ButtonStyle = css<ButtonProps>`
	${FlexStyle}
	outline: none;
	border: ${({ theme, $unbordered }) => $unbordered ? "none": theme.border.medium};
	box-shadow: none;
	line-height: 24px;
	font-size: ${({ theme }) => theme.font.small};
	font-weight: 600;
	white-space: nowrap;
	padding: 8px 20px;
	color: black;
	${({ theme, $variant = "default" }) => ($variant === "default"
		? css`
			backdrop-filter: blur(13px);
			background: transparent;
		`
		: css`background: ${(theme.colors as any)[$variant] || "transparent"};`
	)}
	border-radius: 999px;
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