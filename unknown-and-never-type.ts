
let userInput: unknown;

let userOutput: any;

userInput = 5;
userInput = 'my input';
userOutput = 4;
userOutput = "our here";

if(typeof userInput === 'string'){

}

if(typeof userOutput === 'string'){

}

function generateError(message: string, code: number): never{
    throw {message: message, errorCode: code};
}

generateError('An error occurred', 400);


