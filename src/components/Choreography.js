import React from "react";
import styled from "styled-components";
import { Title } from "./Title";

export default function Choreography() {
  return (
    <>
      <StyledSection id="choreography">
        <Title>
          <h2>Creating choreography</h2>
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
          <Deutsch>
          <p>/Meine Idee zur Choreografie besteht zunächst darin, auf die Bedürfnisse des Regisseurs und der Tänzer zu hören – nicht nur auf die ausgesprochenen, sondern auch auf die
              unausgesprochenen, die stillen, die, die der Geist und der Körper zeigen wollen.
              <br /><br />
              Die Erstellung von Choreografien für Tänzer, Theaterstücke oder Fernsehsendungen ist mein Hauptarbeitsbereich, aber ich kreiere auch Choreografien für Firmen- und private Veranstaltungen.
              <br /><br />
              Wenn Sie mehr darüber erfahren möchten, schreiben Sie mir bitte eine E-Mail, um einen Termin zu vereinbaren, oder rufen Sie mich an. Ich würde mich sehr freuen, von Ihrem Projekt zu hören.
            </p>
          </Deutsch>
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
  p {
    margin-bottom: 24px;
    color: var(--main-white-color);
    font-size: 1.3rem;
    /* font-family: "Roboto Light", sans-serif !important; */
  }
`;

const RequestChoreographyButton = styled.a`
  background-color: var(--main-black-color);
  color: var(--main-buttonText-color);
  width: 300px;
  height: auto;
  border-radius: 10px;
  border-width: 0px;
  border-color: var(--main-buttonText-color);
  padding: 10px 20px;
  margin: 10vh 0;
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
  padding: 2rem;
  max-width: 1200px;
  background-image: url('./assets/wall-4-light.png');
  p {
    color: var(--main-white-color);
    line-height: 1.6rem;
    font-size: clamp(1rem, 1.5vw, 1.5rem) !important;
    font-family: sans-serif;
  }
  span {
    color: var(--main-deutsch-color);
  }
`;

const Deutsch = styled.div`
  h4,
  h3 {
    color: var(--secondary-color) !important;
  }
  h4 {
    font-size: clamp(1.1rem, 2vw, 1.5rem) !important;
  }
  p {
    font-size: clamp(1rem, 1.5vw, 1.5rem) !important;
    color: var(--secondary-color) !important;
  }
`;