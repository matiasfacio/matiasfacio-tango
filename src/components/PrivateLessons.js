import React from "react";
import styled from "styled-components";
import { Title } from "./Title";

export default function ClassesBerlin() {
  const sendEmail = () => {
    var link =
      "mailto:matiaspersonal@gmail.com" +
      "?cc=" +
      `&subject=Private Class / Book a spot for a group class`;
    window.location.href = link;
  };

  return (
    <>
      <Classes>
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
                <p>Wednesday</p>
                <Deutsch>
                  <p>Mittwoch</p>
                </Deutsch>
                <Horario>
                  <p>20.30 - 22.00</p>
                </Horario>
              </Dia>

              <Dia>
                <p>Saturday</p>
                <Deutsch>
                  <p>Samstag</p>
                </Deutsch>
                <Horario>
                  <p>16.00 - 19.00</p>
                </Horario>
              </Dia>

              {/*<Dia>*/}
              {/*  <p>Sunday</p>*/}
              {/*  <Deutsch>*/}
              {/*    <p>Sonntag</p>*/}
              {/*  </Deutsch>*/}
              {/*  <Horario>*/}
              {/*    <p>13.00 - 17.00</p>*/}
              {/*  </Horario>*/}
              {/*</Dia>*/}
            </ClassWithoutButton>
          </Class>
        </PrivateLessons>
        <PrivateClassButton onClick={sendEmail}>Book now!</PrivateClassButton>
      </Classes>
    </>
  );
}

const Deutsch = styled.div`
  font-size: 0.8rem;
  p,
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

const Class = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 2em;
  transition-duration: 1s;
`;

const PrivateLessons = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
`;

const PrivateClassButton = styled.button`
  background-color: var(--secondary-color);
  color: var(--main-buttonText-color);
  width: 300px;
  height: auto;
  border-radius: 10px;
  border-width: 0px;
  border-color: var(--main-buttonText-color);
  padding: 10px 20px;
  margin: 40px 0;
  font-size: 1.5rem;
  font-weight: bolder;

  &:hover {
    border-color: var(--main-buttonText-color);
    color: var(--main-white-color);
    transform: translate(-5px, -5px);
  }
`;

const Dia = styled.div`
  p {
    font-family: monospace;
    font-weight: bolder;
    font-size: 1.5rem;
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

const ClassWithoutButton = styled.div`
  display: flex;
  flex-direction: row;
  flex-direction: column;
`;

const ClassTopic = styled.div`
  margin-top: 50px;
  p {
    color: var(--main-white-color);
    line-height: 1.6rem;
    font-size: 1.3rem;
    font-family: sans-serif;
  }
`;

const ClassName = styled.div`
  padding-right: 30px;
  h4 {
    color: var(--main-white-color);
    font-family: "Roboto Medium";
  }
`;

const Classes = styled.div`
  margin: 20vh auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
