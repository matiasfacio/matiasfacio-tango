import React from "react";
import { Layout } from "./layout/Layout";
import { Route, Routes } from "react-router";
import { createGlobalStyle } from "styled-components";
import { TangoReise } from "./components/TangoReise";
import "./App.css";

export const GlobalStyle = createGlobalStyle`

:root {
   --body-bg-color: #1E201F;
    --accent-color: #5A7268;
  --accent-color-500:#C2D4CE;
  --gray-600: rgb(109, 108, 108);
  --main-deutsch-color: #C2D4CE;
  --black: #1E201F;
  --black-500: #2E3230;  
  --white: #F5F8F7;
  --secondary-color: #87A99C;
  --text: #F5F8F7;
}

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
  }

  body {
    overflow-x: hidden;
    background-color: var(--body-bg-color);
    max-width: 1440px;
    margin: 16px auto;
    color: var(--text);
  }

h1 {
  font-size: 10em;
  color: var(--accent-color);
}

h2 {
  font-size: clamp(2rem, 4vw, 4em);
  color: var(--white);
  margin: 0;
  padding: 0;
  font-family: "Roboto Black";
}

h3 {
  font-size: clamp(1.1rem, 2vw, 3em);
  color: var(--accent-color);
  margin: 0;
  font-family: "Roboto Light";
}

h4 {
  font-size: 2em;
  color: var(--accent-color);
  margin: 0;
  font-family: "Roboto Light";
}

p {
  line-height: 1.4;
  cursor: default;
}

a {
  color: var(--text);
  text-decoration: none;
  font-family: sans-serif;
  &:hover {
    color: var(--text);
  }
}

.deutsch {
  color: var(--accent-color) !important;
}

/* Menu principal */

.separador {
  height: 20vh;
  width: 100vw;
}

a:active {
  color: var(--text);
  background-color: var(--white);
}

`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="#classes">
          <Route path="/#classes" />
        </Route>
        <Route path="/tangoreise" element={<TangoReise />} />
        <Route path="*" element={<Layout />} />
      </Routes>
    </>
  );
}

export default App;
