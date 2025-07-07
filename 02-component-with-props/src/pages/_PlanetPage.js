import React, { createElement as h } from "../lib/react.js";
import { PlanetItem } from "../components/planet/PlanetItem.js";
import { PlanetList } from "../components/planet/PlanetList.js";
import { listData } from "../data/data.js";

// 3. Planet Page

export function _PlanetPage() {
  return h(PlanetList, {
    lang: "en",
    children: listData.items.map(({ id, title }) =>
      h(PlanetItem, { key: id, id, title })
    ),
  });
}
