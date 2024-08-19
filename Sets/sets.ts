const set1 = new Set([1, 2, 3, 4]);
const set2 = new Set([3, 4, 5, 6]);

set1.add(5);
console.log(set1); //Set(5) { 1, 2, 3, 4, 5 }

set1.delete(1);
console.log(set1); // Set(4) { 2, 3, 4, 5 }

// Check if set contains an element
const hasTwo = set1.has(2);
console.log(hasTwo); // true
const hasSeven = set2.has(7);
console.log(hasSeven); // false

// Union of two sets
const union = new Set([...set1, ...set2]);
console.log(union); // Set(5) { 2, 3, 4, 5, 6 }

// Intersection of two sets
const intersection = new Set([...set1].filter((x) => set2.has(x)));
console.log(intersection); // Set(3) { 3, 4, 5 }

// Difference of two sets -> set1 - set2
const difference = new Set([...set1].filter((x) => !set2.has(x)));
console.log(difference); // Set(1) { 2 }

// Symmetric Difference (elements in either set1 or set2, but not in both)
const symmetricDifference = new Set(
	[...set1]
		.filter((x) => !set2.has(x))
		.concat([...set2].filter((x) => !set1.has(x))),
);
console.log(symmetricDifference); // Set(2) { 2, 6 }