'use strict'

let DomElement = function(){
    this.selector = '';
    this.height = 0;
    this.width = 0;
    this.bg = '';
    this.fontSize = '0';
};

/* Создал метод конструктора DomElement который содержит принимаемые параметры*/
DomElement.prototype.createElement =  function(name, height, width, bg, fontSize, textContent){
    let elem;
    this.selector = name;    
    if(this.selector[0] === '.'){
            elem = document.createElement('div');
            elem.className = name.slice(1);
        }
        else if(this.selector[0] === '#'){
            elem = document.createElement('p');
            elem.id = name.slice(1);
        }

    elem.style.height =  height + 'px';
    elem.style.width = width + 'px';
    elem.style.background = bg;
    elem.style.fontSize = fontSize + 'px';
    elem.textContent = textContent;

    return elem;   
    };    
    

let newElement = new DomElement();

let blockDiv = newElement.createElement('.class2','25', '50', 'red', '14', 'Привет.');
let id = newElement.createElement('#class2','28', '50', 'green', '15', 'Id');

console.log(blockDiv);
console.log(id);

document.body.appendChild(blockDiv);
document.body.appendChild(id);
