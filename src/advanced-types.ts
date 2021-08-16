type Admin = {
    name: string;
    privillages: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Xola',
    privillages: ['server-admin'],
    startDate: new Date()
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;


function addCombinable(a: string, b: string): string; // this is function overload
function addCombinable(a: Combinable, b: Combinable){
    if(typeof a === 'string' || typeof b === 'string'){
        return a.toString() + b.toString();
    }
    return a + b;
}

type UnknownEmployee = Employee | Admin;
function printEmployeeInfo(emp: UnknownEmployee){
    if('privillages' in emp){
        console.log(emp.privillages);
    }

    if('startDate' in emp){
        console.log('Start Date: ' + emp.startDate)
    }
}

printEmployeeInfo(e1);

// --------------------Combine types-----------------------------------

class Car {
    drive(){
        console.log('Drive general car....');
    }
}

class Truck {
    drive(){
        console.log("Driving a truck...");
    }

    loadCargo(amount: number){
        console.log('Loading cargo.....' + amount);
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle){
    vehicle.drive()
    if(vehicle instanceof Truck){
        vehicle.loadCargo(1000);
    }
}

useVehicle(v1);
useVehicle(v2);

// --------------------Combine classes--------------
interface Bird {
    type: 'bird';
    flySpeed: number;
}

interface Horse {
    type: 'horse';
    runSpeed: number;
}

type Animal = Bird | Horse;

function speedAnimal(animal: Animal){
    let speed;

    switch(animal.type){
        case 'bird':
            speed = animal.flySpeed;
            break;
        case 'horse':
            speed = animal.runSpeed;    
    }

    console.log('Moving at speed.... ' + speed);
}

speedAnimal({type: 'bird', flySpeed:10});

// --------------------Combine interfaces--------------

const paragraph = document.querySelector('p');
const userInput = document.getElementById('user-input')! as HTMLInputElement;
// alternative type casting
// const userInput = <HTMLInputElement>document.getElementById('user-input')!;

userInput.value = "bukhanda@gmail.com";

const userText = document.getElementById('user-text');

// type safe
if(userText){
    (userText as HTMLInputElement).value = "Hi there";
}

// --------------------Type casting--------------

interface ErrorContainer{
    [prop: string]: string;
}

const errorBag: ErrorContainer = {
    email: 'Not valid email',
    userNames: 'Must start with a capital letter'
};

// --------------------Index Prop-------------
const fetchedData = {
    id: 'u1',
    thisName: 'Xola',
    job: {title: 'CEO', desc: 'My own company'}
}

console.log(fetchedData?.job?.title);

// --------------------Optional Chaining-------------

const userData = "";

const storedData = userData ?? 'DEFAULT'; // or use this userData || 'DEFAULT';
console.log(storedData);