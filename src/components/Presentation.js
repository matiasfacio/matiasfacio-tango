import React, { useEffect } from "react";
import Deletrear from "../components/Deletrear.js";
import styled, { keyframes } from "styled-components";

const Presentation = () => {
  useEffect(() => {
    const handleScroll = (e) => {
      const target = document.querySelectorAll(".scroll");
      const subTitulo = document.querySelector("#subTitulo");
      let scrolled = e.path[1].scrollY;

      if (scrolled < 1000) {
        let rateA = scrolled * 1.5;
        let rateB = scrolled * 1.3;
        let rateC = scrolled * -1;
        let rateD = scrolled * -2;

        target[0].style.transform = `translate3D(${rateA}px, 0px, 0px)`;
        target[1].style.transform = `translate3D(${rateA}px,${rateB}px, 0px)`;
        target[2].style.transform = `translate3D(0px, ${rateC}px, 0px)`;
        target[3].style.transform = `translate3D(${rateD}px, 0px , 0px)`;
        subTitulo.style.transform = `translate3D(0px, ${
          rateA * -1
        }px, 0px) rotateX(${rateA * 1.5}deg)`;
      }
    };
    window.addEventListener("scroll", (e) => handleScroll(e));
    return window.removeEventListener("scroll", handleScroll);
  });

  return (
    <StyledSection>
      <ul>
        <li className="scroll">Mat</li>
        <li className="scroll">ias</li>
        <li className="scroll">&nbsp;</li>
        <li className="scroll">Fac</li>
        <li className="scroll">io</li>
      </ul>

      <h4 id="subTitulo">
        <Deletrear />
      </h4>

      <Flecha></Flecha>
    </StyledSection>
  );
};

export default Presentation;

const bajarSubirFlecha = keyframes`
  0% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(10px);
  }

`;

const Flecha = styled.div`
  margin-top: 100px;
  background-color: var(--main-deutsch-color);
  height: 30px;
  width: 50px;
  clip-path: polygon(100% 0, 0 0, 50% 100%);
  animation: ${bajarSubirFlecha} 1s infinite;
`;

const StyledSection = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: default;

  ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    list-style: none;
    font-weight: bolder;
  }

  li {
    color: transparent;
    z-index: 98;
    cursor: default;
    font-family: bolder, sans-serif;
    letter-spacing: 5px;
    font-size: 9rem;
    font-family: "Six Caps";
    background: linear-gradient(
      to left,
      var(--main-title-color),
      var(--main-title-color)
    );
    background-clip: text;
    -webkit-background-clip: text;
  }
`;
