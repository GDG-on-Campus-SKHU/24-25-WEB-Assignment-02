let resultArray = [];

for (let i = 10; i >= 0; i--) {
    if (i % 2 !== 0) {
        resultArray.push(i);
    }
}
let resultString = resultArray.join(' ');

console.log(resultString);
