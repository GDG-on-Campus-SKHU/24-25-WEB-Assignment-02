let students = {
  남도일: 92,
  유미란: 84,
  하인성: 88,
  유가영: 76
};

function Average(studentScore) {
  let total=0;

  Object.values(students).map((score) => {
    total += score;
  })
  
  return Math.floor(total / Object.values(studentScore).length); //소수점 버리는 코드
}

let averageScore = Average(students);
console.log(`네 사람의 평균 성적: ${averageScore}`);