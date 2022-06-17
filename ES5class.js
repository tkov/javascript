// ES5 lacks the 'class' keyword; we must rely on functions...

/**
 *  Person class
 * 
 *  @constructor
 *  @param {String} name - name of a person
 *  @param {Number} age - age of a person
 *  @param {String} gender - gender of a person
 */

function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

Person.prototype.getName = function () {
    return this.name;
}

Person.prototype.getAge = function () {
    return this.age;
}

Person.prototype.getGender = function () {
    return this.gender;
}