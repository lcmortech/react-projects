import React from 'react';
import './App.css';

let name: string;
let age: number | string; //a union allows both types listed
let isStudent: boolean;
let hobbies: string[];
let role: [number, string]; //tuple
//let anyType: any; //not recommended, unknown is better
let anyType: unknown;

//let printName: Function; //there's a better way

let printName: (name:string) => void; //nothing is returned
//can also return name, number, never, etc. instead of void
//never will never return anything

//let person: Object; //not the best way to do this

// type Person = {
//   name: string;
//   age?: number;
//   //question mark makes the property optional
// }

// let person: Person = {
//   name: 'Lauren',
// }

// let losOfPeople: Person[];

// type X = {
//   a: string;
//   b: number;
// }

// interface Person extends X {
//   name: string;
//   age?: number;
// }

// interface Guy extends Person {
//   profession: string;
// }



// type Y = X & { //includes the properties of X with Y
//   c: string;
//   d: number;
// }

// let y: Y = {
//   c: 'efdas',
//   d: 42
// }

function App(){
  return(
    <div>Hello World</div>
  )
}

export default App;
