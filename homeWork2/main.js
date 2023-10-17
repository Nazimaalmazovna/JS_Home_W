// Задача №1
let age = 19;

if (age >= 18) {
  console.log("Совершеннолетний");
} else {
  console.log("Несовершеннолетний");
}

// Задача №2
let isStudent = true;

if (isStudent) {
  console.log("Студент");
} else {
  console.log("Не студент");
}

// Задача №3
let num1 = 198;
let num2 = 200;

let sum = num1 + num2;

console.log("Сумма этих чисел: " + sum);

// Задача №4
let day = 7;

switch (day) {
  case 1:
    console.log("Понедельник");
    break;
  case 2:
    console.log("Вторник");
    break;
  case 3:
    console.log("Среда");
    break;
  case 4:
    console.log("Четверг");
    break;
  case 5:
    console.log("Пятница");
    break;
  case 6:
    console.log("Суббота");
    break;
  case 7:
    console.log("Воскресенье");
    break;
  default:
    console.log("Некорректный номер дня недели! Введите от 1 до 7!");
}

// Задача №5
let temperature = 50;

if (temperature < 20) {
    console.log("Холодно");
  } else if (temperature >= 21 && temperature <= 35) {
    console.log("Тепло");
  } else {
    console.log("Горячо");
  }

// Задача №6
let score = 15; 

let result = (score >= 60) ? "Сдал" : "Не сдал";

console.log(result);

// Задача №7
let numm = 7;

if (numm % 2 == 0) {
  console.log("Четное");
} else {
  console.log("Нечетное")
}

// Задача №8
let language = "JavaScript";
if (language == "JavaScript") {
  console.log("Поддерживается");
} else {
  console.log("Не поддерживается")
}

// Задача №9
let userRole = "admin"

if (userRole == "admin") {
  console.log("Доступ разрешен");
} else if (userRole == "editor") {
  console.log("Доступ ограничен");
} else {
  console.log("Доступ запрещен");
}

// Задача №10
let a = 10
let b = 9
let c = 2

if (a > b && a > c) {
  console.log("a");
} else if (b > a && b > c) {
  console.log("b");
} else {
  console.log("c");
}

//Задача №11
let fruit ="банан"

if (fruit == "яблоко") {
  console.log("Красное");
} else if (fruit == "банан") {
  console.log("Желтый");
} else if (fruit == "апельсин") {
  console.log("Оранжевый")
}else {
  console.log("Другой цвет");
}

// Задача №12
var income = 50000000000; 

var income2 = (income > 200000) ? "Высокий доход" : (income >= 100000) ? "Средний доход" : "Низкий доход";

console.log(income2);


// Задача №13
let grade = "A";

 switch (grade) {
   case "A":
     console.log("Отлично");
     break;
   case "B":
     console.log("Хорошо");
     break;
   case "C":
     console.log("Удовлетворительно");
     break;
   case "D":
     console.log("Плохо");
     break;
   case "F":
     console.log("Провал");
   default:
     console.log("Некорректный ввод!");
 }

 // Задача №14
let password = "na0lklmlmlmlmlml4"

if (password.length >= 8) {
  console.log("Пароль надежный")
} else {
  console.log("Пароль слишком короткий");
}

// Задача №15
let x = 60
let y = 990

let xY = x > y ? "x больше y" : (y > x ? "y больше x" : "x и y равны");
console.log(xY);

// Задача №16  
let isRaining = true;

if (isRaining) {
  console.log("Идет дождь");
} else {
  console.log("Дождя нет");
}

//Задача №17
let isLeapYear = false;

if (isLeapYear) {
  console.log("Год високосный");
} else {
  console.log("Год не високосный");
}

// Задача №18
let userInput = "Рассписание на неделю"

if (userInput =="") {
  console.log("Эта строка пустая")
} else {
  console.log("Эта строка не пустая")
}

// Задача №19
let num = -90;

if (num > 0) {
    console.log("Положительное");
  } else if (num < 0) {
    console.log("Отрицательное");
  } else {
    console.log("Ноль");
  }


// Задача №20
let dayOfWeek = "сб";

switch (dayOfWeek) {
  case "пн":
    console.log("Рабочий день");
    break;
  case "вт":
    console.log("Рабочий день");
    break;
  case "ср":
    console.log("Рабочий день");
    break;
  case "чт":
    console.log("Рабочий день");
    break;
  case "пт":
    console.log("Рабочий день");
    break;
  case "сб":
    console.log("Выходной");
    break;
  case "вс":
    console.log("Выходной");
    break;
  default:
    console.log("Введите день недели правильно!");
}

//! Дополнительные задания

//? Задача №1
// Задача с поиском простых чисел
let number = 90;

if (number <= 1) {
  console.log(number + " -  не простое число");
} else if (number <= 3) {
  console.log(number + " - простое число");
} else if (number % 2 === 0 && number % 3 === 0) {
  console.log(number + " - не простое число");
} else if (number == 5) {
  console.log(number + " - простое число")
} else if (number == 7) {
  console.log(number + " - простое число")
} else {
  console.log(number + " -  не простое число")
}

//? Задача №4
// Задача с банковским счетом
let balance = 10000;
let withdrawal = 500000;

if (balance >= withdrawal) {
    console.log("Средств достаточно");
} else {
    console.log("Недостаточно средств");
}

//? Задача №5
// Задача с определением сезона
let month = 2;
let year = 2023;

if (month < 1 || month > 12) {
    console.log("Неверный месяц");
} else if (month >= 3 && month <= 5) {
    console.log("Весна");
} else if (month >= 6 && month <= 8) {
    console.log("Лето");
} else if (month >= 9 && month <= 11) {
    console.log("Осень");
} else {
    console.log("Зима");
}




