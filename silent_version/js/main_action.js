var vid = document.querySelector("body > video");

function getValue(){
	if(localStorage.getItem("wvcRangeVal") == undefined){
		alert('The start volume is ' + 20 + '%');
		localStorage.setItem("wvcRangeVal", 0.2);
	}
	vid.volume = localStorage.getItem("wvcRangeVal");
}

function setValue(){
	localStorage.setItem("wvcRangeVal", vid.volume);
	//alert('SAVED!');
}

if(localStorage.getItem("wvcRangeVal") == undefined || localStorage.getItem("wvcRangeVal") > 1 || localStorage.getItem("wvcRangeVal") < 0){
	alert('The start volume is ' + 20 + '%');
	localStorage.setItem("wvcRangeVal", 0.2);
}

vid.volume = localStorage.getItem("wvcRangeVal");

if(vid.volume > 0.6){
	alert('Careful, the volume is ' + vid.volume*100);
}

vid.addEventListener('volumechange', setValue);