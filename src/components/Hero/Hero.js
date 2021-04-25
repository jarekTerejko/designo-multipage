import { ContainerEl } from "../Container/Container";
import { DescriptionTextLight } from "../DescriptionTextLight/DescriptionTextLight";
import { Heading } from "../Heading/Heading";
import { HeroInnerWrapper, HeroWrapper } from "./HeroElements";
import HeroPhoneImg from "../../images/home/desktop/image-hero-phone.png";
import CicrcleImg from "../../images/home/desktop/bg-pattern-hero-home.svg";
import BgPattern from "../../images/shared/desktop/bg-pattern-leaf.svg";
import { ButtonPrimaryR } from "../ButtonPrimary/ButtonPrimaryElement";
const Hero = () => {
  return (
    <HeroWrapper bgPattern={BgPattern}>
      <ContainerEl>
        <HeroInnerWrapper cicrcleImg={CicrcleImg} heroPhoneImg={HeroPhoneImg}>
          <Heading homepage>
            Award-winning custom designs and digital branding solutions
          </Heading>
          <DescriptionTextLight homepage>
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </DescriptionTextLight>
          <ButtonPrimaryR to="/our-company">learn more</ButtonPrimaryR>
        </HeroInnerWrapper>
      </ContainerEl>
    </HeroWrapper>
  );
};

export default Hero;
