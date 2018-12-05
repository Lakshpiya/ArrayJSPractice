// Array.MAP Practice

console.log("Array.MAP Practice");

console.log("**************************");
let items=["A","B","C"];
items.forEach(function(el,index){
console.log("a["+index+"]=",el);

},this);
console.log("**************************");

let mapItm=["A","B"];
const mapItms=mapItm.map(a=>a+"EK");
console.log(mapItms);

console.log("**************************");

let mapItmnum=[1,2,3,4];
const mapItmsnum=mapItmnum.map(a=>a*2);
console.log(mapItmsnum);

console.log("Mapping an array of numbers to an array of square roots");
var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
console.log(numbers);
console.log(roots);

console.log("Using map to reformat objects in an array");
var kvArray = [{key: 1, value: 10}, 
  {key: 2, value: 20}, 
  {key: 3, value: 30}];

var reformattedArray = kvArray.map(obj =>{ 
var rObj = {};
rObj[obj.key] = obj.value;
return rObj;
});
console.log(kvArray);
console.log(reformattedArray);

console.log("Mapping an array of numbers using a function containing an argument");
let numbr=[1,2,4];
let printNumber=numbr.map(function(el){
return el * 3;
})
console.log(numbr);
console.log(printNumber);

console.log("Using map generically");
console.log("This example shows how to use map on a String to get an array of bytes in the ASCII encoding representing the character values:");
var map = Array.prototype.map;
var a = map.call('Hello World', function(x) { 
  return x.charCodeAt(0); 
});
console.log(a);

console.log("Using map generically querySelectorAll");
/*var elems = document.querySelectorAll('select option:checked');
var values = Array.prototype.map.call(elems, function(obj) {
  return obj.value;
});
console.log(values);*/


let intNumber=['1', '2', '3'].map(parseInt);
console.log(intNumber);

function returnInt(element) {
  return parseInt(element, 10);
}

let printnumber=['1', '2', '3'].map(returnInt);
console.log(printnumber);

let abcz=['1', '5', '3'].map( str => parseInt(str) );
console.log(abcz);

let xyz=['11', '21', '31'].map(Number);
console.log(xyz);

let xs = ['10', '10', '10'];

xs = xs.map(parseInt);

console.log(xs);

var arr = [{x:1},{x:2},{x:4}];

      arr.reduce(function (a, b) {
        return {x: a.x + b.x};
      });

      console.log(arr);

      var Person = { "name" : "Amy", "Age" : 15 }
console.log(Person.Age);

console.log("**********************");
console.log("JSON object mapping");

var orders = [ { "name" : "chain", "description" : "necklace chain", "status": "shipped"} , {"name": "pen", "description" : "ball pen", "status": "shipped"}, {"name": "book", "description" : "travel diary", "status": "delivered"},{"name": "brush", "description" : "paint brush", "status": "delivered"}];
console.log(orders); 
var orderInfo = orders.map(function(order) {
 if( order.status === "delivered"){
     var info = { "orderName": order.name,
                  "orderDesc": order.description
                 }
     return info;
 }
});
console.log(orderInfo);


var persons = [
  {firstname : "Malcom", lastname: "Reynolds"},
  {firstname : "Kaylee", lastname: "Frye"},
  {firstname : "Jayne", lastname: "Cobb"}
];

let test=persons.map(function(el){
      return [el.firstname,el.lastname].join(" ");
});

console.log(test);

console.log("Array.prototype.filter");

var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);
console.log(words);
console.log(result);

function isBigEnough(value) {
  return value >= 10;
}

var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
console.log(filtered);

console.log("Filtering invalid entries from JSON");
var arrFil = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  { },
  { id: null },
  { id: NaN },
  { id: 'undefined' }
];

var filtrresult=arrFil.filter(function(el){
  if(el.id !== undefined && typeof(el.id) === 'number' && !isNaN(el.id))
  {
    return  el;
  }
});
console.log(filtrresult);
console.log("Searching in array");
var fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];
var fruitFilteresult=fruits.filter(function(el){
  return el.toLowerCase().indexOf('ap') > -1;
  
}).map(a=>"KALIKA:::"+a);
console.log(fruitFilteresult);
console.log("Array.prototype.find");


var array1 = [5, 12, 8, 130, 44];

var found = array1.find(function(element) {
  return element > 10;
});

console.log(found);

const inventory = [
  {name: 'apples', quantity: 2},
  {name: 'bananas', quantity: 0},
  {name: 'cherries', quantity: 5}
];

const resultINV = inventory.find( fruit => fruit.name === 'cherries' );

console.log(resultINV) 

console.log("Array.prototype.findIndex");
var array1 = [5, 12, 8, 130, 44];

function findFirstLargeNumber(element) {
  return element > 13;
}

console.log(array1.findIndex(findFirstLargeNumber));

console.log("Array.prototype.some");
console.log("The some() method tests whether at least one element in the array passes the test implemented by the provided function.");
var array = [1, 2, 3, 4, 5];

var even = function(element) {
  // checks whether an element is even
  return element % 2 === 0;
};

console.log(array.some(even));

var fruits = ['apple', 'banana', 'mango', 'guava'];

function checkAvailability(arr, val) {
  return arr.some(function(arrVal) {
    return val === arrVal;
  });
}

console.log(checkAvailability(fruits, 'kela'));   
console.log(checkAvailability(fruits, 'banana'));







