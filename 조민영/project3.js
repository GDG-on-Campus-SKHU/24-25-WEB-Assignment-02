let arr = [];//홀수들만 담을 빈 배열 선언

    
for (let i = 0; i<=10; i++) {//0부터 10까지 생성

        if (i % 2) {//홀수만 걸러내는 조건문
            arr.unshift(i);  //내림차순 나열을 위해 앞에서부터 삽입
        } 
    }
    
let arrStr= arr.join(' ');//문자열로 변환

console.log(arrStr);
