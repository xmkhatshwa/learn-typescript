interface PersonalInfo {
    name: string;
    age: number;
}

interface Person extends PersonalInfo {
    greet(phrase: string): void;
}

class Student implements Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(phrase: string) {

    }
}

let user1: Person;

user1 = {
    name: 'Xola',
    age: 30,

    greet(phrase: string) {
        console.log(phrase + ' ' + this.name);
    }
};

user1.greet('Hi there I am -');


// ---------------------------------------------------
type AddFn = (a: number, b: number) => number;

let addNums: AddFn;

addNums = (n1: number, n2: number) => {
    return n1 + n2;
}

console.log(addNums);