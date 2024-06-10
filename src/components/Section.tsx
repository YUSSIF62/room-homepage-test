import React from "react";
import styled from "styled-components";
import aboutDark from "../images/image-about-dark.jpg";
import aboutLight from "../images/image-about-light.jpg";

// Styled-components
const SectionWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  margin: 0;
  padding: 0;
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Article = styled.article<{ padded?: boolean }>`
  ${({ padded }) =>
    padded &&
    `
    padding: 2rem;
    @media (min-width: 1024px) {
      padding: 3rem;
    }
  `}
`;

const Image = styled.img`
  width: 100%;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  text-transform: uppercase;
  @media (min-width: 1024px) {
    font-size: 2rem;
  }
`;

const Paragraph = styled.p`
  margin-top: 1.5rem;
  opacity: 0.75;
  color: #1e293b; /* Tailwind's text-slate-900 color */
`;

const Section: React.FC = () => {
  return (
    <SectionWrapper>
      <Article>
        <Image src={aboutDark} alt="About Dark" />
      </Article>
      <Article padded>
        <Title>About our furniture</Title>
        <Paragraph>
          Our multifunctional collection blends design and function to suit
          your individual taste. Make each room unique, or pick a cohesive
          theme that best expresses your interests and what inspires you. Find
          the furniture pieces you need, from traditional to contemporary
          styles or anything in between. Product specialists are available to
          help you create your dream space.
        </Paragraph>
      </Article>
      <Article>
        <Image src={aboutLight} alt="About Light" />
      </Article>
    </SectionWrapper>
  );
};

export default Section;
