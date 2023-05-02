import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import { HashLink } from "react-router-hash-link";

export const Menu = () => {
  const [menuVisibility, setMenuVisibility] = useState(false);
  const [menuVisibilityOnScroll, setMenuVisibilityOnScroll] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/tangoreise") {
      setMenuVisibilityOnScroll(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menuVisibilityOnScroll]);

  const showMenu = () => {
    setMenuVisibility(!menuVisibility);
  };
  const clickandhide = () => {
    setMenuVisibility(false);
  };

  useEffect(() => {
    const handleScroll = (e) => {
      if (e.scrollY > 400) {
        setMenuVisibilityOnScroll(true);
      } else {
        setMenuVisibilityOnScroll(false);
      }
    };
    window.addEventListener("scroll", (e) => handleScroll(e));
    return ()=> window.removeEventListener("scroll", (e) => handleScroll(e));
  });

  return (
    <div>
      <ButtonMenu onClick={showMenu} id="menuButton">
        <p>Menu</p>
      </ButtonMenu>
      <StyledMenu
        visible={menuVisibility}
        visibleOnScroll={menuVisibilityOnScroll}
        id="mainMenu"
      >
        <ul>
          <li onClick={clickandhide}>
            <HashLink to="/#">Home</HashLink>
          </li>
          <li onClick={clickandhide}>
            <HashLink to="/#classes">Classes</HashLink>
          </li>
          <li onClick={clickandhide}>
            <Link to="/tangoreise">Tango Reise</Link>
          </li>
          <li onClick={clickandhide}>
            <HashLink to="/#choreography">Choreography</HashLink>
          </li>
          <li onClick={clickandhide}>
            <HashLink to="/#aboutme">About Me</HashLink>
          </li>
          <li onClick={clickandhide}>
            <HashLink to={"/#contact"}>Contact</HashLink>
          </li>
        </ul>
      </StyledMenu>
      <Outlet />
    </div>
  );
};

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
  background-color: var(--main-bg-color);
  ${({ visible }) => (visible ? "display:block" : "display:none")};
  @media (min-width: 850px) {
    height: 70px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100vw;
    ${({ visibleOnScroll }) =>
      visibleOnScroll ? "display:block" : "display: none"};
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
