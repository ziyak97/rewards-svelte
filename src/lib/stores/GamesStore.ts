import { writable } from 'svelte/store';

const gameBannersTournamentData = [
	{
		id: 1,
		title: 'Jetpack Joyride',
		imageUrl: 'jetpack-joyride.jpeg'
	},
	{
		id: 2,
		title: 'Altos Odyssey',
		imageUrl: 'altos-odyssey.png'
	},
	{
		id: 3,
		title: 'Asphalt 9',
		imageUrl: 'asphalt-9.jpg'
	},
	{
		id: 4,
		title: 'Minecraft',
		imageUrl: 'minecraft-trial.jpg'
	}
];

const gameBannersStreamData = [
	{
		id: 1,
		title: 'Fortnite',
		imageUrl: 'fortnite.png'
	},
	{
		id: 2,
		title: 'PUBG',
		imageUrl: 'pubg.jpg'
	},
	{
		id: 3,
		title: 'Grid Autosport',
		imageUrl: 'grid-autosport.jpg'
	},
	{
		id: 4,
		title: 'Pokemon Go',
		imageUrl: 'pokemon-go.jpg'
	}
];

const socialGamesData = [
	{
		id: 1,
		title: 'Subway Surfers',
		imageUrl: 'subway-surfers.jpg',
		backgroundUrl: 'bg-purple.png',
		rating: 4.1,
		appSize: 84
	},
	{
		id: 2,
		title: "Where's My Water",
		imageUrl: 'wheres-my-water-logo.png',
		backgroundUrl: 'bg-yellow.png',
		rating: 4.5,
		appSize: 9.8
	},
	{
		id: 3,
		title: 'Temple Run',
		imageUrl: 'temple-run-logo.png',
		backgroundUrl: 'bg-red.png',
		rating: 4.4,
		appSize: 22
	},
	{
		id: 4,
		title: 'Cut The Rope',
		imageUrl: 'cut-the-rope-logo.jpg',
		backgroundUrl: 'bg-purple.png',
		rating: 3.9,
		appSize: 21
	}
];

function getGameBannersTournament() {
	const { subscribe } = writable(gameBannersTournamentData);

	return {
		subscribe
	};
}

function getGameBannersStream() {
	const { subscribe } = writable(gameBannersStreamData);

	return {
		subscribe
	};
}

function getSocialGames() {
	const { subscribe } = writable(socialGamesData);

	return {
		subscribe
	};
}

export const gameBannersTournament = getGameBannersTournament();
export const gameBannersStream = getGameBannersStream();
export const socialGames = getSocialGames();
