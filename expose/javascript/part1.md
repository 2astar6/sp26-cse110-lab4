1. Line 9 prints: `values added: 20`.
2. Line 13 prints: `final result: 20`.
3. `var` should not be used because it's value is scoped and thus usable throughout a function, even if it is declared within the scope of an `if` or `loop` block.
4. Line 9 prints `values added: 20`.
5. Line 13 throws an error because the needed variable, `result`, is block-scoped and thus cannot be used by any code outside the block (specifically the `if` block where it is declared inside).
6. Line 9 prints `values added: 20`.
7. Line 13 throws an error because the needed constant, `result`, is block-scoped just like a `let`-declared variable and thus cannot be used by any code outside the block.
