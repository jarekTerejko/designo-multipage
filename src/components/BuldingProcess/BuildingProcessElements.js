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
  }
`;

export const BuildingProcessCols = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
`;

export const BuildingProcessCol = styled.div`
  text-align: center;
  display: grid;
  grid-template-columns: 1fr;
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
`;

export const BuildingProcessTextWrapper = styled.div``;

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
