import styled from "styled-components";

export const BuildingProcessWrapper = styled.section`
  margin-bottom: 38rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    background: ${(props) => `url(${props.bgPattern})`};
    background-repeat: no-repeat;
    min-height: 594px;
    width: 100%;
    transform: rotate(180deg);
    top: 120px;
    right: 0;
    z-index: -1;

    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`;

export const BuildingProcessCols = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  gap: 30px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 50px;
  }

  @media screen and (max-width: 615px) {
    gap: 70px;
  }
`;

export const BuildingProcessCol = styled.div`
  text-align: center;

  @media screen and (max-width: 768px) {
    display: grid;
    gap: 50px;
    grid-template-columns: max-content 1fr;
    text-align: left;
    align-items: center;
  }

  @media screen and (max-width: 615px) {
    display: block;
    text-align: center;
  }
`;

export const BuildingProcessImgWrapper = styled.div`
  margin-bottom: 4rem;
  margin-left: auto;
  margin-right: auto;
  background: ${(props) => `url(${props.circleImg})`};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    margin-bottom: 0;
  }
  
  @media screen and (max-width: 615px) {
    margin-bottom: 4rem;
  }
`;

export const BuildingProcessTextWrapper = styled.div`
  @media screen and (max-width: 615px) {
    max-width: 40rem;
    margin: 0 auto;
  }
`;

export const BuildingProcessColTitle = styled.h3`
  font-size: 2rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  font-weight: 500;
  margin-bottom: 3rem;
`;
export const BuildingProcessColText = styled.p`
  font-size: 1.6rem;
  line-height: 1.6;
`;
