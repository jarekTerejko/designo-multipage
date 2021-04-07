import { useState, useEffect } from "react";
import Bars from "../../images/shared/mobile/icon-hamburger.svg";
import Close from "../../images/shared/mobile/icon-close.svg";
import Logo from "../../images/shared/desktop/logo-dark.png";
import {
  NavbarInnerWrapper,
  NavbarWrapper,
  NavbarSiteLinkR,
  NavbarMenuBtn,
  NavbarNavLinkR,
  NavbarNavItems,
  NavbarNavItem,
} from "./NavbarElements";
import { ContainerEl } from "../Container/Container";
import { ImageEl } from "../Image/Image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolledNav, setScrolledNav] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  const changeNav = () => {
    if (window.scrollY > 0) {
      setScrolledNav(true);
    } else {
      setScrolledNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
    return () => {
      window.removeEventListener("scroll", changeNav);
    };
  }, []);

  const closeMenu = () => {
    if (isOpen) {
      handleMenu();
    } else {
      return;
    }
  };

  return (
    <NavbarWrapper $scrolledNav={scrolledNav}>
      <ContainerEl>
        <NavbarInnerWrapper $scrolledNav={scrolledNav}>
          <NavbarSiteLinkR to="/" $isOpen={isOpen} onClick={closeMenu}>
            <ImageEl style={{ maxWidth: "194px" }} src={Logo} alt="Logo" />
          </NavbarSiteLinkR>
          <NavbarMenuBtn onClick={handleMenu}>
            <ImageEl
              src={isOpen ? `${Close}` : `${Bars}`}
              alt={isOpen ? "Close Menu" : "Open Menu"}
            />
          </NavbarMenuBtn>
          <NavbarNavItems $isOpen={isOpen}>
            <NavbarNavItem>
              <NavbarNavLinkR
                to="/our-company"
               $isOpen={isOpen}
                onClick={handleMenu}
                // exact={true}
              >
                our company
              </NavbarNavLinkR>
            </NavbarNavItem>
            <NavbarNavItem>
              <NavbarNavLinkR
                to="/locations"
                $isOpen={isOpen}
                onClick={handleMenu}
              >
                locations
              </NavbarNavLinkR>
            </NavbarNavItem>
            <NavbarNavItem>
              <NavbarNavLinkR
                to="/contact"
                $isOpen={isOpen}
                onClick={handleMenu}
              >
                contact
              </NavbarNavLinkR>
            </NavbarNavItem>
          </NavbarNavItems>
        </NavbarInnerWrapper>
      </ContainerEl>
    </NavbarWrapper>
  );
};

export default Navbar;
