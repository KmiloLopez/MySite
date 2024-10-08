import styled, { keyframes } from "styled-components";
import { breakpoints } from "../../../assets/sizes";

export const SkillsMainContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
  @media ${breakpoints.maxMobile} {
    width: 95%;
  }
  @media ${breakpoints.tabletDimensions} {
    width: 87%;
  }
`;
export const BackgroundContainer = styled.div`
  background-color: #caceca;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const H3 = styled.h3`
  margin-bottom: 20px;
  font-size: 40px;
  @media ${breakpoints.maxMobile} {
    font-size: 27px;
  }
`;
export const H5 = styled.h5`
  margin-bottom: 20px;
`;
export const H4 = styled.h4`
  margin-bottom: 20px;
  text-align: center;
  @media ${breakpoints.maxMobile} {
    font-size: 16px;
  }
  @media ${breakpoints.tabletDimensions} {
  }
`;
export const H4cursive = styled.h4`
  font-style: italic;
  margin-bottom: 20px;
  text-align: center;
  font-size: 30px;
  @media ${breakpoints.maxMobile} {
    font-size: 20px;
  }
  @media ${breakpoints.tabletDimensions} {
  }
`;
export const StyledP = styled.p`
  margin-bottom: 20px;
  color: white;
`;
export const MySkills = styled.p`
  margin-bottom: 5px;
  color: #222;

  @media ${breakpoints.maxMobile} {
    font-size: 16px;
  }
`;

export const Box1 = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 50px;
  font-size: 2rem;
  @media ${breakpoints.maxMobile} {
    font-size: 1.2rem;
    text-align: center;
  }
  @media ${breakpoints.tabletDimensions} {
    text-align: center;
  }
`;
export const Box2 = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin: 30px 0px;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }
`;
export const Box2Child = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 0.2rem;
  max-width: 400px;
  padding: 10px 10px 10px 10px;
`;
// CAJAS DONDE SE MUESTRAN LOGOS
export const CarouselContainer = styled.div`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  background-color: #caceca;
`;
// Definimos la animación
const scrollAnimation = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

// Estilo para la fila de elementos que se anima
export const ItemsRow = styled.div`
  display: inline-flex;
  margin-bottom: 30px;
  animation: ${scrollAnimation} 90s infinite linear;
  &:hover {
    animation-play-state: paused; /* Pausa la animación al pasar el ratón por encima */
  }
`;
export const SkillContainer = styled.div`
  //margin-left: 31px;
  width: 96px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ImgStyle = styled.img`
  width: 65px;
  filter: brightness(0.2);
  opacity: 0.2;
`;
// { id: 1, src: 'image1.jpg', colorFilter: 'hue-rotate(90deg)' },
// { id: 2, src: 'image2.jpg', colorFilter: 'hue-rotate(180deg)' },
// { id: 3, src: 'image3.jpg', colorFilter: 'hue-rotate(270deg)' },
// { id: 4, src: 'image4.jpg', colorFilter: 'brightness(0.5)' },
// { id: 5, src: 'image5.jpg', colorFilter: 'invert(1)' },
// { id: 6, src: 'image6.jpg', colorFilter: 'sepia(1)' },
// { id: 7, src: 'image7.jpg', colorFilter: 'grayscale(1)' },
// { id: 8, src: 'image8.jpg', colorFilter: 'contrast(2)' }
