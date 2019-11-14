

    'use strict';
    
            //  ТАЙМЕР КОТОРЫЙ СЧИТАЕТ ВРЕМЯ

    function getTimerRemaining(){
        let  date = new Date(), 
             dateStop = new Date('January 1, 2020').getTime(), // .getTime() возвращает числовое значение, соответствующее указанной дате по всемирному координированному времени
             dateNow = new Date().getTime(),
             timeRemaining = (dateStop - dateNow) / 1000, // разделив на 1000 мы нашли секунды - перевели милисекуды в секунды 
             seconds = Math.floor(timeRemaining % 60), // остаток от деления  нашли секунды в минуте
             minutes = Math.floor((timeRemaining / 60) % 60), // получили оставшиеся минуты до даты
             hours = Math.floor(timeRemaining / 60 /60) % 24, // получил часы при условии, что еще буду дни учитывать в следующем параметре
             day = Math.floor(timeRemaining / 60 /60 / 24),
             timeToString = date.toLocaleTimeString();
            
        return{ timeRemaining, hours, minutes, seconds, day, timeToString, date };  // возвращает часы, минуты и секунды
      }

      let timeDay = document.createElement('p'),  // Время суток
            today = document.createElement('p'),  // День недели
            currentTime  = document.createElement('p'), // текущее время
            newYear = document.createElement('p'); // До нового года осталось
            
            // timeDay.textContent = ('');
            // today.textContent = ('');
            // currentTime.textContent = (' Текущее время: ');
            // newYear.textContent = (' До нового года осталось: ');


    function presentDay(){  //  ПЕРЕБОР ДНЕЙ НЕДЕЛИ И ВРЕМЕНИ СУТОК
            let time = getTimerRemaining();
                    
            if(time.hours >= 0 && time.hours <= 5){
                timeDay.textContent = ('Доброй ночи');
            }
            else if(time.hours >= 6 && time.hours <= 9){
                timeDay.innerText = ('Доброt утро');
            }
            else if(time.hours >= 10 && time.hours <= 17){
                timeDay.innerText = ('Добрый день');
            }
            else if(time.hours >= 18 && time.hours <= 21){
                timeDay.innerText = ('Добрый вечер');
            }
            else if(time.hours >= 22 && time.hours <= 24){
                timeDay.innerText = ('Доброй ночи');
            }
           
            let  week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
            today.textContent = 'Сегодня: ' + week[time.date.getDay()];
    
            
            function clock(){
                let time = getTimerRemaining();
                currentTime.textContent = `Текущее время: ${time.timeToString}`;
                setInterval(clock, 100);
            } 
            clock();

            if(time.timeRemaining > 0){
                newYear.textContent = `До Нового года осталось ${time.day} дней`;
            } else{
                newYear.textContent = ' Новый год наступил!';
            } 
    
    } 
    
    /// ДОБАВЛЕНИЕ ЭЛЕМЕНТОВ НА СТРАНИЧКУ
        document.body.appendChild(timeDay);
        timeDay.style.cssText = `font-size:25px;
                                text-shadow: -1px -1px 1px silver,
                                text-shadow: 1px 1px 1px silver,
                                -1px 1px 1px silver;
                                color: red;`;
        document.body.appendChild(today);
        today.style.cssText = ` font-size:25px;
                                text-shadow: -1px -1px 1px silver,
                                1px -1px 1px silver;
                                color: red;`;
        document.body.appendChild(currentTime);
        currentTime.style.cssText = `
                                    font-size:25px;
                                    text-shadow: 1px 1px 1px silver,
                                    -1px 1px 1px silver;
                                    color: red;`; 
        document.body.appendChild(newYear);
        newYear.style.cssText =` font-size:30px;
                                text-shadow: 1px 1px white,
                                2px 2px blue;
                                color: #729;`;
        
        
        
        presentDay();
        
    
   

   

