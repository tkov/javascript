const s1 = 'Hello';
console.log(s.toUpper());

console.log(typeof s1);  // type: literal

const s2 = new String('Hello');
console.log(typeof s2); // type: object

console.log(window);
window.alert(1);  // or alert(1) since window is the highest top level object

console.log(navigator);
console.log(navigator.appVersion);


// object literals
const book1 = {
    title: 'Book 1',
    author: 'John Doe',
    year: 2013,
    getSummary: function () {
        return `${this.title} was written by ${this.author}
        in ${this.year}`;
    }
}

const book2 = {
    title: 'Book 2',
    author: 'Jane Doe',
    year: 2016,
    getSummary: function () {
        return `${this.title} was written by ${this.author}
        in ${this.year}`;
    }
}


console.log(book1);
console.log(book1.title);


console.log(Object.keys(book2));
console.log(Object.values(book2));