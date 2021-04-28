import styled from "styled-components";

export const HeroContactWrapper = styled.header`
  margin-top: 15.8rem;
  margin-bottom: 16rem;

  @media screen and (max-width: 450px) {
    background: var(--peach);
  }
`;

export const HeroContactInnerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  min-height: 48rem;
  background: var(--peach);
  border-radius: 1.5rem;
  padding: 5rem 9rem 4rem 9rem;
  gap: 20px;

  @media screen and (max-width: 768px) {
    display: block;
  }

  @media screen and (max-width: 600px) {
    padding: 5rem;
  }

  @media screen and (max-width: 450px) {
    padding: 5rem 1rem;
  }
`;

export const HeroContactColText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-column: 1/5;
  padding-right: 8rem;

  @media screen and (max-width: 768px) {
    padding-right: 0;
    margin-bottom: 2rem;
  }
  
  @media screen and (max-width: 450px) {
    text-align: center;
  }
`;
