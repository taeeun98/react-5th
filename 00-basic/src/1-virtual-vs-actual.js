/* eslint-disable @typescript-eslint/no-unused-vars */
import { createElement, isValidElement } from "./lib/virtual/index.js";
import { createRoot } from "./lib/virtual-dom/index.js";

/*
virtual DOM  
가상 문서 객체 모델  
실제 DOM을 추상화 (단순화)
*/

// console.log(createElement);
// console.log(createRoot);


/* actual DOM -------------------------------------------- */
/*
실제 DOM 구성 (엘리먼트 트리)
웹 api 사용해서 문서 객체(document object) 생성
*/


// 부모 요소 생성
const divElement = document.createElement('div');

// 자식 요소 생성
const buttonElement = document.createElement('button');

// 자식 요소 속성 설정
buttonElement.setAttribute('type', 'button');

// 자식 요소 콘텐츠 설정
buttonElement.textContent = 'hello 😋';

// 요소간 관계 형성
divElement.append(buttonElement);

// 실제 DOM에 마운트(mount, 착장 === 렌더링)
// innerHTML 같은건 사실 보안때문에 사용 비추천
const actualDomElement = document.getElementById('app');

actualDomElement.append(divElement);




/* virtual DOM -------------------------------------------- */
// API : createElement(type, props, ...children)

const buttonV_Element = createElement('button', {type:'button'}, 'hola');
const divV_Element = createElement('div', {className:'tiger'}, buttonV_Element);
// console.log( divV_Element);


const VirtualDomElement = document.getElementById('app');
const vRoot = createRoot(VirtualDomElement);
// console.log(vRoot);
vRoot.render(divV_Element);

// $$typeof 가 node 에 포함되어있는지 판단을 통해 가상요소인지 아닌지 판별
console.log(isValidElement(divElement));
console.log(isValidElement(divV_Element));


