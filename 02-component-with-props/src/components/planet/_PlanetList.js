import React, { createElement as h } from "../../lib/react.js";

// 2. Planet List => [children 은 배열(virtual DOM 을 담은 형태)로 전달될수있다]

export function _PlanetList({ lang, children }) {
  return h("ul", { className: "planet", lang }, children);
}
