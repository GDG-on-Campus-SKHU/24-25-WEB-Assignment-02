for (let i = 1; i <= 6; i++) {
  for (let j = 1; j <= 6; j++) {
    for (let k = 1; k <= 6; k++) {
      if (i + j + k == 10) {
        if (i === j || j === k || k === j) {
          // 2개의 숫자의 위치가 바뀐 경우
          // ex)5,1,4/4,1,5
          if (i < j) {
            console.log(i + " ", j + " ", k + " ");
          } else if (j < k) {
            console.log(i + " ", j + " ", k + " ");
          } else if (i < k) {
            console.log(i + " ", j + " ", k + " ");
          } else {
            continue;
          }
        } else {
          continue;
        }
      } else {
        continue;
      }
    }
  }
}
