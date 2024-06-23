import React from "react";
import styled from "styled-components";

export default function Contact() {
  return (
    <StyledSection id="contact">
      <ContactInfo>
        <ContactDetailName>Matias Facio</ContactDetailName>
        <ContactDetailEmail>matiaspersonal@gmail.com</ContactDetailEmail>
        <ContactDetailPhone>+49 1774946117</ContactDetailPhone>
      </ContactInfo>

      <div className="socialMediaInfo">
        <div className="followMe">
          <p>Follow me to check my dance videos and updated news!</p>
        </div>
        <div className="contentSM">
          <div className="facebook">
            <a href={"index.html#"}>Facebook</a>
          </div>
          <div className="instagram">
            <a href={"index.html#"}>Instagram</a>
          </div>
          <div className="youtube">
            <a href={"index.html#"}>Youtube</a>
          </div>
        </div>

        <div className="impressumText">
          <p>
            <a href="impressum.html">Impressum</a>
          </p>
        </div>
      </div>
    </StyledSection>
  );
}

const ContactInfo = styled.div`
  padding: 50px;
`;

const ContactDetailName = styled.div`
  display: inline-block;
  color: transparent;
  background-color: var(--main-title-footer);
  background-clip: text;
  font-size: 6rem;
  font-family: "Six Caps";
  -webkit-background-clip: text;
  padding-bottom: 10px;
`;

const ContactDetailEmail = styled.div`
  color: var(--white);
  font-size: 1.5rem;
  font-family: "Roboto Light";
  padding-bottom: 10px;
`;

const ContactDetailPhone = styled.div`
  color: var(--white);
  font-size: 1.5rem;
  font-family: "Roboto Light";
  padding-bottom: 10px;
`;

const StyledSection = styled.div`
  background-color: var(--main-black-color);
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  .socialMediaInfo a {
    color: var(--secondary-color);
    color: var(--main-buttonText-color);
    font-size: 1.5rem;
    margin-left: 10px;
    font-family: sans-serif;
    line-height: 3rem;
    font-weight: bolder;
  }

  .socialMediaInfo a:hover {
    color: var(--footer-title);
  }

  .socialMediaInfo {
    margin-left: 50px;
    font-family: sans-serif;
    max-width: 30ch;
    margin-bottom: 20px;
    line-height: 1.6rem;
  }

  .impressumText p,
  .followMe p {
    color: var(--white) !important;
    font-family: sans-serif;
    margin-top: 50px;
    font-size: 1.3rem;
  }

  .contentSM {
    margin-top: 20px;
  }

  .facebook,
  .instagram,
  .youtube,
  .impressumText p {
    background-color: var(--main-bg-color);
    border-radius: 10px;
    margin-bottom: 20px;
  }
`;
