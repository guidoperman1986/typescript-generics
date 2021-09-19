// // const names: Array<string> = []; es lo mismo que string[]
// const names = ['Guido', 'Perman'];

// const promise: Promise<string> = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve('algo');
//     }, 2000);
// })

// generic function

//merge two objects and generates one new
function merge<T, U>(objA: T, objB: U){
    return Object.assign(objA, objB);
}

const mergeObj = merge({nombre: 'Guido'}, {edad: '35'});

//restricting types: to not allow in the call to enter wrong values

function mergeRestricted<T extends object, U extends object>(objA: T, objB: U){
    return Object.assign(objA, objB);
}

const mergeObjRestricted = merge({nombre: 'Guido'}, {edad: '35'});

interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText =  'Got no value';
    if (element.length === 1) {
        descriptionText = 'Got 1 element';
    } else if (element.length > 1) {
        descriptionText = `Got ${ element.length } elements`;
    }
    return [element, descriptionText];
}

console.log(countAndDescribe(['Hi', 'there!']))


function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return 'Value ' + obj[key];
}

extractAndConvert({name: 'Guido'}, 'name')


// classes

class DataStorage<T extends string|number> {
    private data: T[] = [];

    addItem(item: T){
        this.data.push(item);
    }

    removeItem(item: T){
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems(){
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Max');
textStorage.addItem('Manu');
textStorage.removeItem('Manu');

console.log(textStorage);

const numberStorage = new DataStorage<number>();

// partial

interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal{
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;

    return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['Guido', 'Yael'];


// generics vs union types