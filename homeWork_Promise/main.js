//! Задание №1
  //? Простое обещание (Promise)

const onePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise выполнено!")
    }, 2000)
  })
  
  onePromise.then((result) => {
    console.log(result) 
  })


//! Задание №2
  //? Обработка ошибок

  const twoPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Произошла ошибка!!!")
    }, 3000)
  })
  
  twoPromise.catch((error) => {
    console.error(error)
  })

//! Задание №3
  //? Promise с условием

  function checkingTheNumber(number) {
    return new Promise((resolve, reject) => {
      if (number % 2 === 0) {
        resolve("Это число является четным")
      } else {
        reject("Это число является нечетным")
      }
    })
  }
  
  const checkNum = 101
  
  checkingTheNumber(checkNum)
    .then((result) => {
      console.log(result)
    })
    .catch((error) => {
      console.error(error)
    })


 //! Задача №4
   //? Асинхронный запрос к серверу

const jsonPlaceholder = ('https://jsonplaceholder.typicode.com/users')

fetch(jsonPlaceholder)
  .then((response) => {
    if (!response.ok) {
      throw new Error('Произошла сетевая ошибка!')
    }
    return response.json()
  })
  .then((data) => {
    console.log('Данные api:', data)
  })
  .catch((error) => {
    console.error('Произошла ошибка:', error)
  })