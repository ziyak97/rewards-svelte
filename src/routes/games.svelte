<script>
	import HorizontalScroller from '$lib/components/horizontal-scroller/HorizontalScroller.svelte';
	import GameFullCard from '$lib/components/games/GameFullCard.svelte';
	import GameBannerCard from '$lib/components/games/GameBannerCard.svelte';
	import GameAvatarCard from '$lib/components/games/GameAvatarCard.svelte';
</script>

<svelte:head>
	<title>Game Center</title>
</svelte:head>

<GameFullCard />

<HorizontalScroller title="Live Tournament">
	<GameBannerCard />
	<GameBannerCard />
	<GameBannerCard />
	<GameBannerCard />
	<GameBannerCard />
	<GameBannerCard />
	<GameBannerCard />
	<GameBannerCard />
	<GameBannerCard />
</HorizontalScroller>

<HorizontalScroller title="Play with your friends" style="background: #efefef">
	<GameAvatarCard />
	<GameAvatarCard />
	<GameAvatarCard />
	<GameAvatarCard />
	<GameAvatarCard />
	<GameAvatarCard />
	<GameAvatarCard />
	<GameAvatarCard />
	<GameAvatarCard />
</HorizontalScroller>

<HorizontalScroller title="Live Stream">
	<GameBannerCard />
	<GameBannerCard />
	<GameBannerCard />
	<GameBannerCard />
	<GameBannerCard />
	<GameBannerCard />
	<GameBannerCard />
	<GameBannerCard />
	<GameBannerCard />
</HorizontalScroller>
