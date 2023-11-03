//! Задача 1 
 
const User = { 
    name: "", 
    age: 0, 
 
    displayInformation: function() { 
      console.log("Name: " + this.name); 
      console.log("Age: " + this.age); 
    } 
  }; 
 
User.name = "Nazima"; 
User.age = 19;   
User.displayInformation(); 
   
 
//! Задача 2 
 
const Car = { 
    brand: "BMW", 
    introduceYourself: function() { 
      return "Моя машина-" + this.brand; 
    } 
  }; 
   
Car.brand = "BMW"; 
const introduction = Car.introduceYourself(); 
console.log(introduction);  
   
 
//! Задача 3 
 
 
function Circle(radius) { 
  this.radius = radius;  
 
  this.calculateArea = function() { 
    return Math.PI * this.radius * this.radius; 
  }; 
} 
 
const myCircle = new Circle(5);  
console.log("Площадь: " + myCircle.calculateArea()); 
 
 
//! Задача 4 
 
function Calculator(number1, number2) { 
    this.num1; 
    this.num2;  
   
 
    this.add = function() { 
      return this.num1 + this.num2; 
    }; 
   
 
    this.multiply = function() { 
      return this.num1 * this.num2; 
    }; 
  } 
   
 const myCalculator = new Calculator(10, 5);    
console.log("Сумма: " + myCalculator.add());console.log("Про-ние: " + myCalculator.multiply()); 
   
 
//! Задача 5 
 
function WeekDay() { 
    this.days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']; 
     
    this.getCurrentDay = function() { 
      const today = new Date().getDay(); 
      return this.days[today]; 
    }; 
  } 
   
const myWeekDay = new WeekDay(); 

const currentDay = myWeekDay.getCurrentDay(); 
console.log("Сегодня: " + currentDay); 
  
   
//! Задача 6 
 
function Product(name, price) { 
    this.название = name;  
    this.цена = price; 
   
    this.getInfo = function() { 
      return "Продукт " + this.название + " стоит " + this.цена + " $"; 
    }; 
  } 
   
const myProduct = new Product("Мaнитор", 300);  
console.log(myProduct.getInfo()); 
   
 
//! Задача 7 
 
function Animal(name) { 
    this.имя = name;  
   
    this.makeSound = function(sound) { 
      return this.имя + " издает звук " + sound; 
    }; 
  } 
   
const myAnimal = new Animal("Собака");  
   
console.log(myAnimal.makeSound("Гав-Гав")); 
   
//! Доп. Задания  
//! Reduce 
 
function myReduce(arr, reducer, initialValue) { 
    let accumulator = initialValue === undefined ? arr[0] : initialValue; 
   
    for (let i = initialValue === undefined ? 1 : 0; i < arr.length; i++) { 
      accumulator = reducer(accumulator, arr[i]); 
    } 
   
    return accumulator; 
  } 
   
  const numbers = [1, 2, 3, 4, 5]; 
  const sum = myReduce(numbers, function (accumulator, currentValue) { 
    return accumulator + currentValue; 
  }, 0); 
   
  console.log(sum);  
   
 
//! Sort 
 
function mySort(arr) { 
    for (let i = 0; i < arr.length - 1; i++) { 
      for (let j = 0; j < arr.length - i - 1; j++) { 
        if (arr[j] > arr[j + 1]) { 
          const temp = arr[j]; 
          arr[j] = arr[j + 1]; 
          arr[j + 1] = temp; 
        } 
      } 
    } 
  } 
   
  const nuMbers = [3, 1, 5, 2, 4]; 
  mySort(nuMbers); 
  console.log(nuMbers);