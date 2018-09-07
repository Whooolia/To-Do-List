import "./style.css";

// document.querySelector(".doneButton").style.visibility = "hidden";
// document.querySelector(".deleteButton").style.visibility = "hidden";

// Add list- submit button
document.querySelector(".button1").addEventListener("click",function(){
	var typed = document.querySelector(".typeList").value;
	// document.querySelector(".lists").innerHTML = typed;
	document.querySelector(".typeList").value = ""; //Something new I leanrt!
	// document.querySelector(".doneButton").style.visibility = "visible";
	// document.querySelector(".deleteButton").style.visibility = "visible";

	// keep adding elements
	var el = document.querySelector(".lists");
	var newEL = document.createElement("p");
	newEL.appendChild(document.createTextNode(typed));
	el.appendChild(newEL);

	//delete list button
	var el = document.querySelector(".lists")
	var newEL = document.createElement("doneButton");
	newEL.appendChild(document.createTextNode("Done"));
	el.appendChild(newEL);

	var el = document.querySelector(".lists")
	var newEL = document.createElement("deleteButton");
	newEL.appendChild(document.createTextNode("Delete"));
	el.appendChild(newEL);


});

document.addEventListener("keypress",function(e) {
	if(e.keyCode === 13){
		var typed = document.querySelector(".typeList").value;
		e.preventDefault();
		// document.querySelector(".lists").innerHTML = typed;
		document.querySelector(".typeList").value = "";
		// document.querySelector(".doneButton").style.visibility = "visible";
		// document.querySelector(".deleteButton").style.visibility = "visible";

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



// document.querySelector(".doneButton").addEventListener("click", function(){
// 		document.querySelector(".lists p").style.textDecoration = "line-through";
// 	})

// document.querySelector(".deleteButton").addEventListener("click", function(){
// 		document.querySelector(".lists p").remove();
// 	})



// What I need to build using JS

// DONE ---- how to keep adding list? Appendto
// DONE ---- Remove the typed list once its submit
// when the lists add, delete and done icon should come together
// how to install icon API
// DONE ---- clear all button should clear all the list
// when a delete button clicks, delete the list
// when a done button clicks, cross the list
