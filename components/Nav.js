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
        <ContainerWrapper>
          <StyledLink>
            <Link href="/">Home</Link>
          </StyledLink>
          <StyledLink>
            <Link href="/processes">page</Link>
          </StyledLink>
        </ContainerWrapper>
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

const StyledLink = styled.div`
  display: inline-block;
  margin-right: 13px;
  text-transform: uppercase;
  @media (max-width: 768px) {
    display: block;
    margin-right: 0;
    margin-bottom: 13px;
    text-align: center;
  }
`;