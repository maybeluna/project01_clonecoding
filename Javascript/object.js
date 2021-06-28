'use strict';
// object
// one of the JS's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JS are instances of Object
// object = {key : value}; 변수(property)와 property가 가지고 있는 값


// 1. Literals and properties
// const obj 1 = {}; 'object literal' syntax (괄호로 object 만들기)
// const obj2 - new Object(); 'object constructor' syntax (class에서 new 이용하여 object 만들기)
function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const ellie = {name: 'ellie', age: 4};
print(ellie);

// with JS magic (dynamically typed language)
// can add properties later
ellie.hasJob = true; // JS는 뒤늦게 하나의 property 추가 가능 (피하기)
console.log(ellie.hasJob);

// can delete properties later
delete ellie.hasJob // JS는 뒤늦게 삭제 가능
console.log(ellie.hasJob);


// 2. Computed properties
// key should be always string
console.log(ellie.name); // 코딩하는 순간 그 키를 받아오고 싶을 때
console.log(ellie['name']); // 변수이름 ['string'] 형태로 접근 가능
// 정확히 어떤 키가 필요할 지 모를 때 (runtime에서 받아올 때)
ellie['hasJob'] = true; // computed properties에서 키 추가
console.log(ellie.hasJob);

function printValue(obj, key) {  
    console.log(obj[key]); // obj에 상응하는 key가 어떤 key일지 모름
}

printValue(ellie, 'name'); // key는 무조건 string
printValue(ellie, 'age');


// 3. Property value shorthand
const person1 = {name: 'bob', age: 2};
const person2 = {name: 'steve', age: 3};
const person3 = {name: 'dave', age: 4};
const person4 = makePerson('ellie', 30);
console.log(person4);
function makePerson(name, age) { // tamplete(class) 같은 느낌
    return {
        name, // key와 value의 이름이 동일하다면 생락 가능
        age,
    };
}


// 4. Constructor Fuction
function Person(name, age) { // 다른 계산 x 순수하게 object 생산 - 대문자 시작 및 return 생략)
    // this = {}; 생략
    this.name = name; 
    this.age = age; 
    // return this;
} 

const person5 = new Person('ellie', 30); // 호출할 때도 class 처럼 new ~~


// 5. in operator: property (해당하는 object에 key가 있는 지 확인)
console.log('name' in ellie);
console.log('random' in ellie);


// 6. for..in vs for..of
// for (key in obj) object 내부 순차적으로
console.clear(); // 이전 log 지우기
for (const key in ellie) {
    console.log(key);
};

// for (value of iterable) array 내부 순차적으로
const array = [1, 2, 4, 5];
for(const value of array) {
    console.log(value);
}


// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = {name: 'ellie', age: '20'}; 
const user2 = user;
user2.name = 'coder';
console.log(user); // 기존 것도 변경

// old way
const user3 = {};
for (const key in user) {
    user3[key] = user[key];
}
console.log(user3);

// new way
const user4 = {};
Object.assign(user4, user); // user와 user4 같이 return
console.log(user4);

const user5 = Object.assign(user4, user);
console.log(user5);

// onather example
const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2); // 뒤에 것이 덮어씌우므로 뒤에것으로 나옴
console.log(mixed.color);
console.log(mixed.size);

