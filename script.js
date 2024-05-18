// 5.2.1
function getProperty(obj, prop) {
    return obj[prop];
}

// 5.2.2
function addProperty(obj, prop, value) {
    obj[prop] = value;
    return true;
}

// 5.2.3
function removeProperty(obj, prop) {
    delete obj[prop];
}

// 5.2.4
function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

// 5.2.5
function getLengthOfWord(word) {
    return word.length;
}

// 5.2.6
function getLengthOfTwoWords(word1, word2) {
    return word1.length + word2.length;
}

// 5.2.7
function isGreaterThan(num, greaterThan) {
    return num > greaterThan;
}

// 5.2.8
function isEven(num) {
    return num % 2 === 0;
}

// 5.2.9
function isSameLength(word1, word2) {
    return word1.length === word2.length;
}

// 5.2.10
function isEvenAndGreaterThanTen(num) {
    return isEven(num) && num > 10;
}

// 5.2.11
function computeAreaOfATriangle(base, height) {
    return 0.5 * base * height;
}