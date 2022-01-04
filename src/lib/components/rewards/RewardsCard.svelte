<script lang="ts">
	import { total } from '$lib/stores/RewardsStore';
	import { rewards } from '$lib/stores/RewardsStore';

	export let id: number;
	export let title: string;
	export let points: number;
	export let imageUrl: string;
	export let isClaimed: boolean;

	function handleClaimClick(id: number) {
		if (isClaimed) return;

		total.increment(points);
		rewards.updateClaimStatus(id);
	}
</script>

<div class="container">
	<div class="points-container">
		<h4>{title}</h4>
		{#if isClaimed}
			<span class="claimed">Claimed</span>
		{:else}
			<span>+{points}</span>
		{/if}
	</div>
	<article on:click={() => handleClaimClick(id)}>
		<img src={imageUrl} alt="rewards" />
	</article>
</div>

<style>
	h4 {
		font-weight: 400;
	}
	img {
		width: 100%;
		height: 100%;
		border-radius: 2ch;
	}
	article {
		width: 100%;
		height: 50vw;
		background-color: mediumseagreen;
		border-radius: 2ch;
	}

	.points-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.claimed {
		font-size: 0.8rem;
		color: green;
		font-weight: bold;
	}
</style>
