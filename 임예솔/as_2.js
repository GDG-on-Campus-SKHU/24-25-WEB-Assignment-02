let students = {
  남도일: 92,
  유미란: 84,
  하인성: 88,
  유가영: 76,
};

function Average(studentScore) {
  // 이 부분에 들어갈 내용을 채워서 제출.

  let total = 0; // 총점을 계산할 변수를 0으로 초기화
  for (let key in studentScore) {
    total += studentScore[key]; // 학생들의 성적을 total에 더핸다
  }

  return Math.floor(total / Object.values(studentScore).length); //소수점 버리는 코드
}

let averageScore = Average(students);
console.log(`네 사람의 평균 성적: ${averageScore}`);
