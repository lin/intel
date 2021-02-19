// The goal of this
let f_1 = (x) => x + 1 - 1
let f_2 = (x) => x
check_equivalence(f_1, f_2) // True

// harder problems
let add_1 = (a, b) => (a + b)
let add_2 = (b, a) => (b + a)
check_equivalence(add_1, add_2)
