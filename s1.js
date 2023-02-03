// Find all occurrences of a value x in an array a and return an array
// of matching indexes
const findall = (a, x) => {
    let results = [], // The array of indexes we'll return
        len = a.length, // The length of the array to be searched
        pos = 0; // The position to search from
    while (pos < len) { // While more elements to search...
        pos = a.indexOf(x, pos); // Search
        if (pos === -1) break; // If nothing found, we're done.
        results.push(pos); // Otherwise, store index in array
        pos = pos + 1; // And start next search at next element
    }
    return results;
};


let a = [0, 1, 2, 1, 0]
// console.log(a.indexOf(1))
// console.log(a.lastIndexOf(1))
let b = findall(a, 1)
console.log(b)

// ---------------------------------------

uniqueInteger.counter = 0;

function uniqueInteger() {
    return uniqueInteger.counter++;  // Return and increment counter property
}

uniqueInteger()  
uniqueInteger()
uniqueInteger()
uniqueInteger()
console.log(uniqueInteger.counter)


// --------------------------------------

class Range {
    constructor (from, to) {
        this.from = from;
        this.to = to;
    }

    // Make a Range act like a Set of numbers
    has(x) { return typeof x === "number" && this.from <= x && x <= this.to; }

    // Return string representation of the range using set notation
    toString() { return `{ x | ${this.from} ≤ x ≤ ${this.to} }`; }

    // Make a Range iterable by returning an iterator object.
    // Note that the name of this method is a special symbol, not a string.
    [Symbol.iterator]() {
        // Each iterator instance must iterate the range independently of
        // others. So we need a state variable to track our location in the
        // iteration. We start at the first integer >= from.
        let next = Math.ceil(this.from);  // This is the next value we return
        let last = this.to;               // We won't return anything > this
        return {                          // This is the iterator object
            // This next() method is what makes this an iterator object.
            // It must return an iterator result object.
            next() {
                return (next <= last)   // If we haven't returned last value yet
                    ? { value: next++ } // return next value and increment it
                    : { done: true };   // otherwise indicate that we're done.
            },

            // As a convenience, we make the iterator itself iterable.
            [Symbol.iterator]() { return this; }
        };
    }
}

// for(let x of new Range(1,10)) console.log(x); // Logs numbers 1 to 10
// let nr =[...new Range(-2,2)] // => [-2, -1, 0, 1, 2]
// console.log(nr)                      


// Return an iterable object that iterates the result of applying f()
// to each value from the source iterable
function map(iterable, f) {
    let iterator = iterable[Symbol.iterator]();
    return {     // This object is both iterator and iterable
        [Symbol.iterator]() { return this; },
        next() {
            let v = iterator.next();
            if (v.done) {
                return v;
            } else {
                return { value: f(v.value) };
            }
        }
    };
}

// Map a range of integers to their squares and convert to an array
 let mr = [...map(new Range(0,10), x => x+x)] 
console.log(mr)