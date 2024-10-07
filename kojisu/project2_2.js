let students = {
  남도일: 92,
  유미란: 84,
  하인성: 88,
  유가영: 76,
};

let total = 0;

function Average(studentScore) {
  for (let key in studentScore) {
    total += studentScore[key]; //total에 각 학생들의 성적 넣기
  }
  let averageScore = Math.floor(total / Object.values(studentScore).length); // 소수점 버리는 코드
  return averageScore; // total을 4로 나눈 값을 averageScore에 넣고, 리턴하기
}

let averageScore = Average(students); // averageScore에 평균값 넣기

console.log(`네 사람의 평균 성적: ${averageScore}`);
// console.log(`네 사람의 성적의 합: ${total}`);

// 출력이 none이 나온 이유는 key값을 total에 넣어야 하는데 제가 이중 for문을 사용해서 key값이 저장되지 않아 총합이 잘 나오지 않았고,
// 그래서 총합과 평균이 빈 문자열로 저장이 되어서 Nan 값이 나온 것 같습니다.
