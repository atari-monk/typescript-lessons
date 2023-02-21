"use strict";
let stringArr = ['one', 'hey', 'Dave'];
let guitars = ['Strat', 'Les Paul', 5150];
let mixedData = ['EVH', 1984, true];
//stringArr[0] = 42;
//stringArr.push(42);
stringArr[0] = 'Jhon';
stringArr.push('hey');
//guitars.unshift(true);
guitars[0] = 1984;
guitars.unshift('Jim');
//stringArr = guitars;
//guitars = mixedData;
guitars = stringArr;
mixedData = guitars;
let test = [];
let bands = [];
//stringArr.push(true);
stringArr.push('whatever');
//Tuple
let myTuple = ['Dave', 42, true];
let mixed = ['John', 1, false];
//myTuple = mixed;
//myTuple[3] = 42;
mixed = myTuple;
myTuple[1] = 42;
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: 'Dave',
    prop2: true
};
//exampleObj.prop2 = 42;
exampleObj.prop2 = false;
exampleObj.prop1 = 'John';
let evh = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'OU812']
};
let jp = {
    name: 'Jimmy',
    active: true,
    albums: ['I', 'II', 'IV']
};
// let jp2: Guitarist = {
//   active: true,
//   albums: ["I", "II", "IV"],
// };
evh = jp;
let evh2 = {
    name: "Eddie",
    active: false,
    albums: [1984, 5150, "OU812"],
};
let jp2 = {
    name: "Jimmy",
    albums: ["I", "II", "IV"],
};
evh2 = jp2;
const greetGuitarist = (guitarist) => {
    return `Hello ${guitarist.name}`;
};
console.log(greetGuitarist(jp));
;
let evh3 = {
    name: "Eddie",
    active: false,
    albums: [1984, 5150, "OU812"],
};
let jp3 = {
    name: "Jimmy",
    active: false,
    albums: ["I", "II", "IV"],
};
evh3 = jp3;
const greetGuitaristD = (guitarist) => {
    var _a;
    return `Hello ${(_a = guitarist.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()}`;
};
const greetGuitaristDx = (guitarist) => {
    if (guitarist.name)
        return `Hello ${guitarist.name.toUpperCase()}`;
    return 'Hello x';
};
let jp4 = {
    //name: "Jimmy",
    active: false,
    albums: ["I", "II", "IV"],
};
console.log(greetGuitaristDx(jp4));
//Enums
//unlike most ts enums are not type-level addition to js
//but something added to language and runtime
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 0] = "U";
    Grade[Grade["D"] = 1] = "D";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["B"] = 3] = "B";
    Grade[Grade["A"] = 4] = "A";
})(Grade || (Grade = {}));
console.log(Grade.C);
var GradeB;
(function (GradeB) {
    GradeB[GradeB["U"] = 1] = "U";
    GradeB[GradeB["D"] = 2] = "D";
    GradeB[GradeB["C"] = 3] = "C";
    GradeB[GradeB["B"] = 4] = "B";
    GradeB[GradeB["A"] = 5] = "A";
})(GradeB || (GradeB = {}));
console.log(GradeB.C);
