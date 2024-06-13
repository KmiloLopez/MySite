import styled from "styled-components";
import { breakpoints } from "../../assets/sizes";

export const ThankYouContainer = styled.section`
  display: flex;
  flex-direction: column;

  width: 80%;
  margin: 0 auto;
  text-align: center;
  @media ${breakpoints.maxMobile} {
    width: 95%;
  }
  @media ${breakpoints.tabletDimensions} {
   width: 87%;
  }
`;

export const MyStiledText = styled.p`
  font-family: Merriweather;
  font-size: 80px;
  color: #222;
  letter-spacing: 0.25em;
  word-spacing: 0.5em;
  @media ${breakpoints.maxMobile} {
    font-size: 50px;
  }
`;

export const SecondContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;
export const MyH5 = styled.h5`
  display: flex;
  align-items: center;
  @media ${breakpoints.maxMobile} {
    font-size: 17px;
  }
`;
