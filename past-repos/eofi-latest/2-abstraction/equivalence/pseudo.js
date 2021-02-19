// Concepts we consider
// Steps of Operations(Ops), Cares, Types
// cares is the new word for feature and abilities
// the fundamental care is the distinguishability
// it seems like cares can be atomic
// and also the computer systems are containing both conditional and transformations.
// conditional cares and transformational cares EUREKA
// I have to down to the minimum of transformations and minimum of conditionns
// and the data types, normal types, or I have to find new classes to say separate things

// find out what is invariant in the process of variation.

// The cares separate things in various level.
// The layers of transformations.

// First:  n^2 - 1  = (n + 1)(n - 1) // simple first level
// Second: 1 + 2 + 3 + ... + n  = n(n+1)/2 // better than mathematical induction
// what is length? what is counting? what is plus? I have no idea.
// recursive, branching conditions,
// sense the invariant feature of the object, I don't know what it is. But I know it's there.
// f(a) = a_1 + a_2 + a_3 + .. + a_n
// Third:  a + b = b + a // this is prove axiom

// possible implementation
function check_equivalence(f, g) {
    let types_of_args_f = get_types_of_args(f) // an array
    let types_of_args_g = get_types_of_args(g) // an array

    if (types_of_args_f != types_of_args_g) {
        return false
    } else {
        let ops_of_f = get_ops(f) // an array
        let ops_of_g = get_ops(g) // an array

        let all_type_cares = types_of_args_f.map((type) => type) // each care is a function

        if ( test_normal_cares(all_type_cares, ops_of_f, ops_of_g) || test_additional_cares(ops_of_f, ops_of_g) ) {
           return symbolical_test(f, g)
        }
        return false
    }
}

function test_normal_cares (all_type_cares, ops_of_f, ops_of_g) {
    for (let type of all_type_cares)
          for (let care of type)
            for (let op of ops_of_f)
                if ( care(op) == false) return false
            for (let op of ops_of_g)
                if ( care(op) == false ) return false
}

function test_additional_cares (ops_of_f, ops_of_g) {
    let additional_cares_f = get_additional_cares_of(ops_of_f)
    let additional_cares_g = get_additional_cares_of(ops_of_g)
    return sort(additional_cares_f) == sort(additional_cares_g)
}

// more
let get_types_of_args, get_ops, get_type_cares, get_additional_cares_of
