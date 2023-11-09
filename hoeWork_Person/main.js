//! Задача №1 
  //?Деструктуризация объекта

const person= {
    name: "Назима",
    age: 19,
    gender: "Женский",
    city: "Бишкек",
    profession: "Студент",
    maritalStatus: "Не замужем",
};

const {name, age, gender, city, profession, maritalStatus}= person

console.log("Имя: " + name)
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

