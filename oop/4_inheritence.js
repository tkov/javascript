// constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

// getSummary
Book.prototype.getSummary = function() {
    return `${this.title} was written by ${this.author}
    in ${this.year}`;
};

// Magazine Constructor
function Magazine(title, author, year, month) {
    Book.call(this, title, author, year);
    
    this.month = month;
}


// inherit prototype
Magazine.prototype = Object.create(Book.prototype);

// instantiate Magazine Object
const mag1 = new Magazine('Mag 1', 'John Doe', 2018, 'Jan');


// use magazine constructor
Magazine.prototype.constructor = Magazine;

console.log(mag1.getSummary());

