import styled from "styled-components";
import { Link } from "react-router-dom";

export const DesignsLinksWrapper = styled.section`
  margin-bottom: ${(props) => (props.designsLinksPage ? "38rem" : "16rem")};
  // designsLinksPage
`;
export const DesignsLinksInnerWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 30px;
  row-gap: 24px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export const DesignsLinksLink = styled(Link)`
  background-image: ${(props) =>
    props.$small
      ? `linear-gradient(to bottom, rgba(0,0,0, .1), rgba(0,0,0, .9)), url(${props.$bgImg})`
      : `linear-gradient(to bottom, rgba(0,0,0, .1), rgba(0,0,0, .9)), url(${props.$bgLargeImg})`};
  background-repeat: no-repeat;
  background-size: 102%;
  background-position: center;
  position: relative;
  border-radius: 15px;
  color: var(--white);
  transition: color var(--transition), background-size var(--transition);

  &:hover,
  &:focus {
    color: var(--peach);
    background-size: 105%;
  }

  &:nth-child(1) {
    padding-top: ${(props) =>
      props.$small
        ? "calc(308 / 541 * 100%)"
        : "calc(640 / 541 * 100%)"}; // (img-height / img-width * container-width)
    grid-column: 1/2;
    grid-row: ${(props) => (props.$small ? "1/2" : "1/3")};

    @media screen and (max-width: 768px) {
      grid-row: unset;
      background-image: ${(props) =>
        `linear-gradient(to bottom, rgba(0,0,0, .1), rgba(0,0,0, .9)), url(${props.$bgImg})`};
      padding-top: calc(
        308 / 541 * 100%
      ); // (img-height / img-width * container-width)
    }
  }

  &:nth-child(2) {
    grid-column: 2/3;
    grid-row: 1/2;
    padding-top: calc(
      308 / 541 * 100%
    ); // (img-height / img-width * container-width)

    @media screen and (max-width: 768px) {
      grid-row: unset;
      grid-column: unset;
    }
  }

  &:nth-child(3) {
    grid-column: 2/3;
    grid-row: 2/3;
    padding-top: calc(
      308 / 541 * 100%
    ); // (img-height / img-width * container-width)

    @media screen and (max-width: 768px) {
      grid-row: unset;
      grid-column: unset;
    }
  }
`;

export const DesignsLinksLinkTextsWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  text-align: center;
  padding: 2rem;
`;

export const DesignsLinksLinkTextPrimary = styled.span`
  font-weight: 500;
  font-size: 4rem;
  letter-spacing: 2px;
  margin-bottom: 2rem;
`;
export const DesignsLinksLinkTextSecondary = styled.span`
  letter-spacing: 6px;
  margin-right: 2rem;
`;
export const DesignsLinksLinkTextSecondaryWrapper = styled.div`
  display: flex;
  align-items: center;
`;
