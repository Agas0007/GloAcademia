let expense,
    expense2;

let getExspensesMonth = function(){
    let sum = 0;

    for(let i = 0; i < 2; i++){
        if(i === 0){
            expense = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Квартира')
            while(isNaN(expense) || expense === '' || expense === null){ // Проверка вводимых данных на валидность
                expense = prompt('Во сколько это обойдется?', '10000');
            }        
        }
        if(i === 1){
            expense2 = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Машина')
            while(isNaN(expense2) || expense2 === '' || expense2 === null){ // Проверка вводимых данных на валидность
                expense2 = prompt('Во сколько это обойдется?', '10000');
            }
        }
        
    }
    return sum;
};

getExspensesMonth();
console.log(expense, expense2);
/*
/* Добавил проверку на валидность вводимых данных */ 
/*
let monthlyExpenses = prompt('Какие обязательные ежемесячные расходы у вас есть?'),
    expense = prompt('Во сколько это обойдется?', '10000');   
while(isNaN(expense) || expense === '' || expense === null){ // Проверка вводимых данных на валидность
    expense = prompt('Во сколько это обойдется?', '10000');
}

*/
