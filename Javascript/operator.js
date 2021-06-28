// 1. String concatenation
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals:

''''
1+2 = ${1 + 2}`);

// 특수문자 그대로 - \특수문자 
// enter - \n
// tab = \n\

console.log('ellie\'s \nbook');

// 2. Numeric operators
console.log(1 + 1); //add
console.log(1 - 1); //substract
console.log(1 / 1); //divide
console.log(1 * 1); //multiply
console.log(1 % 1); //remainder
console.log(1 ** 1); //exponentation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`preIncrement: ${postIncrement}, counter: ${counter}`);
const preDecrement = --counter;
// counter = counter - 1;
// preDecrement = counter;
console.log(`preIncrement: ${postIncrement}, counter: ${counter}`);
const postDecrement = counter--;
// postDecrement = counter;
// counter = counter - 1;
console.log(`preDecrement: ${postDecrement}, counter: ${counter}`);

// Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. Logical operators: || (or), && (and,), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or), finds the first truthy value 
// or이 true면 멈추기 때문에 계산이 복잡한 것을 제일 뒤에 두어야 함 
console.log(`or: ${value1 || value2 || check()}`);

function check(){
    for (let i = 0; i < 10; i++) {
        // wasting time
        console.log('😨');
    }
    return true;
}

// && (and), finds the first falsy value
// and 역시 하나라도 false면 멈추기 때문에 제일 연산이 복잡한 것을 뒤에 두어야 함
console.log(`and: ${value1 && value2 && check()}`);

function check(){
    for (let i = 0; i < 10; i++) {
        // wasting time
        console.log('😨');
    }
    return true;
}

// null 체크할 때 and로 확인
// oftne used to compress long if-statement
// nullableObject && nullableObject.something
// if (nullableObject != null) {
//     nullableObject.something;
// }

// ! (not)
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive); 

// object equality by reference
const ellie1 = {name: 'ellie'};
const ellie2 = {name: 'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2); // 다른 reference라서 false
console.log(ellie1 === ellie2); // reference 값이 달라 false
console.log(ellie1 === ellie3);

// equality - puzzler
console.log(0 == false); // true
console.log(0 === false); // false
console.log('' == false); // true
console.log('' === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false

// 8. Conditional operators: if
// if, else if, else
const name = 'df'; 
if (name === 'ellie') {
    console.log('Welcome, Ellie!');
} else if (name === 'coder') {
    console.log('You are amazing coder');
} else {
    console.log('unknown');
}

// 9. Ternary operator: ? (간단할 때)
// condition ? value1: value2; 
console.log(name === 'ellie' ? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}

// 11. lOOPS
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the conditions.
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);

// for llop, for(begin; condition; step)
for (i = 3; i > 0; i--) { // 기존에 있는 변수를 사용
    console.log(`for: ${i}`) ;
}

for (let i = 3; i > 0; i = i -2) {
    // inline variable declaration
    console.log(`inline variable for: ${i}`);
}

// nested loops 그러나 빅오가 n^2라서 별로 좋지는 않음
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j:${j}`);
    }
}

// break(루프 완전히 끝내기), continue(루프 지금것만 스킵하고 다음 루프로)
// Q1. iterate from 0 to 10 and print only even numbers
// (use continue)

for (let k = 0; k < 11; k++) {
    if (k % 2 !== 0) {
        continue;
    } 
    console.log(`q1. ${k}`);
}


// Q2. iterate from 0 to 10 and print numbers until reaching 8
// (use break)

for (let k = 0; k < 11; k++) {
    if (k === 8) {
        break;
    }
    console.log(`q2. ${k}`);
}    

// 루프 공급할 때 레이블도 있음 근데 bad smell이 난다!