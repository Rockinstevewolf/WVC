var vid = document.querySelector("body > video");

function setValue(){
	chrome.storage.local.set({"wvcRangeVal": vid.volume*100}, function(){
		//alert('Value is set to ' + x.value);
	});
}

chrome.storage.local.get(["wvcRangeVal", "wvcFlag"], function(result){
	if(result.wvcRangeVal == undefined){
		chrome.storage.local.set({"wvcRangeVal": 20}, function(){
			alert('The volume is set to ' + 20);
		});
		vid.volume = 0.2;
	}
	else{
		vid.volume = result.wvcRangeVal/100;
	}
	if(vid.volume > 0.5 && result.wvcFlag){
		alert('Careful, the volume is ' + vid.volume*100);
		chrome.storage.local.get(["wvcRangeVal"], function(result){
			vid.volume = result.wvcRangeVal/100;
		});
	}
});



vid.addEventListener('volumechange', setValue);