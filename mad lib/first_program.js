var verb = ["run","play","jump","read","laugh","breathe","fly"];
var noun = ["dog","cat","bird","lion","wolf","house","rock group"];
var adj = ["kind","cold","smart","beautiful","glowing","fragrant","fantastic"];

mkstr();

function mkstr(){
	var v1 = verb[mkrnd()];
	var n1 = noun[mkrnd()];
	var n2 = noun[mkrnd()];
	var a1 = adj[mkrnd()];
	var a2 = adj[mkrnd()];

	while (n1 == n2){
		n2 = noun[mkrnd()];
	}

	while (a1 == a2){
		a2 = adj[mkrnd()];
	}

	var outputstr = "I like to " + v1 + ". My favorite " + n1 + " is " + a1 + " " + n2 + ". That's what makes me " + a2 + ".";
	console.log(outputstr);
	alert(outputstr);
}

function mkrnd(){
	var rndNum = Math.floor((Math.random())*7);
	return rndNum;
}
