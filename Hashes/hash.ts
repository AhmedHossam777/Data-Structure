//! Using an object as a hash

let hash: { [key: string]: string } = {};

// Insertion
hash['name'] = 'Ahmed';
hash['occupation'] = 'Software Engineer';

console.log(hash); // { name: 'Ahmed', occupation: 'Software Engineer' }

// Retrieval
const Name = hash['name'];
console.log(Name); // Ahmed
const occupation = hash['occupation'];
console.log(occupation); // "Software Engineer"

// Update
hash['name'] = 'Hossam';
console.log(hash); // { name: 'Hossam', occupation: 'Software Engineer' }

// deletion
delete hash['occupation'];
console.log(hash); // { name: 'Hossam' }

// Membership Testing
const hasName = 'name' in hash;
console.log(hasName); // true

const hasOccupation = 'occupation' in hash;
console.log(hasOccupation); // false

// Iterating over keys and values
for (let key in hash) {
	console.log(`${key}: ${hash[key]}`);
}

// Using a Map for similar functionality

// Map <key, value>
let map: Map<string, string> = new Map();

// Insertion
map.set('name', 'Ahmed');
map.set('occupation', 'Software Engineer');
console.log(map); // Map(2) { 'name' => 'Ahmed', 'occupation' => 'Software Engineer' }

// Retrieval
const nameFromMap = map.get('name');
console.log(nameFromMap); // Ahmed
const occupationFromMap = map.get('occupation');
console.log(occupationFromMap); // Software Engineer

// Update
map.set('name', 'Hossam');

// Deletion
map.delete('occupation');

// Membership Testing
const hasNameInMap = map.has('name'); // true
const hasOccupationInMap = map.has('occupation'); // false

console.log(hasNameInMap); // true
console.log(hasOccupationInMap); // false

// Iterating over keys and values
for (let [key, value] of map) {
	console.log(`${key}: ${value}`);
}
// Output:
// name: Hossam