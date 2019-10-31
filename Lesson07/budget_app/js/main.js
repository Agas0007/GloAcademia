'use strict';

/* Получение кнопки */

let bottonCalc  = document.querySelector('#start');
    
/* Получить кнопки “+” (плюс) через Tag, каждую в своей переменной. */

let bottonPlusIncome = document.querySelectorAll('button')[0], // ('button')[0] ноль означает индекс элемента к кторому обращаемся по тегу
    bottonPlusExepenses = document.querySelectorAll('button')[1]; // кнопка "+" считает Доход 


/* Доступ к Чекбоксу*/

let checkBox = document.querySelector('#deposit-check');


    /* поля для ввода возможных доходов */

let inputAdditional = document.querySelectorAll('.additional_income-item')[0],   // Возможный доход
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
    extraIncomeSum = document.querySelector('.income-amount'), // Дополнительный доход сумма 
    inputExpense = document.querySelectorAll('.expenses-title')[1],  // Обязательные расходы
    inputExpenseSum = document.querySelector('.expenses-amount'),  //Обязательные расходы сумма 
    inputPossibleExpense = document.querySelector('.additional_expenses-item'),  // Возможные расходы
    inputTarget = document.querySelector('.target-amount'),
    inputeReng = document.querySelector('.period-select');
