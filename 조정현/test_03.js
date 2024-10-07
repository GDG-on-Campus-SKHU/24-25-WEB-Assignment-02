// for문을 사용하여 0부터 10이하의 정수 중에서 홀수만을 내림차순으로 나열하고 이를 문자열로 변환하여 출력하세요.
/*for (let i = 0; i < 10; i++) {
  console.log(i % 2 == 1);
}*/

/*
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let even = arr.filter((num) => num % 2 === 1); // 홀수 filter
console.log(even);
*/

let arr = []; //배열 선언

for (let i = 10; i > 0; i--) {
  if (i % 2 == 1) {
    arr.push(i); //i결과를 배열 선언 한 곳으로 넣음
  }
}
let str = arr.join(" "); //배열의 모든 요소를 연결해 하나아의 문자열로 만듦

console.log(arr);

//join 메서드 사용. 배열의 모든 요소를 연결해 하나아의 문자열로 만듦
