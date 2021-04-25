import styled from "styled-components";

export const HeroWrapper = styled.header`
  margin-top: 15.8rem;
  margin-bottom: 16rem;
  position: relative;

  @media screen and (max-width: 375px) {
    background: var(--peach);
  }

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

    @media screen and (max-width: 950px) {
      display: none;
    }
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

  @media screen and (max-width: 1000px) {
    padding-left: 3rem;
  }

  @media screen and (max-width: 950px) {
    padding: 5rem 2rem;
    text-align: center;
    min-height: 84rem;
  }

  @media screen and (max-width: 375px) {
    overflow: initial;
  }

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

    @media screen and (max-width: 950px) {
      background-position-x: center;
      transform: translateY(0);
      background-position-y: 280px;
    }

    @media screen and (max-width: 410px) {
      background-position-y: 330px;
      background-size: cover;
    }

    @media screen and (max-width: 375px) {
      width: calc(100% + 40px);
      left: -20px;
    }

    @media screen and (max-width: 305px) {
      background-position-y: 360px;
    }
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
    z-index: -2;

    @media screen and (max-width: 950px) {
      background-position-x: right;
      background-position-y: 100px;
    }

    @media screen and (max-width: 680px) {
      background-position-x: left;
    }

    @media screen and (max-width: 375px) {
      background-position-y: 75px;
      width: calc(100% + 40px);
      left: -20px;
    }
  }
`;
