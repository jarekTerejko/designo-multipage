import styled from "styled-components";

export const Heading = styled.h1`
  font-size: 4.8rem;
  margin-bottom: ${(props) => (props.homepage ? "30px" : "")};
  font-size: ${(props) => (props.abilitiesSection ? `4.2rem` : "")};
  color: var(--white);
  color: ${(props) => (props.abilitiesSection ? `var(--peach)` : "")};
  margin-bottom: ${(props) => (props.abilitiesSection ? "3rem" : "")};
  font-weight: 500;
  line-height: 1.1;
  max-width: 50rem;
  max-width: ${(props) => (props.contactBanner ? "360px" : "")};
  margin-bottom: ${(props) => (props.contactBanner ? "20px" : "")};
  font-size: ${(props) => (props.contactBanner ? "42px" : "")};

  @media screen and (max-width: 950px) {
    font-size: 3.8rem;
    margin-left: ${(props) => (props.homepage ? "auto" : "")};
    margin-right: ${(props) => (props.homepage ? "auto" : "")};
    max-width: ${(props) => (props.homepage ? "390px" : "")};
  }

  @media screen and (max-width: 930px) {
    max-width: ${(props) => (props.contactBanner ? "320px" : "")};
    margin: ${(props) => (props.contactBanner ? "0 auto 20px" : "")};
  }

  @media screen and (max-width: 410px) {
    font-size: 2.6rem;
    font-size: ${(props) => (props.contactBanner ? "3.6rem" : "")};
  }

  @media screen and (max-width: 375px) {
  }
`;
