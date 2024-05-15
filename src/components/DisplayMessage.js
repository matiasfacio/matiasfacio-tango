function DisplayMessage(props) {
    return props.weather > 20
      ? "... it is hot,  tango time!"
      : "... quite cold, let us embrace!";

}

export default DisplayMessage;
