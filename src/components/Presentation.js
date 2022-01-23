import React from "react";
import Deletrear from "../components/Deletrear.js";
import styled, { keyframes } from "styled-components";

const Presentation = () => {
  const handleClick = () => {
    document.body.scrollBy(0, window.innerHeight - 100);
    document.documentElement.scrollBy(0, window.innerHeight - 100);
  };

  return (
    <StyledSection>
      <Title>Matias Facio</Title>
      <Deletrear />
      <Flecha onClick={handleClick}></Flecha>
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
  background-color: var(--secondary-color);
  height: 30px;
  width: 50px;
  clip-path: polygon(100% 0, 0 0, 50% 100%);
  animation: ${bajarSubirFlecha} 1s infinite;
`;

const Title = styled.div`
  color: transparent;
  z-index: 98;
  cursor: default;
  font-family: bolder, sans-serif;
  letter-spacing: 5px;
  font-size: clamp(3rem, 6vw, 9rem);
  font-family: "Six Caps";
  font-weight: bolder;
  background: linear-gradient(
    to right,
    var(--main-title-color),
    var(--main-title-color)
  );
  background-clip: text;
  -webkit-background-clip: text;
`;

const StyledSection = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: default;
`;
