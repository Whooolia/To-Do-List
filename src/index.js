import "./style.css";

// Add list- submit button

document.querySelector(".submit").addEventListener("click",function(e){
	var typed = document.querySelector(".typeList").value;
	document.querySelector(".body").innerHTML = typed;

	});

document.addEventListener("keypress",function(e) {
	if(e.keyCode === 13){
		var typed = document.querySelector(".typeList").value;
		document.querySelector(".body").innerHTML = typed;
	}
});

// What I need to build using JS
// how to keep adding list?
// Remove the typed list once its submit
// when the lists add, delete and done icon should replace
// clear all button should clear all the list
// when a delete button clicks, delete the list
// when a done button clicks, cross the list
