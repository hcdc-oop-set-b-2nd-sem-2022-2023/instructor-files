// Classes

// class Point {
//   x = 0
//   y = 0
// }

// const point = new Point()
// console.log(`(${point.x}, ${point.y})`)

// point.x = 1
// point.y = 2

// console.log(`(${point.x}, ${point.y})`)

// const pointB = new Point()
// console.log(`(${pointB.x}, ${pointB.y})`)

// constructor

class Animal {
  public name: string
  private eatCounter: number
  static gender: string = "male"

  constructor(name: string) {
    this.name = name
    this.eatCounter = 0
  }

  public eat(): void {
    if (this.eatCounter >= 3) {
      console.log('Stop. You are overeating')
      this.sleep()
      return
    }

    this.eatCounter++
    console.log('Animal will now eat')
  }

  public walk(): void {
    console.log('Animal will now walk')
  }

  private sleep(): void {
    console.log('Animal will now sleep')
  }

  static play(): void {
    console.log('Animal will now play')
  }
}

console.log(Animal.play(), Animal.gender)
