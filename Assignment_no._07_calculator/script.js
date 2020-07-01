function numberInput(num) {
    var number = document.getElementById('numberInput');
    number.value += num;
}

function screenClear() {
    var clear = document.getElementById('numberInput')
    var clear1 = document.getElementById('history')
    clear1.value = '';
    clear.value = '';
}
function lastDigitClear(){
    var result = document.getElementById('numberInput')
    result.value = result.value.slice(0, -1);
}

function getResult() {
    var check = '';
    var result = document.getElementById('numberInput');
    var history = document.getElementById('history');
    history.value = result.value;
    result.value = eval(result.value);
}


