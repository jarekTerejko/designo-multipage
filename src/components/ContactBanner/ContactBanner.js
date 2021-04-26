import { ButtonPrimaryR } from "../ButtonPrimary/ButtonPrimaryElement";
import { ContainerEl } from "../Container/Container";
import { DescriptionTextLight } from "../DescriptionTextLight/DescriptionTextLight";
import { Heading } from "../Heading/Heading";
import {
  ContactBannerInnerWrapper,
  ContactBannerTextWrapper,
  ContactBannerWrapper,
} from "./ContactBannerElements";
import FiveCirclesBg from "../../images/shared/desktop/bg-pattern-call-to-action.svg";
import { useLocation } from "react-router";

const ContactBanner = () => {
  const location = useLocation();

  if (location.pathname !== "/contact") {
    return (
      <ContactBannerWrapper>
        <ContainerEl>
          <ContactBannerInnerWrapper fiveCirclesBg={FiveCirclesBg}>
            <ContactBannerTextWrapper>
              <Heading contactBanner as="h2">
                Let's talk about your project
              </Heading>
              <DescriptionTextLight contactBanner 
              // style={{ maxWidth: "480px" }}
              >
                Ready to take it to the next level? Contact us today and find
                out how our expertise can help your business grow.
              </DescriptionTextLight>
            </ContactBannerTextWrapper>
            <ButtonPrimaryR to="/contact">get in touch</ButtonPrimaryR>
          </ContactBannerInnerWrapper>
        </ContainerEl>
      </ContactBannerWrapper>
    );
  } else return null;
};

export default ContactBanner;
