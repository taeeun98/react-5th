import { createElement as h } from "./lib/react.js";
import ReactDOM from "./lib/react-dom.js";
import { PlanetPage } from "./pages/PlanetPage.js";
import { _PlanetPage } from "./pages/_PlanetPage.js";
import AvartarPage from "./pages/AvartarPage.js";




const container = document.getElementById("app");

if(container){
  const reactDomRoot = ReactDOM.createRoot(container)
  // reactDomRoot.render(h(PlanetPage)); /* class syntax */
  // reactDomRoot.render(h(_PlanetPage)); /* function syntax */

  reactDomRoot.render(h(AvartarPage)); 
}