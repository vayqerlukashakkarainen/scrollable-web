import { TransitionType, type TimelineAnimation } from "../../types";

export const luMonneAnimation: Record<string, TimelineAnimation> = {
	textOverlay: {
		movement: {
			align: "center",
			curveId: "center",
			positions: [
				{
					keyframe: 0,
					t: 0,
				},
				{
					keyframe: 100,
					t: 1,
				},
			],
		},
	},
	container: {
		styles: [
			{
				keyframe: 0,
				properties: [
					{
						name: "opacity",
						value: 0,
					},
				],
			},
			{
				keyframe: 20,
				properties: [
					{
						name: "opacity",
						value: 1,
					},
				],
			},
		],
	},
	imgGrid: {
		transition: TransitionType.Span,
		movement: {
			curveId: "leftRight",
			positions: [
				{
					keyframe: 0,
					t: 1,
				},
				{
					keyframe: 60,
					t: 0,
				},
			],
		},
		styles: [
			{
				keyframe: 40,
				properties: [
					{
						name: "opacity",
						value: 1,
					},
				],
			},
			{
				keyframe: 55,
				properties: [
					{
						name: "opacity",
						value: 0.3,
					},
				],
			},
		],
	},
	item1: {
		transition: TransitionType.Span,
		styles: [
			{
				keyframe: 5,
				properties: [
					{
						name: "opacity",
						value: 0,
					},
					{
						name: "transform",
						value: "translateX(40px)",
					},
				],
			},
			{
				keyframe: 5,
				properties: [
					{
						name: "opacity",
						value: 1,
					},
					{
						name: "transform",
						value: "translateX(0px)",
					},
				],
			},
		],
	},
	item2: {
		transition: TransitionType.Span,
		styles: [
			{
				keyframe: 10,
				properties: [
					{
						name: "opacity",
						value: 0,
					},
					{
						name: "transform",
						value: "translateX(40px)",
					},
				],
			},
			{
				keyframe: 10,
				properties: [
					{
						name: "opacity",
						value: 1,
					},
					{
						name: "transform",
						value: "translateX(0px)",
					},
				],
			},
		],
	},
	item3: {
		transition: TransitionType.Span,
		styles: [
			{
				keyframe: 15,
				properties: [
					{
						name: "opacity",
						value: 0,
					},
					{
						name: "transform",
						value: "translateX(40px)",
					},
				],
			},
			{
				keyframe: 15,
				properties: [
					{
						name: "opacity",
						value: 1,
					},
					{
						name: "transform",
						value: "translateX(0px)",
					},
				],
			},
		],
	},
	item4: {
		transition: TransitionType.Span,
		styles: [
			{
				keyframe: 20,
				properties: [
					{
						name: "opacity",
						value: 0,
					},
					{
						name: "transform",
						value: "translateX(40px)",
					},
				],
			},
			{
				keyframe: 20,
				properties: [
					{
						name: "opacity",
						value: 1,
					},
					{
						name: "transform",
						value: "translateX(0px)",
					},
				],
			},
		],
	},
	item5: {
		transition: TransitionType.Span,
		styles: [
			{
				keyframe: 25,
				properties: [
					{
						name: "opacity",
						value: 0,
					},
					{
						name: "transform",
						value: "translateX(40px)",
					},
				],
			},
			{
				keyframe: 25,
				properties: [
					{
						name: "opacity",
						value: 1,
					},
					{
						name: "transform",
						value: "translateX(0px)",
					},
				],
			},
		],
	},
	item6: {
		transition: TransitionType.Span,
		styles: [
			{
				keyframe: 30,
				properties: [
					{
						name: "opacity",
						value: 0,
					},
					{
						name: "transform",
						value: "translateX(40px)",
					},
				],
			},
			{
				keyframe: 30,
				properties: [
					{
						name: "opacity",
						value: 1,
					},
					{
						name: "transform",
						value: "translateX(0px)",
					},
				],
			},
		],
	},
};
