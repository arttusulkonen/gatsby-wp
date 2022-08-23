import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import * as styles from "./page.module.css";
import UniversalLink from "../utils/UniversalLink";

const Page = ({ data }) => {
  const page = data.wpPage;
  return (
    <Layout>
      <Seo
        title={page.title}
        image="/logo.png"
        pathname={page.uri}
        // Boolean indicating whether this is an article:
        // article
      />
      <article>
        <h1>{page.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: page.content }} />
      </article>
    </Layout>
  );
};

export default Page;

export const query = graphql`
  query ($databaseId: Int!) {
    wpPage(databaseId: { eq: $databaseId }) {
      title
      content
      uri
    }
  }
`;