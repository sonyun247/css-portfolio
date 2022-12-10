import { graphql, Link } from "gatsby";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";

interface ICard {
  cardData: {
    readonly made: string | null;
    readonly slug: string | null;
    readonly title: string | null;
    readonly preview: {
      readonly gatsbyImageData: IGatsbyImageData | null;
    } | null;
  };
}

export default function Card({ cardData }: ICard) {
  return (
    <article className="cards">
      <Link to={`/projects/${cardData.slug}`} className="cards__link">
        <GatsbyImage
          image={cardData.preview?.gatsbyImageData}
          alt={cardData.title}
          className="cards__thumbnail"
        />
      </Link>
      <footer className="cards__footer">
        <h6 id={cardData.slug} className="cards__title">
          {cardData.title}
        </h6>
        <span className="cards__date">{cardData.made}</span>
      </footer>
    </article>
  );
}
