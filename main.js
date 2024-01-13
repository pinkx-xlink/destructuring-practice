// EXAMPLE 1
let a, b, rest;
[a, b] = [10, 20];

console.log(a); // 10
console.log(b); // 20
[a, b, ...rest] = [10, 20, 30, 40, 50, 60];
console.log(rest); // [30, 40, 50, 60]

// EXAMPLE 2
const x = [1, 2, 3, 4, 5];
const [y, z] = x;
console.log(y); // 1
console.log(z); // 2


// EXAMPLE 3
const obj1 = { aa: 1, bb: 2 }; // console.log(obj.aa) = 1, (obj1.bb) = 2
const { aa, bb } = obj1;
// is equivalent to:
// const a = obj.a;
// const b = obj.b;

// BINDING PATTERNS
// starts w a declaration or const,
// then each individual property is bound to a variable
// or further destructured
const obj2 = { A: 1, B: { c: 2 } };
const {
  A,
  B: { c: d },
} = obj2;
// Two variables are bound: A and d


// for/of iteration 
const people = [
  {
    name: 'Miss Daisy',
    family: {
      mother: 'Polly Daisy',
      father: 'Stephen Daisy',
      sister: 'Lily Daisy',
    },
    age: 24,
  },
  {
    name: 'Tom Jones',
    family: {
      mother: 'Norah Jones',
      father: 'Richard Jones',
      brother: 'Howie Jones',
    },
    age: 32,
  },
];

for (const {
  name: n,
  family: { father: f },
} of people) {
  console.log(`Name: ${n}, Father: ${f}`);
}
// Name: Miss Daisy, Father: Stephen Daisy
// Name: Tom Jones, Father: Richard Jones


// Invalid JavaScript identifier as a property name
// Destructuring can be used with property names 
// that are not valid JavaScript identifiers 
// by providing an alternative identifier that is valid.
const foo = { 'fizz-buzz': true }; // console.log = {fizz-buzz: true}
const { 'fizz-buzz': fizzBuzz } = foo; // console.log(foo) = {fizz-buzz: true}
console.log(fizzBuzz); // true


// COMBINED ARRAY AND OBJECT DESTRUCTURING
const props = [
    { id: 1, name: "Fizz" },
    { id: 2, name: "Buzz" },
    { id: 3, name: "FizzBuzz" },
];
const [, , { name }] = props;
console.log(name); // FizzBuzz


// The prototype chain is looked up when the object is deconstructed
const obj = { // console.log(obj) == {self: '123'}
    self: '123',
    __proto__: {
        prot: '456', // obj.prot = '456'
    },
};
const { self, prot } = obj;
console.log(self); // "123"
console.log(prot); // "456"