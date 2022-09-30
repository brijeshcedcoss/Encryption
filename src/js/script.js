function output() {
var input = document.getElementById("input").value;
 var rev = ""
  for (let i = 0; i < input.length; i++) {
    var charcod = input.charCodeAt(i);
    rev += String.fromCharCode(charcod+1);
  }
  document.getElementById("output").innerHTML = rev;
}
