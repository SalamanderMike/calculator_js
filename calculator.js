// Calculator
// Michael McClure
// *** Clicks, push to array works
// *** calc() is in progress
window.onload = function() {
  var container = [];
  var equation = []
  var one = document.getElementById("one");
  var two = document.getElementById("two");
  var three = document.getElementById("three");
  var four = document.getElementById("four");
  var five = document.getElementById("five");
  var six = document.getElementById("six");
  var seven = document.getElementById("seven");
  var eight = document.getElementById("eight");
  var nine = document.getElementById("nine");
  var zero = document.getElementById("zero");
  var add = document.getElementById("add");
  var subtract = document.getElementById("subtract");
  var multiply = document.getElementById("multiply");
  var divide = document.getElementById("divide");
  var clear = document.getElementById("clear");
  var enter = document.getElementById("enter");

// Click Numbers
  one.onclick = function(event) {
      container.push(one.innerHTML);
      alert(container);
  }
  two.onclick = function(event) {
      container.push(two.innerHTML);
      alert(container);
  }
  three.onclick = function(event) {
      container.push(three.innerHTML);
      alert(container);
  }
  four.onclick = function(event) {
      container.push(four.innerHTML);
      alert(container);
  }
  five.onclick = function(event) {
      container.push(five.innerHTML);
      alert(container);
  }
  six.onclick = function(event) {
      container.push(six.innerHTML);
      alert(container);
  }
  seven.onclick = function(event) {
      container.push(seven.innerHTML);
      alert(container);
  }
  eight.onclick = function(event) {
      container.push(eight.innerHTML);
      alert(container);
  }
  nine.onclick = function(event) {
      container.push(nine.innerHTML);
      alert(container);
  }
  zero.onclick = function(event) {
      container.push(zero.innerHTML);
      alert(container);
  }
// Click Operations
  add.onclick = function(event) {
      equation.push(parseInt(container.join("")));
      equation.push(add.innerHTML);
      container = [];
      alert(equation); // *** Call calc() when working ***
  }
  subtract.onclick = function(event) {
      equation.push(parseInt(container.join("")));
      equation.push(subtract.innerHTML);
      container = [];
      alert(equation);
  }
  multiply.onclick = function(event) {
      equation.push(parseInt(container.join("")));
      equation.push(multiply.innerHTML);
      container = [];
      alert(equation);
  }
  divide.onclick = function(event) {
      equation.push(parseInt(container.join("")));
      equation.push(divide.innerHTML);
      container = [];
      alert(equation);
  }
// Click Finals
  clear.onclick = function(event) {
      container = [];
      equation = [];
      alert("Memory Cleared!");
  }
  enter.onclick = function(event) {
      alert(enter.innerHTML);
  }
   
// Calculation  *** In Progress ***
var array = [20,"+",20,"-",10]

var calc = function(equation){
  for (var num in equation) {
    switch (equation[num]) {
      case "+": 
        var container = (equation[0] + equation[2]);
        equation = equation.splice(0, 3,); // *** Not working!!! Why?
console.log(equation); // test print

        equation.unshift(container);
console.log(equation); // test print
        break;
      case "-": 
        var container = (equation[0] - equation[2]);
        equation = equation.splice(0, 3);// *** Not working!!! Why?
        equation.unshift(container);
        break;
      case "*": 
        var container = (equation[0] * equation[2]);
        equation = equation.splice(0, 3);// *** Not working!!! Why?
        equation.unshift(container);
        break;
      case "/": 
        var container = (equation[0] / equation[2]);
        equation = equation.splice(0, 3); // *** Not working!!! Why?
        equation.unshift(container);
        break;
    };
  };

  return container;
}

}
