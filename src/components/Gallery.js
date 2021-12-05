import React, { useState } from "react";
import styled, { css } from "styled-components";

const boxes = ["1", "5", "6", "8", "10", "12"];

export default function Gallery() {
  const [mainBackground, setMainBackground] = useState(8);

  const changeImage = (box) => {
    setMainBackground(box);
  };

  return (
    <StyledSection id="two" backgroundImage={mainBackground}>
      <div className="titulo"></div>
      <Boxes>
        {boxes.map((box) => {
          return (
            <StylesBox
              key={box}
              backgroundImage={box}
              onClick={() => changeImage(box)}
            ></StylesBox>
          );
        })}
      </Boxes>
    </StyledSection>
  );
}

const StyledSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: 80vh;
  width: 80vw;

  h2 {
    font-size: 5rem;
    letter-spacing: -4px;
    color: var(--main-white-color);
    background-color: rgba(0, 0, 0, 0.6);
    padding: 20px 40px;
    font-family: "Roboto Medium";
  }

  .titulo {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  ${({ backgroundImage }) =>
    css`
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url(./images/${backgroundImage}-low.jpg);
        background-position: top center;
        background-size: contain;
        background-blend-mode: luminosity;
        background-attachment: fixed;
        background-repeat: repeat-x;
        background-color: black;
        border-radius: 20px;
        border-top: 3px black solid;
        border-bottom: 3px black solid;
        transition: all 250ms ease-in-out;
      }
    `}
`;

const StylesBox = styled.div`
  width: 8vw;
  height: 8vw;
  border: 3px var(--main-deutsch-color) solid;
  background-repeat: no-repeat;
  margin-right: 20px;
  ${({ backgroundImage }) =>
    css`
      background-image: url(./images/${backgroundImage}-low.jpg);
      background-size: cover;
      background-color: #83af9b;
      background-blend-mode: luminosity;
      background-repeat: no-repeat;
    `}
  border-radius: 20px;
  border: 3px var(--main-deutsch-color) solid;
  transition: all 250ms ease-in-out;
  &:hover {
    transform: translateY(-10px);
    transform-origin: left bottom;
  }
`;

const Boxes = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  position: absolute;
  transform: translate(10px, 33%);
  background-color: transparent;
  background-blend-mode: luminosity;
  margin-left: 10px;
`;
