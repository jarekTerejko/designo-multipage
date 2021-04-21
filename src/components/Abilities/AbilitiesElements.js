import styled from "styled-components";

export const AbilitiesWrapper = styled.section`
  margin-bottom: ${(props) => (props.first ? "16rem" : "38rem")};
`;
export const AbilitiesInnerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  border-radius: 1.5rem;
  overflow: hidden;
`;

export const AbilitiesWrapperColPhoto = styled.div`
  grid-column: ${(props) => (props.first ? "1/4" : "5/8")};
  padding-top: calc(
    640 / 476 * 100%
  ); // (img-height / img-width * container-width)
  background: ${(props) => `url(${props.TalentImgD})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;



export const AbilitiesColText = styled.div`
  grid-column: ${(props) => (props.first ? "4/8" : "1/5")};
  padding: 16rem 9rem;
  background: rgb(255 238 235);
  grid-row: 1/2;
`;

