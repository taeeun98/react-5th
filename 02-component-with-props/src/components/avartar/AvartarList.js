import React from "../../lib/react.js";
import AvartarItem from "./AvartarItem.js";

export default function AvartarList() {
    return React.createElement('ul', {className:"avartarList"}, AvartarItem)
}