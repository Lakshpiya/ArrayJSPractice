console.log("spread prac");

let a=[1,2,3]
let b=[4,5,6,...a,7]
console.log(b);

let x=[1,2,3]
let y=[2,...x]
console.log(x)
console.log(y)

function print(...z){
	console.log(z); 
}
print(1,2,3)

class User{
    constructor(name,age) {
        this.name  = name;
        this.age = age;
    }

    getData() {
        console.log(this.name + " is " + this.age + " years old !");
    }
}

var user = new User("foo", 7);
user.getData();

//const numbers = [1, 2, 3];

//console.log(sum(...numbers));
// expected output: 6

//console.log(sum.apply(null, numbers));
// expected output: 6


function myFunction(v, w, x, y, z) { }
var args = [0, 1];
console.log(myFunction(-1, ...args, 2, ...[3]));


var arr = [1, 2, 3];
var arr2 = [...arr]; // like arr.slice()
arr2.push(4); 
console.log(arr2)


var a1 = [[1], [2], [3]];
var b1 = [...a];
b1.shift() // 1
// Now array a is affected as well: [[], [2], [3]]
console.log(a1)
console.log(b1)



var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
// Append all items from arr2 onto arr1
arr1 = arr1.concat(arr2);
console.log(arr1)

var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];

arr1 = [...arr1,...arr2]
console.log(arr1)

var sampleArr = [1, 2, 3, 4, 5].slice(2);
console.log(sampleArr)


var arr = [1, 2, 100, 12, -1];
var cutArr = arr.slice(1, 3);
console.log(cutArr)
