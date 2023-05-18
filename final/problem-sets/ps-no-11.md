Problem Set No. 11

Given the base class:

```
class Person() {
    public firstName: string = ''
    public lastName: string = ''

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName
        this.lastName = lastName
    }
}
```

Create two child classes namely:

- Employee class
- Student class

The `child classes (Employee, Student)` should extend the class `Person`.

---

Employee class should implement the ff:

- can initialize `salary` in Philippine Peso (should be private)

- can call `displaySalary` public function to display the `salary`

---

Student class should implement the ff:

- can initialize `score` (number) and should 0 to 100 range

- can calculate and call `getPercentageMark` public function which calculates the percentage mark of score if total score is 100
