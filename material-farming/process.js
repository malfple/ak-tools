categories = []

function processData(){
	preprocessData();
}

function preprocessData(){
	var processed = false;
	for(let i=0; i<items.length; i++){
		if(items[i].itemId == "2000"){
			processed = true;
			break;
		}
	}

	if(!processed){
		showmsg("preprocessing");
		addDummyItems();
		addFormulas();
		console.log(formulas);
		filterStages();
		console.log(stages);
		generateCategories();
	}
}

function addDummyItems(){
	// exp
	items.push({
		itemId: "2000",
		itemType: "CARD_EXP",
		name_i18n: {
			en: "exp",
		}
	});

	// lmd
	items.push({
		itemId: "4000",
		itemType: "LMD",
		name_i18n: {
			en: "LMD",
		}
	});
}

function addFormulas(){
	// exp
	formulas.push({
		id: "2001",
		goldCost: 0,
		costs: [{id: "2000", count: 200}],
		extraOutcome: [],
	});
	formulas.push({
		id: "2002",
		goldCost: 0,
		costs: [{id: "2000", count: 400}],
		extraOutcome: [],
	});
	formulas.push({
		id: "2003",
		goldCost: 0,
		costs: [{id: "2000", count: 1000}],
		extraOutcome: [],
	});
	formulas.push({
		id: "2004",
		goldCost: 0,
		costs: [{id: "2000", count: 2000}],
		extraOutcome: [],
	});
	// lmd
	formulas.push({
		id: "3003",
		goldCost: 0,
		costs: [{id: "4000", count: 500}],
		extraOutcome: [],
	});
}

function filterStages(){
	var nstages = [];
	for(let i=0; i<stages.length; i++){
		if(stages[i].stageType == "ACTIVITY"){
			continue;
		}
		if(!stages[i].hasOwnProperty("dropInfos")){
			continue;
		}

		nstages.push(stages[i]);
	}
	stages = nstages;
}

function generateCategories(){
	// hard coded categories kekw
	categories.push({
		name: "Battle Records",
		imgId: "2000",
		baseItem: "2000",
		items: ["2001", "2002", "2003","2004"], // items included for this category
		stages: [],
	});
	categories.push({
		name: "LMD",
		imgId: "4000",
		baseItem: "4000",
		items: ["4000", "3003"],
		stages: [],
	});

	// group stages for categories
	for(let i=0; i<categories.length; i++){
		for(let j=0; j<stages.length; j++){
			// this stage will be included for this category if main drop is one of its items

			var yes = false;
			for(let k=0; k<categories[i].items.length; k++){
				var item = categories[i].items[k];
				for(let l=0; l<stages[j].dropInfos.length; l++){
					var drop = stages[j].dropInfos[l];
					if(item == drop.itemId && (drop.dropType == "NORMAL_DROP" || drop.dropType == "SPECIAL_DROP")){
						yes = true;
					}
				}
			}

			if(yes){
				categories[i].stages.push(stages[j].stageId);
			}
		}
	}

	console.log(categories);
}