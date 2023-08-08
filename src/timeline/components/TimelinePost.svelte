<script lang="ts">
	import type { Bezier } from "bezier-js";
	import { onMount } from "svelte";
	import type { OneDPointWithId } from "kd-tree-javascript";
	import { normalizeOffset, normalizeSpan } from "../../shared/helpers";
	import { bindTabs } from "../template/tabs";
	import {
		type Post,
		type Dimensions,
		TransitionType,
		type AnimatedStyles,
		type AnimatedCurve,
	} from "../types";
	import { compositePosition } from "../compositePosition";
	import { compositeStyle } from "../compositeStyle";

	export let post: Post;
	export let distance: number;
	export let beziers: Map<string, Bezier>;
	export let viewport: DOMRect;
	export let cursorPosition: number;
	export let kdTreePoint: OneDPointWithId;

	let parentDiv: HTMLDivElement;
	let normalizedOffset: number = 0;
	let normalizedSpan: number = 0;
	let elements: NodeListOf<HTMLElement>;
	let elementsRect: Dimensions[];
	const postAnimations = post.animation;

	async function fetchContents(templates: string[]) {
		let loadedTemplates: string[] = [];
		for (let i = 0; i < templates.length; i++) {
			var response = await fetch(templates[i]);
			if (response.ok) {
				const text = await response.text();
				loadedTemplates.push(text);
			}
		}

		return loadedTemplates;
	}

	const contentsPromise = fetchContents(post.content?.map((c) => c.html) ?? []);

	$: {
		normalizedOffset = normalizeOffset(distance, post.timeline.transition);
		normalizedSpan = normalizeSpan(
			cursorPosition,
			kdTreePoint,
			post.timeline.transition
		);

		if (elements && postAnimations) {
			elements.forEach((e, index) => {
				const id = e.dataset.tlId;

				if (!id || !postAnimations[id]) return;

				const style = getPostStyle(
					postAnimations[id].styles,
					(postAnimations[id].transition ?? TransitionType.Offset) ==
						TransitionType.Offset
						? normalizedOffset
						: normalizedSpan,
					postAnimations[id].movement,
					elementsRect[index]
				);

				e.setAttribute("style", style);
			});
		}
	}

	function getPostStyle(
		styles: AnimatedStyles[] | undefined,
		offset: number,
		movement: AnimatedCurve | undefined,
		elDimensions?: Dimensions
	): string {
		const keyframe = offset * 100;

		return `${compositeStyle(styles, keyframe)}${compositePosition(
			movement,
			keyframe,
			viewport,
			beziers,
			elDimensions
		)}`;
	}

	function updatePostStyles(container: HTMLDivElement) {
		elements = container.querySelectorAll(
			"[data-tl-id]"
		) as NodeListOf<HTMLElement>;
		elementsRect = [];

		elements.forEach((e) => {
			const rect = e.getBoundingClientRect();
			elementsRect.push({ width: rect.width, height: rect.height });
		});
	}

	onMount(() => {
		contentsPromise.then(() => {
			if (!parentDiv) return;
			updatePostStyles(parentDiv);
			bindTabs(parentDiv);
		});
	});
</script>

{#if post.content}
	<div bind:this={parentDiv}>
		{#await contentsPromise then contents}
			{#each contents as content}
				{@html content}
			{/each}
		{/await}
	</div>
{/if}
