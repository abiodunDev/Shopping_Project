let input_val = document.querySelector("#item-input");
let btn_add = document.querySelector("#btn")
let ul = document.querySelector("ul");

let inputLength = () =>{
	return input_val.value;
}

let createListElement = () =>{
	var li = document.createElement('li');
	li.appendChild(document.createTextNode(input_val.value));
	ul.appendChild(li);
	input_val.value = "";
} 

let AfterButtonClicked = () =>{
	if(inputLength() != ''){
		createListElement();
	}
}

let AfterKeyPressed = (e) =>{
	if(inputLength() != '' && e.keyCode === 13){
		createListElement();
	}	
}

btn_add.addEventListener("click", AfterButtonClicked);

input_val.addEventListener("keypress", AfterKeyPressed);