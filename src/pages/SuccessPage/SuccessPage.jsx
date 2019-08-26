import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// React icons
import { FaHome } from 'react-icons/fa';
import Helmet from 'react-helmet';
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";


const dashboardRoutes = [];

class SuccessPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="steinar.io"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        <Helmet>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
          <meta name="description" content="steinar.io - I create web and mobile experiences for the next generation of consumer-facing companies."/>
          <meta name="image" content="https://steinar.io/sbanndoom.jpg"/>
          <meta property="og:title" content="steinar.io - Web &amp; Mobile development"/>
          <meta property="og:url" content="https://steinar.io"/>
          <meta property="og:description" content="steinar.io - I create web and mobile experiences for the next generation of consumer-facing companies."/>
          <meta property="og:image" content="https://steinar.io/sbanndoom.jpg"/>
          <meta property="og:type" content="website"/>
          <meta property="og:image:alt" content="steinar.io - I create web and mobile experiences for the next generation of consumer-facing companies."/>
          <meta name="twitter:card" content="summary_large_image"/>
          <meta name="twitter:title" content="steinar.io - Web &amp; Mobile development"/>
          <meta name="twitter:url" content="https://steinar.io"/>
          <meta name="twitter:description" content="steinar.io - I create web and mobile experiences for the next generation of consumer-facing companies."/>
          <meta name="twitter:image" content="https://steinar.io/sbanndoom.jpg"/>
          <meta name="twitter:image:alt" content="steinar.io - I create web and mobile experiences for the next generation of consumer-facing companies."/>
          <meta name="twitter:creator" content="@steinarbragi"/>
        </Helmet>
        <Parallax filter image={require("assets/img/doom.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>Success!</h1>
                <h4>
                I will get in touch shortly.
                </h4>
                <br />
                <Button
                  color="primary"
                  size="lg"
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaHome/>
                  Back to home
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <Footer />
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(SuccessPage);
