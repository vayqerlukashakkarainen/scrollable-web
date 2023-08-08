import { EMPTY_STRING } from "../shared/helpers";
import type { AnimatedStyles, StyleProperty } from "./types";

export function compositeStyle(
	styles: AnimatedStyles[] | undefined,
	keyframe: number
): string {
	if (!styles) return EMPTY_STRING;
	let stylesIndex = -1;
	styles.forEach((s, index) => {
		if (keyframe >= s.keyframe) {
			stylesIndex = index;
		}
	});

	if (stylesIndex === -1)
		return composite(
			styles,
			stylesIndex,
			keyframe,
			styles[0].properties,
			undefined
		);

	return composite(
		styles,
		stylesIndex,
		keyframe,
		styles[stylesIndex].properties,
		stylesIndex < styles.length - 1
			? styles[stylesIndex + 1].properties
			: undefined
	);
}

function composite(
	styles: AnimatedStyles[],
	stylesIndex: number,
	keyframe: number,
	currentKeyframeProps: StyleProperty[],
	nextKeyframeProps: StyleProperty[] | undefined
) {
	let str = EMPTY_STRING;
	// Style properties
	currentKeyframeProps.forEach((p) => {
		const nextValue = nextKeyframeProps
			? nextKeyframeProps.find((n) => n.name === p.name)?.value ?? 0
			: p.value;
		const currentValue = p.value;

		if (Number.isInteger(currentValue)) {
			const diffValue = (nextValue as number) - (currentValue as number);

			const value = nextKeyframeProps
				? (currentValue as number) +
				  diffValue *
						((keyframe - styles[stylesIndex].keyframe) /
							(styles[stylesIndex + 1].keyframe - styles[stylesIndex].keyframe))
				: currentValue;

			str += `${p.name}: ${value}${p.format ?? ""};`;
		} else {
			str += `${p.name}: ${currentValue}${p.format ?? ""};`;
		}
	});

	return str;
}
