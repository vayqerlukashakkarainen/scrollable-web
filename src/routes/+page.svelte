<script lang="ts">
	import type { ScrollTimelineEvent } from "../timeline/types";
	import "../global.css";
	import PrimaryTitle from "../components/primaryTitle.svelte";
	import TimelineContainer from "../timeline/TimelineContainer.svelte";
	import Background from "../components/background.svelte";

	let opacity: number = 1;
	const minHeightThreshold: number = 30;
	const paddingBottomThreshold: number = 4;
	let minHeight: number = minHeightThreshold;
	let paddingBottom: number = paddingBottomThreshold;

	const callbackFunction = (event: CustomEvent<ScrollTimelineEvent>) => {
		opacity = 1 - event.detail.delta * 1.2;
		minHeight = minHeightThreshold * (1 - event.detail.delta);
		paddingBottom = paddingBottomThreshold * (1 - event.detail.delta);
	};
</script>

<Background>
	<div
		style:--hero-opacity={opacity}
		style:--min-height={`${minHeight}vh`}
		style:--padding-bottom={`${paddingBottom}em`}
		class="titles-container container"
	/>

	<div class="animation-3 h-100">
		<TimelineContainer on:notify={callbackFunction} />
	</div>
</Background>

<style>
	.titles-container {
		display: flex;
		min-height: var(--min-height);
		padding-bottom: var(--padding-bottom);
		justify-content: space-evenly;
		align-items: end;
		opacity: var(--hero-opacity);
	}

	.animation-3 {
		animation: fade-in-bottom ease 1.4s;
		animation-fill-mode: forwards;
		opacity: 0;
	}

	.h-100 {
		height: 100%;
	}

	@keyframes fade-in-bottom {
		0% {
			opacity: 0;
			padding-top: 2em;
		}
		100% {
			opacity: 1;
			padding-top: 0em;
		}
	}
</style>
