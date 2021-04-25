import styled from "styled-components";

export const DescriptionTextLight = styled.p`
  color: var(--light-gray);
  line-height: 1.6;
  max-width: 42rem;
  margin-bottom: 3rem;

  @media screen and (max-width: 950px) {
    margin: ${(props) => (props.homepage ? "0 auto 30px" : "")};
  }
`;
