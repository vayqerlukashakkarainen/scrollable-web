import type { Post } from "../../../types";
import { me1animation } from "./animations";
import { me1content } from "./content";

export const me1: Post = {
	type: 2,
	timeline: {
		hidden: false,
		start: {
			year: 2023,
			month: 12,
			day: 1,
		},
		end: {
			year: 2024,
			month: 5,
			day: 1,
		},
		transition: {
			left: 100,
			right: 100,
		},
	},
	content: me1content,
	animation: me1animation,
};
