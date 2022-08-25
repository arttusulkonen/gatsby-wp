import * as React from "react";

import * as styles from "./Footer.module.css";
import FooterNav from "./FooterNav";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </div>
      <FooterNav />
    </footer>
  );
};

export default Footer;
