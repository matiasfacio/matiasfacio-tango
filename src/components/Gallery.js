import React, { useState } from "react";
import styled, { css } from "styled-components";

const imagesLinks = [
  "https://res.cloudinary.com/matiasfacio/image/upload/v1638830489/MatiasFacio.com/1-low_j2dbaa.jpg",
  "https://res.cloudinary.com/matiasfacio/image/upload/v1638830490/MatiasFacio.com/5-low_ynqvx7.jpg",
  "https://res.cloudinary.com/matiasfacio/image/upload/v1638830490/MatiasFacio.com/6-low_jdoceu.jpg",
  "https://res.cloudinary.com/matiasfacio/image/upload/v1638830490/MatiasFacio.com/8-low_oiikhb.jpg",
  "https://res.cloudinary.com/matiasfacio/image/upload/v1638830490/MatiasFacio.com/10-low_eec7zi.jpg",
  "https://res.cloudinary.com/matiasfacio/image/upload/v1638830490/MatiasFacio.com/12b_sepuln.jpg",
];

export default function Gallery() {
  const [mainBackground, setMainBackground] = useState(imagesLinks[0]);

  const changeImage = (box) => {
    setMainBackground(box);
  };

  return (
    <StyledSection id="two" backgroundImage={mainBackground}>
      <div className="titulo"></div>
      <Boxes>
        {imagesLinks.map((image, index) => {
          return (
            <StylesBox
              key={index}
              backgroundImage={image}
              onClick={() => changeImage(image)}
            ></StylesBox>
          );
        })}
      </Boxes>
    </StyledSection>
  );
}

const StyledSection = styled.div`
  position: relative;
  min-height: 80vh;
  width: clamp(650px, 80vw, 1200px);
  width: 100vw;
  display: none;
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
        background-image: url(${backgroundImage});
        background-position: top center;
        background-size: contain;
        background-blend-mode: luminosity;
        background-attachment: fixed;
        background-repeat: repeat-x;
        background-color: var(--secondary-color);
        border-radius: 20px;
        border-top: 3px var(--secondary-color) solid;
        border-bottom: 3px var(--secondary-color) solid;
        transition: all 250ms ease-in-out;
      }
    `}
  @media (min-width:700px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const StylesBox = styled.div`
  width: 8vw;
  height: 8vw;
  border: 3px var(--main-deutsch-color) solid;
  background-repeat: no-repeat;
  margin-right: 20px;
  ${({ backgroundImage }) =>
    css`
      background-image: url(${backgroundImage});
      background-size: cover;
      background-color: #83af9b;
      background-blend-mode: luminosity;
      background-repeat: no-repeat;
      background-position: right;
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
