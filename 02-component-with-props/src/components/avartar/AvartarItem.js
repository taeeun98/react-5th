
import React from "../../lib/react.js";

export default function AvartarItem({name, status = 'offline', size =64}) {
  
    return React.createElement('li', {className:"avartar"},
        React.createElement("figure",
            {'aria-label':'', title:''},
            React.createElement("div", {className:"cover"},
                React.createElement("img", {src:"/avatar/맹구.png", alt:""})
            ),
            React.createElement("figcaption",
                null,
                React.createElement("img", {src:"/icons/status-online.svg", alt:""})
            )
        )
    )
}
