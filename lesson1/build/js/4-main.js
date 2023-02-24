"use strict";
var vid4;
(function (vid4) {
    //convert to more or less specific type
    let a = 'hello';
    let b = a; // less specific
    let c = a; // more specific
    //syntax not in react 
    let d = 'world';
    let e = 'world';
    const addOrConcat = (a, b, c) => {
        if (c === 'add')
            return a + b;
        return '';
    };
})(vid4 || (vid4 = {}));
