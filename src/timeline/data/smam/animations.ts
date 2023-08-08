import { TransitionType, type TimelineAnimation } from "../../types";

export const smamAnimation: Record<string, TimelineAnimation> = {
	desc: {
		transition: TransitionType.Span,
		styles: [
			{
				keyframe: 20,
				properties: [
					{
						name: "padding-top",
						value: 20,
						format: "px",
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
						name: "padding-top",
						value: 0,
						format: "px",
					},
					{
						name: "opacity",
						value: 1,
					},
				],
			},
		],
	},
	container: {
		movement: {
			curveId: "leftMiddleLeft",
			positions: [
				{
					keyframe: 0,
					t: 0,
				},
				{
					keyframe: 40,
					t: 0.5,
				},
			],
		},
		styles: [
			{
				keyframe: 50,
				properties: [
					{
						name: "opacity",
						value: 0,
					},
				],
			},
			{
				keyframe: 70,
				properties: [
					{
						name: "opacity",
						value: 1,
					},
				],
			},
		],
	},
	part2: {
		transition: TransitionType.Span,
		styles: [
			{
				keyframe: 40,
				properties: [
					{
						name: "opacity",
						value: 0,
					},
					{
						name: "margin-left",
						value: -40,
						format: "px",
					},
				],
			},
			{
				keyframe: 45,
				properties: [
					{
						name: "opacity",
						value: 1,
					},
					{
						name: "margin-left",
						value: 0,
						format: "px",
					},
				],
			},
		],
	},
	part3: {
		transition: TransitionType.Span,
		styles: [
			{
				keyframe: 50,
				properties: [
					{
						name: "opacity",
						value: 0,
					},
					{
						name: "margin-left",
						value: -40,
						format: "px",
					},
				],
			},
			{
				keyframe: 55,
				properties: [
					{
						name: "opacity",
						value: 1,
					},
					{
						name: "margin-left",
						value: 0,
						format: "px",
					},
				],
			},
		],
	},
	tabs: {
		transition: TransitionType.Span,
		styles: [
			{
				keyframe: 50,
				properties: [
					{
						name: "max-height",
						value: 0,
						format: "px",
					},
				],
			},
			{
				keyframe: 50,
				properties: [
					{
						name: "max-height",
						value: 32,
						format: "px",
					},
				],
			},
		],
	},
	js: {
		transition: TransitionType.Span,
		styles: [
			{
				keyframe: 45,
				properties: [
					{
						name: "max-width",
						value: 0,
						format: "%",
					},
				],
			},
			{
				keyframe: 45,
				properties: [
					{
						name: "max-width",
						value: 11,
						format: "%",
					},
				],
			},
		],
	},
	html: {
		transition: TransitionType.Span,
		styles: [
			{
				keyframe: 45,
				properties: [
					{
						name: "max-width",
						value: 0,
						format: "%",
					},
				],
			},
			{
				keyframe: 45,
				properties: [
					{
						name: "max-width",
						value: 54,
						format: "%",
					},
				],
			},
		],
	},
	css: {
		transition: TransitionType.Span,
		styles: [
			{
				keyframe: 45,
				properties: [
					{
						name: "max-width",
						value: 0,
						format: "%",
					},
				],
			},
			{
				keyframe: 45,
				properties: [
					{
						name: "max-width",
						value: 35,
						format: "%",
					},
				],
			},
		],
	},
};
