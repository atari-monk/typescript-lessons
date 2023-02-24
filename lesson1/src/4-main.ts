namespace vid4 {
  type One = string
  type Two = string | number
  type Three = 'hello'

//convert to more or less specific type
let a: One = 'hello'
let b = a as Two // less specific
let c = a as Three // more specific

//syntax not in react 
let d = <One>'world'
let e = <string | number>'world'

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
  if (c === 'add') return a + b
  return ''
}
}