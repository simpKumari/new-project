//closure me child parent ko bs access krskta 
// function greet(name) {
//     return function() {
//       return "Hello, " + name + "!";
//     };
//   }
  
//   let sayHello = greet("Simpi");
//   console.log(sayHello()); // "Hello, Simpi!"
  
  //Q2. Counter with Closure
  function counter(){
    let count=0;
    return function(){
        count++;
        return count;
    }
  }
let count=counter();
console.log(count());
console.log(count());
console.log(count());

