import React from "react";
import {
  MySection,
  Mydiv,
  Mydiv2,
  Myimg,
  MythinkText,
  PhiloText,
  Styledh2,
  TextConteinerBottom,
  TextConteinerTop,
} from "./Philosophy.Styled";
import philoso from "../../../src/assets/images/philosophy/thinkingmeleft.png";
import pholosoright from "../../../src/assets/images/philosophy/thinkingmeright.png";
const Philosophy = () => {
  return (
    <MySection>
      <Styledh2>Phylosophy</Styledh2>
      {/* <h2>CamiLoper Phylosophy</h2> */}

      <PhiloText>
        When I'm not in front of the PC, I'm either crafting something in the
        home workshop, preparing a delicious recipe, or hanging out with my wife
        and our two cats.
      </PhiloText>
      <Mydiv>
        <TextConteinerTop>
          <MythinkText>
            " Whenever there's opportunity, investing effort into continuous
            refinement yields valuable returns."
          </MythinkText>
        </TextConteinerTop>

        <Myimg src={philoso} alt="thinking man with thoughts behind" />
      </Mydiv>

      <Mydiv2>
        <Myimg src={pholosoright} alt="thinking man with thoughts behind" />
        <TextConteinerBottom>
          <MythinkText>
            "With the honesty that characterizes me, I am not afraid of feeling
            lost in any area of knowledge; it serves as a window to new learning
            opportunities."
          </MythinkText>
        </TextConteinerBottom>
      </Mydiv2>
    </MySection>
  );
};

export default Philosophy;
