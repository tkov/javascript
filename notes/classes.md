# Classes

## Defining Classes

### Class declarations
- a **class declaration** :
```js
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

```
### Class expressions
- a **class expression** is another way to define a class

```js
// unnamed
let Rectangle = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

console.log(Retangle.name)
// output: "Rectangle"

// named

let Rectangle = class Rectangle2 {
    constructor(height, width) {
    this.height = height;
    this.width = width;
    }
}

console.log(Rectangle.name);
// output: "Rectangle2"

```

## Class body and method definitions

### Constructor
- the **constructor** methods is a special method where you create and initialize and object created within a `class`
- a constructor can use the `super` keyword to call the constructor of the super class

### Prototype methods

```js
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    // Getter
    get area() {
        return this.calcArea();
    }

    // Method
    calcArea() {
        return this.height * this.width;
    }
}

const square = new Rectangle(10,10);

console.log(square.area); // output: 100
```
- **Note**: when calling a getter function, you do not "invoke" it using parentheses. Instead it is treated like accessing a property of an object.

### Generator methods

```js
class Polygon {
    constructor(...sides) {
        this.sides = sides
    }
    // Method
    *getSides() {
        for (const side of this.sides) {
            yield side;
        }
    }
}

const pentagon = new Polygon(1,2,3,4,5);

console.log([...pentagon.getSides()]); // output: [1,2,3,4,5]
```