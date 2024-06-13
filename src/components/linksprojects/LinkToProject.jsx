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
  SiteIconLink,
  Sitetext,
} from "./LinkToProject.Styled";

const LinkToProject = ({ item }) => {
  return (
    <>
      <DirectLinksText>Direct links:</DirectLinksText>
      <SocialMainContainer>
        {item.codeLink && (
          <SocialCircle>
            <GitIconLink
              href={item.codeLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IMGStyleGit />
              <GITtext className="git-text">Let's see the code</GITtext>
            </GitIconLink>
          </SocialCircle>
        )}

        {item.siteLink && (
          <SocialCircle>
            <SiteIconLink
              href={item.siteLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IMGStyleWebSite />
              <Sitetext className="site-text">
                Let's check how it looks
              </Sitetext>
            </SiteIconLink>
          </SocialCircle>
        )}
      </SocialMainContainer>
    </>
  );
};

export default LinkToProject;
