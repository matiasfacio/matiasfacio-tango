import React from "react";
import styled, {css} from "styled-components";
import { Title } from "./Title";

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

          <ClassName>
            <h4>Beginners</h4>
            <Deutsch>
              <h4>Anfängers</h4>
            </Deutsch>
            <Dia>
              <p>Wednesday </p>
              <Deutsch>
                <p>Mittwoch</p>
              </Deutsch>
              <Horario>
                <p>19.30 - 20.30</p>
              </Horario>
            </Dia>
          </ClassName>
          <ClassName cancel>
            <h4>Advanced Training</h4>
            <Deutsch>
              <h4>Training für Fortgeschrittene</h4>
            </Deutsch>
            <Dia>
              <p>Wednesday </p>
              <Deutsch>
                <p>Mittwoch</p>
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

          <ClassTopic>
            <p>Intro to Tango and refreshing if you need!</p>
            <Deutsch>
              <p>Einführung und wiedereinsteigen!</p>
            </Deutsch>
            <br />
            <p>Price: 15€ / Urban Sport</p>
            <Deutsch>
              <p>Preis: 15€ / Urban Sport</p>
            </Deutsch>
          </ClassTopic>

          <ClassTopic>
            <p className={"cancelled"}>- not taken place at the moment -</p>
            <p>Technique, Improvisation, Practice</p>
            <Deutsch>
              <p>Technik, Impro, Übungen</p>
            </Deutsch>
            <br />
            <p>Price: 18€</p>
            <Deutsch>
              <p>Preis: 18€</p>
            </Deutsch>
          </ClassTopic>
        </Classes>
       <BookAClassButton href={"mailto:matiaspersonal@gmail.com?subject=Book%20a%20spot%20for%20a%20group%20class"}>
          Save your spot now!
      </BookAClassButton>
      <br />
      <BookAClassButton href={"tel:+491774946117"}>
          (or call me)
        </BookAClassButton>
      </StyledSection>
  );
};

export default GroupLessons;

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

const BookAClassButton = styled.a`
  background-color: var(--main-black-color);
  color: var(--main-buttonText-color);
  width: 300px;
  border-radius: 10px;
  border-width: 0px;
  border-color: var(--main-buttonText-color);
  padding: 10px 20px;
  font-size: 1.5rem;
  font-weight: bolder;
  align-self: center;
  text-align: center;
  &:hover {
    border-color: var(--main-buttonText-color);
    color: var(--white);
    transform: translate(-5px, -5px);
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
    color: var(--main-white-color);
  }
`;

const Horario = styled.div`
  p {
    font-size: 1.3rem;
    color: var(--main-lightblue-color);
  }
`;

const ClassTopic = styled.div`
  width: fit-content;
  p.cancelled {
    color: darkred !important;
  }
  p {
    color: var(--main-white-color);
    line-height: 1.6rem;
    font-size: 1.3rem;
    font-family: sans-serif;
  }
  &:nth-of-type(1) {
    grid-row: 1/2;
    grid-column: 2 / 3;
  }
  &:nth-of-type(2) {
    grid-row: 2/3;
    grid-column: 2 / 3;
  }
  &:nth-of-type(3) {
    grid-row: 3/4;
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
    color: var(--main-white-color);
    font-family: "Roboto Medium";
    ${({cancel}) => cancel ? css`text-decoration: line-through`: ''}
  }
  &:nth-of-type(1) {
    grid-row: 1/2;
    grid-column: 1 / 2;
  }
  &:nth-of-type(2) {
    grid-row: 2/3;
    grid-column: 1 / 2;
  }
  &:nth-of-type(3) {
    grid-row: 3/4;
    grid-column: 1 / 2;
  }
  @media (max-width: 800px) {
    text-align: left;

    &:nth-of-type(1) {
      grid-row: 1/2;
      grid-column: 1 / 1;
    }
    &:nth-of-type(2) {
      grid-row: 3/4;
      grid-column: 1 / 1;
    }
    &:nth-of-type(3) {
      grid-row: 5/6;
      grid-column: 1 / 1;
    }
  }
`;

const Classes = styled.div`
  width: 100%;
  margin: 50px auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto auto;
  grid-template-areas: "class details" "class details" "class details";
  grid-row-gap: 100px;
  align-items: center;
  @media (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "class" "details";
    grid-row-gap: 0px;
  }
`;

const StyledSection = styled.section`
  margin: 10vh 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 24px;
  padding: 2rem;
  background-image: url('./assets/wall-4-light.png');
`;
