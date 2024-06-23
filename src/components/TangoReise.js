import React from "react";
import styled from "styled-components";
import video from "../media/video.mov";
import main from "../media/main.jpeg";
import description from "../media/description.jpeg";
import contact from "../media/contact.jpeg";
import accomodation from "../media/accomodation.jpeg";
import { Title } from "./Title";

export const TangoReise = () => {
  return (
    <TangoReiseContainer>
      <Title>
        <h2>Tango Vacations</h2>
        <h3>/Tangoreise</h3>
      </Title>
      <TangoReiseContent>
        <VideoDate>
          <video autoPlay width={300} controls>
            <source src={video} />
          </video>
          <ReiseDatum>
            <Destination>Mallorca, Spain</Destination>
            From 28th September
            <br />
            to 2nd October 2022
            <ContactInfo>
              For further information, get in touch: <br /> +49 173 780 3180
              <br />
              tangonostromallorca@gmail.com
            </ContactInfo>
          </ReiseDatum>
        </VideoDate>
        <Gallery>
          <ImgItem>
            <img src={main} alt="" />
          </ImgItem>
          <ImgItem>
            <img src={description} alt="" />
          </ImgItem>
          <ImgItem>
            <img src={accomodation} alt="" />
          </ImgItem>
          <ImgItem>
            <img src={contact} alt="" />
          </ImgItem>
        </Gallery>
      </TangoReiseContent>
    </TangoReiseContainer>
  );
};

const TangoReiseContainer = styled.div`
  margin: 10vh auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TangoReiseContent = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ReiseDatum = styled.div`
  color: var(--main-white-color);
  font-size: 1rem;
  font-family: monospace;
`;

const Destination = styled.div`
  color: var(--main-white-color);
  font-size: 1.5rem;
  margin-bottom: 20px;
  display: block;
`;

const VideoDate = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

const ContactInfo = styled.div`
  margin-top: 30px;
  width: 25ch;
  color: var(--secondary-color);
`;

const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

const ImgItem = styled.div`
  flex-basis: 40%;
  flex-grow: 0;
  img {
    width: 100%;
  }
`;
