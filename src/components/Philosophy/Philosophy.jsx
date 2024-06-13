import React from "react";
import {
  MySection,
  Mydiv,
  Myimg,
  PhiloText,
  TextConteinerBottom,
  TextConteinerTop,
} from "./Philosophy.Styled";

const Philosophy = () => {
  return (
    <MySection>
      <h2>CamiLoper Phylosophy</h2>

      <PhiloText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem dolorum
        quisquam ullam laudantium eveniet voluptatem pariatur.
      </PhiloText>
      <Mydiv>
        <TextConteinerTop>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            dolorum quisquam ullam laudantium eveniet voluptatem pariatur
            asperiores iste accusantium? Rerum ex cupiditate ullam repellat
            nihil vel, veritatis quasi doloremque quas.
          </h3>
        </TextConteinerTop>

        <Myimg
          src="../../../src/assets/images/philosophy/thinkingmeleft.png"
          alt="thinking man with thoughts behind"
        />
      </Mydiv>
      <Mydiv>
        <Myimg
          src="../../../src/assets/images/philosophy/thinkingmeright.png"
          alt="thinking man with thoughts behind"
        />
        <TextConteinerBottom>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            dolorum quisquam ullam laudantium eveniet voluptatem pariatur
            asperiores iste accusantium? Rerum ex cupiditate ullam repellat
            nihil vel, veritatis quasi doloremque quas.
          </h3>
        </TextConteinerBottom>
      </Mydiv>
    </MySection>
  );
};

export default Philosophy;
