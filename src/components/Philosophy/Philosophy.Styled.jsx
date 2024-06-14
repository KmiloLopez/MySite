import styled from "styled-components";
import { breakpoints } from "../../../assets/sizes";

export const MySection = styled.section`
  background-color: var(--color-background-2);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 50px;
  padding-bottom: 100px;
`;

export const Mydiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  @media ${breakpoints.maxMobile} {
    flex-direction: column;
  }
  @media ${breakpoints.tabletDimensions} {
    flex-direction: column;
  }
`;
export const TextConteinerTop = styled.div`
  display: flex;
  align-items: center;
`;
export const TextConteinerBottom = styled.div`
  display: flex;
  align-items: center;
`;

export const Myimg = styled.img`
  width: 500px;
`;
export const PhiloText = styled.h3`
  margin-top: 25px;
  margin-bottom: 25px;
  width: 80%;
  @media ${breakpoints.maxMobile} {
    width: 95%;
  }
  @media ${breakpoints.tabletDimensions} {
    width: 87%;
  }
`;
