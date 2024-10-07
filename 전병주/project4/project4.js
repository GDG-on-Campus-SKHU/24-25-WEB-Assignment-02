for (let i = 1; i <= 6; i++) {
  //첫 번째 주사위를 굴립니다.
  for (let j = 1; j <= 6; j++) {
    // 두 번째 주사위를 굴립니다.
    for (let k = 1; k <= 6; k++) {
      // 세 번째 주사위를 굴립니다.
      const sum = i + j + k; // 첫 번째, 두 번째, 세 번째 주사위의 눈의 합 저장
      const success = 10; // 원하는 값
      if (sum === success) {
        console.log(`(${i},${j},${k})`);
      }
    }
  }
}
