//! Задача №1 
  //?Деструктуризация объекта

const person= {
    myName: "Назима",
    age: 19,
    gender: "Женский",
    city: "Бишкек",
    profession: "Студент",
    maritalStatus: "Не замужем",
};

const {myName, age, gender, city, profession, maritalStatus}= person

console.log("Имя: " + myName)
console.log("Возраст: " + age)
console.log("Пол: " + gender)
console.log("Город: " + city)
console.log("Профессия: " + profession)
console.log("Семейное положение: " + maritalStatus)

//! Задача №2
  //? Деструктуризация массива

const num= [1,2,3,4,5,6]

const [first, , , , , last]= num

console.log("Первый элемент:" + first)
console.log("Последний элемент:" + last)

//! Задача №3
  //? Функция и деструктуризация

function getPerson(person) {
    const { personName, personAge }= person

    return { personName, personAge }
}
  
const personInfo= {
    personName: "Келгенбаева Назима",
    personAge: 19,
    personGender: "Женский",
    personCity: "Бишкек",
    personProfession: "Студент",
};
  
const { personName, personAge }= getPerson(personInfo)
console.log("Имя: " + personName)
console.log("Возраст: " + personAge)


//! Задача №4
  //? Обмен значениями

let a = 100;
let b = 150;

[a, b] = [b, a];
  
console.log("Теперь значение a =", a)
console.log("Теперь значение b =", b)

//! Задача №5
  //? Вложенная деструктуризация

const companyInfo= {
    companyName: "Codify Academy",
    address: "105/3 st. Isanova, Bishkek",
    employees: [
      { employeeName: "Aidar", position: "Mentorr" },
      { employeeName: "Nadira", position: "technical support" },
    ],
  }
  
const { companyName, employees: [{ employeeName: firstEmployeeName }] }= companyInfo

console.log("Название компании: " + companyName)
console.log("Имя первого сотрудника: " + firstEmployeeName)


//! Задача №6
  //? Деструктуризация в цикле

const students= [
    { studentName: "Nazima", studentAge: 19 },
    { studentName: "Aijana", studentAge: 21 },
    { studentName: "Rustam", studentAge: 17 },
    { studentName: "Artur", studentAge: 16 },
    { studentName: "Arsen", studentAge: 17 },
]
  
for (const { studentName, studentAge } of students) {
    console.log("Имя:" + studentName + ", Возраст:" + studentAge)
}  