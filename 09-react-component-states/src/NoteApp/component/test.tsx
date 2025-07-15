// 유니온 타입에서는 모든 값에 유효한 메서드만 사용가능
// 아래에서는 toUpperCase () 같은것 사용 불가능
let arr:(string|number)[] = [100, '100'] //유니온

// 따라서 타입 좁히기 해야 사용 가능
if (typeof id === "string") {
    // 이 분기에서 id는 'string' 타입을 가집니다
    console.log(id.toUpperCase());

  } 



let tuple:[number, number] = [2,3] //튜플



// type 으로 지정하는것 = 타입에 별칭을 부여한다.
// 타입은 새 프로퍼티를 추가하도록 개방될 수 없는 반면
// 인터페이스의 경우 항상 확장될 수 있다는 점입니다.
type User = {
    ~~
}
let user:User = {
    ~~
}


//Index signatures
// 개수에 상관없이 strig: number 면 다 추가 가능
type code = {
    [key:string] : number;
}

// enum
enum EnumType {
    UP,
    DOWN
}

//Unknown  vs any
// unknown 은 타입 검증 후에 사용가능 , 좀 더 안전
// never 반환 타입에서는, 해당 함수가 예외를 발생시키거나, 프로그램 실행을 종료함을 의미

//타입 호환성
// number literal 타입은 number타입의 하위 요소에 속하므로
// a = b 는 문제가 되지 않지만 반대로 하는 행위는 에러
let a:number = 123;
let b:123 = 123;
a = b;
b = a // Error !

// 교집합 = & 사용해서 합치기 가능



//타입 단언
// 타입 단언은 컴파일 시간에 제거되므로, 타입 단언에 관련된 검사는 런타임 중에 이루어지지 않습니다. 타입 단언이 틀렸더라도 예외가 발생하거나 null이 생성되지 않을 것입니다.
as const;
 as HTMLCanvasElement;
 ! 



 // 타입 좁히기
 - "string"
- "number"
- "bigint"
- "boolean"
- "symbol"
- "undefined"
- "object"
- "function"
// null => object


// keyof typeof
// typeof 연산자 뒤에는 자바스크립트 객체가 와야하고 
// keyof 연산자 뒤에는 타입스크립트 타입이 와야합니다.
const settings = {
  theme: "dark",
  fontSize: 16,
  language: "ko"
};

type SettingsKey = keyof typeof settings;
// "theme" | "fontSize" | "language"



//내장 유틸리티 타입 6가지
Omit<T, K>
Pick<T, K>
Partial<T>
Readonly<T>
Required<T>
Record<K, T>


// Record<k, t> 는 타입객체를 생성한다. 
type Role = "admin" | "user" | "guest";

type RoleInfo = Record<Role, string>;
// 결과: { admin: string; user: string; guest: string }

const roles: RoleInfo = {
  admin: "관리자",
  user: "일반 사용자",
  guest: "방문자"
};

//두 개 이상의 매개변수를 받아 배열로 반환하기
function swapAtoB<T, U>(a:T, b:U):(U|T)[] {
    return [b,a];
}

swapAtoB(0,'a');
swapAtoB([],'a');

// 제네릭 타입을 받을건데 length 라는 property 를 가진 객체를 extends 한 타입으로 받겠다
// or length 키를 필수적으로 만들겠다.
function getLength<T extends {length:number}>(arr:T):number {
    return arr.length;
}

getLength([1,2,3]);
getLength(['1','2','3']);
getLength({length:10});
getLength('hello');
// length 를 쓸 수 있는 어떤 매개변수도 가능



type Response<T> = T extends string ? {type:string; content:string} : {type:string; content:T};
const r1:Response<string> = {type:'text', content:'hello'};
const r2:Response<{name:string}> = {type:'json', content:{name:'tiger'}};





// 매개변수를 함수로 받을는 콜백함수
// type Success = (url:string) => void
interface Success {(url:string) : void}
// type Fail = (err:Error)=>void
interface Fail {(err:Error) : void}


type Error = {message:string}
type MovePage = (url:string, success:Success, fail:Fail) => void;


const movePage:MovePage = (url:string, success:Success, fail:Fail) =>{
  if(url.match(/http.+www/) && typeof url === 'string'){
    success(url);
  }else{
    fail({message:'error!'});
  }
}


movePage(
  'https://www.naver.com',
  ()=>{},
  ()=>{}
)