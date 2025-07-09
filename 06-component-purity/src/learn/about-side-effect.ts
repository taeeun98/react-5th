let multiplier = 2;


/* 외부 변수를 참조하는 순간 불순한 함수, 순수하지 않은 함수가 됨 */
function multiply(n: number): number {
  return n * multiplier;
}

console.log(multiply(3)); // 6
multiplier = 3;
console.log(multiply(3)); // 9
// => 입력된 값은 동일한 3을 넣었지만 출력값이 달라짐 -> 비순수함


function greet(name: string): string {
  console.log(`Hello ${name}!`);
  return `Hello ${name}!`;
}

console.log(greet('정소영'));
console.log(greet('정소영'));

// => 출력 결과는 같음, 내가 해야 하는 일 이외의 다른 일 처리 => 불순한 함수
// string return 외에 콘솔에 출력이 발생 => side effect(부수효과) 발생 !\


// 순수 함수가 되기 위한 조건
// 입력 -> 출력      : 결과는 오직 입력에만 따라야 함
// 외부 변수 사용 X  : 외부 상태에 의존하면 순수하지 않음.
// 예측 가능성       : 같은 인자 -> 항상 같은 결과


async function fetchUser(userId: string = '') {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}}`);

    if (!response.ok) {
      throw new Error('유저 정보를 가져오지 못했습니다.');
    }

    const user = await response.json();
    console.log(user);

    const userEL = document.getElementById('user-info');

    if (userEL) {
      userEL.textContent = `이름 : ${user.name}, 이메일 : ${user.email}`;
    }
  } catch (err) {
    if(err instanceof Error){
    console.error('에러발생', err.message);
    }
  }
}

// fetchUser()
// fetchUser()
// 비순수 함수가 되는 이유들

/*
DOM 조작 (document.getElementById)
브라우저 API 호출 (setTimeout, setInterval)
로컬 스토리지 접근
서버 요청 (fetch, xhr, axios)
콘솔 출력 (console.log)
상태 저장소에 쓰기/읽기 (contextAPI, Zustand, Redux, RTK)
*/

// 결론 : 리액트 컴포넌트(함수)는 순수 고자체여야한다 = JSX.Element 만을 반환해야 한다