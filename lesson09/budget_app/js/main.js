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
    income: {}, // доп доходы  // нет this 
    incomeMonth: 0,  // нет this 
    addIncome: [],//доп доходы  // нет this 
    expenses: {},// доп расходы  // нет this 
    addExpenses: [],//массив с  возожными расходами // нет this 
    deposit: false, // нет this 
    percentDeposite: 0,
    moneyDeposite: 0,
    expensesMonth: 0,
    start: function(){
             
        /* Запретил нажатие кнопки Рассчитать пока поле Месячный доход пустое */ 
        
        if(salaryMonth.value === '' ){
            start.addEventListener('click', function(event){
                event.preventDefault();
            });
            return false;
        }

       this.budget = +salaryMonth.value;

        this.getExpenses();
        this.getIncome();
        this.getExpensesMonth();        
        this.getAddExpenses(); 
        this.getAddInkome();
        this.getRange(); 
        this.getBudget();

        appData.showResult();
        
    /* функция блокирующая input и убирает кнопку Рассчитать */
        inputLeft = document.querySelectorAll('.data input[type="text"]');
        inputLeft.forEach(function(items){
            items.disabled = true;
        });
        start.style.display = 'none';
        cancel.style.display = 'block';
    },
    showResult: function(){     // Метод Выводит результаты вычисления в правую колонку
        blockBudgetMonth.value = this.budgetMonth;
        blockBudgetDay.value = this.budgetDay;
        blockExpensesMonth.value = this.expensesMonth;
        blockAdditionalExpenses.value = this.addExpenses.join(', ');
        blockAdditionalIncome.value = this.addIncome.join(', ');
        blockTargetMonth.value =  Math.ceil(this.getTargetMonth());
        blockIncomePeriod.value = this.calcSavedMoney();
        
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
        for ( let key in this.income){
            this.incomeMonth += +this.income[key]; 
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
   getExpensesMonth: function(){
        for(let key in appData.expenses){
            this.expensesMonth += +appData.expenses[key];  
        }
    },
    
    getBudget: function(){
        this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
        this.budgetDay = Math.floor(this.budgetMonth / 30);
 
    },
    getTargetMonth: function(){
        return inputTarget.value / this.budgetMonth;
    },
    getStatusIncome: function() {
        if (this.budgetDay >= 800){
            return('Высокий уровень дохода');
        } else if(this.budgetDay >= 300 && this.budgetDay < 800){
            return('Средний уровень дохода');
        } else if(this.budgetDay >= 0 && this.budgetDay < 300){
            return('Низкий уровень дохода');
        } else{
            return('Что-то пошло не так с уровнем дохода');
        }     
    },
    getInfoDeposit: function(){
        if(appData.deposit){
            do{
                this.percentDeposite = prompt('Какой годовой процент', '10');
            }while(isNaN(this.percentDeposite) || this.percentDeposite === '' || this.percentDeposite === null);
            
            do{
                this.moneyDeposite = prompt('Какая сумма заложена', 10000);
            }while(isNaN(this.moneyDeposite) || this.moneyDeposite === '' || this.moneyDeposite === null);
            
        }
    },
    calcSavedMoney: function(){
        return this.budgetMonth * inputeReng.value; // inputeReng(поле).value(полученное значение с input )
    },
    reset: function(){
        
        this.budget = 0,
        this.budgetDay = 0,
        this.budgetMonth = 0,
        this.income = {}, // доп доходы  // нет this 
        this.incomeMonth = 0,  // нет this 
        this.addIncome = [],//доп доходы  // нет this 
        this.expenses = {},// доп расходы  // нет this 
        this.addExpenses = [],//массив с  возожными расходами // нет this 
        this.deposit = false, // нет this 
        this.percentDeposite = 0,
        this.moneyDeposite = 0,
        this.expensesMonth = 0; 

    }
};

appData.getRange();

start.addEventListener('click', appData.start.bind(appData));  // привязал контекст вызова функции start к AppData

/* функция разблокирующая input и возвращает кнопку Рассчитать */

    cancel.addEventListener('click', function(){
       let inputReset = document.querySelectorAll('input[type="text"]');
       inputReset.forEach(function(items){
            items.value = '';
            items.disabled = false;
        });
        appData.reset();
        cancel.style.display = 'none';
        start.style.display = 'block';
    });

bottonPlusExepenses.addEventListener('click', appData.addExpensesBlock); // создал клик и вызов при клике метода 
bottonPlusIncome.addEventListener('click', appData.addIncomeBlock);

console.log('Расходы за месяц: ' + this.expensesMonth);
console.log('Уровень дохода: ' + appData.getStatusIncome());

if(appData.getTargetMonth() > 0){
    console.log('Цель будет достигнута за: ' + Math.ceil(appData.getTargetMonth()) + ' мес.');
}else{
    console.log('Wtkm не будет достигнута');
}
