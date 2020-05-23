var x = document.getElementById("myRange");
var flag = document.getElementById("scr_alert");

function setValue(){
	chrome.storage.local.set({"wvcRangeVal": x.value}, function(){
		//alert('Value is set to ' + x.value);
	});
	chrome.storage.local.set({"wvcFlag": flag.checked}, function(){
		//alert('Value is set to ' + flag.checked);
	});
}
function getValue(){
	chrome.storage.local.get(["wvcRangeVal", "wvcFlag"], function(result){
		//alert('Value currently is ' + result.wvcRangeVal);
		if(result.wvcRangeVal == 20){
			x.value = 20;
		}
		if(result.wvcFlag == undefined){
			chrome.storage.local.set({"wvcFlag": flag.checked}, function(){
				//alert('Value is set to ' + flag.checked);
			});
		}
		x.value = result.wvcRangeVal;
		flag.checked = result.wvcFlag;
		document.getElementById("demo").innerHTML = x.value + "%";
	});
}

function printValue(){
	document.getElementById("demo").innerHTML = x.value + "%";
}

getValue();
x.addEventListener('change', setValue);
x.addEventListener('input', printValue);
flag.addEventListener('change', setValue);