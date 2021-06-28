// 1. Use strict
// added in ES 5
// Use this for Vanilla Javascript

'use strict';

// 2. Variable rw(read/write)
// let (added in ES6)

// global 변수(블럭 밖)는 어플리케이션이 실행되고 끝날때까지 실행되서 최소한으로 쓰는 것이 좋음
// 가능한 class나 함수, if, for로 필요한 부분에서만 정의해서 쓰기

// 자바스크립트에서 변수를 실행시킬 수 있는 딱 하나의 방법 'let' EX6에 추가됨
// var을 변수 선언하기 위해 쓴다면 값을 선언하기도 전에 쓸 수도 있어서 문제가 생기며 블럭 스콥도 가지지 않음
// var hoisting (move declaration from bottom to top)
// var has no block scope

let globalName = 'global name'; 

{
    let name = 'ellie';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
    
}
console.log(name);
console.log(globalName);

// 3. Constants
// 값이 한번 할당 시 바뀌지 않음 (immutable) <-> mutable 'let'
// favor immutable data type always for a few reason:
//  - security
//  - thread safety (다양한 thread가 접근해서 값이 변하지 않는 것이 좋음)
//  - reduce human mistakes

const daysInWeek = 7;
const maxNumber = 5;

// 4. Variable types
// primitive, signle item: number, string, boolean, null, undefined, symbol
// Object, box container
// function, first-class function (함수도 데이터 타입 중 하나 - 함수의 인자로도 전달, 함수의 return type으로 함수를 전달할 수 있음 )
// 자바스크립트의 경우 숫자는 number만쓰고 심지어 선언하지도 않아도 됨

const count = 17; // integer
const size = 17.1; // decimal numger
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric values: infinity, -infinity, Not a Number
const infinity = 1 / 0;
const negativeInfinity  = -1 / 0;
const nAn = 'not a number' / 2; // NA값 출력
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet) - 기존 범위를 벗어나는 숫자 데이터 타입 (크롬, 파이어폭스만 지원)
const bigInt = 1231314332532224242404023593573257n; // over (-2**53) ~ (2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// stirng
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!;` //template literals (Stirng) `원하는 string ${변수}` -> ${변수}에는 변수 값이 나옴
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// bollean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined 아무것도 지정되지 않은 상태 혹은 undefined로 지정
let x = undefined;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create uniwue identifiers for objects 
// 맵이나 다른 자료구조에서 고유한 식별자가 필요하거나 
// 아니면 동시다발적으로 일어날 수 있는 코드에 우선적으로 주고 싶을 때 고유 id 부여
// 주어진 식별자와 상관없이 다른 심볼로 만들어짐
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
// 식별자가 똑같다면 동일한 심볼을 만들고 싶을 때
const gsymbol1 = Symbol.for('id');
const gsymbol2 = Symbol.for('id');
console.log(gsymbol1 === gsymbol2);
// 바로 출력하면 에러나서 .description으로 string으로 변환시켜야 함
console.log(`value: ${symbol1.description}, type: ${typeof Symbol1}`);

// object, real-life object, data structure
const ellie = {name: 'ellie', age: 20}; // ellie는 변환 불가하지만 ellie object 안의 변수는 변환 가능
ellie.age = 21;

// 6. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`); // 숫자열로 변환
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`); // 스트링으로 변환
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`); // 숫자와 숫자가 들어있는 스트링이라 숫자열로 변환

// 런타임에 타입이 정해져서 문제가 발생한 경우가 많음
// 이러한 이유로 TS가 나오게 됨!!