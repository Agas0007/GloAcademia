'use strict';

    /* Функция стартует наш проект */

let money,
    start = function(){
        do{ 
            money = prompt('Ваш месячный доход?', '120000'); //задал вопрос в модальном окне
        }    
        while(isNaN(money) || money === '' || money === null)
    };
  start();

let appData = {
    income: {}, // доп доходы
    addIncome: [],//доп доходы
    exspenses: {},// доп расходы
    addExpenses: [],//массив с  возожными расходами
    deposit: false,
    mission: 1800000,
    period: 12,
    budget: [money],
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    expense: 0,
    exspense2: 0,
    asking: function(){    // метод в котором будем расспрашивать пользователя
        let addExpenses = prompt('Перечислите возможные расходы через запятую.','Машина, Ипотека, Квартира');
            appData.addExpenses = addExpenses.toLowerCase().split(',');
            appData.deposit = confirm('Есть ли у Вас депозит в банке?');
    },
    getExspensesMonth: function(){
    let sum = 0;

    for(let i = 0; i < 2; i++){
        if(i === 0){
            appData.expense = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Квартира')
            while(isNaN(appData.expense) || appData.expense === '' || appData.expense === null){ // Проверка вводимых данных на валидность
                appData.expense = prompt('Во сколько это обойдется?', '10000');
            }        
        }
        if(i === 1){
            appData.expense2 = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Машина')
            while(isNaN(appData.expense2) || appData.expense2 === '' || appData.expense2 === null){ // Проверка вводимых данных на валидность
                appData.expense2 = prompt('Во сколько это обойдется?', '10000');
            }
        }
        
    }
    return sum;
    
},

};
appData.getExspensesMonth();

   /* Функция для вывода типа данных  */

let showTypeOf = function(data){
    console.log(data, typeof(data));
};

showTypeOf(money);
showTypeOf(appData.income);
showTypeOf(appData.deposit);  
  /* 
 /* Добавил проверку на валидность вводимых данных */ /*
let monthlyExpenses = prompt('Какие обязательные ежемесячные расходы у вас есть?'),
    expense = prompt('Во сколько это обойдется?', '10000');   
while(isNaN(expense) || expense === '' || expense === null){ // Проверка вводимых данных на валидность
    expense = prompt('Во сколько это обойдется?', '10000');
}

let monthlyExpenses2 = prompt('Какие обязательные ежемесячные расходы у вас есть?'),
    expense2 = +prompt('Во сколько это обойдется?', '10000');   
while(isNaN(expense2) || expense2 === '' || expense2 === null){ // Проверка вводимых данных на валидность
    expense2 = prompt('Во сколько это обойдется?', '10000');
    }
*/
let budgetMonth = money - appData.expense - appData.expense2;
    
let target = appData.mission / budgetMonth;
    
let budgetDay = budgetMonth/30;

while(budgetDay <= -1){
    console.log('Что-то пошло не так ' + Math.floor(budgetDay)); // округлил в меньшую сторону + вывел 
    break;
}

            /* Урок 4 - Функции */


/*  ПРОДВИНУТАЯ ФУНКЦИЯ - МАСТЕРА. :)
let getExspensesMonth = function(){
    let sum = 0;

    for(let i = 0; i < 2; i++){
        if(i === 0){
            expense = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Квартира')        
        }
        if(i === 1){
            expense2 = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Машина')
        }
        sum += +prompt('Во сколько это обойдется?', '10000');
    }
    return sum;
};

getExspensesMonth();
 
*/
 
function getExspensesMonth(){
    let sumExspenses = Number(appData.expense) + Number(appData.expense2); //Присвоил перемеенной значение суммы
    return sumExspenses;  // вернул значение
}
getExspensesMonth(appData.expense, appData.expense2);

console.log(getExspensesMonth());


/* присваиваю переменное значение функции */

function getAccumulatedMonth(){
   let accumulete =  Number(money) - getExspensesMonth();
   return accumulete;  // вернул значение
};
getAccumulatedMonth();

let accumulatedMonth = getAccumulatedMonth(); // присвоил значение переменной функции
console.log(accumulatedMonth);

function getTargetMonth(){
    let monthTarget = Number(appData.mission) / accumulatedMonth;
    return monthTarget;
};
getTargetMonth();

console.log('За период ' + appData.period + ' месяцев, цель заработать ' 
            + appData.mission + ' рублей.');

while(getTargetMonth() > 0 ){   // условие при котором цель  будет достигнута
    console.log('Цель будет достигнута за ' + getTargetMonth() + ' мес.');
    break;
};
while(getTargetMonth() <= 0 ){ // условие при котором цель НЕ будет достигнута
    console.log('Цель не будет достигнута ' + getTargetMonth());
    break; // остановка цикла
};


/* Функция - чистая без console.log */ 

let getStatusIncome = function(){
    if (budgetDay > 800){
        return('Высокий уровень дохода');
    } else if(budgetDay > 300 && budgetDay < 800){
        return('Средний уровень дохода');
    } else if(budgetDay > 0 && budgetDay < 300){
        return('Низкий уровень дохода')
    } else{
        return('Что-то пошло не так с уровнем дохода');
    }     
};

console.log(getStatusIncome());