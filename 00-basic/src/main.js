// React API를 사용해서
// data에서 랜덤한 인사말 1개 선택 후 h1 태그로 렌더링

import { Greeting } from "./data.js";
import React from "./lib/react.js";
import ReactDOM from "./lib/react-dom.js";


const getRandom = (n) => {
    return Math.floor(Math.random() * n);
}

const keys = Object.keys(Greeting);
const key = keys[getRandom(keys.length)];
const value = Greeting[key];


const ele =  React.createElement('h1',{
    name:`나라별 인사말 - ${key}`
},
`인사말 : ${value}`
)

const app = document.getElementById('app');
const root = ReactDOM.createRoot(app);

root.render(ele);
