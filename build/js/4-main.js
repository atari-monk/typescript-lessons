"use strict";
var vid4;
(function (vid4) {
    // convert to more or less specific type
    let a = "hello";
    let b = a; // less specific
    let c = a; // more specific
    // syntax not in react
    let d = "world";
    let e = "world";
    const addOrConcat = (a, b, c) => {
        if (c === "add")
            return a + b;
        return "" + a + b;
    };
    // narrowing
    let myVal = addOrConcat(2, 2, "concat");
    // Be carefull! TS sees no problem yet string is returned
    let nextVal = addOrConcat(2, 2, "concat");
    //10 as string
    10;
    // The DOM
    const img = document.querySelector("img");
    const myImg = document.getElementById("#img");
    // syntax not in react
    const nextImg = document.getElementById("#img");
    img.src;
    myImg.src;
})(vid4 || (vid4 = {}));
