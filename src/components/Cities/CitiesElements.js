import styled from "styled-components";
import { ButtonPrimaryR } from "../ButtonPrimary/ButtonPrimaryElement";
import { BuildingProcessImgWrapper } from "../BuldingProcess/BuildingProcessElements";

export const CitiesWrapper = styled.article`
  margin-bottom: 16rem;
`;
export const CitiesInnerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  column-gap: 40px;
  row-gap: 80px;
  place-items: center;
`;
export const CitiesCityCol = styled.div`
  text-align: center;
`;

export const CitiesCityImgWrapper = styled(BuildingProcessImgWrapper)``;

export const CitiesCityName = styled.h3`
  text-transform: uppercase;
  margin-bottom: 3rem;
`;
export const CitiesButtonR = styled(ButtonPrimaryR)`
  background: var(--peach);
  color: var(--light-gray);
`;
