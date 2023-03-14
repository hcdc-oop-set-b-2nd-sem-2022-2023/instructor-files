// function prompt(question: string, callback: Function): void {
//   const stdin = process.stdin,
//     stdout = process.stdout

//   stdin.resume()
//   stdout.write(question)

//   stdin.once('data', function (data): void {
//     callback(data.toString().trim())
//   })
// }

// For loop
// for (let counter = 1; counter <= 10; counter++) {
//   console.log(counter)
// }

// incrementing
// let counter = 0
// counter++
// counter = counter + 1
// counter += 1
// counter = counter * 1
// counter *= 1

// Problem 1: Print 0 to 100 with increment of 2
// for (let counter = 0; counter <= 100; counter += 2) {
//   console.log(counter)
// }

// Problem 2: Accept in integer input and calculate its summation
// prompt('Enter positive integer: ', function (inputNumber: string): void {
//   let num = +inputNumber
//   let sum = 0

//   for (let counter = 1; counter <= num; counter++) {
//     sum += counter
//   }

//   console.log(sum)
// })

// looping through arrays
// let gradeResults = [75, 66, 80, 92, 87, 72, 55, 99, 97]

// for (let index = 0; index < gradeResults.length; index++) {
//   console.log(`Entry #${index + 1}: ${gradeResults[index]}`)
// }

// Problem 3: Iterate and separate passing and failing grades
// const gradeResults = [75, 66, 80, 92, 87, 72, 55, 99, 97]
// let passedGrades = []
// let failedGrades = []

// for (let index = 0; index < gradeResults.length; index++) {
//   if (gradeResults[index] >= 75) {
//     passedGrades.push(gradeResults[index])
//   } else {
//     failedGrades.push(gradeResults[index])
//   }
// }

// console.log('Passed grades:', passedGrades)
// console.log(`Failed grades: ${failedGrades}`)

// array of objects
// let data = [
//   {
//     id: 1,
//     name: 'Karl',
//     city: 'Davao',
//   },
//   {
//     id: 2,
//     name: 'Andy',
//     city: 'Manila',
//   },
//   {
//     id: 3,
//     name: 'Danny',
//     city: 'Makati',
//   },
// ]

// for (let index = 0; index < data.length; index++) {
//   if (data[index]['id'] === 3) {
//     console.log(`Name: ${data[index]['name']}, City: ${data[index]['city']}`)
//   }
// }

// other iterations
let cities = ['Davao', 'Manila', 'Tokyo', 'Beirut']

cities.forEach((city) => {
  console.log(city)
})

// advance study this one
// map
// reduce
// filter
