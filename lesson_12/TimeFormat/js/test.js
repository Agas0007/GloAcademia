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
         
         if(hours <= 9){
             hours = '0' + hours;
         }
         if(minutes <= 9){
             minutes = '0' + minutes;
         }
         if(seconds <= 9){
             seconds = '0' + seconds;
         } 
    return{ timeRemaining, hours, minutes, seconds, day, timeToString };  // возвращает часы, минуты и секунды
  }


let time = getTimerRemaining();
                    
if(time.hours >= 0 && time.hours <= 5){
    timeDay.innerText = ('Доброй ночи');
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


let timeDay = document.createElement('p'),  // Время суток
            today = document.createElement('p'),  // День недели
            currentTime  = document.createElement('p'), // текущее время
            newYear = document.createElement('p'); // До нового года осталось
            
            timeDay.textContent = ('');
            today.textContent = ('Сегодня: ');
            currentTime.textContent = (' Текущее время: ');
            newYear.textContent = (' До нового года осталось: ');
        
        
        document.body.appendChild(timeDay);
        document.body.appendChild(today);
        document.body.appendChild(currentTime);
        document.body.appendChild(newYear);