import type { Post } from "../../types";
import { luMonneAnimation } from "./animations";
import { luMonneContent } from "./content";

export const luMonnePost: Post = {
	type: 1,
	timeline: {
		hidden: false,
		start: {
			year: 2023,
			month: 3,
			day: 1,
		},
		end: {
			year: 2023,
			month: 5,
			day: 15,
		},
		transition: {
			left: 100,
			right: 100,
		},
	},
	content: luMonneContent,
	animation: luMonneAnimation,
};
