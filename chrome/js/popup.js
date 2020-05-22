var x = document.getElementById("myRange");

function setValue(){
	chrome.storage.local.set({"myRangeVal": x.value}, function(){
		//alert('Value is set to ' + x.value);
	});
}
function getValue(){
	chrome.storage.local.get(["myRangeVal"], function(result){
		//alert('Value currently is ' + result.myRangeVal);
		if(result.myRangeVal == 20){
			x.value = 20;
		}
		x.value = result.myRangeVal;
		document.getElementById("demo").innerHTML = x.value + "%";
	});
}

function printValue(){
	document.getElementById("demo").innerHTML = x.value + "%";
}

getValue();
x.addEventListener('input', printValue);
x.addEventListener('change', setValue);
