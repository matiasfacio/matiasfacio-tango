import React from "react";
import { Title } from "./Title";
import styled from "styled-components";

export const Workshops = () => {
  return (
    <StyledSection>
      <Title>
        <h2>Workshops</h2>
        <h3 className="deutsch">/Workshops</h3>
      </Title>
      <StyledWorkshops>
        <Dia>
          Wednesday 11.06.2024
          <Deutsch>
            <p>Mittwoch</p>
          </Deutsch>
          <Horario>20:30 - 22:00 Uhr</Horario>
        </Dia>

        <ClassName><h4>Leader's Technique Seminar</h4></ClassName>
        <ClassTopic>
          <h4>How to perform sacadas - entradas and what is the difference between them?</h4>
          <Deutsch>
            <h4>Wie führt man Sacadas - Entradas aus und was ist der Unterschied zwischen ihnen?</h4>
          </Deutsch>
        </ClassTopic>
        <ClassTopic>
          <p>Price: 20€</p>
          <p>Where: Immanuelkirchstrasse 6, 10405 Berlin</p>
        </ClassTopic>
      </StyledWorkshops>
    </StyledSection>
  )
}

const ClassTopic = styled.div`
  p {
    color: var(--main-white-color);
    line-height: 1.6rem;
    font-size: 1.3rem;
    font-family: sans-serif;
    margin-bottom: 8px;
  }
`

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

const ClassName = styled.div`
  padding-right: 30px;
  h4 {
    color: var(--main-white-color);
    font-family: "Roboto Medium";
  }
`


const StyledSection = styled.section`
  margin: 10vh 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 24px;
  padding: 2rem;
  background-image: url('./assets/wall-4-light.png');
`;

const StyledWorkshops = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 50px;
  gap: 20px;
`;

const Dia = styled.div`
    font-family: sans-serif;
    font-weight: bolder;
    font-size: clamp(1.5rem, 1.5vw, 2.5em);
    padding-left: 0px;
    padding-top: 10px;
    color: var(--main-white-color);
`;

const Horario = styled.p`
    font-size: 1.3rem;
    color: var(--main-lightblue-color);
`;