function prompt(question: string, callback: Function): void {
  const stdin = process.stdin,
    stdout = process.stdout

  stdin.resume()
  stdout.write(question)

  stdin.once('data', function (data): void {
    callback(data.toString().trim())
  })
}

// PROBLEM 1: Accept input from user and print it in console
// prompt('Enter any number: ', function (inputNumber: string): void {
//   console.log(inputNumber)
// })

// PROBLEM 2: Accept 2 inputs and calculate the product
// prompt('Enter first number: ', function (inputFirstNumber: string): void {
//   prompt('Enter second number: ', function (inputSecondNumber: string): void {
//     const firstNumber = +inputFirstNumber
//     const secondNumber = +inputSecondNumber

//     const product = firstNumber * secondNumber

//     // using concatenation
//     // console.log('The product is ' + product)
//     // using interpolation
//     console.log(`The product is ${product}`)
//   })
// })

// PROBLEM 3: Create that will accept a grade input and show if failed, for removal
// and passed
// prompt('Enter grade: ', function (inputGrade: string): void {
//   let grade = +inputGrade

//   // check if grade is valid
//   if (grade < 50 || grade > 100) {
//     console.log('Invalid grade')
//     process.exit(1)
//   }

//   // print grade status
//   if (grade < 72) {
//     console.log('You are failed')
//   } else if (grade > 74) {
//     console.log('You are passed')
//   } else {
//     console.log('You are eligible for removal')
//   }
// })

// loops
// using while loop

// first approach
// let counter = 1

// while (counter <= 10) {
//   console.log(counter)
//   // counter = counter + 1
//   // counter += 1
//   counter++
// }

// second approach
// let counter = 0

// while (counter < 10) {
//   counter++
//   console.log(counter)
// }

// PROBLEM 4: Create a program that can accept a positive integer
// and print from 1
prompt('Enter positive number: ', function (inputNumber: string): void {
  let counter = 1

  while (counter <= +inputNumber) {
    console.log(counter)
    counter++
  }
})
