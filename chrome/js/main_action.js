var vid = document.querySelector("body > video");

chrome.storage.local.get(["myRangeVal"], function(result){
	if(result.myRangeVal == undefined){
		chrome.storage.local.set({"myRangeVal": 20}, function(){
			alert('The volume is set to ' + 20);
		});
		vid.volume = 0.2;
	}
	else{
		vid.volume = result.myRangeVal/100;
	}
	//alert('Volume currently is ' + vid.volume*100);
	if(vid.volume > 0.7){
		alert('Careful, the volume is ' + vid.volume*100);
		chrome.storage.local.get(["myRangeVal"], function(result){
			vid.volume = result.myRangeVal/100;
		});
	}
});


