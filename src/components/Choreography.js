import React from "react";
import styled from "styled-components";

export default function Choreography() {
  const sendEmailChoreography = () => {
    var link =
      "mailto:matiaspersonal@gmail.com" +
      "?cc=" +
      "&subject=" +
      escape("Choreography");
    //  + "&body=" + escape(document.getElementById('myText').value)
    window.location.href = link;
  };

  return (
    <StyledSection id="choreography">
      <Title>
        <h2>Choreography Making</h2>
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
          <span>to schedule a meeting or give me a call</span>, I would be more
          than interested to hear about your project.
        </p>
      </ChoreographyContent>
      <PrivateClassButton onClick={sendEmailChoreography}>
        Send me an E-mail
      </PrivateClassButton>
    </StyledSection>
  );
}

const ChoreographyContent = styled.div`
  margin-top: 100px;
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

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h3 {
    font-family: "Roboto Black";
  }
`;

const StyledSection = styled.div`
  grid-area: choreography;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px;
  max-width: 1200px;
  p {
    color: var(--main-white-color);
    line-height: 1.6rem;
    font-size: 1.3rem;
    font-family: sans-serif;
  }
  span {
    color: var(--main-deutsch-color);
  }
`;
