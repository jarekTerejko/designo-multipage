import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardsDesignWrapper = styled.main`
  margin-bottom: 16rem;
`;
export const CardsDesignInnerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  gap: 20px;

  @media screen and (max-width: 310px) {
    grid-template-columns: 1fr;
  }
`;
export const CardsDesignCardTitle = styled.h3`
  letter-spacing: 5px;
  color: var(--peach);
  text-transform: uppercase;
  text-align: center;
  transition: var(--transition);
  margin-bottom: 2rem;
`;

export const CardsDesignCardDescriptionText = styled.p`
  font-size: 1.6rem;
  line-height: 1.6;
  color: var(--black);
  transition: var(--transition);
  text-align: center;
  text-align: ${(props) => (props.abilitiesSection ? "left" : "")};
  margin-bottom: ${(props) => (props.abilitiesSection ? "3rem" : "")};
`;

export const CardsDesignCardTextContainer = styled.div`
  padding: 3rem;
`;

export const CardsDesignCard = styled(Link)`
  border-radius: 1.5rem;
  transition: var(--transition);
  background: rgba(255, 172, 153, 0.2);
  box-shadow: 1px 1px 20px 10px rgb(0, 0, 0, 0.1);
  overflow: hidden;

  &:hover {
    background: var(--peach);
  }

  &:hover ${CardsDesignCardTitle} {
    color: var(--white);
  }

  &:hover ${CardsDesignCardDescriptionText} {
    color: var(--white);
  }
`;
