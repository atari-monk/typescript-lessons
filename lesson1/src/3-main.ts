namespace vid3 {
  //Type Aliases
  type stringOrNumber = string | number;

  type stringOrNumberArray = (string | number)[];

  type Baker = {
    name: string;
    active: boolean;
    albums: stringOrNumberArray;
  };

  type UserId = stringOrNumber;

  //Literal types
  let firstName: "Dave";
  //firstName = "Jhon"

  let userName: "Dave" | "Jhon" | "Amy";
  userName = "Amy";

  //functions
  const add = (a: number, b: number): number => {
    return a + b;
  };

  const logMsg = (message: any): void => {
    console.log(message);
  };

  logMsg("Hello");
  logMsg(add(2, 3));
  //logMsg(add('a', 3))

  let subtract = function (c: number, d: number): number {
    return c - d;
  };

  type mathFunction = (a: number, b: number) => number;
  // interface mathFunction {
  //   (a: number, b: number): number
  // }

  let multiply: mathFunction = function (c, d) {
    return c * d;
  };

  logMsg(multiply(2, 2));

  //optional params

  const addAll = (a: number, b: number, c?: number): number => {
    if (typeof c !== "undefined") {
      return a + b + c;
    }
    return a + b;
  };

  //default param value
  const sumAll = (a: number = 10, b: number, c: number = 2): number => {
    return a + b + c;
  };

  logMsg(addAll(2, 3, 2));
  logMsg(addAll(2, 3));
  logMsg(sumAll(2, 3));
  logMsg(sumAll(undefined, 3));

  //Rest params
  const total = (a: number, ...nums: number[]): number => {
    return a + nums.reduce((prev, curr) => prev + curr);
  };

  logMsg(total(10, 2, 3));

  //never type
  const createError = (errMsg: string): never => {
    throw new Error(errMsg);
  };

  const infinite = () => {
    let i: number = 1;
    while (true) {
      i++;
      if (i > 100) break;
    }
  };

  //custom type guard
  const isNumber = (value: any): boolean => {
    return typeof value === "number" ? true : false;
  }

  // use of the never type
  const numberOrString = (value: number | string): string => {
    if (typeof value === "string") return "string";
    if (isNumber(value)) return "number";
    return createError("this should never happen!");
  };
}
