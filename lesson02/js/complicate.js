let num = 266219,
    digits = num.toString().split(''),
    realDigits = digits.map(Number),
    numbers = realDigits[0] * realDigits[1] * realDigits[2] * realDigits[3] * 
            realDigits[4] *realDigits[5];
console.log('умножение цифр числа "266219" = ' + numbers);

let extent = numbers ** 3;
alert('Первые две цифры: ' + String(extent).slice(0,2));