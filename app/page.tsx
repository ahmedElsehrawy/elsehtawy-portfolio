"use client";
import styled from "styled-components";
import HeaderImage from "@/public/header3.jpg";
import { ArrowRightOutlined } from "@ant-design/icons";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import CustomButton from "./components/CustomButton";

export default function Home() {
  return (
    <Container>
      <LandingPage headerImage={HeaderImage}>
        <div className="overlay">
          <h1>Welcome to My Portfolio!</h1>
          <h1>Please Discover!</h1>
          <h1>My Work</h1>
          <CustomButton title="Portfolio" icon={<ArrowRightOutlined />} />
        </div>
      </LandingPage>
      <div id="about">
        <About />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </Container>
  );
}

interface Props {
  headerImage: any;
}

const Container = styled.div`
  .overlay {
    position: absolute;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100%;
    background: #0e0606a7;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #e2e2e2c5;
    flex-direction: column;
    gap: 8px;
  }

  h1 {
    @media screen and (max-width: 768px) {
      font-size: 24px;
    }

    @media screen and (max-width: 425px) {
      font-size: 20px;
    }
  }
`;

const LandingPage = styled.div<Props>`
  height: 100vh;
  width: 100%;
  background-image: url(${(props) => props.headerImage.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
