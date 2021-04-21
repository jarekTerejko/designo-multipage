import { CardsDesignCardDescriptionText } from "../CardsDesign/CardsDesignELements";
import { ContainerEl } from "../Container/Container";
import { Heading } from "../Heading/Heading";
import {
  AbilitiesColText,
  AbilitiesInnerWrapper,
  AbilitiesWrapper,
  AbilitiesWrapperColPhoto,
} from "./AbilitiesElements";

const Abilities = ({
  first,
  imgD,
  imgT,
  imgM,
  heading,
  paragraphOne,
  paragraphTwo,
}) => {
  return (
    <AbilitiesWrapper first={first}>
      <ContainerEl>
        <AbilitiesInnerWrapper>
          <AbilitiesWrapperColPhoto
            first={first}
            TalentImgD={imgD}
            TalentImgM={imgM}
            TalentImgT={imgT}
          />
          <AbilitiesColText first={first}>
            <Heading as="h2" abilitiesSection>
              {heading}
            </Heading>
            <CardsDesignCardDescriptionText abilitiesSection>
              {paragraphOne}
            </CardsDesignCardDescriptionText>
            <CardsDesignCardDescriptionText abilitiesSection>
              {paragraphTwo}
            </CardsDesignCardDescriptionText>
          </AbilitiesColText>
        </AbilitiesInnerWrapper>
      </ContainerEl>
    </AbilitiesWrapper>
  );
};

export default Abilities;
