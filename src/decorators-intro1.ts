// // function Logger(constructor: Function){
// //     console.log('Logging.....');
// //     console.log(constructor);
// // }

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