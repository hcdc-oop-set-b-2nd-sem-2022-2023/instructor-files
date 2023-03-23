// Function

// non-value returning function
// function display(firstName: string, lastName: string): void {
//   console.log(`Hi, ${firstName} ${lastName}!`)
// }

// // value returning function
// function add(firstNumber: number, secondNumber: number): number {
//   const sum = firstNumber + secondNumber
//   return sum
// }

// function subtract(firstNumber: number, secondNumber: number): number {
//   return firstNumber - secondNumber
// }

// // optional parameters
// function calculateIncomeTax(amount: number, taxRate: number = 0.20) {
//   return amount * taxRate
// }

// call
// for (let index = 0; index < 50; index++) {
//   display()
// }
// display('Karl', 'Li')
// display('Andy', 'Li')
// display('Anna', 'Li')

// const firstNumber = 10
// const secondNumber = 5

// const sum = add(firstNumber, secondNumber)
// const difference = subtract(firstNumber, secondNumber)
// console.log(sum)
// console.log(difference)

// const companyAIncomeTax = calculateIncomeTax(100000)
// console.log(companyAIncomeTax)
// const companyBIncomeTax = calculateIncomeTax(1000000, 0.35)
// console.log(companyBIncomeTax)

// ------------

// const display = (firstNumber: string): string => {
//   return ''
// }

// setTimeout
// setTimeout(() => {
//   console.log('delayed by 5 seconds')
// }, 5000);

// setInterval
// function print(): void {
//   console.log('I am called repeatedly every 1 second')
// }

// setInterval(print, 1000)

// asynchronous function

const sleep = (ms: number): Promise<NodeJS.Timeout> =>
  new Promise((r) => setTimeout(r, ms))

async function displayA(): Promise<void> {
  for (;;) {
    console.log('printing A')
    await sleep(1000)
  }
}

async function displayB(): Promise<void> {
  for (;;) {
    console.log('printing B')
    await sleep(3000)
  }
}

displayA()
displayB()
