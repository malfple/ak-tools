items = []
stages = []
formula = []
stagematrix = []

var btGen = document.getElementById("btGen");
btGen.addEventListener("click", generate);

var msg = document.getElementById("msg");
function showmsg(message){
	msg.innerHTML = message;
}

async function generate(){
	btGen.disabled = true;
	closeTabs();

	await fetchPenguinStats();
	showmsg("Done!");

	btGen.disabled = false;
	openDefaultTab();
}

async function fetchjson(link){
	return [];
	const response = await fetch(link);
	const ret = await response.json();
	return ret;
}

async function fetchPenguinStats(){
	if(items.length == 0){
		// items
		showmsg("Fetching data from penguin-stats: items");
		items = await fetchjson("https://penguin-stats.io/PenguinStats/api/v2/items");
		console.log(items);

		// stages
		showmsg("Fetching data from penguin-stats: stages");
		stages = await fetchjson("https://penguin-stats.io/PenguinStats/api/v2/stages");
		console.log(stages);
		stagematrix = await fetchjson("https://penguin-stats.io/PenguinStats/api/v2/result/matrix");
		console.log(stagematrix);

		// formula
		showmsg("Fetching data from penguin-stats: formulas");
		formula = await fetchjson("https://penguin-stats.io/PenguinStats/api/v2/formula");
		console.log(formula);
	}
}