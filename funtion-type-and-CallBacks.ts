

function addAndHandle(n1: number, n2: number, cb: (num: number) => void){
    const result = n1 + n2;
    cb(result);
}

addAndHandle(3, 6, (result1) => {
    console.log(result1);
});