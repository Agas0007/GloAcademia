'use strict';

    /* Получение кнопки */
const start  = document.getElementById('start'),
    cancel = document.getElementById('cancel'),
    /* Получить кнопки “+” (плюс) через Tag, каждую в своей переменной. */
    bottonPlusIncome = document.querySelectorAll('button')[0], // ('button')[0] ноль означает индекс элемента к кторому обращаемся по тегу
    bottonPlusExepenses = document.querySelectorAll('button')[1], // кнопка "+" считает Доход 
    /* Доступ к Чекбоксу*/
    checkBox = document.querySelector('#deposit-check'),
    /* поля для ввода возможных доходов */
    inputAdditional = document.querySelectorAll('.additional_income-item'),   // Возможный доход
    inputAdditional2 = document.querySelectorAll('.additional_income-item')[1],  // Возможный доход
    /* Итоговые блоки */
    blockBudgetMonth = document.querySelector('.budget_month-value'),
    blockBudgetDay = document.querySelector('.budget_day-value'),
    blockExpensesMonth = document.querySelector('.expenses_month-value'),
    blockAdditionalIncome = document.querySelector('.additional_income-value'),
    blockAdditionalExpenses = document.querySelector('.additional_expenses-value'),
    blockIncomePeriod = document.querySelector('.income_period-value'),    
    /* Другие инпуты */
    salaryMonth = document.querySelector('.salary-amount'), //Месячный доход 
    extraIncome = document.querySelectorAll('.income-title')[1], // Дополнительный доход
    inputExpense = document.querySelectorAll('.expenses-title')[1],  // Обязательные расходы
    inputPossibleExpense = document.querySelector('.additional_expenses-item'),  // Возможные расходы
    inputTarget = document.querySelector('.target-amount'),
    inputeReng = document.querySelector('.period-select'), // ползунок
    periodAmount = document.querySelector('.period-amount'),
    depositCheck = document.querySelector('#deposit-check'),
    depositAmount = document.querySelector('.deposit-amount'),
    depositBank = document.querySelector('.deposit-bank');
    

    let blockTargetMonth = document.querySelector('.target_month-value'),
        expensesItems = document.querySelectorAll('.expenses-items'),  //Обязательные расходы сумма 
        incomeItems = document.querySelectorAll('.income-items'),// Блок дополнительный доход
        depositPercent = document.querySelector('.deposit-percent'), 
        inputLeft = document.querySelectorAll('.data input[type="text"]'); // input слевой стороны


const AppData = function (){
    this.budget = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.income = {}; // доп доходы  
    this.incomeMonth = 0;  
    this.addIncome = [];//доп доходы  
    this.expenses = {};// доп расходы   
    this.addExpenses = [];//массив с  возожными расходами 
    this.deposit = false; 
    this.percentDeposite = 0;
    this.moneyDeposite = 0;
    this.expensesMonth = 0; 
};

AppData.prototype.start = function(){
             
    /* Запретил нажатие кнопки Рассчитать пока поле Месячный доход пустое */ 
    
    if(salaryMonth.value === '' ){
        start.addEventListener('click', function(event){
            event.preventDefault();
        });
        return false;
    }

   this.budget = +salaryMonth.value;

    this.addBlock();
    this.getExpInc();
    this.getExpenses();
    this.getExpensesMonth();
    this.getInfoDeposit();
    this.getBudget();
    
    this.getRange(); 
    

    appData.showResult();
    
/* функция блокирующая input и убирает кнопку Рассчитать */
    inputLeft = document.querySelectorAll('.data input[type="text"]');
    inputLeft.forEach(function(items){
        items.disabled = true;
    });
    start.style.display = 'none';
    cancel.style.display = 'block';
};

AppData.prototype.showResult = function(){     // Метод Выводит результаты вычисления в правую колонку
        const _this = this;
        blockBudgetMonth.value = this.budgetMonth;
        blockBudgetDay.value = this.budgetDay;
        blockExpensesMonth.value = this.expensesMonth;
        blockAdditionalExpenses.value = this.addExpenses.join(', ');
        blockAdditionalIncome.value = this.addIncome.join(', ');
        blockTargetMonth.value =  Math.ceil(this.getTargetMonth());
        blockIncomePeriod.value = this.calcSavedMoney();
        
        inputeReng.addEventListener('input', function(){  // меняет значение  по движению ползунка в поле НАКОПЛЕНИЯ ЗА ПЕРИОД  
            blockIncomePeriod.value = _this.calcSavedMoney();
        });
    };
    
    AppData.prototype.addBlock = function(){  // Метод который содержит в себе кнопки добавляющие инпуты
             if(event.target.classList[1] === 'expenses_add'){  // обратился к кнопке expenses_add  и делегировал ей событие  
                let cloneExpensesItem = expensesItems[0].cloneNode(true);
                expensesItems[0].parentNode.insertBefore(cloneExpensesItem, bottonPlusExepenses);
                expensesItems = document.querySelectorAll('.expenses-items');
                
                if(expensesItems.length === 3){
                    bottonPlusExepenses.style.display = 'none';
                }
             }else if(event.target.classList[1] === 'income_add'){
                let cloneIncomeItem = incomeItems[0].cloneNode(true);
                incomeItems[0].parentNode.insertBefore(cloneIncomeItem, bottonPlusIncome);
                incomeItems = document.querySelectorAll('.income-items');

                if(incomeItems.length === 3){
                    bottonPlusIncome.style.display = 'none';
                }
             
            }
    };
   
   
    AppData.prototype.getExpenses = function(){
        const _this = this;
        expensesItems.forEach(function(item){
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;
            if(itemExpenses !== '' && cashExpenses !== ''){
                _this.expenses[itemExpenses] = cashExpenses;
            }
        });
    };

    AppData.prototype.getRange = function(){ // Ползунок
        inputeReng.addEventListener('input', function() {
            periodAmount.innerHTML = inputeReng.value;
        });
        
    };
    

    AppData.prototype.getIncome = function(){
        const _this = this;                    // ДЗ  сделать точно так же как в getExpenses
        incomeItems.forEach(function(item){
            let itemFinanse = item.querySelector('.income-title').value;
            let cashFinanse = item.querySelector('.income-amount').value;
            if(itemFinanse !== '' && cashFinanse !== ''){
                _this.income[itemFinanse] = cashFinanse;
            }
        });
        for ( let key in this.income){
            this.incomeMonth += +this.income[key]; 
        }
    };

    AppData.prototype.getExpInc = function(){ // функция обьеденяет в себе 2 ( getAddIncome/getAddExpenses)
        const _this = this;
        
        let addExpenses = inputPossibleExpense.value.split(',');
        addExpenses.forEach(function(item){
            item = item.trim();
            if (item !== ''){
                _this.addExpenses.push(item);
            }
        });
        
        inputAdditional.forEach(function(item){
                let itemValue = item.value.trim();
                if(itemValue !== ''){
                    _this.addIncome.push(itemValue);
                }
            });
    };
   
   AppData.prototype.getExpensesMonth = function(){
        const _this = this;
        for(let key in _this.expenses){
            this.expensesMonth += +_this.expenses[key];  
        }
    };
    
    AppData.prototype.getBudget = function(){
        this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth + (this.moneyDeposite * this.percentDeposite)/12;
        this.budgetDay = Math.floor(this.budgetMonth / 30);
 
    };
    AppData.prototype.getTargetMonth = function(){
        return inputTarget.value / this.budgetMonth;
    };
    AppData.prototype.getStatusIncome = function() {
        if (this.budgetDay >= 800){
            return('Высокий уровень дохода');
        } else if(this.budgetDay >= 300 && this.budgetDay < 800){
            return('Средний уровень дохода');
        } else if(this.budgetDay >= 0 && this.budgetDay < 300){
            return('Низкий уровень дохода');
        } else{
            return('Что-то пошло не так с уровнем дохода');
        }     
    };
    AppData.prototype.getInfoDeposit = function(){
        const _this = this;
        if(_this.deposit){
            do{
                this.percentDeposite = depositPercent.value;
            }while(isNaN(this.percentDeposite) || this.percentDeposite === '' || this.percentDeposite === null);
            
            do{
                this.moneyDeposite = depositAmount.value;
            }while(isNaN(this.moneyDeposite) || this.moneyDeposite === '' || this.moneyDeposite === null);
            
        }
    };
    AppData.prototype.calcSavedMoney = function(){
        return this.budgetMonth * inputeReng.value; // inputeReng(поле).value(полученное значение с input )
    };
    AppData.prototype.reset = function(){
        
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

    };

AppData.prototype.eventsListeners = function(){
   // Сюда перенести все навешивания событий
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
   

       bottonPlusExepenses.addEventListener('click', appData.addBlock); // создал клик и вызов при клике метода 
       bottonPlusIncome.addEventListener('click', appData.addBlock);  
    };    

const appData = new AppData();
appData.eventsListeners();                  //-- вызов функции "методов вызова" раскоментируй

depositCheck.addEventListener('change', function(){
    if(depositCheck.checked){
        depositBank.style.display = 'inline-block';
        depositAmount.style.display = 'inline-block';
        appData.deposit = 'true';
            depositBank.addEventListener('change', function(){
                let selectIndex = this.options[this.selectedIndex].value;
                if(selectIndex === 'other'){
                    depositPercent.style.display = 'inline-block';
                    depositPercent.value = '';
                    depositPercent.disabled = false;
                }else{
                    depositPercent.style.display = 'none';
                    depositPercent.value = selectIndex;
                    appData.deposit = 'false';
                }
            });
        }else{                               // убираю поля
        depositBank.style.display = 'none';
        depositAmount.style.display = 'none';
        depositAmount.value = '';  // обнуляю строчку
       }
});

