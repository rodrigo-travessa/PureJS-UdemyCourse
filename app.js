// Comment
/* Multi
    Line
    Comment
*/

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