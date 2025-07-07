"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//@ts-nocheck
const react_1 = __importDefault(require("https://esm.sh/react"));
const client_1 = __importDefault(require("https://esm.sh/react-dom/client"));
function Avatar({ name, status = "offline", size = 64 }) {
    let iconPath = "";
    let statusMessage = "";
    switch (status) {
        case "offline":
            iconPath = "/icons/status-offline.svg";
            statusMessage = "오프라인";
            break;
        case "online":
            iconPath = "/icons/status-online.svg";
            statusMessage = "온라인";
            break;
        case "dont-disturb":
            iconPath = "/icons/status-dont-disturb.svg";
            statusMessage = "방해금지";
            break;
        case "away":
            iconPath = "/icons/status-away.svg";
            statusMessage = "자리비움";
            break;
    }
    const label = `${name} (${statusMessage})`;
    return (react_1.default.createElement("li", { className: "avatar" },
        react_1.default.createElement("figure", { "aria-label": label, title: label },
            react_1.default.createElement("div", { className: "cover" },
                react_1.default.createElement("img", { src: `/avatar/${name}.png`, alt: "" })),
            react_1.default.createElement("figcaption", null,
                react_1.default.createElement("img", { src: iconPath, alt: "" })))));
}
function AvatarPage() {
    return (react_1.default.createElement("ul", { className: "avatarList" },
        react_1.default.createElement(Avatar, { name: "\uB9F9\uAD6C", status: "offline" }),
        react_1.default.createElement(Avatar, { name: "\uCCA0\uC218", status: "dont-disturb" }),
        react_1.default.createElement(Avatar, { name: "\uC720\uB9AC", status: "away" }),
        react_1.default.createElement(Avatar, { name: "\uD6C8\uC774", status: "online" }),
        react_1.default.createElement(Avatar, { name: "\uC2E0\uD615\uB9CC", status: "online" })));
}
const container = document.getElementById('app');
if (container) {
    const reactDomRoot = client_1.default.createRoot(container);
    reactDomRoot.render(react_1.default.createElement(AvatarPage, null));
}
