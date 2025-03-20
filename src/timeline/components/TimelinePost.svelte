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
	import { setupChildAnimation } from "../functions";

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

	function initializePost(container: HTMLDivElement) {
		elements = container.querySelectorAll(
			"[data-tl-id]"
		) as NodeListOf<HTMLElement>;

		if (!postAnimations) return;

		elements.forEach((e) => {
			const tlId = e.dataset.tlId;

			if (!tlId) return;

			const key = postAnimations[tlId];

			if (!key || !key.loop) return;

			const parentAnimations = postAnimations[tlId];

			for (var i = 0; i < e.children.length; i++) {
				const child = e.children[i] as HTMLElement;
				const id = `${tlId}_${i}`;

				child.dataset.tlId = id;

				postAnimations[id] = setupChildAnimation(
					i,
					parentAnimations,
					e.children.length
				);
			}

			if (parentAnimations.movement) {
				parentAnimations.movement.disabled = true;
			}
		});
	}

	function updatePostStyles(container: HTMLDivElement) {
		elements = container.querySelectorAll(
			"[data-tl-id]"
		) as NodeListOf<HTMLElement>;
		elementsRect = [];

		elements.forEach((e, index) => {
			const rect = e.getBoundingClientRect();
			elementsRect.push({ width: rect.width, height: rect.height });

			const childImgs = e.querySelectorAll("img");
			if (childImgs.length) {
				let resolved = 0;
				childImgs.forEach((element) => {
					element.onload = () => {
						resolved++;

						if (resolved === childImgs.length) {
							const newRect = e.getBoundingClientRect();
							elementsRect[index] = {
								width: newRect.width,
								height: newRect.height,
							};
						}

						element.onload = null;
					};
				});
			}
		});
	}

	onMount(() => {
		contentsPromise.then(() => {
			if (!parentDiv) return;
			initializePost(parentDiv);
			updatePostStyles(parentDiv);
			bindTabs(parentDiv);
		});
	});
</script>

{#if post.content}
	<div bind:this={parentDiv}>
		{#await contentsPromise then contents}
			{#each contents as content}
				<div class="post">
					{@html content}
				</div>
			{/each}
		{/await}
	</div>
{/if}

<style>
	.post {
		position: absolute;
	}
</style>
