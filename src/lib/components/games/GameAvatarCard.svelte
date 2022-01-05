<div class="container">
	<div class="avatars">
		<span>😄</span>
		<span>😋</span>
		<span>🤗</span>
	</div>
	<article class="card">
		<div class="image"><img /></div>
		<h4>Ludo King TV</h4>
		<div class="stats">
			<span class="rating">⭐ 4.3</span>
			<span class="divider">|</span>
			<span class="size">8 MB</span>
		</div>
		<div class="download">🔥</div>
	</article>
</div>

<style>
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
	.avatars {
		position: relative;
		top: 10px;
		font-size: 1.3rem;
	}
	.avatars > span {
		position: relative;
		background: #fff;
		border-radius: 50%;
		padding: 0.5ch;
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
	.card {
		background: crimson;
		border-radius: 1.5ch;
		padding: 1ch;
		width: 15ch;
		height: 20ch;
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
		margin-top: 2ch;
		padding: 1ch 1.5ch;
		background: #fff;
		border-radius: 1ch;
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
