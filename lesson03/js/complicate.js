'use strict'

let leng = prompt('Сделайте выбор: en или ru?');

if (leng == 'en'){
    alert
    ('Monday, \n Tuesday, \n Wednesday, \n Thursday, \n Friday, \n Saturday, \n Sunday');
}else if( leng == 'ru'){
    alert
    ('Понедельник, \n Вторник, \n Среда, \n Четверг, \n Пятница, \n Суббота, \n Воскресенье');
} else{
    alert('Что-то пошло не так');
};

//switch заменяет собой сразу несколько if.
leng = prompt('Сделайте выбор ВТОРОЙ раз: en или ru?');

switch(leng){
    case 'ru':
    alert
    ('Понедельник, \n Вторник, \n Среда, \n Четверг, \n Пятница, \n Суббота, \n Воскресенье');
    break;
    case 'en':
    alert
    ('Monday, \n Tuesday, \n Wednesday, \n Thursday, \n Friday, \n Saturday, \n Sunday');
    break;
    default:
    alert('Что-то пошло не так');             
}

// Многомерный массив выведенный через тернарный оператор "?" 

leng = prompt('3. Сделайте выбор ВТОРОЙ раз: en или ru?');

let enDay = ['Monday, \n Tuesday, \n Wednesday, \n Thursday, \n Friday, \n Saturday, \n Sunday'],
    ruDay = ['Понедельник, \n Вторник, \n Среда, \n Четверг, \n Пятница, \n Суббота, \n Воскресенье'];

    (leng == 'ru') ? alert(ruDay) : 
    (leng == 'en') ? alert(enDey) :
    alert('Что-то пошло не так');


 /*Вторая часть задания */
 
 let namePersone = prompt ('Как Вас зовут?');

    (namePersone == 'Артем') ? alert('Директор') :
    (namePersone == 'Максим') ? alert('Преподаватель') :
    alert('Cтудент'); 


    