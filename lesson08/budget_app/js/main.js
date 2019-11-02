'use strict';

    /* Получение кнопки */
let start  = document.getElementById('start'),
    cancel = document.getElementById('cancel');

    /* Получить кнопки “+” (плюс) через Tag, каждую в своей переменной. */
let bottonPlusIncome = document.querySelectorAll('button')[0], // ('button')[0] ноль означает индекс элемента к кторому обращаемся по тегу
    bottonPlusExepenses = document.querySelectorAll('button')[1]; // кнопка "+" считает Доход 
    /* Доступ к Чекбоксу*/
let checkBox = document.querySelector('#deposit-check');
    /* поля для ввода возможных доходов */
let inputAdditional = document.querySelectorAll('.additional_income-item'),   // Возможный доход
    inputAdditional2 = document.querySelectorAll('.additional_income-item')[1];  // Возможный доход
    /* Итоговые блоки */
let blockBudgetMonth = document.querySelector('.budget_month-value'),
    blockBudgetDay = document.querySelector('.budget_day-value'),
    blockExpensesMonth = document.querySelector('.expenses_month-value'),
    blockAdditionalIncome = document.querySelector('.additional_income-value'),
    blockAdditionalExpenses = document.querySelector('.additional_expenses-value'),
    blockIncomePeriod = document.querySelector('.income_period-value'),    
    blockTargetMonth = document.querySelector('.target_month-value');
    /* Другие инпуты */
let salaryMonth = document.querySelector('.salary-amount'), //Месячный доход 
    extraIncome = document.querySelectorAll('.income-title')[1], // Дополнительный доход
    incomeItems = document.querySelectorAll('.income-items'), // Блок дополнительный доход
    inputExpense = document.querySelectorAll('.expenses-title')[1],  // Обязательные расходы
    expensesItems = document.querySelectorAll('.expenses-items'),  //Обязательные расходы сумма ЗАМЕНИЛ 
    inputPossibleExpense = document.querySelector('.additional_expenses-item'),  // Возможные расходы
    inputTarget = document.querySelector('.target-amount'),
    inputeReng = document.querySelector('.period-select'), // ползунок
    periodAmount = document.querySelector('.period-amount'),
    inputLeft = document.querySelectorAll('.data input[type="text"]'); // input слевой стороны 
    //incomeItem = document.querySelectorAll('.income-items');

let appData = {
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    income: {}, // доп доходы
    incomeMonth: 0,
    addIncome: [],//доп доходы
    expenses: {},// доп расходы
    addExpenses: [],//массив с  возожными расходами
    deposit: false,
    percentDeposite: 0,
    moneyDeposite: 0,
    expensesMonth: 0,
    start: function(){
        
        if(salaryMonth.value === '' ){
            alert('Ошибка, поле Месячный доход должно быть заполненно')
            return;
        }

        appData.budget = +salaryMonth.value;

        appData.getExpenses();
        appData.getIncome();
        appData.getExpensesMonth();        
        appData.getAddExpenses(); 
        appData.getAddInkome();
        appData.getRange(); // вызов функции  
        //appData.getTargetMonth();
        //appData.calcSavedMoney();
        appData.getBudget();

        appData.showResult();
        
        
    },
    showResult: function(){     // Метод Выводит результаты вычисления в правую колонку
        blockBudgetMonth.value = appData.budgetMonth;
        blockBudgetDay.value = appData.budgetDay;
        blockExpensesMonth.value = appData.expensesMonth;
        blockAdditionalExpenses.value = appData.addExpenses.join(', ');
        blockAdditionalIncome.value = appData.addIncome.join(', ');
        blockTargetMonth.value =  Math.ceil(appData.getTargetMonth());
        blockIncomePeriod.value = appData.calcSavedMoney();
        
        inputeReng.addEventListener('input', function(){  // меняет значение  по движению ползунка в поле НАКОПЛЕНИЯ ЗА ПЕРИОД  
            blockIncomePeriod.value = appData.calcSavedMoney();
        });
    }, 
    addExpensesBlock: function(){  // // кнопка плюс которая добавляет инпуты и после 3-го
        
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, bottonPlusExepenses);
        expensesItems = document.querySelectorAll('.expenses-items');

         if(expensesItems.length === 3){
             bottonPlusExepenses.style.display = 'none';
        }
    },
    getExpenses: function(){
        expensesItems.forEach(function(item){
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;
            if(itemExpenses !== '' && cashExpenses !== ''){
                appData.expenses[itemExpenses] = cashExpenses;
            }
        });
    },

    getRange: function(){ // Ползунок
        inputeReng.addEventListener('input', function() {
            periodAmount.innerHTML = inputeReng.value;
        });
        
    },
    addIncomeBlock: function(){  // // кнопка плюс которая добавляет инпуты и после 3-го
    
        let cloneIncomeItem = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItem, bottonPlusIncome);
        incomeItems = document.querySelectorAll('.income-items');

        if(incomeItems.length === 3){
            bottonPlusIncome.style.display = 'none';
        }
    },


    getIncome: function(){                   // ДЗ  сделать точно так же как в getExpenses
        incomeItems.forEach(function(item){
            let itemFinanse = item.querySelector('.income-title').value;
            let cashFinanse = item.querySelector('.income-amount').value;
            if(itemFinanse !== '' && cashFinanse !== ''){
                appData.income[itemFinanse] = cashFinanse;
            }
        });
        /*if(confirm('Есть ли у Вас дополнительный источник зароботака')){
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
        */
        for ( let key in appData.income){
            appData.incomeMonth += +appData.income[key]; 
        }
    },
    getAddExpenses: function(){
        let addExpenses = inputPossibleExpense.value.split(',');
        addExpenses.forEach(function(item){
            item = item.trim();
            if (item !== ''){
                appData.addExpenses.push(item);
            }
        });
    },
    getAddInkome: function(){
        inputAdditional.forEach(function(item){
            let itemValue = item.value.trim();
            if(itemValue !== ''){
                appData.addIncome.push(itemValue);
            }
        });
    },
    /*asking: function(){    // метод в котором будем расспрашивать пользователя

        let addExpenses = prompt('Перечислите возможные расходы через запятую.','машина квартира ипотека');
            appData.addExpenses = addExpenses.split(/(?:,| )+/);   // сплит ставит запятую учитывая пробелы
            appData.deposit = confirm('Есть ли у Вас депозит в банке?');
    },*/
    getExpensesMonth: function(){
        for(let key in appData.expenses){
            appData.expensesMonth += +appData.expenses[key];  
        }
    },
    
    getBudget: function(){
        appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
 
    },
    getTargetMonth: function(){
        return inputTarget.value / appData.budgetMonth;
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
        return appData.budgetMonth * inputeReng.value; // inputeReng(поле).value(полученное значение с input )
    },
    
};

 let blockerInput = function  (){   // функция блокирующая input и кнопку Рассчитать
    start.addEventListener('click', function(){
        inputLeft.forEach(function(items){
            items.disabled = true;
        });
        start.style.display = 'none';
        cancel.style.display = 'block';
    }); 
};

blockerInput();

appData.getRange();
start.addEventListener('click', appData.start);

bottonPlusExepenses.addEventListener('click', appData.addExpensesBlock); // создал клик и вызов при клике метода 
bottonPlusIncome.addEventListener('click', appData.addIncomeBlock);

console.log('Расходы за месяц: ' + appData.expensesMonth);
console.log('Уровень дохода: ' + appData.getStatusIncome());

if(appData.getTargetMonth() > 0){
    console.log('Цель будет достигнута за: ' + Math.ceil(appData.getTargetMonth()) + ' мес.');
}else{
    console.log('Wtkm не будет достигнута');
}

/*for(let key in appData ){
    console.log('Наша программа включает в себя данные: ' + key + ' - ' + appData[key]);
}
*/
    /* Перебираю массив и делаю элементы заглавными буквами */
 /*   
let arr = appData.addExpenses.map(function(item){
    return item[0].toUpperCase() + item.slice(1).toLowerCase();
    });
console.log(arr.join(', '));

*/