"use client";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import MeImg from "../../public/me.jpg";

const About = () => {
  return (
    <Container>
      <h2>ABOUT ME</h2>
      <Content>
        <StyledImage
          src={MeImg}
          width={400}
          height={400}
          alt="Picture of the author"
        />
        <div>
          <h3>Welcome!</h3>
          <p>
            Iam a Web Developer with extensive experience for over 5 years. My
            expertise is to create and Websites design, graphic design and many
            more...
          </p>
          <p>
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum
          </p>
          <DownloadCV>Download CV</DownloadCV>
        </div>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  background-color: #030200;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
  position: relative;

  h3 {
    color: #f06000;
  }

  h2 {
    color: #f5f5f5;
    border-bottom: 3px solid #f06000;
    margin-bottom: 48px;
  }
`;

const Content = styled.div`
  color: #f5f5f5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 48px;
  gap: 16px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  h3,
  p {
    word-spacing: 3px;
    line-height: 32px;
    padding: 0 30px;
    margin-bottom: 16px;

    @media screen and (max-width: 425px) {
      padding: 0;
    }
  }
`;

const StyledImage = styled(Image)`
  @media screen and (max-width: 425px) {
    width: 100%;
  }
`;

const DownloadCV = styled.button`
  padding: 20px 20px;
  font-size: 13px !important;
  background-color: #f06000 !important;
  color: #fff !important;
  border: none !important;
  margin: 30px;
  transition: all 0.4s ease-in-out 0s;
  line-height: 10px;
  border-radius: 4px;

  &:hover {
    color: #f06000 !important;
    background: #fff !important;
  }
`;

export default About;
