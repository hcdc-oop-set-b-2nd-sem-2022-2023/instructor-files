// variables with basic data types
// let name: string
// let number1: number
// let isAccepted: boolean

// name = 'Karl'
// do not use var

// const name1 = 'Andy'
// let number2 = 1.5
// number2 = 5
// let number3: number
// number3 = 5

// let age: number | string | boolean
// age = 5
// age = '5'
// age = true

// const PI = 3.141502654
// const WITHHOLDING_TAX = 0.12

// variables with objects and arrays
// const numbers = [1, 2, 3]
// let exampleNumbers: number[]
// const names = ['Karl', 'Andy']

// exampleNumbers = [2, 3, 4]

// console.log(numbers[1] + numbers[2])
// numbers.push(4)
// console.log(numbers)
// numbers.pop()
// console.log(numbers)
// console.log(numbers.shift())
// console.log(numbers)

// objects
// let userInfo = {
//   name: 'Andy',
//   age: 22,
//   address: 'Davao',
//   mobileNumber: '0909090',
//   hobbies: ['basketball', 'dota2', 'programming'],
//   acads: {
//     yearLevel: 5,
//     course: 'BSCpE',
//     school: 'HCDC',
//   },
// }

// console.log(userInfo["name"])
// console.log("Hi I'm " + userInfo["name"] + " " + "and my age is " + userInfo["age"])
// string interpolation
// console.log(`Hi I'm ${userInfo["name"]} and my age is ${userInfo["age"] + 10}`)
// console.log(userInfo['hobbies'][1])
// console.log(userInfo['acads']['yearLevel'])

// operators
// console.log(5 + 5)
// console.log(6 * 6)
// console.log(5 - 6)
// console.log(5/6)
// console.log(4 % 2)

// logical operators
// let x: unknown = "1"
// let y: any = "2"
// console.log(1 == 1)
// console.log(1 == x)
// console.log(1 === x)
// let num1 = 1
// let num2 = 2
// console.log(num1 !== num2)
// let isAccepted = true
// console.log(!isAccepted)

// conditions
// let age = 17

// if (age >= 18) {
//   console.log('OK')
// } else {
//   console.log('taph')
// }

// let grade = 72

// if (grade >= 50 && grade < 70) {
//   console.log('failed')
// } else if (grade >= 70 && grade <= 74) {
//   console.log('eligible for removal')
// } else if (grade >= 75 && grade <= 100) {
//   console.log('passed')
// } else {
//   console.log('invalid grade')
// }

// switch
let answer = 'B'

switch (answer) {
  case 'B':
  case 'C':
    console.log('correct')
    break

  default:
    console.log('wrong')
    break
}
