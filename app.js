// Comment
/* Multi
    Line
    Comment
*/

var Name = 'Rodrigo'; //Var is mutable
console.log(Name);
Name = 'Tróia';
console.log(Name);

var greeting; //Initialized empty, it holds a value of undefined, until assigned.
console.log(greeting); //Undefined.
greeting= 123;
console.log(greeting);

const John = 123; //const is IMUTABLE, therefore you can't initialize it while empty like with VAR.
//John = 321 <- This would give a TypeError.

// Objects;

const person ={
    name: 'John',
    age: 30,
    chessRating: 2200
}

console.log(person);

// We can change properties inside an imutable variable that is an object/array. Yeah, confusig right? you can't unassign/reassign, but you can change properties.

person.chessRating = 2500;
console.log(person);

//Mindfuck time

const firstArray = [1,2,3];
console.log(firstArray);
firstArray.push(4);
console.log(firstArray);
firstArray.pop();
console.log(firstArray);

//You can manipulate arrays using their methods. but you cannot reassign like firstArray = [1,2,3,4]

/*
 camelCase
 under_scored
 PascalCase
*/

/* Lesson 1 -
console.log("Hello World");
console.log(123);
console.log(true);
var greeting ='hello world';
console.log(greeting);
console.log(1,2,3,4,greeting);
console.log({a:1, b:2, c:greeting});
console.table({a:1, b:2, c:greeting});

console.error('This is an error');
// console.clear(); commented so i can see the other stuff
console.warn('WARNING');

console.time('time');
console.time('anothertime');
console.warn("timer's running out")
console.timeEnd('time');
console.warn("another timer's running out")
console.timeEnd('anothertime');
*/