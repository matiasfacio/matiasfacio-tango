import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Deletrear = () => {
  const [finalString, setFinalString] = useState("");

  const printString = (a, speed, text) => {
    if (a === 0) {
      setTimeout(() => {
        setFinalString((prevState) => prevState + text[a]);
      }, speed);
    } else {
      setTimeout(() => {
        setFinalString((prevState) => prevState + text[a]);
        printString(a - 1, speed, text);
      }, speed);
    }
  };

  useEffect(() => {
    const chain = "Dancer / Choreographer / Teacher for Argentine Tango";
    const speed = 50;
    const list = chain.split("");
    const copiedList = [];
    list.map((letter, index) => {
      return (copiedList[(index + 1 - list.length) * -1] = letter);
    });
    const i = list.length;
    printString(i - 1, speed, copiedList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Letter>{finalString}</Letter>;
};

export default Deletrear;

const Letter = styled.p``;
