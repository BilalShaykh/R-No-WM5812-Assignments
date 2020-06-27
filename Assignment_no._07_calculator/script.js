function numberInput(num) {
    // console.log(num)
    var number = document.getElementById('numberInput');

    number.value += num;
    // console.log(number.value)

}

function screenClear() {
    var clear = document.getElementById('numberInput')
    clear.value = '';
}

function getResult() {
    var result = document.getElementById('numberInput');
    
    result.value = eval(result.value);

    console.log(result.value)
}
function getResult1(x) {
    var result1 = document.getElementById('numberInput');
    console.log(result1.value)

    result1.value = eval(result1.value);
    console.log(result1.value)
}

