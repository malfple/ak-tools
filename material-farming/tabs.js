function closeTabs(){
	const tabcontent = document.getElementsByClassName("tabcontent");
	for(let i=0; i<tabcontent.length; i++){
		tabcontent[i].style.display = "none";
	}
}

function openTab(e, tabName){
	closeTabs();

	const tablinks = document.getElementsByClassName("tablinks");
	for(let i=0; i<tablinks.length; i++){
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	document.getElementById(tabName).style.display = "block";
	e.currentTarget.className += " active";
}

function openDefaultTab(){
	document.getElementById("defaultTab").click();
}