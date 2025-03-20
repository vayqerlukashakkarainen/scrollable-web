import { TransitionType, type TimelineAnimation } from "../../../types";

export const me1animation: Record<string, TimelineAnimation> = {
	me: {
		transition: TransitionType.Span,
		styles: [
			{
				keyframe: 4,
				properties: [
					{
						name: "opacity",
						value: 0,
					},
					{
						name: "border-radius",
						value: 10,
						format: "%",
					},
				],
			},
			{
				keyframe: 4,
				properties: [
					{
						name: "opacity",
						value: 1,
					},
					{
						name: "border-radius",
						value: 50,
						format: "%",
					},
				],
			},
		],
	},
	title: {
		transition: TransitionType.Span,
		styles: [
			{
				keyframe: 10,
				properties: [
					{
						name: "margin-top",
						value: 0,
						format: "em",
					},
					{
						name: "opacity",
						value: 0,
					},
				],
			},
			{
				keyframe: 10,
				properties: [
					{
						name: "margin-top",
						value: -0.9,
						format: "em",
					},
					{
						name: "opacity",
						value: 1,
					},
				],
			},
		],
	},
	step1: {
		transition: TransitionType.Span,
		styles: [
			{
				keyframe: 15,
				properties: [
					{
						name: "padding-left",
						value: 1,
						format: "em",
					},
					{
						name: "opacity",
						value: 0,
					},
				],
			},
			{
				keyframe: 15,
				properties: [
					{
						name: "padding-left",
						value: 0,
						format: "em",
					},
					{
						name: "opacity",
						value: 1,
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
				],
			},
			{
				keyframe: 25,
				properties: [
					{
						name: "opacity",
						value: 0,
					},
					{
						name: "padding-right",
						value: 1,
						format: "em",
					},
				],
			},
		],
	},
	step2: {
		transition: TransitionType.Span,
		styles: [
			{
				keyframe: 25,
				properties: [
					{
						name: "padding-left",
						value: 1,
						format: "em",
					},
					{
						name: "opacity",
						value: 0,
					},
				],
			},
			{
				keyframe: 25,
				properties: [
					{
						name: "padding-left",
						value: 0,
						format: "em",
					},
					{
						name: "opacity",
						value: 1,
					},
				],
			},
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
				keyframe: 40,
				properties: [
					{
						name: "opacity",
						value: 0,
					},
					{
						name: "padding-right",
						value: 1,
						format: "em",
					},
				],
			},
		],
	},
	text2: {
		transition: TransitionType.Span,
		styles: [
			{
				keyframe: 32,
				properties: [
					{
						name: "opacity",
						value: 0,
					},
				],
			},
			{
				keyframe: 32,
				properties: [
					{
						name: "opacity",
						value: 1,
					},
				],
			},
		],
	},
	step3: {
		transition: TransitionType.Span,
		styles: [
			{
				keyframe: 40,
				properties: [
					{
						name: "padding-left",
						value: 1,
						format: "em",
					},
					{
						name: "opacity",
						value: 0,
					},
				],
			},
			{
				keyframe: 40,
				properties: [
					{
						name: "padding-left",
						value: 0,
						format: "em",
					},
					{
						name: "opacity",
						value: 1,
					},
				],
			},
			{
				keyframe: 80,
				properties: [
					{
						name: "opacity",
						value: 1,
					},
				],
			},
			{
				keyframe: 80,
				properties: [
					{
						name: "opacity",
						value: 0,
					},
					{
						name: "padding-right",
						value: 1,
						format: "em",
					},
				],
			},
		],
	},
	step4: {
		transition: TransitionType.Span,
		styles: [
			{
				keyframe: 80,
				properties: [
					{
						name: "padding-left",
						value: 1,
						format: "em",
					},
					{
						name: "opacity",
						value: 0,
					},
				],
			},
			{
				keyframe: 80,
				properties: [
					{
						name: "padding-left",
						value: 0,
						format: "em",
					},
					{
						name: "opacity",
						value: 1,
					},
				],
			},
			{
				keyframe: 100,
				properties: [
					{
						name: "opacity",
						value: 1,
					},
				],
			},
			{
				keyframe: 100,
				properties: [
					{
						name: "opacity",
						value: 0,
					},
					{
						name: "padding-right",
						value: 1,
						format: "em",
					},
				],
			},
		],
	},
	container: {
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
	icons: {
		transition: TransitionType.Span,
		loop: {},
		movement: {
			align: "center",
			curveId: "leftTopRight",
			positions: [
				{
					keyframe: 40,
					t: 0,
				},
				{
					keyframe: 80,
					t: 1,
				},
			],
		},
		styles: [
			{
				keyframe: 40,
				properties: [
					{
						name: "opacity",
						value: 0,
					},
				],
			},
			{
				keyframe: 60,
				properties: [
					{
						name: "opacity",
						value: 1,
					},
				],
			},
			{
				keyframe: 80,
				properties: [
					{
						name: "opacity",
						value: 0,
					},
				],
			},
		],
	},
	frameworks: {
		transition: TransitionType.Span,
		loop: {},
		movement: {
			align: "center",
			curveId: "leftBottomRight",
			positions: [
				{
					keyframe: 40,
					t: 1,
				},
				{
					keyframe: 80,
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
						value: 0,
					},
				],
			},
			{
				keyframe: 60,
				properties: [
					{
						name: "opacity",
						value: 1,
					},
				],
			},
			{
				keyframe: 80,
				properties: [
					{
						name: "opacity",
						value: 0,
					},
				],
			},
		],
	},
};
