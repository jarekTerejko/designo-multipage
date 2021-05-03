import styled from "styled-components";

export const AbilitiesWrapper = styled.section`
  margin-bottom: ${(props) => (props.first ? "16rem" : "38rem")};
`;
export const AbilitiesInnerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  border-radius: 1.5rem;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const AbilitiesWrapperColPhoto = styled.div`
  grid-column: ${(props) => (props.first ? "1/4" : "5/8")};
  padding-top: calc(
    640 / 476 * 100%
  ); // (img-height / img-width * container-width)
  background: ${(props) => `url(${props.ImgD})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media screen and (max-width: 768px) {
    grid-row: 1/2;
    grid-column: 1/2;
    padding-top: calc(
      320 / 689 * 100%
    ); // (img-height / img-width * container-width)
    background: ${(props) => `url(${props.ImgT})`};
    background-size: cover;
    /* background-repeat: no-repeat; */
    background-position: center;
  }
  
  @media screen and (max-width: 415px) {
    padding-top: calc(
      320 / 375 * 100%
    ); // (img-height / img-width * container-width)
    background: ${(props) => `url(${props.ImgM})`};
    background-position: center;
    background-size: cover;
  }
`;

export const AbilitiesColText = styled.div`
  grid-column: ${(props) => (props.first ? "4/8" : "1/5")};
  padding: 14rem 9rem;
  background: rgb(255 238 235);
  grid-row: 1/2;

  @media screen and (max-width: 1030px) {
    padding: 7rem 5rem;
  }

  @media screen and (max-width: 768px) {
    grid-row: 2/3;
    grid-column: 1/2;
  }

  @media screen and (max-width: 415px) {
    grid-row: 2/3;
    grid-column: 1/2;
    padding: 5rem 2rem;
  }
`;
