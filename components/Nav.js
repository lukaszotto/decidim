import React, { useState, useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";
const Nav = () => {
  const router = useRouter();
  const [menuActive, setMenuActive] = useState(false);
  const handleToggle = (e) => {
    e.preventDefault();
    setMenuActive(!menuActive);
  };
  useEffect(() => {
    setMenuActive(false);
  }, [router.pathname]);
  return (
    <div>
      <TopBar>
        <ContainerWrapper>
          <Link href="/">
            <img src="/images/logo_gdynia.jpg" alt="hamburger menu"></img>
          </Link>
        </ContainerWrapper>
        <TopBarToggle onClick={handleToggle}>
          <i class="fa fa-bars"></i>
        </TopBarToggle>
      </TopBar>
      <NavBar menuActive={menuActive}>
        <NavBarWrapper>
          <Link href="/" role="button">
            <StyledLink>Home</StyledLink>
          </Link>
          <Link href="/processes">
            <StyledLink>processes</StyledLink>
          </Link>
        </NavBarWrapper>
      </NavBar>
    </div>
  );
};

export default Nav;

const TopBar = styled.div`
  background-color: #12203d;
  position: relative;
  height: 90px;
`;

const NavBar = styled.div`
  background-color: #f9f6f6;
  z-index: 3;
  @media (max-width: 768px) {
    position: absolute;
    top: 90px;
    right: 0px;
    width: 100%;
    bottom: 0px;
    transition: transform 0.3s ease-in-out;
    ${(props) =>
      props.menuActive
        ? "transform: translateX(0);"
        : "transform: translateX(-100%);"}
  }
`;

const TopBarToggle = styled.a`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 60px;
  height: 90px;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 30px;
  }
`;

const ContainerWrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 21px;
`;

const NavBarWrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  @media (max-width: 768px) {
    padding: 21px;
  }
`;

const StyledLink = styled.div`
  display: inline-block;
  margin-right: 13px;
  text-transform: uppercase;
  padding: 21px;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  @media (min-width: 768px) {
    &:hover {
      border-bottom: 2px solid black;
    }
  }
  @media (max-width: 768px) {
    display: block;
    margin-right: 0;
    margin-bottom: 13px;
    text-align: center;
    font-size: 21px;
    font-weight: 400;
    padding: 8px;
  }
`;
