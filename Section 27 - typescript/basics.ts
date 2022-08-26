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