1. Line 12 will output `3` to the console. Since `i` is declared as a `var`, even just for a loop, it remains in function scope and can thus be retrieved after the loop finishes incrementing it.  
2. Line 13 will output the array represented `discountedPrice` variable - `[50, 100, 150]`. This variable can be accessed throughout the entire function, `discountedPrices`, because it is declared as `var`.
3. Line 14 will output the latest value represented by the `finalPrice` variable - `150` - since the loop computes it for each price given through the `prices` function argument, ending with the last one in the array. Since `finalPrice` is declared as `var`, it is usable throughout the entire function. 
4. Line 16 will return the `discounted` array object, `[50, 100, 300]`,  because the `var`-declared variable is accessible from any part of the function.
5. Line 12 will throw an error because the `let`-declared `i` variable argument to the `console.log()` function is only scoped for the block that it is used in - the `for` loop.
6. Line 13 will throw an error because the `discountedPrice` variable is declared with a `let` within the `for` loop block, meaning that it cannot be accessed outside of that loop.
7. Line 14 will output the latest `finalPrice` variable to the console - `150` - because, even though it is declared with `let`, it is declared at the beginning of the function and thus makes its block-scope the entire function. 
8. Line 16 (this function's end) will return the array object held by the `discounted` variable, `[50, 100, 300]`. Being declared with `let` at the beginning of the function, its block-scope is the entire function, so it can be accessed from anywhere after it inside the function.
9. Line 11 will throw an error because the `let`-declared `i` variable argument to the `console.log()` function is only scoped for the block that it is used in within the `for` loop - being declared in the loop initialization, update, and increment composite step.
10. Line 12 will output `3`, the length of the `prices` array object passed as an argument to the function, to the console. Being declared as a `const` at the start of the function, it is accessible/scoped to anywhere inside the function after where it is declared. Since it is a `const` it is known to not change and the `for` loop logic can be ignored - regardless of what changes it attempts on that constant.
11. Line 14 will return and empty array object, `[]`, because the `for` loop cannot affect the `discounted` object, which is declared as a `const`.
12. Notations

A. `student.name`

B. `student["Grad Year"]`

C. `student.greeting()`

D. `student["Favorite Teacher"].name`

E. `student.courseLoad[0]`

13. Arithmetic

A. `'3' + 2` is `32` because numbers are converted to strings for additive arithmetic.
B. `'3' - 2` is `1` because strings are converted to numbers for arithmetic.
C. `3 + null` is `3` because `null` is implicitly converted to `0` for arithmetic.
D. `'3' + null` is `3null` because non-string values added to string values get converted to strings before additive arithmetic.
E. `true + 3` is `4` because boolean `true` is converted to `1` for arithmetic. 
F. `false + null` is `0` because `null` is converted to `0` for arithmetic and the boolean `false` is also considered `0` during arithmetic.
G. `'3' + undefined` is `3undefined` because the non-string value, `undefined` gets converted to a string during additive arithmetic. No implicit conversion occurs beforehand, unlike other arithmetic operations, so `NaN` is not what is made into a string before addition. 
H. `'3' - undefined` is `NaN` because `undefined` converts to `NaN` for arithmetic and `3` implied from string `'3'` subtracting `NaN` is `NaN`.

14. Comparison

A. `'2' > 1` is `true` because strings are converted to the number they represent during comparison with a number.
B. `'2' < '12'` is `false` because values are compared in lexicographical order when they are both strings.
C. `2 == '2'` is `true` because strings are converted to the number they represent during an equality check against a number.
D. `2 === '2'` is `false` because `===` does not implicitly convert the values to the same type before the check. 
E. `true == 2` is `false` because the boolean `true` is always `1` during a comparison.
F. `true === Boolean(2)` is `true` because `Boolean()` function converts any value passed to it into a boolean - with any value other than `0` becoming a `true` boolean. 
    
15. `==` checks for equality between objects at the level of converted/coerced value (converting both being compared to the same type depending on the types compared). `===` also ensures that they are the same type of object (for primitive types) but also the exact same object at a given address (for non-primitive types), comparing by reference instead of contents.
16. See `part2-question16.js`.
17. When called, the given code will return the array `[2, 4, 6]`. For each member of the array provided as the first argument to the function, `modifyArray`, a callback function - `doSomething()` - is invoked to multiply the current value by `2`. When the entire array has been processed, it is returned.
18. See `part2-question18.js`.
19. `timeOut` Function Output
```
1
4
3
2
```
