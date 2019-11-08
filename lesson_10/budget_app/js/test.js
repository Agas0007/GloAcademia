/*
let car = {
    doors: 4,
    ride: function(){
      console.log("машина едет")
    }
    };
    
    let newCar = Object.create(car);
    
    newCar.arr = {
        model: 'kkl',
        door: 'ghghg'
    };
    
    let newCar2 = Object.create(newCar);
    
    console.log(newCar.__proto__.hasOwnProperty('doors'));
*/



function Car(model, brend, options, transmission){
    this.model = model;
    this.brend = brend;
    options = options || {};
    this.color = options.color;
    this.transmission = options.transmission;
};



let car1 = new Car('Mazda', '5', {color: 'red', transmission: 'ytmn'} );
let car2 = new Car('W','10', {ABS: 'ytn'});


Car.prototype.ride = function(){
    console.log(this.brend + ' ' + this.model + ' Уехала!')
}

console.log(car1.ride(), car2.ride());




/*
Car.prototype.ride = function(){
    console.log('Ехать');
};

let car1 = new Car('Опель', '15', 'Ванишь');


let car3 = new Car('Опель', '15', 'Ванишь');

console.log('car1:', car1);
console.log('car1:', car3);

console.log(car1.ride === car3.ride);


console.dir(Car);

 car1.ride();
 */
 /*

let car = {
    model: 'Opel' 
}
console.log(car);
*/


















