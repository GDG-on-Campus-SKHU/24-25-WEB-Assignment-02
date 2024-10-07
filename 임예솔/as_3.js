// for문을 사용하여 0부터 10이하의 정수 중에서 홀수만을 내림차순으로 나열하고
// 이를 문자열로 변환하여 출력하세요.

let array = []; // 배열 선언
for (let i = 10; i >= 0; i--) {
  // for문을 사용하여 10부터 0까지 정수를 반복 (내림차순)
  if (i % 2 === 1) {
    // i를 2로 나눴을 때 나머지가 1이라면 (홀수 일 때)
    array.push(i); // 배열 array에 i push
  }
}
let aString = array.join(" "); // array를 문자열로 변환
console.log(aString); // 출력
