<script lang="ts">
	export let id: number;
	export let title: string;
	export let imageUrl: string;
</script>

<div>
	<div class="card"><img src={imageUrl} alt="banner" /></div>
	<h4>{title}</h4>
</div>

<style>
	img {
		width: 100%;
		height: 100%;
		border-radius: 1ch;
	}
	h4 {
		margin-top: 1ch;
		margin-bottom: 0;
		text-align: center;
	}

	.card {
		width: 25ch;
		height: 15ch;
		background: chocolate;
		border-radius: 1ch;
	}
</style>
