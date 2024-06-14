import React from "react";
import "./Home.css";
import Footer from "../../components/Footer/Footer";
import FooterItem from "../../components/FooterItem/FooterItem";
import FooterLink from "../../components/FooterLink/FooterLink";
import { AppRoute } from "../../appRoutes";
import FooterDivider from "../../components/FooterDivider/FooterDivider";

function Home() {
  return (
    <>
      <h1>Home of The Projects</h1>
      <Footer>
        <FooterItem item="CT Productions" />
        <FooterDivider />
        <FooterLink href={AppRoute.About}>About</FooterLink>
        <FooterDivider />
        <FooterLink href={AppRoute.Contact}>Contact</FooterLink>
      </Footer>
    </>
  );
}

export default Home;
