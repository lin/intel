// full of computational equivalence and path finding.
// this is an easy task for men, but hard for machine.
// 2006 shan xi
cos(43) * cos(77) + sin(43) * cos(167) // hard to process at the very beginning

a = cos(43)
b = cos(77)
c = multiple(a, b)
d = sin(43)
e = cos(167)
f = multiple(d, e)
g = add(c, f)
solve(g)

// First you have to know that
cos(77) == sin(13)   // cos(90 - x) <-> sin(x), equavelance of computation
// because  cos(90 - x) <-> sin(x), so cos(77) == sin(13)
// this first layer of abstraction is everywhere.

sin(13) == sin(167)  // Most of the time, it's the manipulation without caring the more detailed information.
// It's the same for the same class
// (fg)' = f'g + fg'; Let's say it again:
// In the process of manipulation, each step of the operation don't care the more detailed information.
// The more special part of the data, that makes this data more concrete.
// And I believe the operation is only caring a certain class invariance.
// The reason that we can say more is that we consider a class as a symbol, as a distinguishable content.
// So the fundamental distinguishability, or the uncaring part of the data whether they are distinguishable or not.
// identical or not. it's another, but this idential can be defined in the terms of class level.
// 3 and 5 is identical, when you consider they are both number, both prime number, both separatable objects.
// As long as the object you are playing with satisfies a certain criteria, it works for it.

// a class checker.

// then the computation becomes
cos(43) * sin(167) + sin(43) * cos(167) // based on functional rules

sin(43 + 167) // based on functional rules

sin(210) // based on funtional rules

- sin(30) // based on factual rules

- 1 / 2


// Human don't like tedious calculations, then what is tedious?
// The analyse of the algorithm can't be avoided. What is invariant along the way?
// How annoying the calculations are. How relunctant we want to work it out through such a way.

// distinguishability should be a function that return values.

// guess and autocorrrect,

// layers of abstraction, layers of classes, this is core to the problems


// 1. data and operations
// 2. abstraction and layers
// 3. the equavelance of computations

// Even this simple example, there are lots of rules that can be applied.
// And for four of them, which one should changed, which one shouldn't
// why? which route to choose? Randomly? Or after a quite systematic analyse.
// For computer, this is stupid thing to use computation powers to figure it out.
// because when you have finished, you have already figured it out by brutal force checking.
// we are here to simulate intelligence, so that means barbarian attack is not considered.

//  Human should be using one or two techniques again and again, not lots of functionalities.
// this can be proved from genetic point of view, that we only have limited dna codes for brain. That means we have a large chance that the brain are using similiar techniques again and again.

// for each move of yours, you somehow have a reason for that move, purposely, intentionally, not randomly not without reasoning.

// the equavelance is rooted with limited basic operation we defined.

// every other operations are simply the composition of the basic ones.

// So the axioms must be the fundamentally determined by definitions.

// And there are multiple legal or same cost rule to reach the destiny.
