// import { lookAtMe } from "./feature";

const name = "Ivan";

// name = "Stefan";
// console.log(name);

const printMyName = () => {
  console.log(name);
};

//

const multiply = (number) => number * 2;
// console.log(multiply(2));

//

class Person {
  name = "Ivan";
  age = 32;
  greeting() {
    console.log(`Hello ${this.name}`);
  }
}

// const ivan = new Person();
// console.log(ivan);
// console.log(ivan.age);
// ivan.greeting();

class MaleHuman {
  gender = "male";

  printGender = () => {
    console.log(this.gender);
  };
}

class ImprovedPerson extends MaleHuman {
  constructor() {
    super();
    this.name = "Ivan2";
    this.age = "31";
  }

  greeting() {
    console.log(`Hello ${this.name} - you have been improved lol`);
  }
}

const ivan2 = new ImprovedPerson();
// ivan2.greeting();
// ivan2.printGender();

const array = [1, 2, 3];
const newArray = [...array, 4, 5, 6];
// console.log(newArray);

const animal = {
  type: "mammal",
  species: "dog",
};

const puddle = {
  ...animal,
  subSpecies: "puddle",
};

// console.log(puddle.species);

const sorter = (...args) => {
  return args.sort();
};

// console.log(sorter(4, 1, 7, 6, 2, 4, 9));

const [pokemon1, pokemon2] = ["Slowbro", "Celebi"];
// console.log(pokemon1);
// console.log(pokemon2);

const { pokemon3, pokemon4 } = { pokemon3: "Noctowl", pokemon4: "Hoothoot" };
// console.log(pokemon3);
// console.log(pokemon4);

let a = 1;
let b = a;

b = 4;

// console.log(a);
// console.log(b);

const dog1 = {
  name: "puddle",
};

const dog2 = {
  ...dog1,
};

// console.log(dog2);

const numbers = [1, 2, 3];
// console.log(numbers.map((e) => e * 2));

// class SomeComponent extends Component {
//     state = {
//       count: 0
//     }
//     ...
//   }
