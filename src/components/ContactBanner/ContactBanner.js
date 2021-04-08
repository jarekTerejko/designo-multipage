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

const ContactBanner = () => {
  return (
    <ContactBannerWrapper>
      <ContainerEl>
        <ContactBannerInnerWrapper fiveCirclesBg={FiveCirclesBg}>
          <ContactBannerTextWrapper>
            <Heading
              as="h2"
              style={{
                maxWidth: "400px",
                marginBottom: "10px",
                fontSize: "42px",
              }}
            >
              Let's talk about your project
            </Heading>
            <DescriptionTextLight style={{ maxWidth: "480px" }}>
              Ready to take it to the next level? Contact us today and find out
              how our expertise can help your business grow.
            </DescriptionTextLight>
          </ContactBannerTextWrapper>
          <ButtonPrimaryR to="/contact">get in touch</ButtonPrimaryR>
        </ContactBannerInnerWrapper>
      </ContainerEl>
    </ContactBannerWrapper>
  );
};

export default ContactBanner;
