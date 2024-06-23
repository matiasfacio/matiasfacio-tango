import React from "react";
import styled from "styled-components";
import { Title } from "./Title";

export default function Choreography() {
  return (
    <>
      <StyledSection id="choreography">
        <Title>
          <h2>Choreography Making</h2>
          <h3 className="deutsch">/Choregrapher</h3>
        </Title>
        <ChoreographyContent>
          <p>
            My approach to choreography making is first of all, to listen to the
            need of the director and dancers, not just the spoken need but also
            the unspoken one, the silent one, the one the mind and the body want
            to be showed.
            <br />
            <br />
            <span>
              Choreography making for dancers, theather play or tv shows
            </span>
            is my main field of work, but I do choreographies also for corporate
            and private events. <br />
            <br />
            If you wish to know more about it, please email me
            <span>to schedule a meeting or give me a call</span>, I would be
            more than interested to hear about your project.
          </p>
        </ChoreographyContent>
        <RequestChoreographyButton href={"mailto:matiaspersonal@gmail.com?subject=choreography"}>
          Send me an E-mail
        </RequestChoreographyButton>
      </StyledSection>
    </>
  );
}

const ChoreographyContent = styled.div`
  margin-top: 50px;
`;

const RequestChoreographyButton = styled.a`
  background-color: var(--secondary-color);
  color: var(--main-buttonText-color);
  width: 300px;
  height: auto;
  border-radius: 10px;
  border-width: 0px;
  border-color: var(--main-buttonText-color);
  padding: 10px 20px;
  margin: 20vh 0;
  font-size: 1.5rem;
  font-weight: bolder;
  text-align: center;;
  &:hover {
    border-color: var(--main-buttonText-color);
    color: var(--white);
    transform: translate(-5px, -5px);
  }
`;

const StyledSection = styled.div`
  grid-area: choreography;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 2em;
  max-width: 1200px;
  background-image: url('./assets/wall-4-light.png');
  p {
    color: var(--main-white-color);
    line-height: 1.6rem;
    font-size: 1.3rem;
    font-family: sans-serif;
  }
  span {
    color: var(--main-deutsch-color);
  }
`;
