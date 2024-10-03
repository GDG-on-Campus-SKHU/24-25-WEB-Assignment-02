for(let i=1; i<7; i++) {
  for(let j=1; j<7; j++) {
    for(let k=1; k<7; k++) {
      if (i+j+k === 10) { //주사위 3개의 합이 10이라면
        console.log(i + ' ' + j + ' ' + k); //각 주사위 눈을 출력
      }
    }
  }
}