import * as React from "react";
import { graphql, PageProps } from "gatsby";
import Layout from "../components/Layout";
import Card from "../components/Card";
import Seo from "../components/SEO";

export default function IndexPage({ data }: PageProps<Queries.CardsQuery>) {
  return (
    <Layout title="home">
      <main className="home__main">
        {data.allContentfulProduct.nodes.map((card) => (
          <Card cardData={card} />
        ))}
      </main>
    </Layout>
  );
}

export const query = graphql`
  query Cards {
    allContentfulProduct(sort: { made: ASC }) {
      nodes {
        made
        slug
        title
        preview {
          gatsbyImageData(placeholder: DOMINANT_COLOR)
        }
      }
    }
  }
`;

export const Head = () => <Seo title="CSS Portfolio" />;
