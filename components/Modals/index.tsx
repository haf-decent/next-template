import { createPortal } from "react-dom"

import type { ReactChildren } from "@/types"

import styled, { css } from "styled-components"
import { CenteredFlex, Flex, Text, createFadeInAnimation } from "@/styles"
import { X } from "react-feather"

export type ModalProps = {
	heading?: ReactChildren,
	children?: ReactChildren,
	footerContent?: ReactChildren,
	overrideContent?: ReactChildren,
	onClose?: () => void,
	maxWidth?: string,
	fadeIn?: boolean
}
export function Modal({
	heading,
	children,
	footerContent,
	overrideContent,
	onClose,
	maxWidth,
	fadeIn = false
}: ModalProps) {
	return createPortal(
		<Overlay onClick={onClose}>
			<ModalContainer
				$maxWidth={maxWidth}
				$animated={fadeIn}
				onClick={(e: any) => e.stopPropagation()}>
				{overrideContent || (<>
					<ModalHeader>
						{typeof heading === "string"
							? (
								<Text $fontSize="2.5em">
									{heading}
								</Text>
							)
							: heading
						}
						{onClose && (
							<CloseContainer onClick={onClose}>
								<X size={14}/>
							</CloseContainer>
						)}
					</ModalHeader>
					<ModalBody>
						{children}
					</ModalBody>
					<ModalFooter>{footerContent}</ModalFooter>
				</>)}
			</ModalContainer>
		</Overlay>,
		document.body
	)
}

const Overlay = styled(CenteredFlex)`
	position: fixed;
	inset: 0px;

	background-color: rgba(0,0,0,0.6);
	z-index: 998;
`

const fadeIn = createFadeInAnimation("12px")

export const ModalContainer = styled(Flex).attrs(props => ({
	$width: "100%",
	$column: true,
	$justify: "stretch",
	$align: "stretch",
	...props
}))<{ $maxWidth?: string, $animated: boolean }>`
	position: absolute;
	max-width: min(${({ $maxWidth = "720px" }) => $maxWidth}, calc(100vw - 48px));
	max-height: calc(100vh - 320px);
	border-radius: 24px;
	border: ${({ theme }) => theme.border.medium};

	background-color: ${({ theme }) => theme.colors.background};

	${({ $animated }) => $animated && css`animation: ${fadeIn} 0.5s ease-out forwards;`}

	z-index: 999;
`

export const ModalHeader = styled(Flex).attrs(props => ({
	$width: "100%",
	$justify: "space-between",
	$align: "center",
	$gap: 12,
	$grow: 0,
	$shrink: 0,
	...props
}))`
	padding: 12px;

	${({ theme }) => theme.mediaWidth.largerThanSmall`
			padding: 24px;
	`}
`
export const CloseContainer = styled(CenteredFlex)`
	width: 36px;
	height: 36px;
	cursor: pointer;
`

export const ModalBody = styled(Flex).attrs(props => ({
	$width: "100%",
	$column: true,
	$justify: "stretch",
	$align: "center",
	$grow: 1,
	...props
}))`
	overflow: hidden auto;
	& > * {
			padding: 12px;
	}

	${({ theme }) => theme.mediaWidth.largerThanSmall`
			& > * {
					padding: 24px;
			}
	`}
`

export const ModalFooter = styled(ModalHeader)``
