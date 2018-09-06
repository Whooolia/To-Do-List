import "./style.css";

import { config } from '@fortawesome/fontawesome-svg-core'

console.log(config.autoA11y)

// Add list- submit button
document.querySelector(".button1").addEventListener("click",function(){
	var typed = document.querySelector(".typeList").value;
	// document.querySelector(".lists").innerHTML = typed;
	document.querySelector(".typeList").value = ""; //Something new I leanrt! 

	// keep adding elements
	var el = document.querySelector(".lists");
	var newEL = document.createElement("p");
	newEL.appendChild(document.createTextNode(typed));
	el.appendChild(newEL);

});

document.addEventListener("keypress",function(e) {
	if(e.keyCode === 13){
		var typed = document.querySelector(".typeList").value;
		// document.querySelector(".lists").innerHTML = typed;
		document.querySelector(".typeList").value = "";
	
	var el = document.querySelector(".lists");
	var newEL = document.createElement("p");
	newEL.appendChild(document.createTextNode(typed));
	el.appendChild(newEL);
	}
});

// Clear all
document.querySelector(".button2").addEventListener("click",function() {
	var node = document.querySelector(".lists");
	while (node.hasChildNodes()) {
    node.removeChild(node.lastChild);
}
});

// What I need to build using JS

// DONE ---- how to keep adding list? Appendto
// DONE ---- Remove the typed list once its submit
// when the lists add, delete and done icon should come together
// how to install icon API
// DONE ---- clear all button should clear all the list
// when a delete button clicks, delete the list
// when a done button clicks, cross the list
