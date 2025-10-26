import type { OneDPointWithId, OneDPoint } from "kd-tree-javascript";
import { pointOnTimeline } from "../shared/helpers";
import type { Post, TimelineAnimation } from "./types";

export function computePostComponents(
	posts: Post[],
	timelineWidth: number,
	startYear: number
): PostComponent[] {
	const tempPosts = posts.map((t) => {
		const startPos = pointOnTimeline(
			timelineWidth,
			startYear,
			t.timeline.start
		);
		const endPos = t.timeline.end
			? pointOnTimeline(timelineWidth, startYear, t.timeline.end)
			: 0;
		return {
			...t,
			offset: startPos,
			width: endPos - startPos,
		};
	});
	return tempPosts;
}

export interface PostComponent extends Post {
	offset: number;
	width: number;
}

export function createKdTree(
	kdTree: typeof import("kd-tree-javascript"),
	posts: PostComponent[],
	timelineWidth: number,
	startYear: number
) {
	const points: OneDPointWithId[] = posts.map((p, index) => {
		const startPos = pointOnTimeline(
			timelineWidth,
			startYear,
			p.timeline.start
		);
		const endPos = p.timeline.end
			? pointOnTimeline(timelineWidth, startYear, p.timeline.end)
			: startPos;
		return {
			x: startPos,
			x2: endPos,
			id: index,
		};
	});
	const tree = new (kdTree.kdTree as any)(
		points,
		(cursor: OneDPoint, post: OneDPoint) => {
			if (cursor.x <= post.x2 && cursor.x >= post.x) {
				return 0;
			} else if (cursor.x <= post.x) return post.x - cursor.x;
			else return cursor.x - post.x2;
		},
		["x", "x2"]
	);

	return tree;
}

export function setupChildAnimation(
	childIndex: number,
	parentAnimation: TimelineAnimation,
	childCount: number
) {
	const anim = structuredClone(parentAnimation);

	if (anim.movement) {
		let diff = 0;
		anim.movement.positions = anim.movement.positions.map((x, index, arr) => {
			if (index + 1 < arr.length) {
				const nextKeyframe = arr[index + 1].keyframe;
				diff = (nextKeyframe - x.keyframe) / childCount / 2.8;
			}

			return {
				keyframe:
					x.keyframe +
					(index === arr.length - 1
						? -diff * (childCount - (childIndex + 1))
						: diff * childIndex),
				t: x.t,
			};
		});
	}

	if (anim.styles) {
		anim.styles = anim.styles.map((x, index, arr) => {
			if (index + 1 >= arr.length) return x;

			const nextKeyframe = arr[index + 1].keyframe;
			const diff = (nextKeyframe - x.keyframe) / childCount;
			return {
				keyframe: x.keyframe + diff * childIndex,
				properties: x.properties,
			};
		});
	}

	return anim;
}
