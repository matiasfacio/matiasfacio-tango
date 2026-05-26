import React from "react";
import styled from "styled-components";
import { Title } from "./Title";
import {Deutsch} from "./Workshops";
import {StyledButton} from "./GroupLessons";

export default function Choreography() {
  return (
    <>
      <StyledSection id="choreography">
        <Title>
          <h2>Creating choreography</h2>
          <h3 className="deutsch">/Choreographer</h3>
        </Title>
        <ChoreographyContent>
          <p>
            My approach to choreography making is first of all, to listen to the
            need of the director and dancers, not just the spoken need but also
            the unspoken one, the silent one, the one the mind and the body want
            to be showed.
            <br />
            <br />
              Choreography making for dancers, theather play or tv shows
            is my main field of work, but I do choreographies also for corporate
            and private events. <br />
            <br />
            If you wish to know more about it, please email me
           to schedule a meeting or give me a call, I would be
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
        <StyledButton href={"mailto:matiaspersonal@gmail.com?subject=choreography"}>
          Send me an E-mail
        </StyledButton>
      </StyledSection>
    </>
  );
}

const ChoreographyContent = styled.div`
  margin-block: 50px;
`;


const StyledSection = styled.div`
  grid-area: choreography;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  max-width: 1200px;
  p {
    color: var(--white);
    font-size: clamp(1rem, 1.5vw, 1.5rem) !important;
    font-family: sans-serif;
  }
  span {
    color: var(--main-deutsch-color);
  }
`;
