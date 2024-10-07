let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //배열 생성

for (number = 9; number > 0; number--) {
  if (number % 2 === 1) {
    // 연산자 ==을 ===으로 수정
  } else if (number % 2 === 0) {
    continue;
  } else {
    break;
  }
  number.toString(); // 숫자를 문자열로 바꾸는 코드
  console.log(number);
}

// ==과 ===의 차이는 ==은 값만 같아도 같다고 하지만,
// ===은 타입과 값이 모두 같아야 true값을 반환하는 것으로 알고 있습니다.
