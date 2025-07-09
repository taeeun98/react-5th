/*
순수성,
순수 함수의 요건 : 동일 입력 -> 동일 출력
순수함이란? 계산된 결과가 동일함을 말합니다.
*/


function truncateText(text:string, limit:number =100):string {
    if(text.length > limit){
        return text.slice(0, limit) + '...'
    }
    
    return text;
}

// 동일한 입력일 때, 출력 결과가 동일하다면, 이 함수는 순수하다 = 멱등성
console.log(truncateText('안녕 내 이름은 심선범이야', 5)); //안녕 내 ...
console.log(truncateText('안녕 내 이름은 심선범이야', 5)); //안녕 내 ...


function square(n:number):number {
    return n * n;
}

/* 
동일한 입력 4에 대해 항상 결과는 16
외부 상태를 참조하거나 변경하지 않음 -> 순수 함수
*/
console.log(square(4)); //16
console.log(square(4)); //16




function sum(arr:number[]):number{
  return arr.reduce((acc,cur)=> acc + cur,0)
}


const nums = [1,2,3];


console.log(sum(nums)); //6
console.log(sum(nums)); //6