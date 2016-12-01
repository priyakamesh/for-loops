for (var i = 5; i < 120; i+=10) {
	console.log(i);
}

for (var i = 4096; i >= 1; i = i/2) {
	console.log(i);
}

var president = ["George Washington", "John Adams", "Thomas Jefferson"]
 console.log (president);
 for (var i = 0; i < president.length; i++) {
 	console.log("President#" + (i+1) + " was " + president[i]);
 }

 var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}
 for (var prop in antSpecies) {
 	console.log (prop);
 }