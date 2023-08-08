<script lang="ts">
	import { Bezier } from "bezier-js";
	import { onMount } from "svelte";
	import { loadCurves } from "../loadCurves";
	import type { Curve } from "../types";
	import TimelinePost from "./TimelinePost.svelte";
	import { timelineData } from "../data/timeline";

	export let nearestPoints: any[][];
	export let cursorPosition: number;

	let loadCurvesPromise: Promise<Curve[]>;
	let postsViewport: HTMLDivElement;
	let beziers = new Map<string, Bezier>();
	let np: any[][] = [];

	onMount(() => {
		loadCurvesPromise = loadCurves();

		loadCurvesPromise.then((curves) => {
			curves.forEach((curve) => {
				const b = new Bezier(
					curve.coordinates[0],
					curve.coordinates[1],
					curve.coordinates[2],
					curve.coordinates[3]
				);
				beziers.set(curve.name, b);
			});
		});
	});

	$: postsViewportRect = postsViewport
		? postsViewport.getBoundingClientRect()
		: undefined;

	$: if (nearestPoints) {
		nearestPoints.forEach((n) => {
			const npIndex = np.findIndex((n2) => n2[0].id === n[0].id);
			if (npIndex !== -1) {
				np[npIndex][1] = n[1];
				return;
			}

			np.push(n);
		});
	}
</script>

<div class="posts-container">
	<div class="posts" bind:this={postsViewport}>
		{#each np as point}
			<TimelinePost
				{beziers}
				viewport={postsViewportRect ?? new DOMRect()}
				distance={point[1]}
				post={timelineData[point[0].id]}
				{cursorPosition}
				kdTreePoint={point[0]}
			/>
		{/each}
	</div>
</div>

<style>
	.posts-container {
		z-index: 2;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		pointer-events: none;
	}
	.posts {
		width: 1600px;
		height: 900px;
		max-width: 1600px;
		max-height: 900px;
		margin: 5vw;
		position: relative;
	}
</style>
