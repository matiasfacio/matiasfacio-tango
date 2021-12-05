import React from "react";
import DisplayMessage from "./DisplayMessage";
import styled from "styled-components";

const APPID = process.env.REACT_APP_APP_ID;

export default function AppConditionalRendering() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [weather, setWeather] = React.useState(null);

  React.useEffect(() => {
    const fetchWeather = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=Berlin,de&APPID=${APPID}&units=metric`
        );
        if (!response) {
          throw new Error("no internet connection ?");
        }
        const data = await response.json();
        setWeather(data.main.feels_like);
        setIsLoading(false);
      } catch (error) {}
    };
    fetchWeather();
  }, []);

  const styleTemp = {
    backgroundColor: "black",
    width: "180px",
    textAlign: "center",
    height: "180px",
    borderRadius: "50%",
    borderRight: "3px white solid",
    borderBottom: "3px white solid",
    fontFamily: "sans-serif",
    marginBottom: "30px",
  };

  const styleCelCold = {
    fontSize: "3em",
    color: "white",
    lineHeight: "35px",
    transform: "translateY(70px)",
    fontFamily: "Roboto Black",
  };

  const styleCelHot = {
    fontSize: "3em",
    color: "red",
    lineHeight: "35px",
    transform: "translateY(70px)",
    fontFamily: "Roboto Black",
  };

  const styleP = {
    color: "white",
    fontWeight: "bolder",
    fontFamily: "Roboto Black",
    fontSize: "3em",
    marginBottom: "50px",
  };

  const styleMessage = {
    color: "#8cccfa",
    backgroundColor: "black",
    fontWeight: "bolder",
    fontFamily: "Roboto Black",
    borderRadius: "20px",
    fontSize: "2em",
    padding: "50px",
    borderRight: "3px white solid",
    borderBottom: "3px white solid",
  };

  return (
    <StyledSection>
      <p style={styleP}>
        {isLoading ? "loading..." : "The temperature in Berlin feels like: "}
      </p>
      <div style={styleTemp}>
        <p style={weather < 18 ? styleCelCold : styleCelHot}>{weather}º</p>
      </div>
      <p style={styleMessage}>
        <DisplayMessage objetoWeather={weather} />
      </p>
    </StyledSection>
  );
}

const StyledSection = styled.div`
  min-height: 100vh;
  margin-top: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
