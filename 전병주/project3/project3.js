let final = [];

for (i = 10; i >= 0; i--) {
  //i가 10부터 0까지 내려오면서 반복
  if (i % 2 == 1) {
    // i가 홀수인 경우만 출력
    let str = i.toString(); // i를 문자열로 변환하기 위해 toString()사용
    final.push(str); //str를 하나씩 차례로 배열 final에 이동
  }
}
console.log(final); //출력
