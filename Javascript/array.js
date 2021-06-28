'use strict';

// 비슷한 종류를 다 담아놓는 것을 자료구조
// object(property만 존재)
// 자료구조(비슷한 타입의 object를 묶어넣는 것 - 동일한 타입만 묶을 수 있음 but JS는... 추천은 x)

// Array

// 1. declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index postion
const fruits = ['🍎', '🍉'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);

// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// b. for of
for (let fruit of fruits) {
    console.log(fruit);
}
// c. forEach
fruits.forEach(function (fruit, index, array){
    console.log(fruit, index, array);
});

fruits.forEach((fruit, index) => { // 함수 이름 없는 경우 arrow function 가능
    console.log(fruit, index);
});

fruits.forEach((fruit, index) => console.log(fruit, index)); // arrow function 한 줄인 경우 {} 없앨 수 있음

// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push('🍓', '🍒');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
fruits.pop()
console.log(fruits);

// unshift: add an timen to the beginning
fruits.push('🍌', '🍑');
console.log(fruits);

// shift: remove an item from the beginnig
fruits.shift();
fruits.shift();
console.log(fruits);
// note!! shift, unshift are slower than pop, push
// 전체 데이터가 움직여야하는 경우 느리다! -> 빅오

// splice: remove an item by index position
fruits.push('🍍', '🍋', '🍈');
console.log(fruits);
fruits.splice(3); // start 점 이후 아무것도 지정 안하면 start 지점부터 뒤는 싹 다 없어짐
console.log(fruits);
fruits.push('🍍', '🍋', '🍈');
fruits.splice(1, 2);
fruits.splice(1, 0, '🍏', '🍐'); // 데이터를 지우지는 않고 넣기만 가능
fruits.splice(2, 1, '🥑', '🍇'); // splice로 지우고 그 자리에 추가도 됨 
console.log(fruits);

// combine two arrays
const fruits2 = ['🥝', '🥭'];
const newFruits =  fruits.concat(fruits2); // 서로 array 합치는 것
console.log(newFruits);

// 5. Searching
// indexOf: find the index
console.clear();
console.log(fruits.indexOf('🍎')); // 해당 값 없으면 -1
console.log(fruits.indexOf('🍍')); // 해당 값의 인덱스 출력
console.log(fruits.indexOf('🥥'));

// include
console.log(fruits.includes('🥥')); // 해당값 유무
console.log(fruits.includes('🍇'));

//lastIndexOf
console.clear();
fruits.push('🍍');
console.log(fruits);
console.log(fruits.indexOf('🍍')); // 중복된 값 중 가장 처음에 있는 것
console.log(fruits.lastIndexOf('🍍')); // 중복된 값 중 가장 끝에 있는 것

