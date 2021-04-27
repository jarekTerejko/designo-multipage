import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const NavbarWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  background: var(--white);
  box-shadow: ${(props) =>
    props.$scrolledNav ? "1px 1px 10px 1px rgba(0,0,0, .2)" : ""};

  @media screen and (max-width: 750px) {
    box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.2);
  }
`;

export const NavbarInnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${(props) => (props.$scrolledNav ? "3rem 0" : `6rem 2rem`)};
  transition: padding var(--transition);

  @media screen and (max-width: 750px) {
    padding: 3.5rem 0;
  }
`;

export const NavbarSiteLinkR = styled(Link)``;

export const NavbarMenuBtn = styled.button`
  background: none;
  border: none;
  width: 4rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  display: none;

  @media screen and (max-width: 750px) {
    transform: translateX(6px);
    display: flex;
  }
`;

export const NavbarNavItems = styled.ul`
  display: flex;
  list-style: none;
  transform: translateX(20px);
  transition: var(--transition);

  @media screen and (max-width: 750px) {
    position: fixed;
    transform: ${(props) =>
      props.$isOpen ? `translateX(0)` : "translateX(-110%)"};
    left: 0;
    top: 99px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--white);
    width: 80%;
    height: calc(100vh - 99px);
    box-shadow: 1px 10px 8px 1px rgba(0, 0, 0, 0.2);
  }
`;

export const NavbarNavItem = styled.li`
  margin: 0 1rem;
`;

export const NavbarNavLinkR = styled(NavLink)`
  padding: 1rem;
  font-size: 1.2rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--black);
  color: ${(props) => (props.$footerLink ? "var(--light-gray)" : "")};
  transition: color var(--transition);

  &:hover {
    color: var(--peach);
  }

  &.active {
    color: var(--peach);
  }

  @media screen and (max-width: 630px) {
    margin-bottom: ${(props) => (props.$footerLink ? "1rem" : "")};
  }

  @media screen and (max-width: 550px) {
    font-size: 1.4rem;
  }
`;
