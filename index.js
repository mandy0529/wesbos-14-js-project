// start with strings, numbers and booleans

// Let's say we have an array

let name = 'minji';
let name2 = name;
console.log(name, name2);
name2 = 'cooper';
console.log(name, name2);

// and we want to make a copy of it.

let players = ['a', 'b', 'c', 'd'];
let team = players;
console.log(players, team);
players[3] = 'cooper';
team[3] = 'wendy';
console.log(players, team, '3');

// You might think we can just do something like this:

// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!

// one way

// or create a new array and concat the old one in

// or use the new ES6 Spread

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
let person = {
  name: 'Wes Bos',
  age: 80,
  social: {
    insta: '@minji',
  },
};

// and think we make a copy:

let captain = person;
captain.number = 100;
console.log(person);
console.log(captain, 'captain');
// how do we take a copy instead?

const person2 = {...person};
console.log(person2, 'person2');
person2.social.insta = '@gan';
console.log(person2, person, ' 이건뭐');

// We will hopefully soon see the object ...spread
let clonedArray = JSON.parse(JSON.stringify(person));
clonedArray.social.insta = '@ganchnged!';
console.log(clonedArray, 'clonedArray');
console.log(person, 'person');
// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
