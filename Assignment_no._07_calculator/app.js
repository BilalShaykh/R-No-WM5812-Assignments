var number;
function numberInput(num) {
    console.log(num)
    number = document.getElementById('numberInput');
    console.log(number.value)
    number.value += num;
    console.log(number.value)
}

function getResult() {
    number = document.getElementById('numberInput');
    console.log(number.value)
    
    for (var i = 0; i < number.length; i++){
        console.log(i)
        console.log(number.length)
        // if (number.value[i] === '+') {
        //     number.value = eval(number.value)
        //     console.log(number.value)
        //     break;
        // }
    }
}