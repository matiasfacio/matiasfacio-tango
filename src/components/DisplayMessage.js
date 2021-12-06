function DisplayMessage(props) {
  let mensaje;

  mensaje =
    props.objetoWeather > 20
      ? "... it is hot,  let us dance Tango!"
      : "... quite cold. Let us embrace!";

  return mensaje;
}

export default DisplayMessage;
