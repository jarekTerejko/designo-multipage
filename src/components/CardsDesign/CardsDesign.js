import { ContainerEl } from "../Container/Container";
import {
  CardsDesignCard,
  CardsDesignCardDescriptionText,
  CardsDesignCardTextContainer,
  CardsDesignCardTitle,
  CardsDesignInnerWrapper,
  CardsDesignWrapper,
} from "./CardsDesignELements";
import { ImageEl } from "../Image/Image";

const CardsDesign = ({ designsData }) => {
  return (
    <CardsDesignWrapper>
      <ContainerEl>
        <CardsDesignInnerWrapper>
          {designsData.map((card) => {
            return (
              <CardsDesignCard to="#" key={card.title}>
                <ImageEl src={card.img} />
                <CardsDesignCardTextContainer>
                  <CardsDesignCardTitle>{card.title}</CardsDesignCardTitle>
                  <CardsDesignCardDescriptionText>
                    {card.description}
                  </CardsDesignCardDescriptionText>
                </CardsDesignCardTextContainer>
              </CardsDesignCard>
            );
          })}
        </CardsDesignInnerWrapper>
      </ContainerEl>
    </CardsDesignWrapper>
  );
};

export default CardsDesign;
