//? Задача №1
// Создание объекта
const person = {
    name: "Назима",
    age: 19,
    city: "Бишкек"
};

console.log(person);

//? Задача №2
// Обновление объекта
let personn = {
    name: "Назима",
    age: 19,
    city: "Каракол"
};

personn.age = 20;

console.log(personn);

//? Задача №3
// Длина массива
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let length = numbers.length;

console.log("Длина массива: " + length);

//? Задача №4
//Добавление элементов в массив
let leo = []; 

leo.push("elephant");
leo.push("giraffe");
leo.push("monkey");

console.log(leo);

//? Задача №5
// Объект в массиве
let people = [
    {
        name: "Айжан",
        age: 21,
        city: "Бишкек"
    },
    {
        name: "Айдар",
        age: 21,
        city: "Бишкек"
    },
    {
        name: "Назима",
        age: 19,
        city: "Бишкек"
    }
];

console.log(people);

//? Задача №6
// Массив с разными типами данных
let data = [42, "Строка", { name: "Объект", age: 100 }];

console.log(data);

//? Задача №7
// Доступ к элементам массива
var fruits = ["Fig", "Lemon", "Grapefruit"];

console.log(fruits[2]);

//? Задача №8
// Доступ к свойствам объекта
var book = {
    title: "Белый Лотос",
    author: "Юлия Чеснокова",
    year: 2019
};

console.log(book.author);