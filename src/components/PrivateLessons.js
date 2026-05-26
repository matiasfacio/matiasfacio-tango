import React from "react";
import styled from "styled-components";
import { Title } from "./Title";
import {Deutsch} from "./Workshops";
import {StyledButton} from "./GroupLessons";

export default function ClassesBerlin() {

  return (
    <>
      <ClassesSection>
        <Title>
          <h2>Private lessons</h2>
          <h3 className="deutsch">/Privatunterricht</h3>
        </Title>
        <PrivateLessons>
          <Class>
            <ClassWithoutButton>
              <ClassName>
                <h4>Book your spot for a private class</h4>
                <Deutsch>
                  <h4>Sichere dir deinen Platz für eine Einzelstunde</h4>
                </Deutsch>

                <ClassTopic>
                  <p>Technique, Musicality, Concepts, Improvisation</p>
                </ClassTopic>
              </ClassName>
              <Dia>
                <p>Saturday</p>
                <Deutsch>
                  <p>Samstag</p>
                </Deutsch>
                <Time>
                  <p>16.00 - 19.00</p>
                </Time>
              </Dia>
            </ClassWithoutButton>
          </Class>
        </PrivateLessons>
        <ButtonsContainer>
          <StyledButton href="mailto:matiaspersonal@gmail.com?subject=Private%20Class%20/%20Book%20a%20spot%20for%20a%20private%20class">Book now!</StyledButton>
          <StyledButton href={"tel:+491774946117"}>
            (or call me)
          </StyledButton>
        </ButtonsContainer>
      </ClassesSection>
    </>
  );
}

const Class = styled.div`
  display: flex;
  flex-direction: column;
  transition-duration: 1s;
`;

const PrivateLessons = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-block: 50px;
`;

const ButtonsContainer = styled.div`
    display: flex;
  flex-direction: column;
  gap: 80px;
`

const Dia = styled.div`
  p {
    font-family: monospace;
    font-weight: bolder;
    font-size: 1.5rem;
    padding-left: 0px;
    padding-top: 10px;
    display: inline-block;
    color: var(--white);
  }
`;

const Time = styled.div`
  p {
    font-size: 1.3rem;
    color: var(--gray-600);
  }
`;

const ClassWithoutButton = styled.div`
  display: flex;
  flex-direction: column;
`;

const ClassTopic = styled.div`
  margin-top: 50px;
  p {
    color: var(--white);
    line-height: 1.6rem;
    font-size: 1.3rem;
    font-family: sans-serif;
  }
`;

const ClassName = styled.div`
  padding-right: 30px;
  h4 {
    color: var(--white);
    font-family: "Roboto Medium";
  }
`;

const ClassesSection = styled.section`
  margin: 10vh auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 2rem;
`;
