import styled from "styled-components";
import { Link } from "react-router-dom";

export const DesignsLinksWrapper = styled.section`
  margin-bottom: 16rem;
`;
export const DesignsLinksInnerWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  column-gap: 30px;
  row-gap: 24px;
`;
export const DesignsLinksLink = styled(Link)`
  padding-top: calc(
    640 / 541 * 100%
  ); // (img-height / img-width * container-width)
  /* background: ${(props) => `url(${props.$bgImg})`}; */
  background-image: ${(props) =>
    `linear-gradient(to bottom, rgba(0,0,0, .1), rgba(0,0,0, .9)), url(${props.$bgImg})`};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  position: relative;
  border-radius: 15px;
  color: var(--white);
  transition: color var(--transition);

  &:hover {
    color: var(--peach);
  }

  &:nth-child(1) {
    grid-column: 1/2;
    grid-row: 1/3;
  }

  &:nth-child(2) {
    grid-column: 2/3;
    grid-row: 1/2;
    padding-top: calc(
      308 / 541 * 100%
    ); // (img-height / img-width * container-width)
  }

  &:nth-child(3) {
    grid-column: 2/3;
    grid-row: 2/3;
    padding-top: calc(
      308 / 541 * 100%
    ); // (img-height / img-width * container-width)
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
  /* color: var(--white); */
  text-transform: uppercase;
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
