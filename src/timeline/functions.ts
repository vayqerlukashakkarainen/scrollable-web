import type { OneDPointWithId, OneDPoint } from "kd-tree-javascript";
import { pointOnTimeline } from "../shared/helpers";
import type { Post } from "./types";

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
	kdTree.kdTree(
		points,
		(cursor: OneDPoint, post: OneDPoint) => {
			if (cursor.x <= post.x2 && cursor.x >= post.x) {
				return 0;
			} else if (cursor.x <= post.x) return post.x - cursor.x;
			else return cursor.x - post.x2;
		},
		["x", "x2"]
	);

	return kdTree;
}
