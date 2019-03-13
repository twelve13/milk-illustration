const divs = document.getElementsByTagName("div");
const button = document.getElementById("button-container");
const blade = document.getElementById("blade");

function show(){
	button.style.display = "none";
	//setTimeout(function(){blade.play()}, 25700);
	for(let i=0; i<divs.length; i++){
		(function(i){
			setTimeout(function(){divs[i].classList.add("showme")}, i*200);
		})(i);
	}
	
}

button.addEventListener("click", show);