import React from "react";
import styled from "styled-components";
import { Title } from "./Title";

export const Address = () => {
  return (
    <StyledAddress>
      <Title>
        <h2>Address in Berlin</h2>
        <h3 className="deutsch">/Adresse</h3>
      </Title>
      <p>Bühnenreif! Immanuelkirchstrasse 6, 10405 Berlin</p>
    </StyledAddress>
  );
};

const StyledAddress = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20vh;
  padding: 50px;

  p {
    color: var(--main-white-color);
    font-size: 1.3rem;
    line-height: 1.8;
    font-family: sans-serif;
    position: relative;
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
