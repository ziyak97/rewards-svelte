<script lang="ts">
	export let id: number;
	export let title: string;
	export let imageUrl: string;
	export let backgroundUrl: string;
	export let rating: number;
	export let appSize: number;
</script>

<div class="container">
	<div class="avatars">
		<span><div><span>+5</span></div></span>
		<span><img src="avatar2.jpg" alt="profile" /></span>
		<span><img src="avatar3.jpg" alt="profile" /></span>
	</div>
	<article class="card">
		<img class="background" src={backgroundUrl} alt="background" />
		<div class="image"><img src={imageUrl} alt="logo" /></div>
		<h4>{title}</h4>
		<div class="stats">
			<span class="rating">⭐ {rating}</span>
			<span class="divider">|</span>
			<span class="size">{appSize} MB</span>
		</div>
		<div class="download"><img src="download.svg" alt="download" /></div>
	</article>
</div>

<style>
	img {
		width: 100%;
		height: 100%;
		border-radius: 1ch;
	}
	h4 {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		text-align: center;
		margin-top: 0.5ch;
		margin-bottom: 0.5ch;
	}
	.container {
		color: #fff;
		text-align: center;
	}

	.background {
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
	}
	.avatars {
		display: flex;
		justify-content: center;
		position: relative;
		top: 20px;
		font-size: 1.3rem;
	}
	.avatars > span {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		position: relative;
		background: #fff;
		border-radius: 50%;
		padding: 0.2ch;
	}
	.avatars > span:nth-child(1) {
		z-index: 100;
		left: 15px;
	}
	.avatars > span:nth-child(2) {
		z-index: 10;
	}
	.avatars > span:nth-child(3) {
		z-index: 1;
		left: -15px;
	}
	.avatars > span > div {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		width: 2.5ch;
		height: 2.5ch;
		background: #3883d1;
		border-radius: 50%;
	}
	.avatars > span > img {
		width: 2.5ch;
		height: 2.5ch;
		object-fit: cover;
		border-radius: 50%;
	}
	.avatars > span > div > span {
		font-size: 0.9rem;
	}
	.card {
		border-radius: 1.5ch;
		padding: 1ch;
		width: 15ch;
		height: 20ch;
		position: relative;
	}

	.image {
		width: 6ch;
		height: 6ch;
		background: darkturquoise;
		margin: 2ch auto 0;
		border-radius: 1ch;
	}

	.stats {
		font-size: 0.8rem;
		margin-top: 0.5ch;
	}

	.download {
		display: inline-block;
		margin-top: 2ch;
		padding: 0.5ch 3.5ch;
		background: #fff;
		border-radius: 1ch;
	}

	.download img {
		width: 2ch;
		height: 2ch;
		border-radius: 0;
	}

	.rating {
		color: rgb(223, 223, 0);
	}

	.divider {
		color: #aaa;
	}

	.size {
		color: #eee;
	}
</style>
