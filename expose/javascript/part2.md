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
12. Notations:

A. `student.name`
B. `student["Grad Year"]`
C. `student.greeting()`
D. `student["Favorite Teacher"].name`
E. `student.courseload[0]`

13. TODO
14. TODO
15. `==` checks for equality between objects at the level of converted final value while `===` also ensures that they are the same type of object.
16. See `part2-question16.js`.
17. TODO
18. See `part2-question18.js`.
19. TODO
