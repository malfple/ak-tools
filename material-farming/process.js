category = []

function processData(){
	addDummyItems();
}

function addDummyItems(){
	var noneed = false;
	for(let i=0; i<items.length; i++){
		if(items[i].itemId == "2000"){
			noneed = true;
			break;
		}
	}

	if(!noneed){
		showmsg("adding dummy items");
		// exp
		items.push({
			itemId: "2000",
			itemType: "CARD_EXP",
			name_i18n: {
				en: "exp",
			}
		})

		// lmd
		items.push({
			itemId: "4000",
			itemType: "LMD",
			name_i18n: {
				en: "LMD",
			}
		})
	}
}

function generateCategory(){
	// hard coded categories kekw

}