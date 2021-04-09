import AppDesignImg from "../../images/home/desktop/image-app-design.jpg";
import WebDesignImg from "../../images/home/desktop/image-web-design-large.jpg";
import GraphicDesignImg from "../../images/home/desktop/image-graphic-design.jpg";
import RightArrowIcon from "../../images/shared/desktop/icon-right-arrow.svg";
import { ContainerEl } from "../Container/Container";
import { ImageEl } from "../Image/Image";
import {
  DesignsLinksInnerWrapper,
  DesignsLinksLink,
  DesignsLinksLinkTextPrimary,
  DesignsLinksLinkTextSecondary,
  DesignsLinksWrapper,
  DesignsLinksLinkTextSecondaryWrapper,
  DesignsLinksLinkTextsWrapper,
} from "./DesignsLinksElements";

const linksData = [
  {
    img: WebDesignImg,
    textPrimary: "web design",
    textSecondary: "view projects",
    arrowIcon: RightArrowIcon,
    path: "/web-design",
  },
  {
    img: AppDesignImg,
    textPrimary: "app design",
    textSecondary: "view projects",
    arrowIcon: RightArrowIcon,
    path: "app-design",
  },
  {
    img: GraphicDesignImg,
    textPrimary: "graphic design",
    textSecondary: "view projects",
    arrowIcon: RightArrowIcon,
    path: "graphic-design",
  },
];

const DesignsLinks = () => {
  return (
    <DesignsLinksWrapper>
      <ContainerEl>
        <DesignsLinksInnerWrapper>
          {linksData.map((link) => {
            return (
              <DesignsLinksLink
                key={link.path}
                $bgImg={link.img}
                to={link.path}
              >
                <DesignsLinksLinkTextsWrapper>
                  <DesignsLinksLinkTextPrimary>
                    {link.textPrimary}
                  </DesignsLinksLinkTextPrimary>
                  <DesignsLinksLinkTextSecondaryWrapper>
                    <DesignsLinksLinkTextSecondary>
                      {link.textSecondary}
                    </DesignsLinksLinkTextSecondary>
                    <ImageEl src={link.arrowIcon} />
                  </DesignsLinksLinkTextSecondaryWrapper>
                </DesignsLinksLinkTextsWrapper>
              </DesignsLinksLink>
            );
          })}
        </DesignsLinksInnerWrapper>
      </ContainerEl>
    </DesignsLinksWrapper>
  );
};

export default DesignsLinks;
