
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
//     console.log('TEMPLATE FACTORY');
//     return function <T extends {new (...args: any[]): {name: string}}> (
//         originaConstructor: T
//         ){
//         return class extends originaConstructor{
//             constructor(..._: any[]){
//                 super();
//                 console.log('Rendering template');
//                 const hookEl = document.getElementById(hookId);
                
//                 if(hookEl){
//                     hookEl.innerHTML = template;
//                     hookEl.querySelector('h1')!.textContent = this.name;
//                 }
//             }
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

// //----------------------

function Autobind(_1: any, _2: string, descriptor: PropertyDescriptor){
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
      configurable: true,
      enumerable: false,
      get(){
          const boundFn = originalMethod.bind(this);
          return boundFn;
      }
  }

  return adjDescriptor;
}

class Printer{
    message = 'It works!';
    
    @Autobind
    showMessage(){
        console.log(this.message);
    }
}

const p = new Printer();

const button = document.querySelector('button')!;
button.addEventListener('click', p.showMessage.bind(p));
