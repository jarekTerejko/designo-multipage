import styled from "styled-components";

export const Heading = styled.h1`
  font-size: 4.8rem;
  font-size: ${(props) => (props.abilitiesSection ? `4.2rem` : "")};
  color: var(--white);
  color: ${(props) => (props.abilitiesSection ? `var(--peach)` : "")};
  margin-bottom: ${props => (props.abilitiesSection ? "3rem" : '')};
  font-weight: 500;
  line-height: 1.1;
`;
