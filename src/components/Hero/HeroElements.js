import styled from "styled-components";

export const HeroWrapper = styled.header`
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

export const HeroInnerWrapper = styled.div`
  background: var(--peach);
  border-radius: 1.5rem;
  padding-left: 9rem;
  padding-top: 14rem;
  min-height: 64rem;
  overflow: hidden;
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background: ${(props) => `url(${props.heroPhoneImg})`};
    background-repeat: no-repeat;
    background-position-x: right;
    background-position-y: -30px;
    z-index: -1;
    transform: translateX(90px);
  }

  &::after {
    content: "";
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background: ${(props) => `url(${props.cicrcleImg})`};
    background-repeat: no-repeat;
    background-position: right;
    z-index: -1;
  }
`;
