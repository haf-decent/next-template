import styled, { css } from "styled-components"
import { FlexStyle, type FlexProps } from "./Flex"

export type ButtonProps = FlexProps & {
	disabled?: boolean,
	$variant?: "default" | "icon" | string,
	$size?: "sm" | "md" | "lg",
	$unbordered?: boolean
}

const sizes: Record<"sm" | "md" | "lg", number> = {
	sm: 32,
	md: 48,
	lg: 64
}

export const ButtonStyle = css<ButtonProps>`
	${FlexStyle}

	padding: 8px 20px;
	outline: none;
	border: ${({ theme, $unbordered }) => $unbordered ? "none": theme.border.medium};
	box-shadow: none;

	font-size: ${({ theme }) => theme.font.default};
	line-height: 24px;
	font-weight: 400;
	white-space: nowrap;

	transition: all 0.3s ease;
	
	cursor: pointer;

	&:disabled {
		opacity: 0.7;
		cursor: not-allowed;
	}

	${({ theme, $variant = "default", $size = "md" }) => {
		switch($variant) {
			case "icon": return css`
				width: ${sizes[ $size ]}px;
				height: ${sizes[ $size ]}px;
				border-radius: 50%;
				padding: 0px;
				justify-content: center;
				align-items: center;
			`
			default: return css`
				height: ${sizes[ $size ]}px;
				background: ${(theme.colors as any)[ $variant ] || theme.colors.background};
			`
		}
	}}
`

export const Button = styled.button.attrs(props => ({
	$justify: "center",
	$align: "center",
	$gap: 12,
	...props
}))<ButtonProps>`
	${ButtonStyle}
`
