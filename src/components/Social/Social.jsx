import {
  DownloadText,
  FinalBox,
  IMGStyle,
  Mydiv,
  SocialCircle,
  SocialMainContainer,
  Sociallinks,
  SubContainer,
} from "./Social.styled";
import { datacontacts } from "../../../assets/images/contacts/datacontacts";
import CamiloperCV from "../../assets/CamiloperCV.pdf";

const Social = () => {
  return (
    <SocialMainContainer id="contact">
      <SubContainer>
        <Mydiv>
          <h2>Contact links: </h2>
        </Mydiv>
        <Sociallinks>
          {datacontacts.map((contact, index) => {
            return (
              <SocialCircle key={index}>
                <a
                  href={contact.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IMGStyle src={contact.imgURL} alt={contact.alt} />
                </a>
              </SocialCircle>
            );
          })}
        </Sociallinks>
      </SubContainer>

      <FinalBox href={CamiloperCV} download>
        <DownloadText>Download CV</DownloadText>
      </FinalBox>
    </SocialMainContainer>
  );
};

export default Social;
