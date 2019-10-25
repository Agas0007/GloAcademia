'use strict'

/* Lesson 3 */

let income = 'freelance',
    mission = 1800000;
    
let money = prompt('Ваш месячный доход?'), //задал вопрос в модальном окне
    addExpenses = prompt
        ('Перечислите возможные расходы за рассчитываемый период через запятую.'); 
    
console.log(addExpenses.split(','));// вывел массив через запятую

let deposit = confirm('Есть ли у Вас депозит в банке?');
    console.log(deposit); // узнал булевое значение

console.log(typeof money, typeof income, typeof deposit);

let monthlyExpenses = prompt('Какие обязательные ежемесячные расходы у вас есть?'),
    expense = prompt('Во сколько это обойдется?');   

let monthlyExpenses2 = prompt('Какие обязательные ежемесячные расходы у вас есть?'),
    expense2 = prompt('Во сколько это обойдется?');   

let budgetMonth = money - expense - expense2;
    console.log(budgetMonth); // выяснил чистый бюджет

let target = mission / budgetMonth;
    console.log(Math.ceil(target)); // округлил в большую сторону

let budgetDay = budgetMonth/30;
console.log(Math.floor(budgetDay)); // округлил в меньшую сторону


if (budgetDay > 800){
    console.log('Высокий уровень дохода');
} else if(budgetDay > 300 && budgetDay < 800){
    console.log('Средний уровень дохода');
} else if(budgetDay > 0 && budgetDay < 300){
    console.log('Низкий уровень дохода')
} else{
    console.log('Что-то пошло не так');
} 