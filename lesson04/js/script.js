'use strict';

let income = 'freelance',
    mission = 1800000,
    period = 12;
    
let money = +prompt('Ваш месячный доход?', '120000'), //задал вопрос в модальном окне
    addExpenses = prompt
        ('Перечислите возможные расходы за рассчитываемый период через запятую.',
        'Машина, Ипотека, Квартира'); 
    
let deposit = confirm('Есть ли у Вас депозит в банке?');
    
let monthlyExpenses = prompt('Какие обязательные ежемесячные расходы у вас есть?'),
    expense = +prompt('Во сколько это обойдется?', '10000');   

let monthlyExpenses2 = prompt('Какие обязательные ежемесячные расходы у вас есть?'),
    expense2 = +prompt('Во сколько это обойдется?', '10000');   

let budgetMonth = money - expense - expense2;
    
let target = mission / budgetMonth;
    
let budgetDay = budgetMonth/30;
console.log(Math.floor(budgetDay)); // округлил в меньшую сторону

            /* Урок 4 - Функции */

/* Функция - чистая без console.log */ 

let getStatusIncome = function(){
    if (budgetDay > 800){
        return('Высокий уровень дохода');
    } else if(budgetDay > 300 && budgetDay < 800){
        return('Средний уровень дохода');
    } else if(budgetDay > 0 && budgetDay < 300){
        return('Низкий уровень дохода')
    } else{
        return('Что-то пошло не так');
    }     
};

console.log(getStatusIncome());


function getExspensesMonth(){
    let sumExspenses = Number(expense) + Number(expense2); //Присвоил перемеенной значение суммы
    return sumExspenses;  // вернул значение
}
getExspensesMonth(expense, expense2);

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
    let monthTarget = Number(mission) / accumulatedMonth;
    return monthTarget;
};
getTargetMonth();

console.log(getTargetMonth());

    /* Функция для вывода типа данных  */
let showTypeOf = function(data){
    console.log(data, typeof(data));
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

console.log('За период ' + period + ' месяцев, цель заработать ' 
            + mission + ' рублей.');