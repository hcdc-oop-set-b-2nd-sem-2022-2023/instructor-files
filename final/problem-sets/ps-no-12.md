Problem Set No. 12

Given the base class:

```
class Shape() {
    public length: number = 0
    public width: number = 0
    public height: number = 0

    constructor(length: number, width: number, height: number) {
        this.length = length
        this.width = width
        this.height = height
    }
}
```

Create two child classes namely:

- Rectangle class
- Square class

that will accept `length, width, and height` in constructor.

The `child classes (Rectangle, Square)` should extend the class `Shape`.

For the formula:

- Area of square = length * width
- Perimeter of square = 4s => the side can be length, width, height since they are all equal
- Volume of square = length * width * height

- Area of rectangle = length * width
- Perimeter of rectangle = 2L + 2W
- Volume of rectangle = length * width * height