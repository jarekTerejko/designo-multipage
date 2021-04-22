import styled from "styled-components";
import { Heading } from "../Heading/Heading";

export const OfficesWrapper = styled.section`
  margin-top: 15.8rem;
  margin-bottom: 41rem;
`;
export const OfficesInnerWrapper = styled.div``;

export const OfficesSingleOffice = styled.article`
  display: grid;
  gap: 30px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: "textCol textCol map";
  border-radius: 1.5rem;
  margin-bottom: 3rem;

  &:nth-child(even) {
    grid-template-areas: "map textCol textCol";
  }

  @media screen and (max-width: 750px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      "map map"
      "textCol textCol";

    &:nth-child(even) {
      grid-template-areas:
        "map map"
        "textCol textCol";
    }
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "map"
      "textCol";
    &:nth-child(even) {
      grid-template-areas:
        "map"
        "textCol";
    }
  }
`;

export const OfficesTextColumn = styled.div`
  grid-area: textCol;
  border-radius: 1.5rem;
  background: rgb(255 238 235);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  padding-left: 9rem;

  @media screen and (max-width: 900px) {
    padding: 3rem;
  }

  @media screen and (max-width: 500px) {
    display: block;
  }
`;

export const OfficesTextColumnInner = styled.div`
  border-radius: 1.5rem;
  background: rgb(255 238 235);
`;

export const OfficesMapColumn = styled.div`
  grid-area: map;
  padding-top: calc(
    320 / 375 * 100%
  ); // (img-height / img-width * container-width)
  background: ${(props) => `url(${props.imgDM})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 1.5rem;

  @media screen and (max-width: 750px) {
    background: ${(props) => `url(${props.imgDM})`};
    padding-top: calc(
      326 / 689 * 100%
    ); // (img-height / img-width * container-width)
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  @media screen and (max-width: 375px) {
    padding-top: calc(
      320 / 375 * 100%
    ); // (img-height / img-width * container-width)
    background: ${(props) => `url(${props.imgDM})`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
`;

export const OfficesHeading = styled(Heading)`
  color: var(--peach);
  grid-column: 1/3;
  align-self: end;
  margin-bottom: 2rem;
  font-size: 4.2rem;
`;

export const OfficesParagraph = styled.p`
  color: var(--black);
  margin-bottom: 0.3rem;
`;

export const OfficesLink = styled.a`
  text-decoration: none;
  color: var(--black);
`;
