// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number = 12;

age = 12;

let userName: string;

userName = 'Max';

let isInstructor: boolean;

isInstructor = true;

// More complex types

let hobbies: string[] = ["Sports","Cooking"]

hobbies = ['Sports', 'Cooking'];

type Person = {
    name: string;
    age: number;
  };

let person: Person;

person = {
  name: 'Max',
  age: 32
};

// person = {
//   isEmployee: true
// };

let people: Person[];

// Type inference

// let course = "React-The Complete Guide";
// course = 1234;

// UNION TYPES

let course: string | number = 'React - The Complete Guide';

course = 12341;

// Functions & types

function add(a: number, b: number) {
    return a + b; //inference // infered return value of number
}

function printOuput(value: any) {
    console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}
  
const demoArray = [1, 2, 3];
  
const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd')
  
// updatedArray[0].split('');