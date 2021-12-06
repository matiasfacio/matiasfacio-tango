import React from "react";
import styled, { css } from "styled-components";

const images = [
  "https://res.cloudinary.com/matiasfacio/image/upload/v1638830489/MatiasFacio.com/1-low_j2dbaa.jpg",
  "https://res.cloudinary.com/matiasfacio/image/upload/v1638830490/MatiasFacio.com/4-low_dg8ohq.jpg",
  "https://res.cloudinary.com/matiasfacio/image/upload/v1638830490/MatiasFacio.com/6-low_jdoceu.jpg",
  "https://res.cloudinary.com/matiasfacio/image/upload/v1638830490/MatiasFacio.com/2_kwn125.jpg",
];

export default function AboutMe() {
  return (
    <Container>
      <StyledSection id="aboutme">
        <div className="separador"></div>
        <Title>
          <h2>About me</h2>
          <h3 className="deutsch">/Über mich</h3>
        </Title>
        <Details>
          <Card>
            <CircledImageContainer>
              <CircledImage backgroundImage={images[0]} />
            </CircledImageContainer>
            <p>
              I started to dance Tango Argentino in 1995 back in Argentina, and
              since then I haven't stop not even for one day dancing and
              thinking this dance.
            </p>
            <p className="deutsch-black">
              /Ich habe in 1995 mit Tango begonnen. Seitdem, habe ich nie einmal
              gestopped, dieses Tanz zu analysieren und tanzen.
            </p>
          </Card>
          <Card>
            <CircledImageContainer>
              <CircledImage backgroundImage={images[1]} />
            </CircledImageContainer>
            <p>
              Parallel to Tango, I have practiced Modern Dance and Feldenkrais.
              All these styles and techniques have enriched my Tango and my
              approach to studing and transmitting it.
            </p>
            <p className="deutsch-black">
              /Parallel zur Tango, habe ich Erfahrung mit Zeitgenossentanzen und
              Feldenkrais. Beide Technik und verchiedene Styles haben geholfen,
              mein Tango weiter zu entwickeln.
            </p>
          </Card>
          <Card>
            <CircledImageContainer>
              <CircledImage backgroundImage={images[2]} />
            </CircledImageContainer>
            <p>
              As guest teacher, I have taught and continue to teach worldwide:
              I've been many times in Japan Hong Kong and Canada, in the main
              tango Capitals of Europe, Russia, Turkey, Israel, the United
              States, Argentina and Uruguay.
            </p>
            <p className="deutsch-black">
              /Als Gastlehrer, habe ich Weltweit unterrichtet. Ich bin oft in
              Japan, Hong Kong und Kanada gewessen. Ich habe auch in die
              wichtesten Tango Kapitals in Europa unterrichtet. So wohl als auch
              in Russia, Der Türkei, Israel, USA, Uruguay und in Argentinien.
            </p>
          </Card>
          <Card id="ultima">
            <CircledImageContainer>
              <CircledImage backgroundImage={images[3]} />
            </CircledImageContainer>
            <p>
              Since 2008, I'm based in Berlin, Germany, where I created together
              with Claudia Rogowski a small studio called Tango Libre. There I
              teach basic and advanced concepts of Tango for Social dancing.
              Come to visit!
            </p>
            <p className="deutsch-black">
              /Seit 2008, wohne in Berlin, Deutschland. In Berlin habe ich eine
              kleine Tanzstudio mit Claudia Rogowski gegründet: Tango Libre. Ich
              unterrichte Grundlage und Fortgeschritte Technik für Tango für
              Social Dance (Milongas). Komm!
            </p>
          </Card>
        </Details>
        <div className="separador"></div>
      </StyledSection>
    </Container>
  );
}

const CircledImageContainer = styled.div`
  height: 300px;
  width: 300px;
  background-color: var(--main-bg-color);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin: 50px 0;
  &:hover {
    background-color: whitesmoke;
  }
`;

const CircledImage = styled.div`
  border-radius: 50%;
  height: 270px;
  width: 270px;
  position: relative;
  overflow: hidden;
  &::after {
    position: absolute;
    content: "";
    ${({ backgroundImage }) =>
      css`
        background-image: url(${backgroundImage});
      `};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: right;
    width: 100%;
    height: 100%;
    filter: grayscale(50%);
    left: 0;
    top: 0;
    transition: all 250ms ease-in-out;
  }
  &:hover::after {
    transform: scale(1.1);
  }
`;

const Container = styled.div`
  max-width: 1440px;
`;

const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100%;

  h3 {
    font-family: "Roboto Black";
  }
  p {
    color: var(--main-white-color);
    font-size: 1.3rem;
    font-family: "Roboto Light", sans-serif;
    padding-bottom: 15px;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Details = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  margin-top: 10vh;
  padding: 2em;
  margin: 0 auto;
`;

const Card = styled.div`
  width: 300px;
  position: relative;
  border-top: none;
  border-bottom: none;
  border-left: none;
  display: flex;
  flex-shrink: 1;
  flex-grow: 0;
  margin: 0 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  #ultima {
    border-right: none;
  }
`;
