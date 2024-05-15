import React from "react";
import DisplayMessage from "./DisplayMessage";
import styled, { css } from "styled-components";

const APPID = process.env.REACT_APP_APP_ID;

export default function WeatherWidget() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [weather, setWeather] = React.useState(null);

  React.useEffect(() => {
    const fetchWeather = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=Berlin,de&APPID=${APPID}&units=metric`
        );
        if (!response.ok) {
          throw new Error("no internet connection ?");
        }
        const data = await response.json();
        setWeather(data.main.feels_like);
        setIsLoading(false);
      } catch (error) {
        console.log({error});
      }
    };
    fetchWeather();
  }, []);

  return (
    <StyledSection>
      <Title>
        {isLoading ? "loading..." : "Temperature in Berlin feels like: "}
      </Title>
      <TempContainer $styles={weather < 18 ? 'cold' : 'hot' }>
       {weather}º
      </TempContainer>
      <Message>
        <DisplayMessage weather={weather} />
      </Message>
    </StyledSection>
  );
}

const StyledSection = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
`;

const Title = styled.div`
  color: white;
  font-weight: bolder;
  font-family: "Roboto Black";
  font-size: clamp(1.8rem, 2vw, 2em);
  margin-bottom: 50px;
  text-align: center;
  line-height: 1.6;
`;

const TempContainer = styled.p`
  background-color: var(--secondary-color);
  width: 150px;
  height: 150px;
  border-radius: 50%;
  font-family: "Roboto Black", sans-serif;
  font-size: 2.5em;
  line-height: 35px;
  display: grid;
  place-content: center;
  margin-bottom: 20px;
  ${({ $styles }) => $styles === 'hot' ? css`
    color: red;` : css` color: lightblue`
  }
`;

const Message = styled.p`
  color: #FFD700;
  background-color: var(--secondary-color);
  font-family: "Roboto Black";
  border-radius: 20px;
  font-size: 1.5em;
  padding: 20px;
  text-align: center;
`;
