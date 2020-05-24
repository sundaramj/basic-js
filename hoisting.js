/* 
If you want to know hoisting, first you need to understand context execution in Javascript.
Whenever Javascript compile our code, first it takes the variable name & stored in global scope, It doesnt store with value.
Like a = 10, It store "a" in global scope, after whole code compile, it again goes to top of the code to assign value, 
So it assign 10 value to "a" variable. So it print 10 on console.log(a).
console.log(b) it shows undefined, because variable defined without a value.
last line will print b value, because b assign value to 10.
*/
var a = 10;
console.log(a);

console.log(b);
var b = 10;

console.log(b);