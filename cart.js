let input_val = document.querySelector("#item-input");
let btn_add = document.querySelector("#btn")
let ul = document.querySelector("ul");

btn_add.addEventListener("click", () =>{
	if(input_val.value != ''){
		var li = document.createElement('li');
		li.appendChild(document.createTextNode(input_val.value));
		ul.appendChild(li);
		input_val.value = "";
	}
})

input_val.addEventListener("keypress", (e) =>{
	if(input_val.value != '' && e.keyCode === 13){
		var li = document.createElement('li');
		li.appendChild(document.createTextNode(input_val.value));
		ul.appendChild(li);
		input_val.value = "";
	}
})