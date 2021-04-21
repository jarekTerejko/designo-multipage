import { ContainerEl } from "../Container/Container";
import {
  HeroAlternateColPhoto,
  HeroAlternateColText,
  HeroAlternateInnerWrapper,
  HeroAlternateWrapper,
} from "./HeroAlternateElements";
import HeroImgD from "../../images/about/desktop/image-about-hero.jpg";
import HeroImgT from "../../images/about/tablet/image-about-hero.jpg";
import HeroImgM from "../../images/about/mobile/image-about-hero.jpg";
import BgPattern from "../../images/shared/desktop/bg-pattern-leaf.svg";
import { Heading } from "../Heading/Heading";
import { DescriptionTextLight } from "../DescriptionTextLight/DescriptionTextLight";

const HeroAlternate = () => {
  return (
    <HeroAlternateWrapper bgPattern={BgPattern}>
      <ContainerEl>
        <HeroAlternateInnerWrapper>
          <HeroAlternateColText>
            <Heading
              style={{
                marginBottom: "20px",
                fontSize: "42px",
              }}
            >
              About us
            </Heading>
            <DescriptionTextLight>
              Founded in 2010, we are a creative agency that produces lasting
              results for our clients. We’ve partnered with many startups,
              corporations, and nonprofits alike to craft designs that make real
              impact. We’re always looking forward to creating brands, products,
              and digital experiences that connect with our clients' audiences.
            </DescriptionTextLight>
          </HeroAlternateColText>
          <HeroAlternateColPhoto
            HeroImgD={HeroImgD}
            HeroImgT={HeroImgT}
            HeroImgM={HeroImgM}
          />
        </HeroAlternateInnerWrapper>
      </ContainerEl>
    </HeroAlternateWrapper>
  );
};

export default HeroAlternate;
