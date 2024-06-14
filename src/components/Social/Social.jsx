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

const Social = () => {
  return (
    <SocialMainContainer>
      <SubContainer>
        <Mydiv>
          <h2>Contact me at: </h2>
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

      <FinalBox href="../../assets/CAMIC.pdf" download>
        <DownloadText>Download CV</DownloadText>
      </FinalBox>
    </SocialMainContainer>
  );
};

export default Social;
