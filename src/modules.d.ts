declare module "kd-tree-javascript" {
	export function kdTree(
		points: OneDPointWithId[],
		distance: (a: OneDPoint, b: OneDPoint) => number,
		dimensions: string[]
	): kdTree;
	export function nearest(
		point: OneDPoint,
		maxNodes: number,
		maxDistance: number
	): OneDPointWithId[][];

	export interface kdTree {}
	export interface OneDPoint {
		x: number;
		x2: number;
	}
	export interface OneDPointWithId extends OneDPoint {
		id: number;
	}
}

declare module "bezier-js" {
	export class Bezier {
		constructor(p1: Coordinate, p2: Coordinate, p3: Coordinate, p4: Coordinate);

		get(t: number): CurveLocation;
	}

	export interface CurveLocation extends Coordinate {
		t: number;
	}

	export interface Coordinate {
		x: nunber;
		y: number;
		z?: number;
	}
}
