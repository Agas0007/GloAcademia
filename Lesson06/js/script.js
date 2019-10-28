'use strict';

let money,
    start = function(){
        do{ 
            money = prompt('Ваш месячный доход?', '120000'); //задал вопрос в модальном окне
        }    
        while(isNaN(money) || money === '' || money === null);
        money = +money;
    };
  start();

let appData = {
    income: {}, // доп доходы
    addIncome: [],//доп доходы
    expenses: {},// доп расходы
    addExpenses: [],//массив с  возожными расходами
    deposit: false,
    mission: 1800000,
    period: 12,
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function(){    // метод в котором будем расспрашивать пользователя
        let addExpenses = prompt('Перечислите возможные расходы через запятую.','Машина, Ипотека, Квартира');
            appData.addExpenses = addExpenses.toLowerCase().split(',');
            appData.deposit = confirm('Есть ли у Вас депозит в банке?');
        let expence,
            expenceValue;
           
            for(let i = 0; i < 2; i++){
                expence = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Квартира' + (i + 1) );
                
                do{
                    expenceValue = prompt('Во сколько это обойдется?', '10000'); 
                } while(isNaN(expenceValue) || expenceValue === '' || expenceValue === null);

                appData.expenses[expence] = +expenceValue;
            }
    },
    getExpensesMonth: function(){
        for(let key in appData.expenses){
            appData.expensesMonth += appData.expenses[key];  
        }
    },
    
    getBudget: function(){
        appData.budgetMonth = money - appData.expensesMonth;
        
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
 
    },
    getTargetMonth: function(){
        return appData.mission / appData.budgetMonth;
    },
    

    getStatusIncome: function() {
        if (appData.budgetDay >= 800){
            return('Высокий уровень дохода');
        } else if(appData.budgetDay >= 300 && appData.budgetDay < 800){
            return('Средний уровень дохода');
        } else if(appData.budgetDay >= 0 && appData.budgetDay < 300){
            return('Низкий уровень дохода');
        } else{
            return('Что-то пошло не так с уровнем дохода');
        }     
    }
};
appData.asking();
appData.getExpensesMonth();
appData.getBudget(); 

console.log('Расходы за месяц: ' + appData.expensesMonth);
console.log('Уровень дохода: ' + appData.getStatusIncome());
console.log('Период за который будет достигните цель: ' + appData.getTargetMonth() + ' мес.');

console.log('Наша программа включает в себя данные: ');
for(let key in appData ){
   console.log(key);
}

  /* Функция для вывода типа данных  */

/*
let showTypeOf = function(data){
    console.log(data, typeof(data));
};

showTypeOf(money);
showTypeOf(appData.income);
showTypeOf(appData.deposit);  
*/

   
