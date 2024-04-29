//✨index.js : App.js 파일에서 만든 컴포넌트와 웹 브라우저 사이의 다리 역할을 한다.

import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client"; //✨React DOM : 웹 브라우저와 상호작용하는 React 라이브러리
import "./styles.css"; //컴포넌트의 스타일

import App from "./App"; //App.js에서 만들어진 컴포넌트

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
