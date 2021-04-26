import styled from "styled-components";

export const ContactBannerWrapper = styled.section`
  min-height: 292px;
  position: absolute;
  width: 100%;
  top: -222px;
  left: 0;
`;

export const ContactBannerInnerWrapper = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--peach);
  border-radius: 1.5rem;
  padding: 5rem 9rem;
  overflow: hidden;

  @media screen and (max-width: 930px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5rem 2rem;
    text-align: center;
    margin: 0 auto;
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: ${(props) => `url(${props.fiveCirclesBg})`};
    background-position-x: right;
    background-position-y: center;
    background-repeat: no-repeat;
    z-index: -1;
  }
`;

export const ContactBannerTextWrapper = styled.div``;
