"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Header = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    console.log("🚀 ~ file: Header.tsx:8 ~ Header ~ scrollY:", scrollY);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);
  return (
    <Container scrollY={scrollY}>
      <Logo>
        Se
        <span>7</span>rawy
      </Logo>
      <LinkItems>
        <LinkItem>
          <a href="">Home</a>
        </LinkItem>
        <LinkItem>
          <a href="#about">About</a>
        </LinkItem>
        <LinkItem>
          <a href="#portfolio">Portfolio</a>
        </LinkItem>
        <LinkItem>
          <a href="#contact">Contact</a>
        </LinkItem>
      </LinkItems>
    </Container>
  );
};

interface Props {
  scrollY: number;
}

const Container = styled.div<Props>`
  display: flex;
  color: #f5f5f5;
  justify-content: space-between;
  background-color: ${(props) =>
    props.scrollY > 100 ? "#030200" : "transparent"};
  align-items: Center;
  height: 70px;
  padding: 0 48px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 200;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;

  @media screen and (max-width: 425px) {
    padding: 0 16px;
  }
`;

const Logo = styled.span`
  cursor: pointer;
  font-weight: bold;

  span {
    color: #f06000;
    font-weight: bold;
    font-size: 20px;
  }
  @media screen and (max-width: 425px) {
    font-size: 14px;
    font-weight: 600;
  }
`;

const LinkItems = styled.ul`
  display: flex;
  align-items: center;
  gap: 16px;

  @media screen and (max-width: 425px) {
    gap: 8px;
  }
`;

const LinkItem = styled.li`
  a {
    color: #f5f5f5;
    text-decoration: none;
    transition: all 0.3s ease 0s;

    @media screen and (max-width: 425px) {
      font-size: 12px;
    }
  }
  a:hover {
    color: #f06000;
  }
`;
export default Header;
