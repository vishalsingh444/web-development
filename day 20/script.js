var a = 5;
let b = 6;

console.log(a,b);

// hoisting example
console.log(k); 
var k = 12;

var arr1 = [1,2,3,4,5];
var arr2 = arr1;
arr2.pop();


function hello(){
    console.log("hello 👋")
}

hello();

arr1 = [1,2,3,4,5,6,7,8,9];

// arr1.push(10);
// arr1.pop();
// arr1.shift();
arr1.unshift(0);

for(var i = 0;i<10;i++){
    hello();
}


var bike = {
    name: "kawasaki",
    price: "3 lakhs",
    mileage: "30kmpl"
}

console.log(bike);
console.log(bike.name);