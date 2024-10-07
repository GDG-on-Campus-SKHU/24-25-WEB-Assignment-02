for (let i = 1; i <= 6; i++) {
  for (let j = 1; j <= 6; j++) {
    for (let k = 1; k <= 6; k++) {
      if (i + j + k === 10) {
        console.log(i + " " + j + " " + k + " ");
      } else {
        continue;
      }
    }
  }
}
