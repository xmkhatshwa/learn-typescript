//// function Logger(constructor: Function){
////     console.log('Logging.....');
////     console.log(constructor);
//// }

// function Logger(logString: string){
//     console.log('LOGGING LOGGER');
//     return function(constructor: Function){
//         console.log('Logging..... ' + logString);
//         console.log(constructor);
//     };
// }


// @Logger('LOGGING - PERSON')
// class Person{
//     name = 'Xola';

//     constructor(){
//         console.log('Creating some object of type Person.....')
//     }
// }

// const personal = new Person();
// console.log('--------------  ' + personal + '  -----------------');

// function WithTemplate(template: string, hookId: string){
//     console.log('LOGGING TEMPLATE');
//     return function(constructor: any){
//         const hookEl = document.getElementById(hookId);
//         const p = new constructor();
//         if(hookEl){
//             hookEl.innerHTML = template;
//             hookEl.querySelector('h1')!.textContent = p.name;
//         }
//     };  
// }

// @Logger('LOGGING - PERSON')
// @WithTemplate('<h1>My User Object</h1>', 'app')
// class User {
//     name = 'Lincy';

//     constructor(){
//         console.log('Creating some object of type User.....')
//     }
// }

// const user = new User();
// console.log(user);

// // ----------- Decorator defined in class definition ------
// function Log(target: any, propertyName: string | Symbol) {
//     console.log('Property decorator');
//     console.log(target, propertyName);
// }

// function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
//     console.log('Access decorator');
//     console.log(target);
//     console.log(name);
//     console.log(descriptor);
// }

// function Log3(target: any, name: string, descriptor: PropertyDescriptor) {
//     console.log('Method decorator');
//     console.log(target);
//     console.log(name);
//     console.log(descriptor);
// }

// function Log4(target: any, name: string | Symbol, position: number) {
//     console.log('Method decorator');
//     console.log(target);
//     console.log(name);
//     console.log(position);
// }


// class Product {
//     @Log
//     title: string;
//     private _price: number;

//     @Log2
//     set price(val: number){
//         if(val > 0){
//             this._price = val;
//         } else {
//             throw new Error('Invalid price - price must be greater than zero!');
//         }
//     }

//     constructor(title: string, price: number){
//         this.title = title;
//         this._price = price;
//     }

//     @Log3
//     getPriceWithTax(@Log4 tax: number){
//         return this._price * (1 + tax); 
//     }

// }