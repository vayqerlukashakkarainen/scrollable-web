<script lang="ts">
	import Background from "./components/Background.svelte";
	import type { ScrollTimelineEvent } from "../timeline/types";
	import "../global.css";
	import PrimaryTitle from "./components/PrimaryTitle.svelte";
	import TimelineContainer from "../timeline/TimelineContainer.svelte";

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
	>
		<div class="animation-1">
			<PrimaryTitle
				typerDelay={200}
				title="Lukas Hakkarainen"
				texts={["hi, my name is"]}
			/>
		</div>

		<div class="animation-2">
			<PrimaryTitle
				typerDelay={900}
				title="Software Developer"
				texts={["I am a"]}
			/>
		</div>
	</div>

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

	.animation-1 {
		animation: fade-in-top ease 1s;
		animation-delay: 0.3s;
		animation-fill-mode: forwards;
		opacity: 0;
	}
	.animation-2 {
		animation: fade-in-top ease 1s;
		animation-delay: 0.3s;
		animation-fill-mode: forwards;
		opacity: 0;
	}
	.animation-3 {
		animation: fade-in-bottom ease 1.4s;
		animation-delay: 0.5s;
		animation-fill-mode: forwards;
		opacity: 0;
	}

	.h-100 {
		height: 100%;
	}

	@keyframes fade-in-top {
		0% {
			opacity: 0;
			padding-bottom: 2em;
		}
		100% {
			opacity: 1;
			padding-bottom: 0em;
		}
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
