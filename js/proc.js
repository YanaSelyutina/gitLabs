var OperationEnum = {
	NONE: 0,
	DIV: 1,
	MUL: 2,
	SUB: 3,
	ADD: 4,
	SQRT: 5
}

var input = false;
var CurrentOp = OperationEnum.NONE;
var numButtons = document.getElementsByClassName('numButton');
var Led = document.getElementById('led');
for(i = 0; i < numButtons.length; i++){
	var t = numButtons[i];
	t.onclick = function(){
		if(input === false){
			Led.innerText = this.innerText;
			input = true;
		}
		else
			Led.innerText += this.innerText;
	}
}

var divButton = document.getElementById('div');
var mulButton = document.getElementById('mul');
var subButton = document.getElementById('sub');
var addButton = document.getElementById('add');