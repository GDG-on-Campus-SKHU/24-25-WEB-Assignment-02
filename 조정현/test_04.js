// 세 개의 주사위를 던졌을 때, 눈의 합이 10이 되는 모든 경우의 수를 출력하세요.

/*
 * 난수 생성을 위해 Math.random() 함수 사용
 * 정수인 난수를 사용하기 위해 Math.random() 함수와 Math.floor 함수를 같이 사용
 * 주사위 같은 경우는 1~6만 나와야함
 * (1) 1 <= random < 6
 * const rand1 = Math.floor(Math.random());
 * 주사위를 3개 던져야함
 * 세개의 합이 10이 되는 경우 이거 어케하냐 합 관련된 내용
 * filter 사용해서 10이하일 경우만 반환
 *
 * 그 경우를 출력해야함
 */

// 1 <= random <= 6;

/*
const rand1 = Math.floor(Math.random() * 6) + 1; // 최소값 지정을 위해 +1을 해주었다.
const rand2 = Math.floor(Math.random() * 6) + 1; // 최소값 지정을 위해 +1을 해주었다.
const rand3 = Math.floor(Math.random() * 6) + 1; // 최소값 지정을 위해 +1을 해주었다.

let arr = rand1 + rand2 + rand3;

if (arr === 10) {
  console.log(rand1, rand2, rand3);
} else {
  console.log("no");
}
*/

/*
let even = arr.filter((num) => num <= 10); // 10일때
console.log(even);

console.log(rand1, rand2, rand3);
*/

for (let rand1 = 1; rand1 <= 6; rand1++) {
  for (let rand2 = 1; rand2 <= 6; rand2++)
    for (let rand3 = 1; rand3 <= 6; rand3++)
      if (rand1 + rand2 + rand3 === 10) console.log(rand1, rand2, rand3);
}
