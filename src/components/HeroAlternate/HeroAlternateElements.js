import styled from "styled-components";

export const HeroAlternateWrapper = styled.header`
  margin-top: 15.8rem;
  margin-bottom: 16rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    background: ${(props) => `url(${props.bgPattern})`};
    background-repeat: no-repeat;
    height: 594px;
    width: 100%;
    top: 340px;
    left: 0;
    z-index: -1;
  }
`;

export const HeroAlternateInnerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  /* min-height: 48rem; */
  background: var(--peach);
  border-radius: 1.5rem;
  overflow: hidden;
`;

export const HeroAlternateColText = styled.div`
  padding: 12rem 9rem;
  grid-column: 1/5;
`;

export const HeroAlternateColPhoto = styled.div`
  grid-column: 5/8;
  padding-top: calc(
    480 / 476 * 100%
  ); // (img-height / img-width * container-width)
  background: ${(props) => `url(${props.HeroImgD})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
