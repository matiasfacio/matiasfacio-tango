import React from "react";
import styled from "styled-components";
import { Title } from "./Title";

export const Address = () => {
  return (
    <>
      <StyledAddress>
        <Title>
          <h2>Address in Berlin</h2>
          <h3 className="deutsch">/Adresse</h3>
        </Title>
        <p>Bühnenreif! Immanuelkirchstrasse 6, 10405 Berlin</p>
      </StyledAddress>
    </>
  );
};

const StyledAddress = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 20vh 0;
  background-image: url('./assets/wall-4-light.png');
  padding: 2rem;
  p {
    color: var(--main-white-color);
    font-size: 1.3rem;
    line-height: 1.8;
    font-family: sans-serif;
    position: relative;
    margin-top: 50px;
    &:last-of-type::before {
      position: absolute;
      content: "";
      height: 10px;
      width: 10px;
      background-color: var(--main-white-color);
      transform: translate(-20px, 10px);
    }
  }
`;
