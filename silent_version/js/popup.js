var x = document.getElementById("myRange");

function setValue(){
	localStorage.setItem("wvcRangeVal", x.value);
}
function getValue(){
	if(localStorage.getItem("wvcRangeVal") == undefined){
		x.value = 20;
		localStorage.setItem("wvcRangeVal", x.value);
	}
	x.value = localStorage.getItem("wvcRangeVal");
	document.getElementById("volInfo").innerHTML = x.value + "%";
}

function printValue(){
	document.getElementById("volInfo").innerHTML = localStorage.getItem("wvcRangeVal") + "%";
}

getValue();
x.addEventListener('input', setValue);
x.addEventListener('input', printValue);
