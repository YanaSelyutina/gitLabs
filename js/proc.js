/**
 *@let object $operationEnum объект-перечисление всех операций
 * в калькуляторе $openum
 */
let operationEnum = {
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
};
/**
 *@let float $f первое число для вычислений
 */
let f = 0.;
/**
 *@let float $s второе число для вычислений
 */
let s = 0.;
/**
 *@let float $res результат вычислений
 */
let res = 0.;
/**
 *@let bool $input флаг, показывающий,
 * что начался ввод следующего числа
 */
let input = false;
/**
 *@let bool $dotInput флаг, показывающий,
 * можно ли использовать точку при вводе.
 */
let dotInput = true;
/**
 *@let int $currentOp текущая операция.
 * Задается из перечисления operationEnum @link $openum
 */
let currentOp = operationEnum.NONE;
/**
 *@let object $numButtons содержит блоки кнопок с цифрами
 */
let numButtons = document.getElementsByClassName('numButton');
/**
 *@let object $led div для записи числа
 */
let led = document.getElementById('led');

/**
 * Устанавливает обработчик нажатия
 */
for (i = 0; i < numButtons.length; i++) {
    let t = numButtons[i];
    /**
     * Если {@link $input} == false, начинаем вводить новое число
     */
    t.onclick = function () {
        if (input === false) {
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
function binaryOP() {
    if (currentOp !== operationEnum.NONE) {
        s = +led.innerText;
        exec();
    }
    else {
        f = s = +led.innerText;
    }
    input = false;
}

/**
 * В зависимости от текущей операции {@link currentOp}
 * выполняется та, или иная ветка, сбрасывается ввод.
 *@return none
 */
function exec() {
    switch (currentOp) {
        case operationEnum.SQRT:
            res = Math.sqrt(f);
            break;
        case operationEnum.SIN:
            res = Math.sin(f);
            break;
        case operationEnum.COS:
            res = Math.cos(f);
            break;
        case operationEnum.LOG:
            res = Math.log(f);
            break;
        case operationEnum.EXP:
            res = Math.exp(f);
            break;
        case operationEnum.ADD:
            res = f + s;
            break;
        case operationEnum.DIV:
            res = f / s;
            break;
        case operationEnum.MUL:
            res = f * s;
            break;
        case operationEnum.SQR:
            res = f * f;
            break;
        case operationEnum.SUB:
            res = f - s;
            break;
    }
    led.innerText = res;
    f = res;
    currentOp = operationEnum.NONE;
    input = false;
}

/**
 * кнопка для вычисления корня из числа
 @let object sqrtButton
 */
let sqrtButton = document.getElementById('sqrt');
/**
 * кнопка для вычисления синуса
 @let object sinButton
 */
let sinButton = document.getElementById('sin');
/**
 * кнопка для вычисления косинуса
 @let object cosButton
 */
let cosButton = document.getElementById('cos');
/**
 * кнопка для вычисления логарифма
 @let object logButton
 */
let logButton = document.getElementById('log');
/**
 * кнопка для вычисления  экспаненты
 @let object expButton
 */
let expButton = document.getElementById('exp');//экспанента
/**
 * кнопка для вычисления суммы
 @let object addButton
 */
let addButton = document.getElementById('add');//сумма
/**
 * кнопка для деления
 @let object divButton
 */
let divButton = document.getElementById('div');//деление
/**
 * кнопка для умножения
 @let object mulButton
 */
let mulButton = document.getElementById('mul');//умножение
/**
 * кнопка для возведения в квадрат
 @let object sqrButton
 */
let sqrButton = document.getElementById('sqr');//возведение в квадрат
/**
 * кнопка для  вычитания
 @let object subButton
 */
let subButton = document.getElementById('sub');//вычитание
/**
 * кнопка для  равно
 @let object equallyButton
 */
let equallyButton = document.getElementById('equally');//равно
/**
 * кнопка для удаления всех элементов
 @let object cButton
 */
let cButton = document.getElementById("c");//удалить все
/**
 * кнопка для  удаления одного элемента
 @let object CEButton
 */
let CEButton = document.getElementById("ce");//удалить один элемент
/**
 * кнопка для точки
 @let object dotButton
 */
let dotButton = document.getElementById("dot");//точка

/**
 * функция для вычисления корня из числа
 *@function sgrButton.onclick
 *@return none
 */
sqrtButton.onclick = function () {
    currentOp = operationEnum.SQRT;
    f = +led.innerText;
    exec();
};
/**
 * функция для вычисления синуса
 *@function sinButton.onclick
 *@return none
 */
sinButton.onclick = function () {
    currentOp = operationEnum.SIN;
    f = +led.innerText;
    exec();
};
/**
 * функция для вычисления косинуса
 *@function cosButton.onclick
 *@return none
 */
cosButton.onclick = function () {
    currentOp = operationEnum.COS;
    f = +led.innerText;
    exec();
};
/**
 * функция для вычисления логарифма
 *@function LogButton.onclick
 *@return none
 */
logButton.onclick = function () {
    currentOp = operationEnum.LOG;
    f = +led.innerText;
    exec();
};
/**
 * функция для вычисления экспаннента
 *@function expButton.onclick
 *@return none
 */
expButton.onclick = function () {
    currentOp = operationEnum.EXP;
    f = +led.innerText;
    exec();
};
/**
 * функция для вычисления суммы
 *@function addButton.onclick
 *@return none
 */
addButton.onclick = function () {
    binaryOP();
    currentOp = operationEnum.ADD;
};
/**
 * функция для деления
 *@function divButton.onclick
 *@return none
 */
divButton.onclick = function () {
    binaryOP();
    currentOp = operationEnum.DIV;
};
/**
 * функция для умножения
 *@function mulButton.onclick
 *@return none
 */
mulButton.onclick = function () {
    binaryOP();
    currentOp = operationEnum.MUL;
};
/**
 * функция для возведения в квадрат
 *@function sgrButton.onclick
 *@return none
 */
sqrButton.onclick = function () {
    currentOp = operationEnum.SQR;
    f = +led.innerText;
    exec();
};
/**
 * функция для вычитания
 *@function subButton.onclick
 *@return none
 */
subButton.onclick = function () {

    currentOp = operationEnum.SUB;
};
/**
 * функция для равно
 *@function eguallyButton.onclick
 *@return none
 */

equallyButton.onclick = function () {
    if (currentOp === operationEnum.NONE) return;
    s = +led.innerText;
    exec();
};
/**
 * функция для удаления всех элементов
 *@function cButton.onclick
 *@return none
 */
cButton.onclick = function () {
    led.innerText = 0;
    input = false;
};
/**
 * функция для удаления одного элемента
 *@function CEBButton.onclick
 *@return none
 */
CEButton.onclick = function () {
    led.innerText = 0;
    input = false;
    currentOp = operationEnum.NONE;
    f = s = 0.;
};

/**
 * Кнопка точки похожа на цифровую кнопку
 * но она должна вводиться один раз
 * во время ввода числа
 * @function dotButton.onclick
 *@return none
 */
dotButton.onclick = function () {
    if (!dotInput) return;
    if (input === false) {
        led.innerText = "0.";
        input = true;
        dotInput = true;
    }
    else
        led.innerText += ".";
    dotInput = false;
};