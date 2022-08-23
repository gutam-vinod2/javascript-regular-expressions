let text = "visit MDN";
let pattern =/MDN/i;
let result = text.match(pattern);

document.getElementById("demo").innerHTML = result;