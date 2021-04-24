import styled from "styled-components";
import { Link } from "react-router-dom";

export const ButtonPrimaryR = styled(Link)`
  background: var(--white);
  color: var(--black);
  border-radius: 0.5rem;
  padding: 1.3rem 2.3rem;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 1px;
  border: none;
  min-width: 15.2rem;
  text-align: center;
  font-family: var(--font-family-sans);
  align-self: ${(props) => (props.submitBtn ? "flex-end" : "")};
  font-size: 1.6rem;

  transition: background-color var(--transition), color var(--transition);

  &:hover {
    background: var(--black);
    color: var(--white);
  }
`;
