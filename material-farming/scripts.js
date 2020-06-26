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

	showitems();

	btGen.disabled = false;
	openDefaultTab();
}

async function fetchjson(link){
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

var test = document.getElementById("test");
function showitems(){
	test.innerHTML = "";

	for(let i=0; i<items.length; i++){
		var c = document.createElement("p");
		var img = document.createElement("img");
		img.src = "img/" + items[i].itemId + ".webp";
		c.append(img);
		var text = document.createTextNode(items[i].itemId + " " + items[i].itemType + " " + items[i].name_i18n.en);
		c.appendChild(text);

		test.appendChild(c);
	}
}