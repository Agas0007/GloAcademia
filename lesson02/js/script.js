let money = 120000,
    income = 'freelance',
    addExspenses = 'Ноутбук, Квартира, Машина',
    deposit = true,
    mission = 1800000,
    period = 12;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

console.log(income.length);

console.log('За период ' + period + ' месяцев, цель заработать ' 
            + mission + ' рублей.');

console.log(addExspenses.toLowerCase(), addExspenses.split(','));

let budgetDay = money/30;
console.log('Дневной бюджет: ' + budgetDay + ',' + ' остаток: ' 
            +  money%30 + ' от деления' );