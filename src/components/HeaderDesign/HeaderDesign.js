import FiveCirclesBg from "../../images/shared/desktop/bg-pattern-call-to-action.svg";
import { ContainerEl } from "../Container/Container";
import { DescriptionTextLight } from "../DescriptionTextLight/DescriptionTextLight";
import { Heading } from "../Heading/Heading";
import {
  HeaderDesignWrapper,
  HeaderDesignInnnerWrapper,
} from "./HeaderDesignElements";

const HeaderDesign = ({ heading, descriptionText }) => {
  return (
    <HeaderDesignWrapper>
      <ContainerEl>
        <HeaderDesignInnnerWrapper fiveCirclesBg={FiveCirclesBg}>
          <Heading
            style={{
              marginBottom: "20px",
              fontSize: "42px",
              textAlign: "center",
            }}
          >
            {heading}
          </Heading>
          <DescriptionTextLight
            style={{
              maxWidth: "400px",
              textAlign: "center",
            }}
          >
            {descriptionText}
          </DescriptionTextLight>
        </HeaderDesignInnnerWrapper>
      </ContainerEl>
    </HeaderDesignWrapper>
  );
};

export default HeaderDesign;
