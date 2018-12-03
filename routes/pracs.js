console.log("RAHUL::::EC6--Practice---ARRAY");
//MAP***FILTER*****FIND****FOREACH*****Some******EVERY*****//
////Array.prototype.every()
//Array.prototype.some()
//Array.prototype.find()
//Array.prototype.findIndex()
console.log("ARRAY:Classical JS way to render array item");

var Items=["A","B","C"];
for(var i=0;i<Items.length;i++)
    {
        console.log("Classical Way "+ Items[i]);
    }
console.log("ARRAY:Foreach");
Items.forEach(function(element,index,array) {
    console.log("ForEach "+ element + index + array[2]);
}, this);

console.log("ARRAY:Moduler Way");
Items.forEach(logArrayElements);
function logArrayElements(element, index, array) {
    console.log('a[' + index + '] = ' + element);
  }

  /*Skipping Items #
  In a for loop, you can use continue to skip the current item and break to end the loop altogether.  
  Because the forEach() methods run callback functions, you would use return to skip the current item. There is no way to break the loop completely.  
  For example, if you wanted to log all number to the console except for 2, you would do this.*/
  console.log("ARRAY:CallBack");
  Items.forEach(function(el){     
    if(el === "B") return;
    console.log ("Callback"+el);
  },this);

  console.log("ARRAY:Reverse Array");
  var reversItem=Items.reverse();
  reversItem.forEach(function(el,index){  
    console.log ('B[' + index + '] = ' + el);
  },this);

  console.log("ARRAY:Copy One Array Item To Other Array");
  const copyIArray = [];
  Items.forEach(function(el){
    copyIArray.push("Rahul "+ el);       
  },this);
  if(copyIArray.length > 0)
    {
        copyIArray.forEach(function(el,index){
            console.log ('B[' + index + '] = ' + el);
        },this)
    }
console.log("ARRAY:Modular Prototype Way");
function Counter(){
    this.sum = 0;
    this.count = 0;
    this.mul = 1;
    this.name="My name";
}
Counter.prototype.add=function(items){
    items.forEach(function(el){
               this.sum +=el;
               ++this.count;
    },this)
};
Counter.prototype.multi=function(items){
    items.forEach(function(el){
               this.mul *=el;
               ++this.count;
    },this)
};


const obj = new Counter();
obj.add([10,20,30]);
obj.multi([10,20,30]);
console.log("Add " + obj.sum);
console.log("Mul " + obj.mul);
console.log("Count " + obj.count);
console.log(obj.name + " is Rahul");