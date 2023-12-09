// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain WHY your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------1) What will this log?

const cohort = "India 2023"
console.log(cohort.split(" "))

// a) Your answer: An array of two strings. (* split(""): an array of characters as strings.)
// b) Verify and explain: [ 'India', '2023' ]. (*[  'I', 'n', 'd', 'i',  'a', ' ', '2', '0',  '2', '3'].) split(): splits a string into an array of substrings.

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: Error message: undefined.
// b) Verify and explain: undefined. No return indicated.

// --------------------3) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: 11, 13, 15.
// b) Verify and explain: [ 11, 13, 15 ]. filter() iterates through an array and returns a new array with only the expressed values.

// --------------------4) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: "JavaScript".
// b) Verify and explain: JavaScript. The first element of the languages array is logged.

// --------------------5) What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "India"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: The Learn class with "George" replacing the value of name.
// b) Verify and explain: Learn { student: 'George', cohort: 'India', year: 2023 }. The learnStudent object returns the new Learn with "George" replacing the name value.
