let students = {
    남도일: 92,
    유미란: 84,
    하인성: 88,
    유가영: 76
};

function Average(studentScore) {
    // 이 부분에 들어갈 내용을 채워서 제출.
    let total=0;//total을 우선 0으로 선언해서 비워두기

    for(const key in studentScore){
        total+=studentScore[key];//for~in을 사용해 객체의 키 값을 하나하나 불러와 value만 따로 total에 차례로 더해줌
    }
    return Math.floor(total / Object.values(studentScore).length); //소수점 버리는 코드
}

let averageScore = Average(students);
console.log(`네 사람의 평균 성적: ${averageScore}`);