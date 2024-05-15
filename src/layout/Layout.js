import React from "react";
import Presentation from "../components/Presentation";
import Gallery from "../components/Gallery";
import AboutMe from "../components/AboutMe";
import PrivateLessons from "../components/PrivateLessons";
import Choreography from "../components/Choreography";
import Contact from "../components/Contact";
import styled from "styled-components";
import GroupLessons from "../components/GroupLessons";
import { Address } from "../components/Address";

export const Layout = () => {
  return (
    <StyledApp>
      <Presentation />
      <Gallery />
      <GroupLessons />
      <PrivateLessons />
      <Address />
      <Choreography />
      <AboutMe />
      <Contact />
    </StyledApp>
  );
};

const StyledApp = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url('./assets/wall-4-light.png');
`;
