<script lang="ts">
	import RewardsCard from './RewardsCard.svelte';
	import { total } from '$lib/stores/RewardsStore';
	import { rewards } from '$lib/stores/RewardsStore';
</script>

<div class="container">
	<div class="redeem-container">
		<h4>Reedem your points now</h4>
		<div class="redeem-button">{$total} Points 💸</div>
	</div>
	{#each $rewards as reward}
		<RewardsCard {...reward} />
	{/each}
</div>

<style>
	h4 {
		font-weight: 400;
		color: #555;
	}
	.container {
		display: grid;
		grid-template-columns: 1fr;
		padding: 1rem;
		/* grid-row-gap: 2ch; */
	}

	.redeem-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.redeem-button {
		background-image: linear-gradient(to right, #ffd423, #fdb951);
		padding: 0.7ch 1ch;
		border-radius: 1ch;
		font-size: 1.1rem;
		cursor: pointer;
	}
</style>
