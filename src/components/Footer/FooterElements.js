import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background: var(--black);
  padding-top: 15rem;
  padding-bottom: 7rem;
  position: relative;
`;

export const FooterRowTop = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--dark-gray);
  padding-bottom: 3rem;
`;

export const FooterRowBottom = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 10px;
  padding-top: 3rem;
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
`;

export const FooterSocialList = styled.ul`
  display: flex;
  list-style: none;
  transform: translate(6px, 3px);
`;
export const FooterSocialItem = styled.li`
  margin-left: 0.3rem;
  margin-right: 0.3rem;
`;
export const FooterSocialLink = styled.a`
  padding: 0.3rem;
`;
