import type { Coordinate } from "bezier-js";

export type Align = "center" | "centerLeft";

export enum PostType {
	Major = 1,
	Minor = 2,
}
export enum TransitionType {
	Span = 1,
	Offset = 2,
}

export interface ScrollTimelineEvent {
	delta: number;
}

export interface Post {
	id: number;
	type: PostType;
	timeline: Timeline;
	content: Content[];
	animation?: Record<string, TimelineAnimation>;
}

export interface TimelineAnimation {
	styles?: AnimatedStyles[];
	movement?: AnimatedCurve;
	transition?: TransitionType;
}

export interface AnimatedCurve {
	curveId: string;
	align?: Align;
	positions: CurvePosition[];
}

export interface CurvePosition {
	keyframe: number;
	t: number;
}

export interface AnimatedStyles {
	keyframe: number;
	properties: StyleProperty[];
}

export interface StyleProperty {
	name: string;
	value: number | string;
	format?: string;
}

export interface Content {
	html: string;
}

export interface Timeline {
	start: CustomDate;
	end?: CustomDate;
	hidden: boolean;
	transition: Offset;
}

export interface Offset {
	left: number;
	right: number;
}

export interface CustomDate {
	year: number;
	month: number;
	day: number;
}

export interface Curve {
	name: string;
	coordinates: Coordinate[];
}

export interface Dimensions {
	height: number;
	width: number;
}
