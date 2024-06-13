import styled, { keyframes } from "styled-components";

export const Squares = styled.ul`
  z-index: -100;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  overflow: hidden; //avoid scroll bars, bottom and lateral by squares
`;
const goingUp = keyframes`
    0%{
            transform: translateY(0px) rotate(0deg);
            opacity: 1;
            border-radius: 10%;
        }
        100%{
            transform: translateY(-1050px) rotate(720deg);
            opacity: 0;
            border-radius: 50%;
        }
`;
export const ListItem = styled.li`
  list-style: none;
  position: absolute;

  width: 100px;
  height: 100px;
  background: rgba(255, 0, 0, 0.2);
  animation: ${goingUp} 25s linear infinite;
  bottom: -150px;

  &:nth-child(1) {
    left: 5%;
    width: 90px;
    height: 90px;
    animation-delay: 1s;
    animation-duration: 15s;
  }
  &:nth-child(2) {
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 1s;
    animation-duration: 15s;
  }
  &:nth-child(3) {
    left: 15%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
    animation-duration: 13s;
  }
  &:nth-child(4) {
    left: 10%;
    width: 15px;
    height: 15px;
    animation-delay: 3s;
    animation-duration: 15s;
  }
  &:nth-child(5) {
    left: 35%;
    width: 60px;
    height: 60px;
    animation-delay: 3s;
    animation-duration: 10s;
  }
  &:nth-child(6) {
    left: 40%;
    width: 15px;
    height: 15px;
    animation-delay: 2.5s;
    animation-duration: 8s;
  }
  &:nth-child(7) {
    left: 60%;
    width: 50px;
    height: 50px;
    animation-delay: 6s;
    animation-duration: 20s;
  }
  &:nth-child(8) {
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 3s;
    animation-duration: 10s;
  }
  &:nth-child(9) {
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: 2s;
    animation-duration: 25s;
  }
  &:nth-child(10) {
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 5s;
    animation-duration: 30s;
  }
`;
