<script lang="ts">
	import Typer from "./typer.svelte";

	export let texts: string[];
	export let title: string;
	export let typerDelay: number;
</script>

<div>
	<Typer {texts} delay={typerDelay} />
	<h3>{title}</h3>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
	}
</style>
