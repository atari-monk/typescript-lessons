namespace vid4 {
  type One = string;
  type Two = string | number;
  type Three = "hello";

  // convert to more or less specific type
  let a: One = "hello";
  let b = a as Two; // less specific
  let c = a as Three; // more specific

  // syntax not in react
  let d = <One>"world";
  let e = <string | number>"world";

  const addOrConcat = (
    a: number,
    b: number,
    c: "add" | "concat"
  ): number | string => {
    if (c === "add") return a + b;
    return "" + a + b;
  };

  // narrowing
  let myVal: string = addOrConcat(2, 2, "concat") as string;

  // Be carefull! TS sees no problem yet string is returned
  let nextVal: number = addOrConcat(2, 2, "concat") as number;

  //10 as string
  10 as unknown as string;

  // The DOM
  const img = document.querySelector("img")!;
  const myImg = document.getElementById("#img") as HTMLImageElement;
  // syntax not in react
  const nextImg = <HTMLImageElement>document.getElementById("#img");

  img.src;
  myImg.src;
}
