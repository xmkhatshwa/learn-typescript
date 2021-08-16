function merge<T, U>(objA: T, objB: U){
    return Object.assign(objA, objB);
}

function merge2<T extends object, U extends object>(objA: T, objB: U){
    return Object.assign(objA, objB);
}
const mergeObj = merge({name: 'Xola'}, {age: 30});
console.log(mergeObj);

//---------------All interfaces extends object bt default unless specified

interface Lengthy{
    length: number;
}

function addAndDesc<T extends Lengthy>(element: T){
    let desc = 'Got no value';
    if(element.length > 0){
        desc = 'Got ' + element.length + ' element(s).';
    }

    return [element, desc];
}

console.log(addAndDesc(['Sports', 'Cooking']))

//--------------------
function extractAndConvert<T, U extends keyof T>(obj: T, key: U){
    return 'Value: ' + obj[key];
}

const myValue = extractAndConvert({hername: 'Sheeney'}, 'hername');
console.log(myValue);

//-------------------------
class DataStorage<T extends string | number | boolean>{
    private data: T[] = [];

    addItem(item: T){
        this.data.push(item);
    }

    removeItem(item: T){
        if(this.data.indexOf(item) === -1){
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems(){
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Xola');
textStorage.addItem('Lincy');
textStorage.removeItem('Lincy');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
// do something similar as above

//------------------------------

interface CourseGoal{
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(
    title: string,
    description: string,
    date: Date
): CourseGoal {
   let courseGoal: Partial<CourseGoal> = {}
   courseGoal.title = title;
   courseGoal.description = description;
   courseGoal.completeUntil = date;

   return courseGoal as CourseGoal;
}
// ---------
const names: Readonly<string[]> = ['Xola', 'Lincy'];
// names.push('Marnu'); // this enforces the array not to be modified