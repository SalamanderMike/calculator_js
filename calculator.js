// Calculator
// Michael McClure
window.onload = function() {
  var equation = "";
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
      equation += (one.innerHTML);
      alert(equation);
  }
  two.onclick = function(event) {
      equation += (two.innerHTML);
      alert(equation);
  }
  three.onclick = function(event) {
      equation += (three.innerHTML);
      alert(equation);
  }
  four.onclick = function(event) {
      equation += (four.innerHTML);
      alert(equation);
  }
  five.onclick = function(event) {
      equation += (five.innerHTML);
      alert(equation);
  }
  six.onclick = function(event) {
      equation += (six.innerHTML);
      alert(equation);
  }
  seven.onclick = function(event) {
      equation += (seven.innerHTML);
      alert(equation);
  }
  eight.onclick = function(event) {
      cequation += (eight.innerHTML);
      alert(equation);
  }
  nine.onclick = function(event) {
      equation += (nine.innerHTML);
      alert(equation);
  }
  zero.onclick = function(event) {
      equation += (zero.innerHTML);
      alert(equation);
  }
// Click Operands
  add.onclick = function(event) {
      equation += (" + ");
      alert(equation);
  }
  subtract.onclick = function(event) {
      equation += (" - ");
      alert(equation);
  }
  multiply.onclick = function(event) {
      equation += (" * ");
      alert(equation);
  }
  divide.onclick = function(event) {
      equation += (" / ");
      alert(equation);
  }
// Click Finals
  clear.onclick = function(event) {
      equation = "";
      alert("Memory Cleared!");
  }
  enter.onclick = function(event) {
      alert(eval(equation));
  }
   

}
