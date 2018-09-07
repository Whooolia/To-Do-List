import "./style.css";

// document.querySelector(".doneButton").style.visibility = "hidden";
// document.querySelector(".deleteButton").style.visibility = "hidden";

// Add list- submit button
document.querySelector(".add-button").addEventListener("click",function(e){
	
	var typed = document.querySelector(".todo-input").value;
	e.preventDefault();
	document.querySelector(".todo-input").value = ""; //Something new I leanrt! 
	// document.querySelector(".doneButton").style.visibility = "visible";
	// document.querySelector(".deleteButton").style.visibility = "visible";


	// keep adding elements
	var el = document.querySelector(".todo-lists");
	// 변수이름 역시 항상 의미있는 이름으로 하면 좋음.
	var newTodoEL = document.createElement("p");
	newTodoEL.appendChild(document.createTextNode(typed));
	el.appendChild(newTodoEL);

	//delete list button
	// 같은 이름의 variable를 재사용할때는 var를 다시 해줄필요가 없음. 그리고 같은 변수 이름으로 주는 것보단 다른 이름으로 주는 게 좋음. 
	//이에서 이미 el을 선언해줘서 사용할 필요가 없음.
	//el = document.querySelector(".todo-lists");
	//위에 newEL을 사용했기 때문에 다른 이름으로 사용하는게 좋음. 
	var newDoneEL = document.createElement("button");
	// class 이름도 보통 camel Naming(doneButton) 보단 -(dash) 사용하면 좋음.
	newDoneEL.className = "done-button";
	newDoneEL.appendChild(document.createTextNode("Done"));
	el.appendChild(newDoneEL);

	//el = document.querySelector(".todo-lists");
	var newDeleteEL = document.createElement("button");
	newDeleteEL.className = "delete-button";
	newDeleteEL.appendChild(document.createTextNode("Delete"));
	el.appendChild(newDeleteEL);
});

document.addEventListener("keypress",function(e) {
	if(e.keyCode === 13){
		var typed = document.querySelector(".todo-input").value;
		e.preventDefault();
		document.querySelector(".todo-input").value = "";
	
	var el = document.querySelector(".todo-lists");
	var newEL = document.createElement("p");
	newEL.appendChild(document.createTextNode(typed));
	el.appendChild(newEL);
	}
});

// Clear all
document.querySelector(".clear-all-button").addEventListener("click",function() {
	var node = document.querySelector(".todo-lists");
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
