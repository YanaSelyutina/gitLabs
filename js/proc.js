/**
*@var object $OperationEnum объект-перечисление всех операций
* в калькуляторе $openum
*/
var OperationEnum = {
	NONE: 0,
	DIV: 1,
	MUL: 2,
	SUB: 3,
	ADD: 4,
	SQRT: 5,
	SIN: 6,
	COS: 7,
	LOG: 8,
	EXP: 9,
	SQR: 10
}
/**
*@var float $f первое число для вычислений
*/
var f = 0.;
/**
*@var float $s второе число для вычислений
*/
var s = 0.;
/**
*@var float $res результат вычислений
*/
var res = 0.;
/**
*@var bool $input флаг, показывающий,
* что начался ввод следующего числа
*/
var input = false;
/**
*@var bool $dotInput флаг, показывающий,
* можно ли использовать точку при вводе.
*/
var dotInput = true;
/**
*@var int $currentOp текущая операция.
* Задается из перечисления OperationEnum @link $openum
*/
var currentOp = OperationEnum.NONE;
/**
*@var object $numButtons содержит блоки кнопок с цифрами
*/
var numButtons = document.getElementsByClassName('numButton');
/**
*@var object $led div для записи числа
*/
var led = document.getElementById('led');

/**
* Устанавливает обработчик нажатия
*/
for(i = 0; i < numButtons.length; i++){
	var t = numButtons[i];
	/**
	* Если {@link $input} == false, начинаем вводить новое число
	*/
	t.onclick = function(){
	if(input === false){
	led.innerText = this.innerText;
	input = true;
	dotInput = true;
		}
	else
	led.innerText += this.innerText;
	}
}

/**
* Выполняет общие операции для бинарных операторов
* Если уже была установлена операция, ее выполнят
* и начнется ожидание ввода числа.
* Иначе нужно заполнить оба числа {@link $f} {@link $s}
*@return none
*/
   function binaryOP(){
   if(currentOp !== OperationEnum.NONE){
    s = +led.innerText;
	exec();
	}
	else{
	f = s = +led.innerText;
	}
	input = false;
}

/**
* В зависимости от текущей операции {@link $currentOp}
* выполняется та, или иная ветка, сбрасывается ввод.
*@return none
*/
   function exec(){
   switch(currentOp){
   case OperationEnum.SQRT:
   res = Math.sqrt(f);
   break;
   case OperationEnum.SIN:
   res = Math.sin(f);
   break;
   case OperationEnum.COS:
   res = Math.cos(f);
   break;
   case OperationEnum.LOG:
   res = Math.log(f);
   break;
   case OperationEnum.EXP:
   res = Math.exp(f);
   break;
   case OperationEnum.ADD:
   res = f+s;
   break;
   case OperationEnum.DIV:
   res = f/s;
   break;
   case OperationEnum.MUL:
   res = f*s;
   break;
  case OperationEnum.SQR:
  res = f*f;
  break;
  case OperationEnum.SUB:
  res = f - s;
  break;
	}
	
	led.innerText = res;
	f = res;
	currentOp = OperationEnum.NONE;
	input = false;
}
/**
* набор управляющих кнопок
@var object $opButtons
*/
var sqrtButton = document.getElementById('sqrt');
var sinButton = document.getElementById('sin');
var cosButton = document.getElementById('cos');
var logButton = document.getElementById('log');
var expButton = document.getElementById('exp');
var addButton = document.getElementById('add');
var divButton = document.getElementById('div');
var mulButton = document.getElementById('mul');
var sqrButton = document.getElementById('sqr');
var subButton = document.getElementById('sub');
var equallyButton = document.getElementById('equally');
var cButton = document.getElementById("c");
var ceButton = document.getElementById("ce");
var dotButton = document.getElementById("dot");

/**
* обработчики нажатия на управляющие кнопки.
*@return none
*/
sqrtButton.onclick = function(){
	currentOp = OperationEnum.SQRT;
	f = +led.innerText;
	exec();
}

sinButton.onclick = function(){
	currentOp = OperationEnum.SIN;
	f = +led.innerText;
	exec();
}

cosButton.onclick = function(){
	currentOp = OperationEnum.COS;
	f = +led.innerText;
	exec();
}

logButton.onclick = function(){
	currentOp = OperationEnum.LOG;
	f = +led.innerText;
	exec();
}

expButton.onclick = function(){
	currentOp = OperationEnum.EXP;
	f = +led.innerText;
	exec();
}

addButton.onclick = function(){
	binaryOP();
	currentOp = OperationEnum.ADD;
}

divButton.onclick = function(){
	binaryOP();
	currentOp = OperationEnum.DIV;
}

mulButton.onclick = function(){
	binaryOP();
	currentOp = OperationEnum.MUL;
}

sqrButton.onclick = function(){
	currentOp = OperationEnum.SQR;
	f = +led.innerText;
	exec();
}

subButton.onclick = function(){
	
currentOp = OperationEnum.SUB;
}

equallyButton.onclick = function(){
	if(currentOp == OperationEnum.NONE) 
        return;
	s = + led.innerText;
	exec();
}

CButton.onclick = function(){
	led.innerText = 0;
	input = false;
}

CEButton.onclick = function(){
	led.innerText = 0;
	input = false;
	currentOp = OperationEnum.NONE;
	f = s = 0.;
}

/**
* Кнопка точки похожа на цифровую кнопку
* но она должна вводиться один раз
* во время ввода числа
*@return none
*/
dotButton.onclick = function(){
	if(!dotInput) 
        return;
	if(input === false){
	    led.innerText = "0.";
	    input = true;
        dotInput = true;
	}else{
        led.innerText += ".";
	    dotInput = false;
    }
