import styled from "styled-components";

export const ContactFormWrapper = styled.form`
  grid-column: 5/8;
  display: flex;
  flex-direction: column;
`;

export const ContactFormRow = styled.div`
  margin-bottom: 3.4rem;
  position: relative;
`;

export const ContactFormLabel = styled.label`
  display: block;
  height: 0;
  visibility: hidden;
`;

export const ContactFormTextInput = styled.input`
  display: block;
  width: 100%;
  padding: 0.8rem 1.2rem;
  border: 1px solid transparent;
  background: transparent;
  color: var(--white);
  transition: var(--transition) border-color;
  font-family: var(--font-family-sans);
  font-size: 1.4rem;
  outline: none;
  border-bottom-color: var(--light-gray);

  &::placeholder {
    color: var(--light-gray);
  }

  &:focus {
    border-bottom-color: var(--white);
  }
`;

export const ContactFormErrorMsg = styled.span`
  color: red;
  display: block;
  font-size: 1.2rem;
  position: absolute;
  left: 12px;
  bottom: -20px;
`;

export const ContactFormTextarea = styled.textarea`
  display: block;
  background: transparent;
  font-family: var(--font-family-sans);
  font-size: 1.4rem;
  color: var(--white);
  padding: 1.2rem;
  width: 100%;
  border: 1px solid transparent;
  min-height: 9rem;
  outline: none;
  transition: var(--transition) border-color;
  border-bottom-color: var(--light-gray);

  &::placeholder {
    color: var(--light-gray);
  }

  &:focus {
    border-bottom-color: var(--white);
  }
`;
