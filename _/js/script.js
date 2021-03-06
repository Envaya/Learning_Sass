
// Adding SVGs
var removeSVG = '<svg class="fill" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><g><path class="st0" d="M16.1,3.6h-1.9V3.3c0-1.3-1-2.3-2.3-2.3h-1.7C8.9,1,7.8,2,7.8,3.3v0.2H5.9c-1.3,0-2.3,1-2.3,2.3v1.3c0,0.5,0.4,0.9,0.9,1v10.5c0,1.3,1,2.3,2.3,2.3h8.5c1.3,0,2.3-1,2.3-2.3V8.2c0.5-0.1,0.9-0.5,0.9-1V5.9C18.4,4.6,17.4,3.6,16.1,3.6z M9.1,3.3c0-0.6,0.5-1.1,1.1-1.1h1.7c0.6,0,1.1,0.5,1.1,1.1v0.2H9.1V3.3z M16.3,18.7c0,0.6-0.5,1.1-1.1,1.1H6.7c-0.6,0-1.1-0.5-1.1-1.1V8.2h10.6L16.3,18.7L16.3,18.7z M17.2,7H4.8V5.9c0-0.6,0.5-1.1,1.1-1.1h10.2c0.6,0,1.1,0.5,1.1,1.1V7z"/></g><g><path class="st0" d="M11,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6v6.8C11.6,17.7,11.4,18,11,18z"/></g><g><path class="st0" d="M8,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8C7.4,10.2,7.7,10,8,10c0.4,0,0.6,0.3,0.6,0.6v6.8C8.7,17.7,8.4,18,8,18z"/></g><g><path class="st0" d="M14,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C14.6,17.7,14.3,18,14,18z"/></g></svg>';
var completeSVG = '<svg class="fill" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><g><path class="st1" d="M9.7,14.4L9.7,14.4c-0.2,0-0.4-0.1-0.5-0.2l-2.7-2.7c-0.3-0.3-0.3-0.8,0-1.1s0.8-0.3,1.1,0l2.1,2.1l4.8-4.8c0.3-0.3,0.8-0.3,1.1,0s0.3,0.8,0,1.1l-5.3,5.3C10.1,14.3,9.9,14.4,9.7,14.4z"/></g></svg>';

// Define Lists as variables
var toDoList = document.getElementById("todo");
var doneList = document.getElementById("completed");
var test = "das ist ein Test";


// Trigger addItemTodo function when add button is clicked
document.getElementById("addItem").addEventListener('click', checkValue);

// Trigger addItemTodo function when return key is clicked
document.getElementById("itemInput").addEventListener('keyup', function(event) {
	if (event.keyCode === 13) {
		checkValue();
	};
});

function checkValue(){
	var itemTitel = document.getElementById('itemInput').value;
	if (itemTitel) {
		addItemTodo(itemTitel);
		document.getElementById('itemInput').value = '';
	}	
};

var addItemTodo = function(text){
	var item = document.createElement("li");
	item.innerText = text;

	var buttons = document.createElement("div");
	buttons.classList.add("buttons");
	
	var remove = document.createElement("button");
	remove.classList.add("remove");

	var complete = document.createElement("button");
	complete.classList.add("complete");

	remove.innerHTML = removeSVG;
	complete.innerHTML = completeSVG;

	// Click event for remove button
	remove.addEventListener("click", function(){
		if (remove.parentElement.parentElement.parentElement.id == "todo") {
			toDoList.removeChild(item);
		} else {
			doneList.removeChild(item);
		};
		if (doneList.length == 0) {
			doneList.classList.remove("separator");
		}
	});

	// Click event for complete button
	complete.addEventListener("click", function(){
		if (complete.parentElement.parentElement.parentElement.id == "todo") {
			doneList.insertBefore(item,doneList.firstChild);
			console.log(doneList.length);

		} else {
			toDoList.insertBefore(item,toDoList.firstChild);
		};

	});

	item.appendChild(buttons);
	buttons.appendChild(remove);
	buttons.appendChild(complete);
	toDoList.insertBefore(item, toDoList.firstChild);

	
};







