function addiction(){
    const firstNum = document.getElementById("first-number").value;
    const secondNum = document.getElementById("second-number").value;
    const sum = Number(firstNum) + Number(secondNum);
    if (sum < 0){
        document.getElementById("result").style.color = 'red';
    }else{
        document.getElementById("result").style.color = 'green';
    }
    document.getElementById("result").innerHTML = sum;
}

function subtraction(){
    const firstNum = document.getElementById("first-number").value;
    const secondNum = document.getElementById("second-number").value;
    const diff = Number(firstNum) - Number(secondNum);
    if (diff < 0){
        document.getElementById("result").style.color = 'red';
    }else{
        document.getElementById("result").style.color = 'green';
    }
    document.getElementById("result").innerHTML = diff;
}

function multiplication(){
    const firstNum = document.getElementById("first-number").value;
    const secondNum = document.getElementById("second-number").value;
    const multiple = Number(firstNum) * Number(secondNum);
    if (multiple < 0){
        document.getElementById("result").style.color = 'red';
    }else{
        document.getElementById("result").style.color = 'green';
    }
    document.getElementById("result").innerHTML = multiple;
}

function division(){
    const firstNum = document.getElementById("first-number").value;
    const secondNum = document.getElementById("second-number").value;
    const quo = Number(firstNum) / Number(secondNum);
    if (quo < 0){
        document.getElementById("result").style.color = 'red';
    }else{
        document.getElementById("result").style.color = 'green';
    }
    document.getElementById("result").innerHTML = quo;
}

function power(){
    const firstNum = document.getElementById("first-number").value;
    const secondNum = document.getElementById("second-number").value;
    let result = 1;
    for (i = 1; i <= secondNum; i++) {
        result *= firstNum;
    }
    if (result < 0){
        document.getElementById("result").style.color = 'red';
    }else{
        document.getElementById("result").style.color = 'green';
    }
    document.getElementById("result").innerHTML = result;
}

function clearAll(){
    document.getElementById("first-number").value = null;
    document.getElementById("second-number").value = null;
    document.getElementById("result").innerHTML = '';
}
