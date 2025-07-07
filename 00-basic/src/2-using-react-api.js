import React from "./lib/react.js";
import ReactDOM, {creatRoot} from "./lib/react-dom.js";
// 따로 가져온다면 아래에서 ReactDOM.creatRoot 할 필요없이 creatRoot 만 쓰면 됨


console.log(React.version);
console.log(ReactDOM.version);

const button = React.createElement('button', {type:'button'}, 'hello')
const div = React.createElement('div', {
    className:'tiger',
    lang:'en',
    'aria-label':'버튼 태그의 부모' 
}, button);

const app = document.getElementById('app');
const root = creatRoot(app/* 렌더링위치 */);

root.render(div);