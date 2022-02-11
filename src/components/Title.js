import React from "react";
import styled from "styled-components";

export const Title = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

const StyledTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h3 {
    color: var(--secondary-color);
    font-weight: bolder;
    font-family: "Roboto Black";
  }
`;
