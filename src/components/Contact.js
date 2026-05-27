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
            <a href={"index.html#"} className="facebook">Facebook</a>
            <a href={"index.html#"} className="instagram">Instagram</a>
            <a href={"index.html#"} className="youtube">Youtube</a>
            <a href={"impressum.html"} className="impressumText">- Impressum -</a>
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
  background-color: var(--white);
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
  background-color: var(--black);
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  .socialMediaInfo a {
    color: var(--white);
    background-color: var(--accent-color);
    font-size: 1.5rem;
    margin-left: 10px;
    font-family: sans-serif;
    line-height: 3rem;
    font-weight: bolder;
    border-radius: 10px;
    padding: 5px;
    text-align: center;
    &.impressumText {
        margin-top: 40px;
    }
  }

  .socialMediaInfo a:hover {
    background-color: var(--white);
    color: var(--accent-color);
  }

  .socialMediaInfo {
    margin-left: 50px;
    font-family: sans-serif;
    max-width: 30ch;
    margin-bottom: 20px;
    line-height: 1.6rem;
  }

  .contentSM {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;
