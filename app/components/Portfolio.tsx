import Image from "next/image";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import meImg from "../../public/me.jpg";
import netflixCloneImg from "../../public/netlix.jpg";
import socialMediaApp from "../../public/socialmediaapp.jpg";

const categories = [
  { name: "all" },
  { name: "frontend" },
  { name: "backend" },
  { name: "fullstack" },
];

interface Projects {
  all: any;
  frontend: any;
  backend: any;
  fullstack: any;
}

const projects: Projects = {
  all: [
    {
      name: "Netflix Clone",
      link: "https://netflix-72e5a.web.app/",
      image: netflixCloneImg,
    },
  ],
  frontend: [
    {
      name: "Netflix Clone",
      link: "https://netflix-72e5a.web.app/",
      image: netflixCloneImg,
    },
    {
      name: "Netflix Clone 2",
      link: "https://netflix-72e5a.web.app/",
      image: socialMediaApp,
    },
  ],
  backend: [
    {
      name: "Netflix Clone",
      link: "https://netflix-72e5a.web.app/",
      image: netflixCloneImg,
    },
    {
      name: "Social media app",
      link: "https://elsehrawysocialmediaapp.netlify.app/",
      image: socialMediaApp,
    },
  ],
  fullstack: [
    {
      name: "Netflix Clone",
      link: "https://netflix-72e5a.web.app/",
      image: netflixCloneImg,
    },
  ],
};

enum Category {
  all = "all",
  frontend = "frontend",
  backend = "backend",
  fullstack = "fullstack",
}

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>(
    Category.all
  );

  useEffect(() => {
    // code of changing projects
  }, [selectedCategory]);
  return (
    <Container>
      <h2>MY PORTFOLIO</h2>
      <CategoryContainer>
        {categories.map((cat) => (
          <CategoryBtn
            key={cat.name}
            //@ts-ignore
            onClick={() => setSelectedCategory(cat.name)}
            selected={selectedCategory == cat.name ? true : false}
          >
            {cat.name}
          </CategoryBtn>
        ))}
      </CategoryContainer>
      <div className="grid">
        {projects[selectedCategory].map((project: any) => (
          <ImageContainer
            key={project.name}
            src={project.image}
            width={300}
            height={300}
            objectFit="contain"
            id="grid_image"
            alt="Sample photo"
          />
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 50px 0;

  h2 {
    color: #030200;
    border-bottom: 3px solid #f06000;
    margin-bottom: 48px;
  }

  .grid {
    width: 90%;
    margin: 48px auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 20px;
    align-items: stretch;
  }
`;

const ImageContainer = styled(Image)`
  box-shadow: 2px 6px 6px 0px rgba(0, 0, 0, 0.3);
  max-width: 100%;
  margin: 0 auto;
  border-radius: 5px;
  cursor: pointer;
`;

const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`;

interface Props {
  selected?: boolean;
}

const CategoryBtn = styled.button<Props>`
  background-color: ${(props) =>
    props.selected ? "#f06000" : "#030200"} !important;
  border: none !important;
  color: ${(props) => (props.selected ? "#030200" : "#fff")} !important;
  transition: all 0.4s ease-in-out 0s;
  border-radius: 50px;
  padding: 7px 25px;
  font-weight: 600;

  &:hover {
    color: ${(props) => (props.selected ? "#fff" : "#f06000")} !important;
  }

  @media screen and (max-width: 768px) {
    padding: 5px 18px;
  }

  @media screen and (max-width: 425px) {
    padding: 5px 10px;
    font-weight: 500;
    border-radius: 30px;
  }
`;

export default Portfolio;
