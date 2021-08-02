function combineNums(n1: number, n2: number){
    return n1 + n2;
}

let combineTwo: (num1: number, num2: number) => number;

combineTwo = combineNums;

console.log(combineTwo(7, 4));