// forEach2
Array.prototype.forEach2 = function (callback, thisArg) {
    const length = this.length;
    for (let i = 0; i < length; i++) {
        if (i in this) {
            callback.call(thisArg, this[i], i, this);
        }
    }
};

// find2
Array.prototype.find2 = function (callback, thisArg) {
    const length = this.length;
    for (let i = 0; i < length; i++) {
        const result = callback.call(thisArg, this[i], i, this);
        if (result) return this[i];
    }
};

// findIndex2
Array.prototype.findIndex2 = function (callback, thisArg) {
    const length = this.length;
    for (let i = 0; i < length; i++) {
        const result = callback.call(thisArg, this[i], i, this);
        if (result) return i;
    }
    return -1;
};

// every2
Array.prototype.every2 = function (callback, thisArg) {
    const length = this.length;
    for (let i = 0; i < length; i++) {
        if (i in this) {
            if (!callback.call(thisArg, this[i], i, this)) return false;
        }
    }
    return true;
};

// some2
Array.prototype.some2 = function (callback, thisArg) {
    const length = this.length;
    for (let i = 0; i < length; i++) {
        if (i in this) {
            if (callback.call(thisArg, this[i], i, this)) return true;
        }
    }
    return false;
};

// filter2
Array.prototype.filter2 = function (callback, thisArg) {
    const length = this.length;
    let result = [];

    for (let i = 0; i < length; i++) {
        if (i in this) {
            if (callback.call(thisArg, this[i], i, this)) {
                result.push(this[i]);
            }
        }
    }
    return result;
};

// map2
Array.prototype.map2 = function (callback, thisArg) {
    const length = this.length;
    let result = new Array(length);

    for (let i = 0; i < length; i++) {
        if (i in this) {
            result[i] = callback.call(thisArg, this[i], i, this);
        }
    }
    return result;
};

// reduce2
Array.prototype.reduce2 = function (callback, initValue) {
    const length = this.length;
    let hasInit = arguments.length > 1;
    let accumulator = initValue;

    for (let i = 0; i < length; i++) {
        if (!(i in this)) continue;

        if (hasInit) {
            accumulator = callback(accumulator, this[i], i, this);
        } else {
            accumulator = this[i];
            hasInit = true;
        }
    }

    if (!hasInit) {
        throw new Error('Reduce of empty array with no initial value');
    }

    return accumulator;
};

// Test cases for all functions
const numbers = [1, 2, 3, 4];
const arr = [, 10, , 30];
const pets = ['cat', , 'dog', 'fish'];
const mixed = [0, null, undefined, '', 'hello', 42];
const users = [
    { name: 'Alice', age: 22 },
    { name: 'Bob', age: 17 },
    { name: 'Charlie', age: 30 },
];

// ---------- forEach2 ----------
console.log('-------------- forEach2 --------------');

let result = [];
numbers.forEach2((num) => result.push(num * 2));
console.log(result);

arr.forEach2((value, i) => console.log(`index ${i}:`, value));

pets.forEach2((pet) => console.log(pet));

// ---------- find2 ----------
console.log('-------------- find2 --------------');

console.log(numbers.find2((num) => num > 2));

console.log(users.find2((user) => user.name === 'Alice'));

console.log(pets.find2((pet) => pet === 'cat'));

// ---------- findIndex2 ----------
console.log('----------- findIndex2 -----------');

console.log(numbers.findIndex2((num) => num === 3));

console.log(users.findIndex2((user) => user.age < 18));

console.log(pets.findIndex2((value) => typeof value === 'undefined'));

// ---------- every2 ----------
console.log('-------------- every2 --------------');

console.log(numbers.every2((value) => typeof value === 'number'));

console.log(users.every2((user) => user.age < 18));

console.log(pets.every2((value) => typeof value === 'string'));

// ---------- some2 ----------
console.log('-------------- some2 --------------');

console.log(numbers.some2((num) => num > 3));

console.log(pets.some2((pet) => typeof pet === 'undefined'));

console.log(users.some2((user) => user.name === 'Bob'));

// ---------- map2 ----------
console.log('---------------- map2 ----------------');

console.log(numbers.map2((num) => num * 2));

console.log(arr.map2((num) => num * 2));

console.log(pets.map2((str) => (str ? str.toUpperCase() : str)));

// ---------- filter2 ----------
console.log('-------------- filter2 --------------');

console.log(numbers.filter2((num) => num % 2 === 0));

console.log(mixed.filter2((value) => Boolean(value)));

console.log(users.filter2((user) => user.age >= 18));

// ---------- reduce2 ----------
console.log('-------------- reduce2 --------------');

console.log(numbers.reduce2((acc, num) => acc + num));

console.log(numbers.reduce2((acc, num) => acc * num, 1));

console.log(
    users.reduce2((acc, user) => {
        acc.push(user.name);
        return acc;
    }, [])
);
