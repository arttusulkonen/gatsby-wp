import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Link from "gatsby-link";

const FooterNav = () => {
  const wpMenu = useStaticQuery(graphql`
    {
      allWpMenuItem(
        filter: {
          menu: { node: { slug: { eq: "social-menu" } } }
          parentDatabaseId: { eq: 0 }
        }
      ) {
        edges {
          node {
            databaseId
            parentDatabaseId
            url
            label
          }
        }
      }
    }
  `);
  // console.log("Raw data:", wpMenu.allWpMenuItem);

  const menuItems = wpMenu.allWpMenuItem.edges;
  return (
    <nav>
      <ul>
        {menuItems.map((menuItem, index) => {
          return (
            <li key={index}>
              <Link to={menuItem.node.url}>{menuItem.node.label}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default FooterNav;
