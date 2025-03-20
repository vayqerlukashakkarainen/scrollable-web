import type { Bezier } from "bezier-js";
import { EMPTY_STRING } from "../shared/helpers";
import { easeInOut } from "../shared/math";
import type { Dimensions, CurvePosition, Align, AnimatedCurve } from "./types";

export function compositePosition(
	movement: AnimatedCurve | undefined,
	keyframe: number,
	viewport: DOMRect,
	beziers: Map<string, Bezier>,
	elDimensions?: Dimensions
): string {
	if (!movement || movement.disabled) return EMPTY_STRING;

	let movementIndex = -1;
	movement.positions.forEach((s, index) => {
		if (keyframe >= s.keyframe) {
			movementIndex = index;
		}
	});

	if (movementIndex === -1) return EMPTY_STRING;

	return composite(
		movement,
		movementIndex,
		keyframe,
		viewport,
		beziers,
		movement.positions[movementIndex],
		movementIndex < movement.positions.length - 1
			? movement.positions[movementIndex + 1]
			: undefined,
		elDimensions
	);
}

function composite(
	movement: AnimatedCurve,
	movementIndex: number,
	keyframe: number,
	viewport: DOMRect,
	beziers: Map<string, Bezier>,
	currentKeyframePosition: CurvePosition,
	nextKeyframePosition: CurvePosition | undefined,
	elDimensions?: Dimensions
) {
	let str = "";

	// Position properties
	const bezier = beziers.get(movement.curveId);

	if (bezier) {
		const nextValue = nextKeyframePosition
			? nextKeyframePosition.t
			: currentKeyframePosition.t;
		const currentValue = currentKeyframePosition.t;
		const diffValue = nextValue - currentValue;

		const value = nextKeyframePosition
			? currentValue +
			  diffValue *
					((keyframe - movement.positions[movementIndex].keyframe) /
						(movement.positions[movementIndex + 1].keyframe -
							movement.positions[movementIndex].keyframe))
			: currentValue;

		const position = bezier.get((easeInOut(value) - 1) * -1);

		const alignDimensions = alignment(elDimensions, movement.align);

		str += `transform: translate(${
			position.x * viewport.width - alignDimensions.width
		}px, ${position.y * viewport.height - alignDimensions.height}px);`;
	}

	return str;
}

function alignment(elDimensions?: Dimensions, align?: Align): Dimensions {
	const a: Align = align ? align : "centerLeft";

	if (!elDimensions) return { height: 0, width: 0 };
	switch (a) {
		case "center":
			return {
				height: elDimensions.height / 2,
				width: elDimensions.width / 2,
			};
		case "centerLeft":
			return { height: elDimensions.height / 2, width: 0 };
	}
}
