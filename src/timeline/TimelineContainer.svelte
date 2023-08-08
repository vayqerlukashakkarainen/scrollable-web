<script lang="ts">
	import Posts from "./components/Posts.svelte";
	import Timeline from "./components/Timeline.svelte";

	let nearestPoints: any[][];
	let cursorPosition: number;
</script>

<Posts {nearestPoints} {cursorPosition} />
<Timeline bind:cursorPosition bind:nearestPoints on:notify />
