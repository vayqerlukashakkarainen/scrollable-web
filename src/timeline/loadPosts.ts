import type { Post } from "./types";

export async function loadPosts() {
	var response = await fetch("/timeline.json");

	if (response.ok) {
		const jsonPosts = (await response.json()) as unknown as Post[];
		return jsonPosts;
	}

	return [];
}
