import createState from "@/lib/createState";

// 1. 선언 먼저 시작.
const data = {
  checked: false,
};

/*
**state가 변경될 때** 호출되는 '렌더 함수'
react에서 컴포넌트가 리렌더링되는 효과를 흉내
*/
const render = () => {
  console.log("상태 업데이트", state.checked);

  const { checked } = state;

  checkbox.checked = checked;
  if (checked) {
    button.removeAttribute("disabled");
    button.textContent = "활성 상태";
  } else {
    button.setAttribute("disabled", "true");
    button.textContent = "비활성 상태";
  }
};

/*
state : 현재 상태
setState : 상태를 업데이트하고 render()를 실행시켜주는 함수
React의  const [count, setCount] = useState(0) 와 유사합니다.
*/
// 2. createState 함수에 인자로 미리 만든 data 와 render 함수 전달
const [state, setState] = createState(data, render);
console.log("초기상태", state.checked);

// function update() {
//   const nextCheckedValue = !state.checked;

//   // setState 를 사용하는 순간 키와 밸류를 받고, setState 는 render 를 렌더트리거를 유발.
//   setState("checked", nextCheckedValue);
// }

// update();

// globalThis.update = update;

const container = document.getElementById("declarative-programming")!;
const checkbox = container?.querySelector(
  'input[type="checkbox"]'
) as HTMLInputElement;
const button = container.querySelector("button") as HTMLButtonElement;


// typescript
// globalthis 에 등록하려면 타입이 지정되어 있어야함
declare global {
  var update: (value:boolean) => void
}


/*
setState('checked', value) 호출 시 render() 함수도 함께 호출됨 -> UI 갱신  
globalThis.update 등록한 이유 : 브라우저 콘솔에서 update(true) 테스트할 수 있도록
*/
const update = (globalThis.update = (value) => {
  setState('chekced', value);
})


checkbox.addEventListener('change', (e:Event)=>{
  const {checked} = e.target as HTMLInputElement;

  update(checked);
})