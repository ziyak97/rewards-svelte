<script lang="ts">
	export let title = '';
	export let style = '';
</script>

{#if !!title}
	<div class="title">
		<h3>{title}</h3>
		<span><img src="right-arrow.svg" alt="right-arrow" /></span>
	</div>
{/if}
<section class="container" {style}>
	<slot />
</section>

<style>
	img {
		width: 2.5ch;
		height: 2.5ch;
	}
	.title {
		--gap: 4ch;

		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-inline-start: calc(var(--gap) / 2);
		padding-inline-end: calc(var(--gap) / 2);
		padding-block-start: calc(var(--gap) / 2);
		padding-block-end: calc(var(--gap) / 4);
	}

	.title h3 {
		margin: 0;
		font-weight: 400;
	}
	.container {
		--gap: 4ch;
		--size: 150px;

		display: grid;
		grid-auto-flow: column;
		gap: calc(var(--gap) / 2);
		margin: 0;

		padding-inline-start: calc(var(--gap) / 2);
		padding-inline-end: calc(var(--gap) / 2);
		padding-block-end: calc(var(--gap) / 2);

		overflow-x: auto;
		overscroll-behavior-inline: contain;
		scroll-snap-type: inline mandatory;
		scroll-padding-left: var(--gap);
		scroll-padding-right: var(--gap);
		scroll-padding-inline: var(--gap);
		scroll-behavior: smooth;
	}

	.container > :global(*) {
		scroll-snap-align: start;
	}
</style>
