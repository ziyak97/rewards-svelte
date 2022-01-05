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

export const gameBannersTournament = getGameBannersTournament();
export const gameBannersStream = getGameBannersStream();
