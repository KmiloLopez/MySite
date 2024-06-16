import {
  IMGStyle,
  SocialCircle,
  SocialMainContainer,
} from "../Social/Social.styled";

import {
  DirectLinksText,
  GITtext,
  GitIconLink,
  IMGStyleGit,
  IMGStyleWebSite,
  MyRelativeBox,
  SiteIconLink,
  Sitetext,
  SocialCir,
  SocialContainer,
} from "./LinkToProject.Styled";

const LinkToProject = ({ item }) => {
  return (
    <>
      <DirectLinksText>Direct links:</DirectLinksText>
      <SocialContainer>
        {item.codeLink && (
          <>
            <MyRelativeBox>Let's see the code</MyRelativeBox>
            <SocialCir>
              <GitIconLink
                href={item.codeLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IMGStyleGit />
                {/* <GITtext className="git-text">Let's see the code</GITtext> */}
              </GitIconLink>
            </SocialCir>
          </>
        )}

        {item.siteLink && (
          <>
            <SocialCir>
              <SiteIconLink
                href={item.siteLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IMGStyleWebSite />

                {/* <Sitetext className="site-text">
                  Let's check how it looks
                </Sitetext> */}
              </SiteIconLink>
            </SocialCir>
            <MyRelativeBox>Let's check how it looks</MyRelativeBox>
          </>
        )}
      </SocialContainer>
    </>
  );
};

export default LinkToProject;
