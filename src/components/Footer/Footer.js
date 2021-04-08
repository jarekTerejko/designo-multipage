import { ContainerEl } from "../Container/Container";
import { ImageEl } from "../Image/Image";
import {
  NavbarNavItem,
  NavbarNavLinkR,
  NavbarSiteLinkR,
} from "../Navbar/NavbarElements";
import {
  FooterWrapper,
  FooterNavItems,
  FooterRowTop,
  FooterRowBottom,
  FooterColLeft,
  FooterColMiddle,
  FooterColRight,
  FooterColsText,
  FooterLink,
  FooterSocialList,
  FooterSocialItem,
  FooterSocialLink,
} from "./FooterElements";
import LogoDarkImg from "../../images/shared/desktop/logo-light.png";
import ContactBanner from "../ContactBanner/ContactBanner";
import TwitterIcon from "../../images/shared/desktop/icon-twitter.svg";
import FacebookIcon from "../../images/shared/desktop/icon-facebook.svg";
import YoutubeIcon from "../../images/shared/desktop/icon-youtube.svg";
import PinterestIcon from "../../images/shared/desktop/icon-pinterest.svg";
import InstagramIcon from "../../images/shared/desktop/icon-instagram.svg";

const socialsData = [
  {
    icon: FacebookIcon,
  },
  {
    icon: YoutubeIcon,
  },
  {
    icon: TwitterIcon,
  },
  {
    icon: PinterestIcon,
  },
  {
    icon: InstagramIcon,
  },
];

const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <ContactBanner />
        <ContainerEl>
          <FooterRowTop>
            <NavbarSiteLinkR to="/">
              <ImageEl
                style={{ maxWidth: "194px" }}
                src={LogoDarkImg}
                alt="Logo"
              />
            </NavbarSiteLinkR>
            <FooterNavItems>
              <NavbarNavItem>
                <NavbarNavLinkR to="/our-company" $footerLink>
                  our company
                </NavbarNavLinkR>
              </NavbarNavItem>
              <NavbarNavItem>
                <NavbarNavLinkR to="/locations" $footerLink>
                  locations
                </NavbarNavLinkR>
              </NavbarNavItem>
              <NavbarNavItem>
                <NavbarNavLinkR to="/contact" $footerLink>
                  contact
                </NavbarNavLinkR>
              </NavbarNavItem>
            </FooterNavItems>
          </FooterRowTop>
          <FooterRowBottom>
            <FooterColLeft>
              <FooterColsText textBold>Designo Cental Office</FooterColsText>
              <FooterColsText>3886 Wellington Street</FooterColsText>
              <FooterColsText>Toronto, Ontario M9C 3J5</FooterColsText>
            </FooterColLeft>
            <FooterColMiddle>
              <FooterColsText textBold>
                Contact Us (Central Office)
              </FooterColsText>
              <FooterColsText textBold>
                <FooterLink href="tel:+1 253-863-8967">
                  P : +1 253-863-8967
                </FooterLink>
              </FooterColsText>
              <FooterColsText textBold>
                <FooterLink href="mailto:contact@designo.com">
                  M : contact@designo.com
                </FooterLink>
              </FooterColsText>
            </FooterColMiddle>
            <FooterColRight>
              <FooterSocialList>
                {socialsData.map((item, i) => {
                  return (
                    <FooterSocialItem key={i}>
                      <FooterSocialLink href="#">
                        <ImageEl src={item.icon} />
                      </FooterSocialLink>
                    </FooterSocialItem>
                  );
                })}
              </FooterSocialList>
            </FooterColRight>
          </FooterRowBottom>
        </ContainerEl>
      </FooterWrapper>
    </>
  );
};

export default Footer;
