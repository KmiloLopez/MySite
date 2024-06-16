import styled from "styled-components";
import { breakpoints } from "../../../assets/sizes";

export const SocialMainContainer = styled.div`
  background-color: var(--color-background-2);
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  align-items: center;
  margin: 0px auto;
  padding-top: 40px;
`;
export const SubContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${breakpoints.maxMobile} {
    flex-direction: column;
  }
`;
export const Sociallinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 0px;
  padding-top: 40px;
  padding-bottom: 40px;
  gap: 18px;
`;
export const SocialCircle = styled.div`
  margin-bottom: 20px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  //border: 1px solid grey;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const IMGStyle = styled.img`
  padding-top: 10px;
  width: 45px;
  &:hover {
    width: 55px;
    cursor: pointer;
  }
`;
export const Mydiv = styled.div`
  width: 250px;
  @media ${breakpoints.maxMobile} {
    width: 100%;
    text-align: center;
  }
`;

export const FinalBox = styled.a`
  text-decoration: none;
  background-color: #222;
  height: 150px;
  width: 90%;
  border-radius: 18px;
  text-align: center;
  @media ${breakpoints.maxMobile} {
    height: 100px;
  }
`;
export const DownloadText = styled.p`
  color: #a59f9f;
  margin-top: 0px;
  font-size: 100px;
  &:hover {
    color: white;
  }
  @media ${breakpoints.maxMobile} {
    font-size: 30px;
  }
`;
