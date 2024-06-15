import React from "react";
import aboutDark from "../images/image-about-dark.jpg";
import aboutLight from "../images/image-about-light.jpg";

const Section: React.FC = () => {
  return (
  <section className="grid grid-cols-1 lg:grid-cols-3">
        <article>
          <img src={aboutDark} alt="" className="w-full" />
        </article>

        <article className="p-6 lg:p-9">
          <h2 className="flex items-center gap-3 text-xl font-semibold uppercase" style={{
                  letterSpacing: "0.2rem",
                }}>
            About our furniture
          </h2>
          <p className="mb-8 opacity-75 text-slate-900">
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </p>
        </article>

        <article>
          <img src={aboutLight} alt="" className="w-full" />
        </article>
      </section>
  );
};

export default Section;
