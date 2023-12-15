// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

describe("multiplyByThree", () => {
    it("is a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3", () => {
        const numbersArray1 = [6, 7, 8, 9, 10]
        expect(multiplyByThree(numbersArray1)).toEqual([18, 21, 24, 27, 30])
        const numbersArray2 = [24, 27, 30, 33, 36]
        expect(multiplyByThree(numbersArray2)).toEqual([72, 81, 90, 99, 108])
    })
})
// --> FAIL
// ReferenceError: multiplyByThree is not defined
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total

// b) Create the function that makes the test pass.

// Pseudo code:
// input: an array of numbers
// output: an array with the numbers multiplied by 3
// map(): create a new array by calling a function per array element
// array value * 3

const multiplyByThree = (array) => {
    return array.map((value) => {
        return value * 3
    })
}
// --> PASS
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

const object1 = {
    number: 15
}
// Expected output: "15 is divisible by three"
const object2 = {
    number: 0
}
// Expected output: "0 is divisible by three"
const object3 = {
    number: -7
}
// Expected output: "-7 is not divisible by three"


describe("evenlyDivisibleByThree", () => {
    it("is a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not", () => {
        const object1 = {
            number: 15
        }    
        expect(evenlyDivisibleByThree(object1)).toEqual("15 is divisible by three")
        const object2 = {
            number: 0
        }
        expect(evenlyDivisibleByThree(object2)).toEqual("0 is divisible by three")
        const object3 = {
            number: -7
        }
        expect(evenlyDivisibleByThree(object3)).toEqual("-7 is not divisible by three")
    })
})
// -- FAIL
// ReferenceError: evenlyDivisibleByThree is not defined
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 passed, 2 total

// b) Create the function that makes the test pass.

// Pseudo code:
// input: an object as an argument
// output: decides if the result is evenly divisible by three
// map(): create a new array by calling a function per array element
// array value * 3

const evenlyDivisibleByThree = (object) => {
    const {
        number
    } = object

    if (typeof number === 'number') {
        if (number % 3 === 0) {
            return `${number} is divisible by three`;
        } else {
            return `${number} is not divisible by three`;
        }
    }
}
console.log(evenlyDivisibleByThree(object1))
console.log(evenlyDivisibleByThree(object2))
console.log(evenlyDivisibleByThree(object3))

// PASS
// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

describe("uppercaseWords", () => {
    it("is a function that takes in an array of words and returns an array with all the words capitalized", () => {
        const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
        expect(uppercaseWords(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
        expect(uppercaseWords(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
    })
})

// FAIL
// ReferenceError: uppercaseWords is not defined
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 2 passed, 3 total

// b) Create the function that makes the test pass.

// Pseudo code:
// input: an array of words
// output: an array of capitalized words
// map(): iterate through the array, over each word, and return a new same-length array
// toUpperCase(): capitalize the first letter of each word 


const uppercaseWords = (arrayOfWords) => {
    return arrayOfWords.map(noun => noun.charAt(0).toUpperCase() + noun.slice(1))
};

const uppercaseWords1 = uppercaseWords(randomNouns1)
const uppercaseWords2 = uppercaseWords(randomNouns2)

console.log(uppercaseWords1)
console.log(uppercaseWords2)

// PASS
// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total