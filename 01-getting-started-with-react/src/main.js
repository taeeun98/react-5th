import React from "./lib/react.js";
import ReactDOM from "./lib/react-dom.js";

const listData = {
  items: [],
};


// 우회할수있는 생성자 함수 porxy(); 우회해서 listData 에 대신 접근해준다
// vue 가 프록시를 사용한다. 리액트는 프록시를 사용하진 않지만 
// 반응형 데이터를 비슷하게 구현한것
const reactiveListData = new Proxy(listData, {
    get(target, prop){
        return target[prop];
    },

    set(target, prop, newValue){
        const oldValue = target[prop];

        target[prop] = newValue;

        render();
        
        return true;
    }
}); 






const root = ReactDOM.createRoot(document.getElementById("app"));

function render() {
  const children = listData.items.map(({ id, title }) => {
    const liElement = React.createElement(
      "li",
      { className: "item", key: `${id}` },
      React.createElement("img", { src: `/planet/image-0${id}.jpg`, alt: "" }),
      React.createElement("span", { className: "content" }, title),
      React.createElement(
        "button",
        { type: "button", title: "아이템 이동" },
        React.createElement("img", {
          src: "/icons/icon.svg",
          alt: "아이템 이동",
        })
      )
    );

    return liElement;
  });

  const ulElement = React.createElement(
    "ul",
    { className: "planet", lang: "en" },
    children
  );

  root.render(ulElement);
}

render();


setTimeout(()=>{
    reactiveListData.items = [
        ...reactiveListData.items,
        {
            id:1,
            title: 'Life on Earth'
        }
    ]
    console.log(listData);
}, 1000)
