<script lang="ts">
	import { dragscroll } from "@svelte-put/dragscroll";
	import { createEventDispatcher, onMount } from "svelte";
	import { easeInOut } from "../../shared/math";
	import {
		type PostComponent,
		computePostComponents,
		createKdTree,
	} from "../functions";
	import { timelineData } from "../data/timeline";

	let kdTree: typeof import("kd-tree-javascript");

	const dispatch = createEventDispatcher();

	//const snapDistanceThreshold = 100;
	//let scrollTimeout: number;
	const topOffestDistanceThreshold = 300;
	const date = new Date();
	const extractedDate = {
		year: date.getUTCFullYear() + 3,
		month: date.getUTCMonth(),
	};
	const startYear = 1994;
	export let nearestPoints: any[][] = [];
	export let cursorPosition: number = 0;
	let timelineWidth: number;
	let yearsDom: HTMLDivElement;
	let timelineDom: HTMLDivElement;
	let cursorDom: HTMLDivElement;
	let postsDom: HTMLButtonElement[] = [];
	let timelineDomTopOffset: number = 0;
	let postComponents: PostComponent[] = [];
	let rightOffsetDelta: number = 1;
	let pulseIterationCount = "infinite";

	const onScroll = (e: Event) => {
		const el = e.target as HTMLDivElement;
		const scrolledElement = el.querySelector("div");

		if (!scrolledElement) return;
		const rect = scrolledElement.getBoundingClientRect();
		const containerRect = el.getBoundingClientRect();

		// Calculate top position of timeline container based on scroll distance from start
		const tempRightOffsetDelta =
			(rect.right - containerRect.width) / topOffestDistanceThreshold;
		rightOffsetDelta = tempRightOffsetDelta <= 1 ? tempRightOffsetDelta : 1;
		timelineDomTopOffset = (easeInOut(rightOffsetDelta) - 1) * -1 * 82;

		if (kdTree) {
			cursorPosition = Math.abs(rect.x);
			nearestPoints = kdTree.nearest({ x: cursorPosition, x2: 0 }, 10, 200);
		}

		dispatch("notify", { delta: rightOffsetDelta });

		pulseIterationCount = rightOffsetDelta > 0.1 ? "1" : "infinite";

		/*clearTimeout(scrollTimeout);
		scrollTimeout = setTimeout(() => {
			if (postsDom.length === 0) return;
			let closestPostRect = postsDom[0].getBoundingClientRect();

			const cursorRect = cursorDom.getBoundingClientRect();

			postsDom.forEach((p) => {
				const pRect = p.getBoundingClientRect();
				if (Math.abs(pRect.x) + cursorRect.x < Math.abs(closestPostRect.x)) {
					closestPostRect = pRect;
				}
			});

			if (Math.abs(closestPostRect.x - cursorRect.x) < snapDistanceThreshold) {
				// TODO: Smooth out this with request animation frame and create own smooth effect
				const scrollDestination =
					Math.abs(rect.x - closestPostRect.x) -
					cursorRect.x +
					closestPostRect.width / 2 -
					cursorRect.width / 2;
				el.scrollTo(scrollDestination, 0);
			}
		}, 200);*/
	};

	onMount(() => {
		timelineWidth =
			yearsDom.getBoundingClientRect().width /
			(extractedDate.year - startYear + 1);
		timelineDom.scrollLeft = timelineDom.scrollWidth;

		load();
	});

	async function load() {
		postComponents = computePostComponents(
			timelineData,
			timelineWidth,
			startYear
		);

		await import("kd-tree-javascript").then((m) => {
			kdTree = createKdTree(m, postComponents, timelineWidth, startYear);
		});
	}
</script>

<div
	use:dragscroll
	bind:this={timelineDom}
	class="timeline-container"
	on:scroll={onScroll}
	style:--top-offset={`${timelineDomTopOffset}%`}
>
	<div class="timeline">
		<div
			bind:this={cursorDom}
			class="cursor"
			style:--iteration-count={pulseIterationCount}
		>
			<h5 class="cursor-content" style:opacity={1 - rightOffsetDelta}>
				Drag me
			</h5>
		</div>
		<div bind:this={yearsDom} class="years">
			{#each { length: extractedDate.year - startYear + 1 } as _, i}
				{#if startYear + i <= date.getUTCFullYear()}
					<div>{startYear + i}</div>
				{:else}
					<div />
				{/if}
			{/each}
		</div>
		<div class="line" style:opacity={rightOffsetDelta}>
			{#each postComponents as post, index}
				{#if post.timeline.end}
					<button
						bind:this={postsDom[index]}
						data-post-type={post.type}
						data-post-index={index}
						class="post long"
						style:left={`${post.offset}px`}
						style:width={`${post.width}px`}
						style:display={post.timeline.hidden ? "none" : "block"}
					/>
				{:else}
					<button
						bind:this={postsDom[index]}
						data-post-type={post.type}
						data-post-index={index}
						class="post"
						style:left={`${post.offset}px`}
						style:display={post.timeline.hidden ? "none" : "block"}
					/>
				{/if}
			{/each}
		</div>
	</div>
</div>

<style>
	.post {
		position: absolute;
		bottom: 0;
		transform: translateY(50%);
		min-height: 0.7em;
		min-width: 0.7em;
		content: " ";
		border-radius: 50%;
		background: white;
		padding: 0;
		border: none;
	}
	.post.long {
		border-radius: 22px;
	}
	.post[data-post-type="1"] {
		min-height: 1em;
		min-width: 1em;
		background: rgb(77, 233, 222);
	}
	.timeline {
		position: relative;
		padding-right: 50vw;
		padding-left: 50vw;
		min-width: 100vw;
		width: fit-content;
		height: 100px;
		top: var(--top-offset);
		z-index: 2;
	}
	.timeline-container {
		position: relative;
		width: 100%;
		height: 100%;
		max-width: 100vw;
		overflow: auto;
	}
	.years {
		display: flex;
		width: fit-content;
	}
	.years > div {
		min-width: 40em;
		font-weight: bold;
		color: gray;
		font-family: "Courier New", Courier, monospace;
	}
	.cursor {
		pointer-events: none;
		display: flex;
		justify-content: center;
		position: sticky;
		z-index: 1;
		top: 100%;
		left: 50%;
		transform: translateY(calc(50% + 6px));
		width: 2em;
		height: 2em;
		border-radius: 50%;
		border: 2px solid #ffffff8b;
		animation: pulse-animation 3s ease;
		animation-iteration-count: var(--iteration-count);
	}
	.cursor-content {
		padding-top: 1.4em;
		transform: translateY(100%);
		min-width: 100px;
		text-align: center;
	}
	.line {
		position: relative;
		z-index: 0;
		right: 0;
		left: 0;
		top: 50%;
		height: 1px;
		border-bottom: 1px solid #414141;
	}

	@keyframes pulse-animation {
		0% {
			box-shadow: #ffffff 0 0 0 0;
		}
		75% {
			box-shadow: #ff69b400 0 0 0 1em;
		}
	}
</style>
