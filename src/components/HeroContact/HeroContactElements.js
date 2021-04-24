import styled from "styled-components";

export const HeroContactWrapper = styled.header`
  margin-top: 15.8rem;
  margin-bottom: 16rem;
`;

export const HeroContactInnerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  min-height: 48rem;
  background: var(--peach);
  border-radius: 1.5rem;
  padding: 5rem 9rem 4rem 9rem;
  gap: 20px;
`;

export const HeroContactColText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-column: 1/5;
  padding-right: 8rem;
`;

export const HeroContactColForm = styled.div`
  grid-column: 5/8;
`;
