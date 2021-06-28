'use strict';
// object-oriented programming
// class: template
// object: instance of a class
// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
    // constructor
    constructor(name, age) {
    // fields
    this.name = name;
    this.age = age;
    }

    // methods
    speak() {
        console.log(`${this.name}: hello!`)
    }
}

// 새로운 object 만들 때 new를 사용
const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2. Getter and setters 잘못된 설정에도 방어적으로 만들 수 있는 것
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() { // 값을 리턴
        return this._age;
    }

    set age(value) { // 값을 설정해야 해서 value가 있어야 함
        // if (value < 0) {
        //     throw Error('age can not be negative');
        // } 공격적인 것
        this._age = value < 0 ? 0 : value;
        // age라는 getter를 정의하는 순간 this.age는 getter를 호출
        // setter를 정의하는 순간 바로 메모리를 할당하는 것이 아닌 setter를 호출
        // 그런데 기존의 것과 getter, setter 이름이 같으면 setter 안에서 반복되어 call stack이 됨
        // 따라서 getter와 setter에는 이름을 다르게 해야 함
    }
}

const user1 = new User('steav', 'job', -1);
console.log(user1.age);

// 3. Fields (public, private)
// to soon!
class Experiment {
    pulicField = 2; // 외부 접근 가능
    #privateField = 0; // class 내부에서만 접근 가능하고 보여지고 변경 가능
}

const experiment = new Experiment();
console.log(experiment.pulicField);
console.log(experiment.privateField); // undefined

// 4. Static properties and methods
// to soon!
class Article {
    static publisher = 'subin'; // object에 상관없이 class가 가지고 있는 고유하며 반복적으로 사용되는 값
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }
    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher); // class 자체에 할당
Article.printPublisher();

// 5. Inheritance (상속)
// a way for one class to extend another class.
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color!`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {} // shape에 있는 모든 것을 그대로 가져옴
class Triangle extends Shape { // 필요한 함수만 다시 재사용 overwrithing
    draw(){
        super.draw(); // overwrithing을 했을 때 부모의 method는 지워지는 데 부모까지 같이 표현하기 위해
        console.log('🔺');
    }
    getArea() {
        return (this.width * this.height) / 2;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle); // T
console.log(triangle instanceof Rectangle); // F
console.log(triangle instanceof Triangle); // T
console.log(triangle instanceof Shape); // T
console.log(triangle instanceof Object); // T 모든 Object class는 Object 상속

// JS reference MDN 페이지 확인해보기
