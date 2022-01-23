import React from "react";
import Menu from "./components/Menu";
import Presentation from "./components/Presentation";
import Gallery from "./components/Gallery";
import AboutMe from "./components/AboutMe";
import PrivateLessons from "./components/PrivateLessons";
import Choreography from "./components/Choreography";
import Contact from "./components/Contact";
import styled, { createGlobalStyle } from "styled-components";
import GroupLessons from "./components/GroupLessons";
import WeatherWidget from "./components/WeatherWidget";
import { Address } from "./components/Address";

export const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: "Roboto Light";
  src: url("Roboto-LightItalic.ttf");
}

@font-face {
  font-family: "Six Caps";
  src: url("SixCaps-Regular.ttf");
}

@font-face {
  font-family: "Roboto Black";
  src: url("Roboto-Black.ttf");
}

@font-face {
  font-family: "Roboto Medium";
  src: url("Roboto-Medium.ttf");
}

html {
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
      <StyledApp>
        <Menu />
        <Presentation />
        <Gallery />
        <WeatherWidget />
        <GroupLessons />
        <PrivateLessons />
        <Address />
        <Choreography />
        <AboutMe />
        <Contact />
      </StyledApp>
    </>
  );
}

export default App;

const StyledApp = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
