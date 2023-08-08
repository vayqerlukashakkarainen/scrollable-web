import type { Post } from "../../types";
import { smamAnimation } from "./animations";
import { smamContent } from "./content";

export const smamPost: Post = {
	type: 1,
	id: 0,
	timeline: {
		hidden: false,
		start: {
			year: 2022,
			month: 3,
			day: 21,
		},
		end: {
			year: 2022,
			month: 5,
			day: 1,
		},
		transition: {
			left: 100,
			right: 100,
		},
	},
	content: smamContent,
	animation: smamAnimation,
};
