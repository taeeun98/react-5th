import React from "./lib/react.js";
import ReactDOM from "./lib/react-dom.js";

const listData = {
  items: [
    { id: "1", title: "Life on Earth" },
    { id: "2", title: "Jupiter's massive storms" },
    { id: "3", title: "Explore Mars now" },
    { id: "4", title: "Moonlight and craters" },
  ],
};

// forEach 보다 배열을 반환하는 map 이 더 적합
// const children = [];

// listData.items.forEach((e) => {
//   console.log(e);

//   const liElement = React.createElement(
//     "li",
//     { className: "item", key:`${e.id}` },
//     React.createElement("img", { src: `/planet/image-0${e.id}.jpg`, alt: "" }),
//     React.createElement("span", { className: "content" }, `${e.title}`),
//     React.createElement(
//       "button",
//       { type: "button", title: "아이템 이동" },
//       React.createElement("img", { src: "/icons/icon.svg", alt: "아이템 이동" })
//     )
//   );

//   children.push(liElement);
// });

const children = listData.items.map(({ id, title }) => {
  const liElement = React.createElement(
    "li",
    { className: "item", key:`${id}` },
    React.createElement("img", { src: `/planet/image-0${id}.jpg`, alt: "" }),
    React.createElement("span", { className: "content" }, title),
    React.createElement(
      "button",
      { type: "button", title: "아이템 이동" },
      React.createElement("img", { src: "/icons/icon.svg", alt: "아이템 이동" })
    )
  );

  return liElement;
});

const ulElement = React.createElement(
  "ul",
  { className: "planet", lang: "en" },
  children
);

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(ulElement);

// console.log(root); -> 안에 render, unmount 있음
setTimeout(()=>{
    root.unmount();
},2000)

