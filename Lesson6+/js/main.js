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
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    income: {}, // доп доходы
    addIncome: [],//доп доходы
    expenses: {},// доп расходы
    addExpenses: [],//массив с  возожными расходами
    deposit: false,
    percentDeposite: 0,
    moneyDeposite: 0,
    mission: 1800000,
    period: 12,
    expensesMonth: 0,
    asking: function(){    // метод в котором будем расспрашивать пользователя

        if(confirm('Есть ли у Вас дополнительный источник зароботака')){
            let itemIncome,
                cashIncome;
                
                do{
                    itemIncome = prompt('Какой у вас есть дополнительный зароботок?', 'Таксую');  
                }while(itemIncome > 0 || itemIncome < 0 || itemIncome === '' || itemIncome === null);  
             
                do{
                    cashIncome = prompt('Сколько вы в месяц зарабатываете?', 15000);  
                }while(isNaN(cashIncome) || cashIncome === '' || cashIncome === null);  
                appData.income[itemIncome] = cashIncome; 
        }    


        let addExpenses = prompt('Перечислите возможные расходы через запятую.','машина квартира ипотека');
            appData.addExpenses = addExpenses.split(/(?:,| )+/);   // сплит ставит запятую учитывая пробелы
            appData.deposit = confirm('Есть ли у Вас депозит в банке?');
        let expence,
            expenceValue;
           
            for(let i = 0; i < 2; i++){
                do{
                    expence = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Квартира' + (i + 1) );
                }while(expence > 0 || expence < 0 || expence === '' || expence === null);                
                
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
    },
    getInfoDeposit: function(){
        if(appData.deposit){
            do{
                appData.percentDeposite = prompt('Какой годовой процент', '10');
            }while(isNaN(appData.percentDeposite) || appData.percentDeposite === '' || appData.percentDeposite === null);
            
            do{
                appData.moneyDeposite = prompt('Какая сумма заложена', 10000);
            }while(isNaN(appData.moneyDeposite) || appData.moneyDeposite === '' || appData.moneyDeposite === null);
            
        }
    },
    calcSavedMoney: function(){
        return appData.budgetMonth * appData.period;
    }
};
appData.asking();
appData.getExpensesMonth();
appData.getBudget(); 

console.log('Расходы за месяц: ' + appData.expensesMonth);
console.log('Уровень дохода: ' + appData.getStatusIncome());

if(appData.getTargetMonth() > 0){
    console.log('Цель будет достигнута за: ' + Math.ceil(appData.getTargetMonth()) + ' мес.');
}else{
    console.log('Wtkm не будет достигнута');
}

for(let key in appData ){
    console.log('Наша программа включает в себя данные: ' + key + ' - ' + appData[key]);
}

    /* Перебираю массив и делаю элементы заглавными буквами */
    
let arr = appData.addExpenses.map(function(item){
    return item[0].toUpperCase() + item.slice(1).toLowerCase();
    });
console.log(arr.join(', '));


/*
appData.getInfoDeposit();
console.log(appData.percentDeposite, appData.moneyDeposite, appData.calcSavedMoney());
*/
  
   
