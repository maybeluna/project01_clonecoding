// prgram 내부에 functon 존재 
// Javascript는 절차지향 언어인데 절차지향 언어는 함수가 매우 중요
// input -> output, 언어자체 function, API를 사용할 때 이 함수의 이름을 보고 함수의 기능과 파라미터, 리턴 값을 예상할 수 있다.

// Function
// - fundamental building block in the program 
// - subprogram can be used multiple times (재사용 가능)
// - performs a task or calculates a value 

// 1. function declaration
// function name(param1, param2) { body... return;}
// one function === one thing (하나의 함수는 한 가지 일만 하도록)
// naming: doSomething, command, verb (동작하는 기능) 
// e.g. createCardAndPoint -> creatCard, creatPoint (두 가지가 있다면 세분화하는 것을 고민)
// function is object in JS (자바스크립트에서 function은 object - 변수에 할당 가능, 파라미터 전달, 함수 리턴 가능) -> 함수가 object라서 속성값 적용 가능
function printHello() {
    console.log('hello');
}
printHello();
function log(message) {
    console.log(message);
}
log('Hello');
// JS에는 타입이 없어서 메세지가 스트링인지 숫자인지 명확하지 않음 -> 혼란 (TypeScript는 명시 -> 웹페이지에서 사용해보기)

// 2. parameters
// primitive parameters: passed by value (메모리에 value 저장)
// object parameters: passed by reference (메모리에 reference 저장)
function changeName(obj) {
    obj.name = 'coder';
}
const ellie = {name: 'ellie'};
changeName(ellie);
console.log(ellie);
// 오브젝트는 레퍼런스로 전달되어 함수 안에서 오브젝트의 값을 변경하게 되면 변경된 사항 그대로 메모리 적용 추후 확인 가능

// 3. default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');
// parameters가 전달되지 않았을 때 기본으로 unknown을 사용

// 4. rest parameters (added in ES6)
function printAll(...args) { // dot이 3개면 array 형태
    for (let i = 0; i < args.length; i++) {
    console.log(arg[i]);
    }

    for (const arg of args) { // simple하게 적용
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg)); // more simple하게 적용
}
printAll('dream', 'coding', 'ellie');

// 5. local scope
let globalMessage = 'global'; // global variable
function printMessage() {
    let message = 'hello';
    console.log(message); // local variable (밖에서 출력하면 error)
    console.log(globalMessage);
    function printAnother() {
        console.log(message);
        let childMessage = 'hello'; // 자식 안의 변수도 자식 안에서만
    }
}
printMessage();
// 밖에서는 안이 보이지 않고, 안에서만 밖을 볼 수 있다는 원칙 지키기

// 6. return a value
function sum(a, b){
    return a + b;
}
const result = sum(1,2); // 3
console.log(`sum: ${sum(1, 2)}`);
// return이 없으면 return = undefined; 자동적으로 들어가 있음

// 7. early return, early exit (조건이 맞지 않을 때 return 해서 빨리 함수 종료시킥도록)
// bad
function ungradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic ...
    }
}
// good
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    // long upgrade logic...
}

// Furst-class function
// functions are treated like any other variable 함수는 변수에 할당이 되며
// can be assigned as a value to variable 함수의 인자로 전달되고
// can be passed as an argument to other functions. 함수의 리턴값을 전달 가능
// cna be returned by another function

// 1. function expression (함수를 할당하는 것)
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.
const print = function () { // anonymous function (함수 이름 없는 것)
    console.log('print');
};
print(); // 함수를 할당하면 함수처럼 사용 가능
const printAgain = print; // 함수 할당시 똑같은 함수를 가리킴
printAgain();

const print = function print() { // named function (함수 이름 있는 것)
    console.log('print');
};
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));
// function declaration과 function expression의 가장 큰 차이는 function expression은 할당 후에 호출 가능, function declaration 선언 전에 호출 가능

// 2. calback function using functino expression
function randomQuiz(answer, printYes, printNo) { // 상황이 맞으면 함수를 전달해서 전달된 함수를 부르는 것
    if (answer === 'love you') {
        printYes();
    } else{
        printNo();
    }
}
// anonymous function
const printYes = function (){
    console.log('yes!');
}
// named function - 디버깅할 때 함수이름 보기 위해, 함수 안에서 또 다른 함수 호출할 때 ; 
const printNo = function print(){
    console.log('no!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);
// 함수 이름 있을 때랑 변수로 줄 때 호출 차이???

// Arrow functon
// always anonymous
const simplePrint = function () {
    console.log('simplePrint!');
};
const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a + b;

const simpleMultiply = (a, b) => {
    //do something more
    return a * b
}; // 단 블럭쓰면 return 키워드 통해 값 return 해야 함

// IIFE: Immediately Invoked Function Expression
(function hello() {
    console.log('IIFE');
})();

// FUn quiz time
// function calculate(command, a, b)
// command: add, substract, divide, mjltiply, remainder

function calculate(command, a, b) {
    switch (command){
        case 'add':
            console.log(a + b);
            break;
        case 'subtract':
            console.log(a - b);
            break;
        case 'divide':
            console.log(a / b);
            break;
        case 'multiply':
            console.log(a * b);
            break;
        case 'remainder':
            console.log(a % b);
            break;
    }
}

// throw문은 현재 함수의 실행을 중지시키고 예외를 던지는 것

