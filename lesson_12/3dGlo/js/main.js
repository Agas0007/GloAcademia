
window.addEventListener('DOMContentLoaded', function(){  // загружает только ДОМ дерево и не дожидается загрузки всего контента
    'use strict';

 // Timer
 function countTimer(deadline){
     let timerHours = document.querySelector('#timer-hours'),
         timerMinutes = document.querySelector('#timer-minutes'),
         timerSeconds = document.querySelector('#timer-seconds');
         
         function getTimerRemaining(){
           let  dateStop = new Date(deadline).getTime(), // .getTime() возвращает числовое значение, соответствующее указанной дате по всемирному координированному времени
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow) / 1000, // разделив на 1000 мы нашли секунды - перевели милисекуды в секунды 
                seconds = Math.floor(timeRemaining % 60), // остаток от деления  нашли секунды в минуте
                minutes = Math.floor((timeRemaining / 60) % 60), // получили оставшиеся минуты до даты
                hours = Math.floor(timeRemaining / 60 / 60);   // получили часы, оставшиеся минуты разделили на 60 мину
                //hours = Math.floor(timeRemaining / 60 /60) % 24, // получил часы при условии, что еще буду дни учитывать в следующем параметре
                //day = Math.floor(timeRemaining / 60 /60 / 24);
                
                if(hours <= 9){
                    hours = '0' + hours;
                }
                if(minutes <= 9){
                    minutes = '0' + minutes;
                }
                if(seconds <= 9){
                    seconds = '0' + seconds;
                } 

                return{ timeRemaining, hours, minutes, seconds };  // возвращает часы, минуты и секунды
         }
        
         function updateClock(){
            let timer = getTimerRemaining();  

            timerHours.textContent = timer.hours;   
            timerMinutes.textContent = timer.minutes;  // вывел на страничку минуты
            timerSeconds.textContent = timer.seconds;
            
            if(timer.timeRemaining > 0){
                setInterval(updateClock, 1000);
            }else if(timer.timeRemaining <= 0){
                timerHours.textContent = '00';   // ПЕРЕДАЛ ЗНАЧЕНИЕ 00 для своих элементов.
                timerMinutes.textContent = '00';
                timerSeconds.textContent = '00';
                clearTimeout(updateClock);
                
            }    
            
         }

         updateClock();

 }
 countTimer('15 november 2019 10:09:00');
});

