
type Union = number | string;

function combine(
    input1: Union,
    input2: number | string,
    resultConvert: 'as-text' | 'as-number'
){
    let result;
    if(typeof input1 === "number" && typeof input2 === 'number' || resultConvert === 'as-number'){
        result = +input1 + +input2; // converting two numbers
    } else {
        result = input1.toString() + input2.toString();
    }

    return result;
}

const combineNumbers = combine('10', '20', 'as-number');

console.log(combineNumbers);

enum Role { ADMIN = 'ADMIN', READY_ONLY = 100 };

const myDesc = {
    name: 'Xola',
    role: Role.ADMIN
}