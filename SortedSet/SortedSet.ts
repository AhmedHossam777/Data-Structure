type Player = { name: string; score: number };

let sortedSet: Player[] = [];

const addPlayer = (name: string, score: number): void => {
	const existedPlayer = sortedSet.find((player) => player.name === name);
	if (existedPlayer) {
		existedPlayer.score = score; // update score
	} else {
		sortedSet.push({ name, score });
	}

	sortedSet.sort((a, b) => a.score - b.score);
};

// function to get the rank of the player
const getRank = (name: string): number => {
	return sortedSet.findIndex((player) => player.name === name);
};

// Function to get players within a score range
function getPlayersByScore(minScore: number, maxScore: number): Player[] {
	return sortedSet.filter(
		(player) => player.score >= minScore && player.score <= maxScore,
	);
}

// Example usage
addPlayer('Alice', 1000);
addPlayer('Bob', 1500);
addPlayer('Charlie', 900);

console.log('Sorted Set:', sortedSet);
console.log('Rank of Alice:', getRank('Alice')); // Output: 1
console.log(
	'Players with score between 900 and 1200:',
	getPlayersByScore(900, 1200),
);