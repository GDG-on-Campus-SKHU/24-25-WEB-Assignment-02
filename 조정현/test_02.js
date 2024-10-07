// 함수를 통해 평균구하기
let students = {
  남도일: 92,
  유미란: 84,
  하인성: 88,
  유가영: 76,
};

//students에 저장된 숫자
function Average(studentScore) {
  const scores = Object.values(studentScore);

  let averageScore =
    scores.reduce((sum, score) => sum + score, 0) / scores.length; //여기 채우는 것이 과제
  // sum: 배열요소들의 누적덧셈 값
  // score: 순회중인 요소, 0: 초기값

  return Math.floor(averageScore);
  //Math.floor 정수로 나타내라
}

let averageScore = Average(students);
console.log(`네 사람의 평균 성적: ${averageScore}`);
