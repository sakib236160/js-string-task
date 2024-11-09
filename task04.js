// Task-4:
// If a given string has either x, replace x by y. if the given string has X, replace it by Y.

// Hint: You should be able to check whether x or X exists. After that, search online how to replace a character in a string.


const inputString = 'If a given string has either x, replace x by Y. if the given string has X, replace it by Y';

if(inputString.includes('x') || inputString.includes('X')){
    const reversed = inputString.split('x').join('y').split('Y').join('X');
    console.log(reversed);
}