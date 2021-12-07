import React from "react";
import styled from "styled-components";

export default function ClassesBerlin() {
  const sendEmail = () => {
    var link =
      "mailto:matiaspersonal@gmail.com" +
      "?cc=" +
      `&subject=Private Class / Book a spot for a group class`;
    window.location.href = link;
  };

  return (
    <Classes id="classes">
      <Title>
        <h2>Classes in Berlin</h2>
        <h3>/Kurse in Berlin</h3>
      </Title>

      <DayClasses>
        <Class>
          <ClassWithoutButton>
            <ClassName>
              <h4>Tango for Advanced Dancers</h4>
              <Deutsch>
                <h4>/Tango für Fortgeschrittene</h4>
              </Deutsch>
              <Dia>
                <p>Tuesday </p>
                <Deutsch>
                  <p>/Dienstag</p>
                </Deutsch>
                <Horario>
                  <p>20.30 - 22.00</p>
                </Horario>
              </Dia>
              <ClassTopic>
                <p>Technique for couples</p>
                <Deutsch>
                  <p>/Technik für Paare</p>
                </Deutsch>
                <br />
                <p>Price: 18€</p>
                <Deutsch>
                  <p>/Preis: 18€</p>
                </Deutsch>
              </ClassTopic>
            </ClassName>
          </ClassWithoutButton>
        </Class>

        <Class>
          <ClassWithoutButton>
            <ClassName>
              <h4>Beginners</h4>
              <Deutsch>
                <h4>/Anfängers</h4>
              </Deutsch>
              <Dia>
                <p>Wednesday </p>
                <Deutsch>
                  <p>/Mittwoch</p>
                </Deutsch>
                <Horario>
                  <p>19.30 - 20.30</p>
                </Horario>
              </Dia>
              <ClassTopic>
                <p>Intro to Tango and refreshing if you need!</p>
                <Deutsch>
                  <p>/Einführung und wiedereinsteigen!</p>
                </Deutsch>
                <br />
                <p>Price: 15€ / Urban Sport</p>
                <Deutsch>
                  <p>/Preis: 15€/ Urban Sport</p>
                </Deutsch>
              </ClassTopic>
            </ClassName>
          </ClassWithoutButton>
        </Class>

        <Class>
          <ClassWithoutButton>
            <ClassName>
              <h4>Advanced Training</h4>
              <Deutsch>
                <h4>/Training für Fortgeschrittene</h4>
              </Deutsch>
              <Dia>
                <p>Wednesday </p>
                <Deutsch>
                  <p>/Mittwoch</p>
                </Deutsch>
                <Horario>
                  <p>20.30 - 22.00</p>
                </Horario>
              </Dia>
              <ClassTopic>
                <p>Technique, Improvisation, Practice</p>
                <Deutsch>
                  <p>/Technik, Impro, Übungen</p>
                </Deutsch>
                <br />
                <p>Price: 18€</p>
                <Deutsch>
                  <p>/Preis: 18€</p>
                </Deutsch>
              </ClassTopic>
            </ClassName>
          </ClassWithoutButton>
        </Class>
      </DayClasses>
      <PrivateClassButton onClick={sendEmail}>
        Save your spot now!
      </PrivateClassButton>

      <Classes>
        <Title>
          <h2>Private lessons</h2>
          <h3>/Privatunterricht</h3>
        </Title>
        <PrivateLessons>
          <Class>
            <ClassWithoutButton>
              <ClassName>
                <h4>Book your spot for a private class</h4>
                <Deutsch>
                  <h4>/Sichere dir deinen Platz für eine Einzelstunde</h4>
                </Deutsch>

                <ClassTopic>
                  <p>Technique, Musicality, Concepts, Improvisation</p>
                </ClassTopic>
              </ClassName>

              <Dia>
                <p>Monday / Tuesday / Friday</p>
                <Deutsch>
                  <p>Montag / Dienstag / Freitag</p>
                </Deutsch>
                <Horario>
                  <p>11.00 - 13.00</p>
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

              <Dia>
                <p>Sunday</p>
                <Deutsch>
                  <p>Sonntag</p>
                </Deutsch>
                <Horario>
                  <p>13.00 - 17.00</p>
                </Horario>
              </Dia>
            </ClassWithoutButton>
          </Class>
        </PrivateLessons>
        <PrivateClassButton onClick={sendEmail}>Book now!</PrivateClassButton>
      </Classes>
      <Address>
        <Title>
          <h2>Address in Berlin</h2>
          <Deutsch>
            <h3>/Adresse</h3>
          </Deutsch>
        </Title>
        <p>Bühnenreif! Immanuelkirchstrasse 6, 10405 Berlin</p>
      </Address>
    </Classes>
  );
}

const Deutsch = styled.div`
  font-size: 1.3rem;
  p,
  h4,
  h3 {
    color: var(--main-black-color) !important;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    color: var(--main-black-color);
    font-weight: bolder;
    font-family: "Roboto Black";
    font-size: clamp(2rem, 4vw, 4em) !important;
  }
`;

const DayClasses = styled.div`
  display: flex;
  flex-direction: row;
`;

const Class = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  margin: 50px;
  transition-duration: 1s;
`;

const PrivateLessons = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const PrivateClassButton = styled.button`
  background-color: var(--main-deutsch-color);
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

const Address = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  h3 {
    font-size: 3rem;
    max-width: 12ch;
    font-family: "Roboto Black";
    color: var(--main-white-color);
  }

  p {
    color: var(--main-white-color);
    font-size: 1.3rem;
    padding: 50px;
    font-family: sans-serif;
    position: relative;
    ::before {
      position: absolute;
      content: "";
      height: 10px;
      width: 10px;
      background-color: var(--main-white-color);
      transform: translate(-20px, 5px);
    }
  }
`;
