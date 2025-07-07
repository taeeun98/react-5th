import React, { createElement as h } from "../../lib/react.js";

// 1. Planet Item

export function _PlanetItem({id, title}) {
  /*
  // 안써도 자동으로 super() 까지 됨
  constructor(props){ // class 문법은 constructor 사용할수있음
    super(); // constructor에는 super 꼭 쓰기
    console.log(props)
  }
  */

  return h(
    "li",
    { className: "item" },
    h("img", { src: `/planet/image-0${id}.jpg`, alt: "" }),
    h("span", { className: "content" }, title),
    h(
      "button",
      { type: "button", title: "move item" },
      h("img", { src: "/icons/icon.svg", alt: "move item" })
    )
  );
}
