import "./style.css";



// Add list button
document.querySelector(".add-button").addEventListener("click",function(e){
	var typed = document.querySelector(".todo-input").value;
	e.preventDefault();
	document.querySelector(".todo-input").value = ""; //Something new I leanrt! 


	// keep adding elements
	if(typed.length > 26){
		alert("Make it short!");
	} else {
		var el = document.querySelector(".todo-lists");
	// 변수이름 역시 항상 의미있는 이름으로 하면 좋음.
		var newDiv = document.createElement("div");
		var newTodoEL = document.createElement("p");
		newTodoEL.appendChild(document.createTextNode(typed));
		el.appendChild(newDiv);
		newDiv.appendChild(newTodoEL);

		//delete list button
	// 같은 이름의 variable를 재사용할때는 var를 다시 해줄필요가 없음. 그리고 같은 변수 이름으로 주는 것보단 다른 이름으로 주는 게 좋음. 
	//이에서 이미 el을 선언해줘서 사용할 필요가 없음.
	//el = document.querySelector(".todo-lists");
	//위에 newEL을 사용했기 때문에 다른 이름으로 사용하는게 좋음. 
	var newDoneEL = document.createElement("button", "i");
	// newDoneEL = document.createElement("i");
	// class 이름도 보통 camel Naming(doneButton) 보단 -(dash) 사용하면 좋음.
	newDoneEL.className = "done-button";
	newDoneEL.className = "fa fa-check";
	// newDoneEL.appendChild(document.createTextNode("Done"));
	newDiv.appendChild(newDoneEL);

	

	//el = document.querySelector(".todo-lists");
	var newDeleteEL = document.createElement("button", "i");
	newDeleteEL.className = "delete-button";
	newDeleteEL.className = "fa fa-trash";
	// newDeleteEL.appendChild(document.createTextNode("Delete"));
	newDiv.appendChild(newDeleteEL);



	newDoneEL.addEventListener("click", function(){
		// newTodoEL.style.textDecoration = "line-through";
		newTodoEL.style.color = "white";
		newTodoEL.style.opacity = "0.7";
		newDoneEL.style.visibility = "hidden";
		// newDeleteEL.style.visibility = "hidden";
	});

	newDeleteEL.addEventListener("click", function(){
		newTodoEL.remove();
		newDoneEL.remove();
		newDeleteEL.remove();
	});
	}

	
});



document.addEventListener("keypress",function(e) {
	if(e.keyCode === 13){
		var typed = document.querySelector(".todo-input").value;
		e.preventDefault();
		document.querySelector(".todo-input").value = "";


	// keep adding elements
	if(typed.length > 26){
		alert("Make it short!");
	} else {
		var el = document.querySelector(".todo-lists");
	// 변수이름 역시 항상 의미있는 이름으로 하면 좋음.
		var newDiv = document.createElement("div");
		var newTodoEL = document.createElement("p");
		newTodoEL.appendChild(document.createTextNode(typed));
		el.appendChild(newDiv);
		newDiv.appendChild(newTodoEL);

		//delete list button
	// 같은 이름의 variable를 재사용할때는 var를 다시 해줄필요가 없음. 그리고 같은 변수 이름으로 주는 것보단 다른 이름으로 주는 게 좋음. 
	//이에서 이미 el을 선언해줘서 사용할 필요가 없음.
	//el = document.querySelector(".todo-lists");
	//위에 newEL을 사용했기 때문에 다른 이름으로 사용하는게 좋음. 
	var newDoneEL = document.createElement("button", "i");
	// newDoneEL = document.createElement("i");
	// class 이름도 보통 camel Naming(doneButton) 보단 -(dash) 사용하면 좋음.
	newDoneEL.className = "done-button";
	newDoneEL.className = "fa fa-check";
	// newDoneEL.appendChild(document.createTextNode("Done"));
	newDiv.appendChild(newDoneEL);

	

	//el = document.querySelector(".todo-lists");
	var newDeleteEL = document.createElement("button", "i");
	newDeleteEL.className = "delete-button";
	newDeleteEL.className = "fa fa-trash";
	// newDeleteEL.appendChild(document.createTextNode("Delete"));
	newDiv.appendChild(newDeleteEL);



	newDoneEL.addEventListener("click", function(){
		// newTodoEL.style.textDecoration = "line-through";
		newTodoEL.style.color = "white";
		newTodoEL.style.opacity = "0.7";
		newDoneEL.style.visibility = "hidden";
		// newDeleteEL.style.visibility = "hidden";
	});

	newDeleteEL.addEventListener("click", function(){
		newTodoEL.remove();
		newDoneEL.remove();
		newDeleteEL.remove();
	});
	}
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
