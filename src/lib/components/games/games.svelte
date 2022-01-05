<script>
	import HorizontalScroller from '$lib/components/horizontal-scroller/HorizontalScroller.svelte';
	import GameFullCard from '$lib/components/games/GameFullCard.svelte';
	import GameBannerCard from '$lib/components/games/GameBannerCard.svelte';
	import GameAvatarCard from '$lib/components/games/GameAvatarCard.svelte';
	import { gameBannersTournament, gameBannersStream, socialGames } from '$lib/stores/GamesStore';
</script>

<svelte:head>
	<title>Game Center</title>
</svelte:head>

<GameFullCard />

<HorizontalScroller title="Live Tournaments">
	{#each $gameBannersTournament as gameBanner (gameBanner.id)}
		<GameBannerCard {...gameBanner} />
	{/each}
</HorizontalScroller>

<HorizontalScroller title="Play with your friends">
	{#each $socialGames as socialGame (socialGame.id)}
		<GameAvatarCard {...socialGame} />
	{/each}
</HorizontalScroller>

<HorizontalScroller title="Live Stream">
	{#each $gameBannersStream as gameBanner (gameBanner.id)}
		<GameBannerCard {...gameBanner} />
	{/each}
</HorizontalScroller>
