'use strict';

                /* 1.  Восстановиk порядок книг.   */

let orderBook = document.querySelectorAll('.books'), // вывел родителя родителю
    elem = document.querySelectorAll('.book');  // вывел детей
    
    
    orderBook[0].appendChild(elem[1]); // .appendChild перемещает элементы
    orderBook[0].appendChild(elem[0]);
    orderBook[0].appendChild(elem[4]);
    orderBook[0].appendChild(elem[3]);
    orderBook[0].appendChild(elem[5]);
    orderBook[0].appendChild(elem[2]);

    /* 2. Заменил картинку заднего фона на другую из папки image  */

let body = document.querySelector('body'); // querySelectorAll не подходит так как обращается ко всему дереву
    body.setAttribute('style', 'background-image: url(./image/you-dont-know-js.jpg)');
    

    /* 3. Исправил  заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов") */

elem[4].querySelector('h2 a').textContent = ('Книга 3. this и Прототипы Объектов');


            /*  Удалил рекламу со страницы  */

let poster = document.querySelector('.adv');
    body.removeChild(poster);


    /*  Восстановить порядок глав (chapter) во второй и пятой книге    */

    // вторая книга 
let chapter = elem[0].querySelectorAll('li'),
    ul = elem[0].querySelectorAll('ul');

ul[0].insertBefore(chapter[2], chapter[10]); // .insertBefore ставит один элемент перед первым (1-й перед , 2-м элементом)
ul[0].insertBefore(chapter[6], chapter[4]);
ul[0].insertBefore(chapter[8], chapter[4]);

    // пятая книга     
let chapterFive = elem[5].querySelectorAll('li'),
    ulFive = elem[5].querySelectorAll('ul');
    
ulFive[0].insertBefore(chapterFive[9], chapterFive[2]);
ulFive[0].insertBefore(chapterFive[3], chapterFive[2]);
ulFive[0].insertBefore(chapterFive[4], chapterFive[2]);
ulFive[0].insertBefore(chapterFive[5], chapterFive[8]);

    /*  В шестой книге добавил главу “Глава 8: За пределами ES6” */

let chapterSix = elem[2].querySelectorAll('ul'),  // обратился к списку ul
    chapterSixLi = elem[2].querySelectorAll('li'), // обращаюсь ко всем li которые в 6 книге
    liChapter = document.createElement('li');  // создал в document строку списка li которой небыло

    liChapter.textContent = ('Глава 8: За пределами ES6');

    chapterSix[0].insertBefore(liChapter, chapterSixLi[9]); // обратился к первому списку[0] затем с помощью inserBefore
                                                            //(разместил созданную li перед имеющейся последней главой с индексом [9]) 




