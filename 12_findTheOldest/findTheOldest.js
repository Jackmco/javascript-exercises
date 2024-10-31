const findTheOldest = function(people) {
    // console.log(people) 
    // let oldestPerson = people[0]
    let oldest = people.reduce((oldestPerson, person) => {
        // console.log(oldestPerson, person)
        if (person.yearOfDeath == undefined) {
            person.age = new Date().getFullYear() - person.yearOfBirth
        }
        else {
            person.age = person.yearOfDeath - person.yearOfBirth
        } 
        if (oldestPerson == null) return person
        else if (oldestPerson.age < person.age) return person
        return oldestPerson
        }, null)
    return oldest
};

// console.log(findTheOldest([
//     {
//       name: "Carly",
//       yearOfBirth: 2018,
//     },
//     {
//       name: "Ray",
//       yearOfBirth: 1962,
//       yearOfDeath: 2011,
//     },
//     {
//       name: "Jane",
//       yearOfBirth: 1912,
//       yearOfDeath: 1941,
//     },
//   ]))
// Do not edit below this line
module.exports = findTheOldest;
