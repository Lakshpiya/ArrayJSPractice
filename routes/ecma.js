(function(x, f = () => x) {
    var x;
    var y = x;
    x = 2;
    console.log(x, y, f());
    return [x, y, f()];
  })(10)
 //2 undeife,2
  


  let z, { z: y = 1 } = { z}; y;
console.log(z);
//un

//und,und
  (function() {
    let f = this ? class g { } : class h { };
    console.log(typeof f);console.log(typeof h);
    return [
      typeof f,
      typeof h
    ];
  })();

  (function() {
    return [
      (() => this.x).bind({ x: 'inner' })(),
      (() => this.x)()
    ]
  }).call({ x: 'outer' });

  console.log((typeof (new (class { class () {} }))))

  console.log(typeof (new (class F extends (String, Array) { })).substring);

  console.log([...[...'...']].length)

  //console.log(typeof (function* f() { yield f })().next().next());
  
  console.log(typeof `${{Object}}`.prototype)

  console.log(((xs, ...x)=>xs)(1,2,3));

  let arr = [ ];
for (let { x = 2, y } of [{ x: 1 }, 2]) { 
  arr.push(x, y);
}
console.log(arr)