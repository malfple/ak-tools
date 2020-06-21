var btCalc = document.getElementById("btCalc");
btCalc.addEventListener("click", calc);

const a = 90;
const b = 55;

function calc(){
	var bounties = document.getElementById("cb").value;
	var res = document.getElementById("res");

	res.innerHTML = "";

	var n = max_use(bounties);
	res.innerHTML += "Total bounties: " + bounties + "<br>";
	res.innerHTML += "Unused bounties: " + (bounties - n) + "<br>";
	res.innerHTML += "<br>possible buy plans: <br><br>";

	gen_all(n, res);
}

function max_use(bounties){
	var ret = 0;
	for(var i = 0; i*a <= bounties; i++){
		var j = parseInt((bounties - i*a) / b);
		ret = Math.max(ret, i*a + j*b);
	}
	return ret;
}

function gen_all(usage, res){
	for(var i = 0; i*a <= usage; i++){
		var j = parseInt((usage - i*a) / b);
		if(i*a + j*b != usage) continue;

		res.innerHTML += i + " RMA(s) and " + j + " Polyester(s)<br>";
	}
}