const array = [];

for(let i=10; i>0; i--) {
  if(i%2 === 1) { // 2로 나눴을 때 나머지가 있다면(홀수라면)
    array.push((i.toString() + ' ')); // 배열에 문자열로 변환 후 공백과 함께 push
  }
}

const result = array.join(''); // 배열 안에 있는 요소들을 공백 없이 한 문자열로 붙이기

console.log(result);
