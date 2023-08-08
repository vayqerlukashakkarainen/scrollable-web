<script lang="ts">
	import Typewriter from "svelte-typewriter";

	export let texts: string[];
	export let delay: number;
	let currentText = 0;
</script>

<Typewriter {delay}>
	<p>{texts[currentText]}</p>
</Typewriter>

<style>
	p {
		padding: 0.2em 0.4em;
		background-color: #292929;
		color: #989898;
		width: fit-content;
		font-family: "Courier New", Courier, monospace;
		margin: 0;
		transition: all 200ms;
	}
</style>
