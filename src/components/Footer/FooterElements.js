import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background: var(--black);
  padding-top: 15rem;
  padding-bottom: 7rem;
  position: relative;

  @media screen and (max-width: 630px) {
    padding-top: 20rem;
  }
  @media screen and (max-width: 320px) {
    padding-top: 25rem;
  }
  @media screen and (max-width: 260px) {
    padding-top: 30rem;
  }
`;

export const FooterRowTop = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--dark-gray);
  padding-bottom: 3rem;

  @media screen and (max-width: 630px) {
    display: block;
    text-align: center;
    /* margin: 0 auto; */
    border-bottom: none;
  }
`;

export const FooterRowBottom = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
  row-gap: 40px;
  padding-top: 3rem;

  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr 1fr;
    place-items: center;
  }

  @media screen and (max-width: 630px) {
    padding-top: 0;
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const FooterColLeft = styled.div`
  opacity: 0.7;
`;
export const FooterColMiddle = styled.div`
  opacity: 0.7;
`;
export const FooterColRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  @media screen and (max-width: 700px) {
    grid-column: 1/3;
  }
  @media screen and (max-width: 500px) {
    grid-column: 1/2;
  }
`;

export const FooterColsText = styled.p`
  font-weight: ${(props) => (props.textBold ? "600" : "")};
  color: var(--light-gray);
`;

export const FooterLink = styled.a`
  text-decoration: none;
  color: var(--light-gray);
`;

export const FooterNavItems = styled.ul`
  display: flex;
  list-style: none;
  transform: translateX(20px);
  transition: var(--transition);

  @media screen and (max-width: 630px) {
    transform: translate(0);
    display: block;
    border-top: 1px solid var(--dark-gray);
    padding-top: 3rem;
    margin-top: 3rem;
  }
`;

export const FooterSocialList = styled.ul`
  display: flex;
  list-style: none;
  transform: translate(6px, 3px);

  @media screen and (max-width: 700px) {
    transform: translate(0);
  }
`;
export const FooterSocialItem = styled.li`
  margin-left: 0.3rem;
  margin-right: 0.3rem;
`;
export const FooterSocialLink = styled.a`
  padding: 0.3rem;
`;
