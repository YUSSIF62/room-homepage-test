import React, { useState } from "react";
import styled from "styled-components";
import arrow from "../images/icon-arrow.svg";
import left from "../images/icon-angle-left.svg";
import right from "../images/icon-angle-right.svg";

interface DataItem {
  id: number;
  title: string;
  desc: string;
  mobile: string;
  desktop: string;
}

const data: DataItem[] = [
  {
    id: 1,
    title: "Discover innovative ways to decorate",
    desc: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    mobile: "./images/mobile-image-hero-1.jpg",
    desktop: "./images/desktop-image-hero-1.jpg",
  },
  {
    id: 2,
    title: "We are available all across the globe",
    desc: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    mobile: "./images/mobile-image-hero-2.jpg",
    desktop: "./images/desktop-image-hero-2.jpg",
  },
  {
    id: 3,
    title: "Manufactured with the best materials",
    desc: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    mobile: "./images/mobile-image-hero-3.jpg",
    desktop: "./images/desktop-image-hero-3.jpg",
  },
];

const SectionWrapper = styled.section`
  margin: 0;
  padding: 0;
`;

const Article = styled.article<{ visible: boolean }>`
  display: ${({ visible }) => (visible ? "grid" : "none")};
  grid-template-columns: 1fr;
  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    place-items: center;
  }
`;

const Picture = styled.picture`
  position: relative;
`;

const Image = styled.img`
  width: 100%;
`;

const Controls = styled.ul`
  position: absolute;
  right: 0;
  bottom: -0.5rem;
  display: flex;
`;

const ControlButton = styled.button`
  transition: all 0.2s;
  background: black;
  &:hover {
    background: #4b5563; /* Tailwind's bg-neutral-700 color */
  }
  img {
    padding: 1.5rem;
  }
`;

const Content = styled.div`
  padding: 2rem;
  @media (min-width: 1024px) {
    padding: 3rem;
  }
`;

const Title = styled.h1`
  font-size: 1.875rem; /* Tailwind's text-3xl size */
  color: #1e293b; /* Tailwind's text-slate-900 color */
  @media (min-width: 1024px) {
    font-size: 3rem; /* Tailwind's text-5xl size */
  }
`;

const Description = styled.p`
  margin: 1.5rem 0;
  opacity: 0.75;
  color: #1e293b; /* Tailwind's text-slate-900 color */
`;

const ShopButton = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;
  text-transform: uppercase;
  &:hover {
    opacity: 0.75;
  }
  letter-spacing: 0.7rem;
`;

const Showcase: React.FC = () => {
  const [items] = useState<DataItem[]>(data);
  const [slideIndex, setSlideIndex] = useState<number>(1);

  const nextSlide = () => {
    setSlideIndex((prev) => (prev !== items.length ? prev + 1 : 1));
  };

  const previousSlide = () => {
    setSlideIndex((prev) => (prev !== 1 ? prev - 1 : items.length));
  };

  return (
    <SectionWrapper>
      {items.map((item, index) => (
        <Article key={item.id} visible={slideIndex === index + 1}>
          <Picture>
            <source media="(min-width: 768px)" srcSet={item.desktop} />
            <Image src={item.mobile} alt={item.title} />
            <Controls>
              <li>
                <ControlButton onClick={previousSlide}>
                  <img src={left} alt="Previous" />
                </ControlButton>
              </li>
              <li>
                <ControlButton onClick={nextSlide}>
                  <img src={right} alt="Next" />
                </ControlButton>
              </li>
            </Controls>
          </Picture>
          <Content>
            <Title>{item.title}</Title>
            <Description>{item.desc}</Description>
            <ShopButton>
              Shop Now <img src={arrow} alt="Arrow" />
            </ShopButton>
          </Content>
        </Article>
      ))}
    </SectionWrapper>
  );
};

export default Showcase;
