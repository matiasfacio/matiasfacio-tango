import React from "react";
import styled from "styled-components";

export const Address = () => {
  return (
    <StyledAddress>
      <Title>
        <h2>Address in Berlin</h2>
        <Deutsch>
          <h3>/Adresse</h3>
        </Deutsch>
      </Title>
      <p>For more than... 10 years (?), I'm teaching at:</p>
      <p>Bühnenreif! Immanuelkirchstrasse 6, 10405 Berlin</p>
    </StyledAddress>
  );
};

const Deutsch = styled.div`
  font-size: 0.8rem;
  p,
  h4,
  h3 {
    color: var(--main-black-color) !important;
  }
  margin-bottom: 50px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    color: var(--main-black-color);
    font-weight: bolder;
    font-family: "Roboto Black";
  }
`;

const StyledAddress = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20vh;
  padding: 50px;
  h3 {
    font-size: 3rem;
    max-width: 12ch;
    font-family: "Roboto Black";
    color: var(--main-white-color);
  }

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
