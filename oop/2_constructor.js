// constructor
// function Book() {
//     console.log('Book Initialized..');
// }

// const book1 = new Book();
// const book2 = new Book();

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

    this.getSummary = function() {
        return `${this.title} was written by ${this.author}
        in ${this.year}`;
    }
}

const book1 = new Book('Book 1', 'John Doe', 2013);
const book2 = new Book('Book 2', 'Jane Doe', 2016);

console.log(book1);

// get the titles
console.log(book1.title);
