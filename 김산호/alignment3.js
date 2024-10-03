const array = [];

for(let i=10; i>0; i--) {
  if(i%2 === 1) {
    array.push((i.toString() + ' '));
  }
}

const result = array.join('');

console.log(result);
