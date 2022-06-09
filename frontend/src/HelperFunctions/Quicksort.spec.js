const Quicksort = require("./Quicksort.js");

describe("Quicksort function Tests", () => {

    const testCases = [
        {
            input: ["apple", "bone", "crust", "dragon", "Eagle"], //already sorted
            output: ["apple", "bone", "crust", "dragon", "Eagle"]
        },
        {
            input: ["crust", "apple", "Eagle", "dragon", "bone"], // unsorted normal
            output: ["apple", "bone", "crust", "dragon", "Eagle"]
        },
        {
            input: ["standalone"], //one element 
            output: ["standalone"]
        },
        {
            input: ["Frog", "Deer"], //two elements
            output: ["Deer", "Frog"]
        },
        {
            input: ["astronomy", "apple","awesome", "abnormal", "advertisement"], //all elements with same first letter
            output: ["abnormal", "advertisement", "apple", "astronomy", "awesome"]
        },
        {
            input: [], //empty list
            output: []
        },
    ];


    testCases.map(tc => (
        it(`returns ${tc.output} when ${tc.input}`, () => {
            const actual = Quicksort(tc.input);
            expect(actual).toStrictEqual(tc.output);
        })
    ))

})