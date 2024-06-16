import styled from "styled-components";
import { breakpoints } from "../../../../assets/sizes";

export const SVG = styled.svg`
  width: 200px;
  margin-bottom: 20px;
  @media ${breakpoints.maxMobile} {
    width: 100px;
  }
`;
