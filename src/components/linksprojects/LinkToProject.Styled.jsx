import styled from "styled-components";
import CodeIcon from "@mui/icons-material/Code";
import GitHubIcon from "@mui/icons-material/GitHub";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { breakpoints } from "../../assets/sizes";

export const DirectLinksText = styled.p`
  text-align: center;
  margin-top: 20px;
  font-size: 18px;
  color: grey;
`;
export const IMGStyleWebSite = styled(ExitToAppIcon)`
  margin-top: 12px;
  font-size: 3rem !important;
  &:hover {
    font-size: 3.5rem !important;
    color: var(--primary);
  }
  &:hover + .site-text {
    display: inline-block;
    color: var(--primary);
  }
`;
export const IMGStyleGit = styled(GitHubIcon)`
  margin-top: 12px;
  font-size: 3rem !important;
  &:hover {
    font-size: 3.5rem !important;
    color: var(--primary);
  }
  &:hover + .git-text {
    display: block;
    color: var(--primary);
  }
`;
export const SiteIconLink = styled.a`
  cursor: pointer;
  font-size: 36px;
  color: var(--color-neon-dark-blue);

  text-decoration: none;
`;
export const GITtext = styled.p`
  display: none;
  font-size: 1.5rem;
  position: absolute;
  bottom: 30px;
  left: 180px;
  @media ${breakpoints.maxMobile} {
    font-size: 0.5rem;
    left: 70px;
  }
  @media ${breakpoints.tabletDimensions} {
    font-size: 1rem;
    left: 140px;
  }
`;
export const Sitetext = styled.p`
  display: none;
  font-size: 1.5rem;
  position: absolute;
  bottom: 30px;
  right: 85px;
  @media ${breakpoints.maxMobile} {
    font-size: 0.5rem;
    right: 50px;
  }
  @media ${breakpoints.tabletDimensions} {
    font-size: 1rem;
    right: 80px;
  }
`;
export const GitIconLink = styled.a`
  cursor: pointer;
  font-size: 36px;
  //color: var(--color-neon-dark-blue);
  color: var(--color-neon-dark-blue);

  text-decoration: none;
`;
