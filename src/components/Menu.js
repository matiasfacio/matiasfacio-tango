import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Menu = () => {
  const [menuVisibility, setMenuVisibility] = useState(false);

  useEffect(() => {
    const logomenu = document.querySelector("#menuButton");
    const mainMenu = document.querySelector("#mainMenu");

    const hideMenu = () => {
      mainMenu.style.transform = "translate(100vw, 0)";
    };

    const showMenu = () => {
      mainMenu.style.transform = "translate(0vw,0)";
      mainMenu.addEventListener("click", () => hideMenu());
    };

    logomenu.addEventListener("click", () => showMenu());

    return () => {
      logomenu.removeEventListener("click", () => showMenu());
      mainMenu.removeEventListener("click", hideMenu);
    };
  });

  const showMenu = () => {
    setMenuVisibility(!menuVisibility);
  };
  const clickandhide = () => {
    setMenuVisibility(false);
  };

  useEffect(() => {
    const handleScroll = (e) => {
      if (e.path[1].scrollY > 400) {
        setMenuVisibility(true);
      } else {
        setMenuVisibility(false);
      }
    };
    window.addEventListener("scroll", (e) => handleScroll(e));
    return window.removeEventListener("scroll", (e) => handleScroll(e));
  });

  return (
    <div>
      <ButtonMenu onClick={showMenu} visible={menuVisibility} id="menuButton">
        <p>Menu</p>
      </ButtonMenu>
      <StyledMenu visible={menuVisibility} id="mainMenu">
        <ul>
          <li onClick={clickandhide}>
            <a href={"./index.html#"}>Home</a>
          </li>
          <li onClick={clickandhide}>
            <a href={"#classes"}>Classes</a>
          </li>
          <li onClick={clickandhide}>
            <a href={"#choreography"}>Choreography</a>
          </li>
          <li onClick={clickandhide}>
            <a href={"#aboutme"}>About Me</a>
          </li>
          <li onClick={clickandhide}>
            <a href={"#contact"}>Contact</a>
          </li>
        </ul>
      </StyledMenu>
    </div>
  );
};

export default Menu;

const ButtonMenu = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  z-index: 200;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: var(--main-deutsch-color);
  display: block;
  @media (min-width: 850px) {
    display: none;
  }
  p {
    color: white;
    font-size: 1.5rem;
    font-family: sans-serif;
    position: absolute;
    transform: translate(10px, 30px);
  }
`;

const StyledMenu = styled.nav`
  list-style: none;
  position: fixed;
  z-index: 150;
  margin: 0;
  width: 100%;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  transform: translateX(100vw);
  background-color: var(--main-bg-color);
  display: ${({ visible }) => (visible ? "block" : "none")};
  @media (min-width: 850px) {
    height: 70px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100vw;
    transform: translateX(0vw);
    display: ${({ visible }) => (visible ? "block" : "none")};
    border-bottom: 1px rgba(255, 255, 255, 0.2) solid;
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 20vh 0;
    height: 100%;
    @media (min-width: 850px) {
      display: flex;
      flex-direction: row;
      top: 0;
      left: 0;
      width: 100%;
      padding: 0;
      justify-content: center;
    }
    list-style: none;
    li {
      font-family: "Roboto Light";
      color: var(--main-white-color);
      font-size: 1.5rem;
      font-weight: 700;
      padding: 10px;
      padding-left: 20px;
      letter-spacing: 1px;
      position: relative;
      margin-bottom: 20px;
      @media (min-width: 850px) {
        margin-bottom: 0px;
      }

      &::before {
        position: absolute;
        content: "";
        width: 10px;
        height: 10px;
        background-color: var(--main-deutsch-color);
        transform: translate(-15px, 10px);
        @media (min-width: 850px) {
          display: none;
        }
      }
    }
  }
`;
