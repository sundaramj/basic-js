// Normal function using scope
const sum = a => {
    return b => {
        return c => {
            return d => {
                return a+b+c+d;
            }
        }
    }
}

console.log(sum(1)(2)(3)(4)); // result: 10
// sum(1) on call it returns return b
// sum(1)(2) on call it returns return c
// sum(1)(2)(3) on call it returns return d
// sum(1)(2)(3)(4) on call it executed d get the count value of a+b+c+d


// Recursive function
// const sumInfinite = a => {
//     return b => {
//         return b ? sumInfinite(a+b) : b;
//     }
// }
const sumInfinite = a => b => b ? sumInfinite(a+b) : a; // above commented code & this line is same in ES6 we can reduce code size easily 
console.log(sumInfinite(1)(2)(3)(4)(5)());