import React from "react";
import { ImgStyle, SkillContainer, SkillsMainContainer } from "./Skills.styled";
import { dataskills } from "../../../public/images/skills/dataskills";

const Skills = () => {
    return (
        <section>
            <h2>SKILLS</h2>
            <SkillsMainContainer>
                {dataskills.map((item, index) => {
                    return (
                        <SkillContainer>
                            <ImgStyle
                                key={index}
                                src={item.imgURL}
                                alt={item.alt}></ImgStyle>
                        </SkillContainer>
                    );
                })}
            </SkillsMainContainer>
        </section>
    );
};

export default Skills;
