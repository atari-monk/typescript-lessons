let stringArr = ['one', 'hey', 'Dave'];
let guitars = ['Strat', 'Les Paul', 5150];
let mixedData = ['EVH', 1984, true];

//stringArr[0] = 42;
//stringArr.push(42);
stringArr[0] = 'Jhon';
stringArr.push('hey');

//guitars.unshift(true);
guitars[0] = 1984;
guitars.unshift('Jim')

//stringArr = guitars;
//guitars = mixedData;
guitars = stringArr;
mixedData = guitars;

let test = [];
let bands: string[] = [];
//stringArr.push(true);
stringArr.push('whatever');

//Tuple
let myTuple: [string, number, boolean] = ['Dave', 42, true];

let mixed = ['John', 1, false];

//myTuple = mixed;
//myTuple[3] = 42;
mixed = myTuple;
myTuple[1] = 42;

let myObj: object;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};

const exampleObj = {
  prop1: 'Dave',
  prop2: true
}

//exampleObj.prop2 = 42;
exampleObj.prop2 = false;
exampleObj.prop1 = 'John';

type Guitarist = {
  name: string,
  active: boolean,
  albums: (string | number)[]
}

let evh: Guitarist = {
  name: 'Eddie',
  active: false,
  albums: [1984, 5150, 'OU812']
}

let jp: Guitarist = {
  name: 'Jimmy',
  active: true,
  albums: ['I', 'II', 'IV']
}

// let jp2: Guitarist = {
//   active: true,
//   albums: ["I", "II", "IV"],
// };

evh = jp;

//evh.years = 10;

type GuitaristB = {
  name: string;
  active?: boolean;
  albums: (string | number)[];
};

let evh2: GuitaristB = {
  name: "Eddie",
  active: false,
  albums: [1984, 5150, "OU812"],
};

let jp2: GuitaristB = {
  name: "Jimmy",
  albums: ["I", "II", "IV"],
};

evh2 = jp2;

const greetGuitarist = (guitarist: Guitarist) => {
  return `Hello ${guitarist.name}`;
}

console.log(greetGuitarist(jp));

interface GuitaristC {
  name: string;
  active: boolean;
  albums: (string | number)[];
};

let evh3: GuitaristC = {
  name: "Eddie",
  active: false,
  albums: [1984, 5150, "OU812"],
};

let jp3: GuitaristC = {
  name: "Jimmy",
  active: false,
  albums: ["I", "II", "IV"],
};

evh3 = jp3;

type GuitaristD = {
  name?: string;
  active: boolean;
  albums: (string | number)[];
};

const greetGuitaristD = (guitarist: GuitaristD) => {
  return `Hello ${guitarist.name?.toUpperCase()}`;
};

const greetGuitaristDx = (guitarist: GuitaristD) => {
  if(guitarist.name) return `Hello ${guitarist.name.toUpperCase()}`;
  return 'Hello x';
};

let jp4: GuitaristD = {
  //name: "Jimmy",
  active: false,
  albums: ["I", "II", "IV"],
};

console.log(greetGuitaristDx(jp4));

//Enums
//unlike most ts enums are not type-level addition to js
//but something added to language and runtime

enum Grade {
  U,
  D,
  C,
  B,
  A
}

console.log(Grade.C);

enum GradeB {
  U = 1,
  D,
  C,
  B,
  A,
}

console.log(GradeB.C);
