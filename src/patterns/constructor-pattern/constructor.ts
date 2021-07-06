// Different ways of creating an object in Javascript
type ObjectType = {
    [prop: string]: any
}
var newObject: ObjectType = {};
// or
var newObject: ObjectType = Object.create(Object.prototype);
// or via Object constructor
var newObject: ObjectType = Object.create(null);

// Four ways of assigning properties to an object

// 1. Dot syntax
newObject.prop = 'Property';
// retreiving properties
let prop = newObject.prop;

// 2. Square bracket syntax
// Set a property
newObject['prop'] = 'Property';
// Get a property
let value = newObject['prop'];

// 3. Object.defineProperty

// Set properties
Object.defineProperty(newObject, 'prop', {
    value: 'Some object prop name',
    writable: true,
    configurable: true,
    enumerable: true
});

// We can make this approach more readable 
let defineProp = function(obj: {}, key: string, value: any) {
    let config = {
        value, // same as { value: value }
        writable: true,
        enumerable: true,
        configurable: true
    };
    Object.defineProperty(obj, key, config);
}

let person = Object.create(Object.prototype);

// Adding properties using our method
defineProp(person, 'car', 'BMW');
defineProp(person, 'age', 12);
defineProp(person, 'hasHair', true);

// show in the console
console.log(person);

// 4. Object.defineProperties
Object.defineProperties(newObject, {
    'someKey': {
        value: 'Some value',
        writable: true
    },
    'anotherKey': {
        value: 'Another value',
        writable: true
    }
});

// We can get properties of the object created by
// using 3, 4th method using any of options of 1, 2.

// These methods can also be used for inheritance
let pilot = Object.create(person);

// Set some properties
defineProp(pilot, 'hasAnAirplane', true);

// Get an inherited property
console.log(pilot.age);

// Get the property that we've set
console.log(pilot.hasAnAirplane);
export { pilot };

// Basic constructor example
interface IStudent {
    name: string;
    faculty: string;
    university: string;
}

// function Student(this: IStudent, name: string, faculty: string, university: string) {
//     this.name = name;
//     this.faculty = faculty;
//     this.university = university;

//     this.toString = function() {
//         return this.name + " studies " + " at " + this.university + " in " + this.faculty + " faculty";
//      }
// }

class Student {
    public name: string;
    public faculty: string;
    public university: string;

    constructor(name: string, faculty: string, university: string) {
        this.name = name;
        this.faculty = faculty;
        this.university = university;
    }

    toString() {
        return this.name + " studies " + " at " + this.university + " in " + this.faculty + " faculty";
    }
}
 
// Usage: 
// We can create new instances of the Student
let csStudent = new Student('John', 'Computer science', 'Stanford');
let econStudent = new Student('Jane', 'Economics', 'Harvard');

console.log(csStudent.toString());
console.log(econStudent.toString());