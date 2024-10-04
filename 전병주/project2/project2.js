let students = {
  남도일: 92,
  유미란: 84,
  하인성: 88,
  유가영: 76,
};

function Average(studentScore) {
  let sum = 0;

  for (let key in studentScore) {
    sum += studentScore[key]; // 과제 정리 1-3 제어문 for~in 사용
  }

  return Math.floor(sum / Object.values(studentScore).length); //소수점 버리는 코드
}

let averageScore = Average(students);
console.log(`네 사람의 평균 성적: ${averageScore}`);
