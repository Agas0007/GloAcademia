'use strikt';
let variable = prompt('Введите что пожелаете:');
    
function argument(){
    if(variable >=0 || variable <= 0 ){
        return('Вами передана не строка');
    } else {variable = variable.trim()} // команда .trim() убирает пробелы
    if(variable.length > 30){   // если больше 30 символов 
        return variable.slice(0, 30) + ' ...';  // обрезать до 30
    }else {                     
        return variable;        // иначе вернуть строку    
    }
}
argument(variable);
alert(argument());