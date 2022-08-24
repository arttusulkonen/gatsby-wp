import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import UniversalLink from "../utils/UniversalLink";

import * as styles from "./MainNav.module.css";
import Link from "gatsby-link";

const MainNav = () => {
  const wpMenu = useStaticQuery(graphql`
    {
      allWpMenuItem(
        sort: { fields: order, order: ASC }
        filter: {
          menu: { node: { slug: { eq: "all-pages" } } }
          parentDatabaseId: { eq: 0 }
        }
      ) {
        nodes {
          title: label
          path
        }
      }
    }
  `);

  const menuItems = wpMenu.allWpMenuItem.nodes;
  console.log(menuItems);
  return (
    <nav className={styles.mainnav}>
      <ul>
        {menuItems.map((menuItem, index) => {
          return (
            <li key={index}>
              <Link to={menuItem.path}>{menuItem.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default MainNav;
