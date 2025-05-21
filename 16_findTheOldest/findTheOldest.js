function getAge (person) {
    if (person.yearOfDeath === undefined) {
        person.yearOfDeath = new Date().getFullYear();
        //gosh I hope I got the scope right for this block 🐴
    }

    return person.yearOfDeath - person.yearOfBirth;
}

const findTheOldest = function(arr) {
    arr.sort((person1, person2) => getAge(person2) - getAge(person1));
    return arr[0];
};

// Do not edit below this line
module.exports = findTheOldest;
