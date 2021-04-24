import ContactForm from "../ContactForm/ContactForm";
import { ContainerEl } from "../Container/Container";
import { DescriptionTextLight } from "../DescriptionTextLight/DescriptionTextLight";
import { Heading } from "../Heading/Heading";
import {
  HeroContactColText,
  HeroContactInnerWrapper,
  HeroContactWrapper,
} from "./HeroContactElements";

const HeroContact = () => {
  return (
    <HeroContactWrapper>
      <ContainerEl>
        <HeroContactInnerWrapper>
          <HeroContactColText>
            <Heading
              style={{
                marginBottom: "20px",
                fontSize: "42px",
              }}
            >
              Contact Us
            </Heading>
            <DescriptionTextLight>
              Ready to take it to the next level? Let’s talk about your project
              or idea and find out how we can help your business grow. If you
              are looking for unique digital experiences that’s relatable to
              your users, drop us a line.
            </DescriptionTextLight>
          </HeroContactColText>
          <ContactForm />
        </HeroContactInnerWrapper>
      </ContainerEl>
    </HeroContactWrapper>
  );
};

export default HeroContact;
