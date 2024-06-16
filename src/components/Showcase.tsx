import React, { useState } from "react";
import arrow from "../images/icon-arrow.svg";
import left from "../images/icon-angle-left.svg";
import right from "../images/icon-angle-right.svg";


const data = [
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
]


const Showcase: React.FC = () => {
  const [items] = useState(data);
  const [slideIndex, setSlideIndex] = useState<number>(1);

  function nextSlide() {
    if (slideIndex !== items.length) {
      setSlideIndex(slideIndex + 1)
    } else if (slideIndex === items.length) {
      setSlideIndex(1)
    }
  }

  function previousSlide() {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1)
    } else if (slideIndex === 1) {
      setSlideIndex(items.length)
    }
  }

  return (
    <section>
        {items.map((item, index) => (
          <article
            key={item.id}
            className={
              slideIndex === index + 1
                ? "grid grid-cols-1 lg:grid-cols-2 lg:place-items-center"
                : "hidden"
            }
          >
            <div className="relative">
              <picture>
                <source media="(min-width: 768px)" srcSet={item.desktop} />
                <img src={item.mobile} alt={item.title} className="w-full" />
              </picture>
              <ul className="absolute right-0 flex lg:hidden -bottom-2">
                <li>
                  <button
                    onClick={previousSlide}
                    className="transition-all duration-200 bg-black hover:bg-neutral-700"
                  >
                    <img src={left} alt="" className="p-6" />
                  </button>
                </li>
                <li>
                  <button
                    onClick={nextSlide}
                    className="transition-all duration-200 bg-black hover:bg-neutral-700"
                  >
                    <img src={right} alt="" className="p-6" />
                  </button>
                </li>
              </ul>
            </div>

            <div className="p-8 lg:p-12">
              <h1 className="text-3xl font-bold text-slate-900 lg:text-5xl">
                {item.title}
              </h1>
              <p className="my-6 opacity-65 text-slate-900">{item.desc}</p>
              <button
                className="flex items-center gap-4 font-bold uppercase hover:opacity-75"
                style={{
                  letterSpacing: "0.7rem",
                }}
              >
                Shop Now <img src={arrow} alt="" />
              </button>           
            </div>
            <div className="absolute items-center justify-between left-50 hidden px-5 inset-x-0 lg:flex -bottom-5.5">
              <button
                onClick={previousSlide}
                className="transition-all duration-200 bg-black hover:bg-neutral-700"
              >
                <img src={left} alt="Previous Slide" className="p-6" />
              </button>
              <button
                onClick={nextSlide}
                className="transition-all duration-200 bg-black hover:bg-neutral-700"
              >
                <img src={right} alt="Next Slide" className="p-6" />
              </button>
            </div>

           
          </article>
        ))}
      </section>
  );
};

export default Showcase;
