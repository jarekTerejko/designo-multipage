import styled from "styled-components";

export const HeaderDesignWrapper = styled.header`
  margin-top: 15.8rem;
  margin-bottom: 30rem;
`;
export const HeaderDesignInnnerWrapper = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: var(--peach);
  border-radius: 1.5rem;
  padding: 7rem 9rem;
  overflow: hidden;
  min-height: 29.2rem;

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
    transform: rotateX(180deg);
  }
`;
