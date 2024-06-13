import styled from "styled-components";

export const SharedContainer = styled.header`
  display: flex;
  justify-content: space-between;

  flex-direction: column;
`;
export const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
  height: 50px;
  z-index: 50; //making sure background doesn't affect NavBar interactivity
`;
export const LogoTipo = styled.div`
  font-family: "Zen Dots", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: var(--primary);
  margin-left: 50px;
  margin-top: 80px;
  font-size: 40px;
  &:hover + .name-expla {
    display: inline-block;
  }
`;
export const LogoExplanation = styled.img`
  display: none;
  position: absolute;
  width: 300px;
  left: 57px;
  top: 100px;
`;
