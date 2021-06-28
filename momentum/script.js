function sayHello(nameOfPerson, age) {
    console.log("Hello my name is " + nameOfPerson + " and I am " + age);
};

sayHello("subin", 24);


function plus(a, b) {
    console.log(a + b);
};

plus(1, 4);

function divide(a, b) {
    console.log(a / b);
};

divide(30, 7);


const player = {
    name: "subin",
    sayhello: function(otherPersonName){
        console.log("hello! " + otherPersonName);
    },
};

console.log(player.name);
player.sayhello("lynn");