import { ContainerEl } from "../Container/Container";
import {
  DesignsLinksInnerWrapper,
  DesignsLinksLink,
  DesignsLinksLinkTextPrimary,
  DesignsLinksLinkTextSecondary,
  DesignsLinksLinkTextSecondaryWrapper,
  DesignsLinksLinkTextsWrapper,
  DesignsLinksWrapper,
} from "./DesignsLinks/DesignsLinksElements";
import { ImageEl } from "../Image/Image";

const DesignsLinksPage = ({ linksData, designsLinksPage }) => {
  return (
    <>
      <DesignsLinksWrapper designsLinksPage={designsLinksPage}>
        <ContainerEl>
          <DesignsLinksInnerWrapper>
            {linksData.map((link) => {
              return (
                <DesignsLinksLink
                  key={link.path}
                  $bgImg={link.img}
                  $bgLargeImg={link.imgLarge}
                  to={link.path}
                  $small={link.imgLarge ? false : true}
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
    </>
  );
};

export default DesignsLinksPage;
