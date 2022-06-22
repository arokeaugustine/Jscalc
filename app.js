let firstVal = parseFloat(prompt("Input first Value"));
let secondVal = parseFloat(prompt("input the second value"));
let operation = prompt("input any of the following operations +, -, *, /, %")
if (operation === "+"){
    let result = (firstVal) + (secondVal);
    alert(firstVal+ "+"+ secondVal + "=" + result);
}else if(operation === "-"){
    let result = (firstVal) - (secondVal);
    alert(firstVal+ "-"+ secondVal + "=" + result);
}
else if(operation === "*"){
    let result = (firstVal) * (secondVal);
    alert(firstVal+ "*"+ secondVal + "=" + result);
}
else if(operation === "/"){
    let result = (firstVal) / (secondVal);
    alert(firstVal+ "/"+ secondVal + "=" + result);
}
else if(operation === "%"){
    let result = (firstVal) % (secondVal);
    alert(firstVal+ "%"+ secondVal + "=" + result);
}
else{
    alert("invalid operation");
}
// alert(" your first input is " + a);