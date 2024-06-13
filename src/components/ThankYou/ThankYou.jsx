import React from "react";
import {
  MyH5,
  MyStiledText,
  SecondContainer,
  ThankYouContainer,
} from "./ThankYou.Styled";

const ThankYou = () => {
  return (
    <ThankYouContainer>
      <MyStiledText>Thank you</MyStiledText>
      <SecondContainer>
        <MyStiledText>for</MyStiledText>
        <MyH5>I wish you a pleasant day.</MyH5>
      </SecondContainer>

      <MyStiledText>Your time!</MyStiledText>
    </ThankYouContainer>
  );
};

export default ThankYou;
