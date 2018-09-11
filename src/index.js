import "./style.css";


// Add list button
document.querySelector(".add-button").addEventListener("click",function(e){
	var newDoneEL = document.createElement("button", "i");
	var newDeleteEL = document.createElement("button", "i");
	var typed = document.querySelector(".todo-input").value;
	var el = document.querySelector(".todo-lists");
	var newDiv = document.createElement("div");
	var newTodoEL = document.createElement("p");

	e.preventDefault();
	document.querySelector(".todo-input").value = ""; 

	// keep adding elements
	if(typed.length > 25 || typed.length ===0 ){
		alert("Nothing typed or Make it short :)");
	} else {
		newTodoEL.appendChild(document.createTextNode(typed));
		el.appendChild(newDiv);
		newDiv.appendChild(newTodoEL);

	// 같은 이름의 variable를 재사용할때는 var를 다시 해줄필요가 없음. 그리고 같은 변수 이름으로 주는 것보단 다른 이름으로 주는 게 좋음. 
	//이에서 이미 el을 선언해줘서 사용할 필요가 없음.
	//위에 newEL을 사용했기 때문에 다른 이름으로 사용하는게 좋음. 

	// class 이름도 보통 camel Naming(doneButton) 보단 -(dash) 사용하면 좋음.
	newDoneEL.className = "done-button";
	newDoneEL.className = "fa fa-check";
	newDiv.appendChild(newDoneEL);
	newDoneEL.addEventListener("click", function(){
	newTodoEL.style.color = "white";
	newTodoEL.style.opacity = "0.7";
	newDoneEL.style.visibility = "hidden";
	});

	newDeleteEL.className = "delete-button";
	newDeleteEL.className = "fa fa-trash";
	newDiv.appendChild(newDeleteEL);
	newDeleteEL.addEventListener("click", function(){
		newTodoEL.remove();
		newDoneEL.remove();
		newDeleteEL.remove();
	});
	}
});


document.addEventListener("keypress",function(e) {
	var el = document.querySelector(".todo-lists");
	var newDiv = document.createElement("div");
	var newTodoEL = document.createElement("p");
	var newDoneEL = document.createElement("button", "i");
	var newDeleteEL = document.createElement("button", "i");

	if(e.keyCode === 13){
		var typed = document.querySelector(".todo-input").value;
		e.preventDefault();
		document.querySelector(".todo-input").value = "";

	// keep adding elements
	if(typed.length > 25 || typed.length ===0 ){
		alert("Nothing typed or Make it short :)");
	} else {
	// 변수이름 역시 항상 의미있는 이름으로 하면 좋음.
		newTodoEL.appendChild(document.createTextNode(typed));
		el.appendChild(newDiv);
		newDiv.appendChild(newTodoEL);

	newDoneEL.className = "done-button";
	newDoneEL.className = "fa fa-check";
	newDiv.appendChild(newDoneEL);
	newDoneEL.addEventListener("click", function(){
		newTodoEL.style.color = "white";
		newTodoEL.style.opacity = "0.7";
		newDoneEL.style.visibility = "hidden";
	});

	newDeleteEL.className = "delete-button";
	newDeleteEL.className = "fa fa-trash";
	newDiv.appendChild(newDeleteEL);
	newDeleteEL.addEventListener("click", function(){
		newTodoEL.remove();
		newDoneEL.remove();
		newDeleteEL.remove();
		});
	}}
});


// Clear all
document.querySelector(".clear-all-button").addEventListener("click",function() {
	var node = document.querySelector(".todo-lists");
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
