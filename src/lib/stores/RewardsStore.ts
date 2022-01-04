import { writable } from 'svelte/store';

const rewardsData = [
	{
		id: 1,
		title: 'Earn points by participating in a poll',
		points: 5,
		imageUrl:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtoIXfKWubfB1gxwTS7DfDDyKCxai8sAZMKQ&usqp=CAU',
		isClaimed: false
	},
	{
		id: 2,
		title: 'Earn points by sharing a review',
		points: 10,
		imageUrl:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtoIXfKWubfB1gxwTS7DfDDyKCxai8sAZMKQ&usqp=CAU',
		isClaimed: false
	},
	{
		id: 3,
		title: 'Earn points by participating in a survey',
		points: 10,
		imageUrl:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtoIXfKWubfB1gxwTS7DfDDyKCxai8sAZMKQ&usqp=CAU',
		isClaimed: false
	}
];

function createTotal() {
	const { subscribe, update } = writable(0);

	return {
		subscribe,
		increment: (val: number) => update((n) => n + val)
	};
}

function getRewards() {
	const { subscribe, update } = writable(rewardsData);

	return {
		subscribe,
		updateClaimStatus: (id: number) =>
			update((rewards) => {
				const reward = rewards.find((r) => r.id === id);
				if (reward) reward.isClaimed = true;

				return rewards;
			})
	};
}

export const total = createTotal();
export const rewards = getRewards();
