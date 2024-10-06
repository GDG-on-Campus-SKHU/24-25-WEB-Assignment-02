for (let i = 10; i > 0; i--) {
  if (i % 2 == 1) {
  } else if (i % 2 == 0) {
    continue;
  } else {
    break;
  }
  i.toString(); // 숫자를 문자열로 바꾸는 코드
  console.log(i + " ");
}
