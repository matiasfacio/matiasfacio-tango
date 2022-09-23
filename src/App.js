import React from "react";
import { Layout } from "./layout/Layout";
import { Route, Routes } from "react-router";
import { createGlobalStyle } from "styled-components";
import { TangoReise } from "./components/TangoReise";
import { Menu } from "./components/Menu";
import "./App.css";

export const GlobalStyle = createGlobalStyle`

:root {
  --main-bg-color: #83af9b;
  --secondary-bg-color: #688c7c;
  --main-lightblue-color: rgb(109, 108, 108);
  --main-deutsch-color: black;
  --main-black-color: black;
  --main-white-color: white;
  --main-title-color: #fff;
  --secondary-color: #1a231f;
  --main-buttonText-color: #8cccfa;
  --main-title-footer: #83af9b;
  --footer-title: #fff;
  --footer-content: #8cccfa;
}

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
  }

  body {
    overflow-x: hidden;
    background-color: var(--main-bg-color);
    max-width: 1440px;
    margin: 16px auto;
  }

  h1 {
  font-size: 10em;
  color: var(--secondary-color);
}

h2 {
  font-size: clamp(2rem, 4vw, 4em);
  color: var(--main-white-color);
  margin: 0;
  padding: 0;
  font-family: "Roboto Black";
}

h3 {
  font-size: clamp(1.1rem, 2vw, 3em);
  color: var(--main-white-color);
  margin: 0;
  font-family: "Roboto Light";
}

h4 {
  font-size: 2em;
  color: var(--main-white-color);
  margin: 0;
  font-family: "Roboto Light";
}

p {
  line-height: 1.6rem;
  cursor: default;
}

a {
  color: var(--main-white-color);
  text-decoration: none;
  &:hover {
    color: var(--main-white-color);
  }
}

.deutsch {
  color: var(--secondary-color) !important;

}

.deutsch-black {
  font-size: 1.3rem;
  color: var(--secondary-color) !important;
}

/* Menu principal */

.separador {
  height: 20vh;
  width: 100vw;
}

a:active {
  color: var(--secondary-color);
  background-color: var(--main-white-color);
}

`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Menu />
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
