import type { OneDPointWithId } from "kd-tree-javascript";
import type { CustomDate, Offset } from "../timeline/types";

export function pointOnTimeline(
	timelineWidth: number,
	startYear: number,
	date: CustomDate
): number {
	return (
		timelineWidth * (date.year - startYear) + timelineWidth * (date.month / 12)
	);
}

export function normalizeOffset(distance: number, transition: Offset) {
	let transitionOffset = transition.left;
	if (distance > 0) {
		transitionOffset = transition.right;
	}

	if (Math.abs(distance) > Math.abs(transitionOffset)) {
		return 0;
	}

	return 1 - Math.abs(distance / transitionOffset);
}

export function normalizeSpan(
	cursorPosition: number,
	kdTreePoint: OneDPointWithId,
	transition: Offset
) {
	const left = kdTreePoint.x - transition.left;
	const right = kdTreePoint.x2 + transition.right;
	if (cursorPosition < right && cursorPosition > left) {
		const diff = right - left;
		return 1 - (cursorPosition - left) / diff;
	}

	return 0;
}

export const EMPTY_STRING = "";
