import { useMemo, useState, useRef, useEffect } from "react"

import type { ReactChildren } from "@/types"

import styled, { css, keyframes } from "styled-components"
import { CenteredFlex, Flex, type FlexProps, Text } from "@/styles"

type MarqueeProps = FlexProps & {
	text: string | string[],
	staticWidth?: number,
	spacing?: number,
	reverse?: boolean,
	children?: ReactChildren
}

export function Marquee({
	text,
	staticWidth,
	spacing = 24,
	reverse = false,
	children,
	...props
}: MarqueeProps) {
	const textArray = Array.isArray(text) ? text: [ text ]

	const [ chunk, setChunk ] = useState<HTMLDivElement | null>(null)

	const chunkWidth: number | undefined = useMemo(() => {
		if (staticWidth) return staticWidth + spacing
		if (!text) return undefined
		if (!chunk) return undefined

		const { width } = chunk.getBoundingClientRect()
		return width + spacing
	}, [ chunk, text, spacing, staticWidth ])

	const [ repeat, setRepeat ] = useState(1)
	const repeatRef = useRef(repeat)
	repeatRef.current = repeat

	useEffect(() => {
		if (!chunkWidth) return

		const onResize = () => {
			const w = window.innerWidth
			const r = Math.ceil(w / chunkWidth) + 1
			if (repeatRef.current !== r) setRepeat(r)
		}
		onResize()
		window.addEventListener("resize", onResize)

		return () => {
			window.removeEventListener("resize", onResize)
		}
	}, [ chunkWidth ])

	return (
		<Container {...props}>
			<Banner
				$scrollDistance={chunkWidth}
				$reverse={reverse}>
				<Flex
					$width="100%"
					$justify={reverse ? "flex-end": "flex-start"}
					$gap={spacing}>
					{Array.from({ length: repeat }, (_, i) => (
						<MarqueeChunk
							key={i}
							ref={i === 0 ? setChunk: undefined}
							$width={staticWidth ? `${staticWidth}px`: undefined}
							$gap={spacing}>
							{textArray.map((t, j) => (
								<Text
									key={j}
									$whiteSpace="nowrap"
									$textTransform="uppercase">
									{t}
								</Text>
							))}
						</MarqueeChunk>
					))}
				</Flex>
			</Banner>
			{children}
		</Container>
	)
}

const createScrollAnimation = (distance: number) => keyframes`
	0% { transform: translateX(0px) }
	100% { transform: translate(${-distance}px) }
`

const Container = styled(CenteredFlex)`
	position: relative;
	width: 100%;
	height: 100%;
	overflow: visible;
`

const Banner = styled(Flex)<{ $scrollDistance?: number, $reverse: boolean }>`
	position: absolute;
	left: 0px;
	right: 0px;
	overflow: visible;
	${({ $reverse, $scrollDistance }) => {
		if (!$scrollDistance) return ""
		const d = $reverse ? -$scrollDistance: $scrollDistance
		return css`
			& > div {
				animation: ${createScrollAnimation(d)} ${$scrollDistance / 50}s linear infinite;
				overflow: visible;
			}
		`
	}}
`

export const MarqueeChunk = styled(Flex).attrs(props => ({
	$justify: "space-between",
	$align: "center",
	$shrink: 0,
	...props
}))``
