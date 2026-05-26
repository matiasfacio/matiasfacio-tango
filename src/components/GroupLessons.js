import React from "react";
import styled, {css} from "styled-components";
import { Title } from "./Title";
import {Deutsch} from "./Workshops";

const GroupLessons = () => {
  return (
      <StyledSection>
        <Title>
          <h2>Classes in Berlin</h2>
          <h3 className="deutsch">/Kurse in Berlin</h3>
        </Title>
        <Classes id="classes">
          <ClassName>
            <h4>Tango for Advanced Dancers</h4>
            <Deutsch>
              <h4>Tango für Fortgeschrittene</h4>
            </Deutsch>
            <Dia>
              <p>Tuesday </p>
              <Deutsch>
                <p>Dienstag</p>
              </Deutsch>
              <Horario>
                <p>20.30 - 22.00</p>
              </Horario>
            </Dia>
          </ClassName>
          <ClassTopic>
            <p>Technique for couples</p>
            <Deutsch>
              <p>Technik für Paare</p>
            </Deutsch>
            <br />
            <p>Price: 18€</p>
            <Deutsch>
              <p>Preis: 18€</p>
            </Deutsch>
          </ClassTopic>
        </Classes>
       <StyledButton href={"mailto:matiaspersonal@gmail.com?subject=Book%20a%20spot%20for%20a%20group%20class"}>
          Save your spot now!
      </StyledButton>
      <br />
      <StyledButton href={"tel:+491774946117"}>
          (or call me)
        </StyledButton>
      </StyledSection>
  );
};

export default GroupLessons;

export const StyledButton = styled.a`
  background-color: var(--black-500);
  color: var(--white);
  width: 300px;
  border-radius: 10px;
  border-width: 0;
  padding: 10px 20px;
  font-size: 1.5rem;
  font-weight: bolder;
  align-self: center;
  text-align: center;
  box-shadow: 4px 4px var(--accent-color);
  transition: all 100ms ease-in-out;
  &:hover {
    border-color: var(--white);
    color: var(--white);
    transform: translate(-2px, -2px);
  }
`;

const Dia = styled.div`
  p {
    font-family: sans-serif;
    font-weight: bolder;
    font-size: clamp(1.5rem, 1.5vw, 2.5em);
    padding-left: 0px;
    padding-top: 10px;
    display: inline-block;
    color: var(--white);
  }
`;

const Horario = styled.div`
  p {
    font-size: 1.3rem;
    color: var(--gray-600);
  }
`;

const ClassTopic = styled.div`
  width: fit-content;
  p.cancelled {
    color: darkred !important;
  }
  p {
    color: var(--white);
    line-height: 1.6rem;
    font-size: 1.3rem;
    font-family: sans-serif;
  }
  &:nth-of-type(1) {
    grid-row: 1/2;
    grid-column: 2 / 3;
  }
  @media (max-width: 800px) {
    margin-bottom: 50px;
    &:nth-of-type(1) {
      grid-row: 2/3;
      grid-column: 1 / 1;
    }
    &:nth-of-type(2) {
      grid-row: 4/5;
      grid-column: 1 / 1;
    }
    &:nth-of-type(3) {
      grid-row: 6/7;
      grid-column: 1 / 1;
    }
  }
`;

const ClassName = styled.div`
  padding-right: 30px;
  text-align: right;

  h4 {
    color: var(--white);
    font-family: "Roboto Medium";
    ${({cancel}) => cancel ? css`text-decoration: line-through`: ''}
  }
  &:nth-of-type(1) {
    grid-row: 1/2;
    grid-column: 1 / 2;
  }
  @media (max-width: 800px) {
    text-align: left;

    &:nth-of-type(1) {
      grid-row: 1/2;
      grid-column: 1 / 1;
    }
  }
`;

const Classes = styled.div`
  width: 100%;
  margin: 50px auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "class details";
  grid-row-gap: 100px;
  align-items: center;
  @media (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "class" "details";
    grid-row-gap: 0;
  }
`;

const StyledSection = styled.section`
  margin: 10vh 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 24px;
  padding: 2rem;
`;
