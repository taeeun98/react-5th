import React, { createElement as h } from "./lib/react.js";
import ReactDOM, { createRoot } from "./lib/react-dom.js";







const container = document.getElementById("app");

if (container) {
  const reactDomRoot = ReactDOM.createRoot(container);
  reactDomRoot.render(h(AvatarPage));
}