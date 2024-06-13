import styled from "styled-components";

export const NavContainer = styled.div`
  font-size: 20px;
  position: fixed;
  top: 20;
  background-color: rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: flex;
  right: 36px;
  gap: 20px;
  border-radius: 4px;
  padding: 15px;
  transition: transform 0.3s ease-in-out;

  &.hidden {
    transform: translateY(-250%);
  }
  &.visible {
    transform: translateY(0);
  }
`;
export const Linkto = styled.a`
  color: var(--primary);
`;
