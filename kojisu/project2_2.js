let students = {
  남도일: 92,
  유미란: 84,
  하인성: 88,
  유가영: 76,
};

let total = 0;

function Average(studentScore) {
  for (let key in Object) {
    for (let i = 0; i < students.length; i++) {
      total += studentScore[i];
    }
    //let averageScore = total / students.length;
    return Math.floor(total / Object.values(studentScore).length); // 소수점 버리는 코드
  }
}
let averageScore = Average(students) / 4;

console.log(`네 사람의 평균 성적: ${averageScore}`);
console.log(`네 사람의 성적의 합: ${total}`);

//console.log("hello world!");
