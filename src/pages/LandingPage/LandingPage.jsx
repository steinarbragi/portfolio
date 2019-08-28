import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import MetaHead from "components/Header/MetaHead.jsx";
import { CloudDownload } from "@material-ui/icons";
import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Icon from "@material-ui/core/Icon";

// Sections for this page
import ProductSection from "./Sections/ProductSection.jsx";
import TeamSection from "./Sections/TeamSection.jsx";
import WorkSection from "./Sections/WorkSection.jsx";


const dashboardRoutes = [];

class LandingPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <MetaHead />
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

        <Parallax filter image={require("assets/img/doom.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>Hi, I'm Steinar</h1>
                <h4>
                I create highly scalable and modern web and mobile experiences for the next generation of consumer-facing companies. I love to play with bleeding edge technology and I live to tinker and learn. My tech stack is always evolving.
                </h4>
                <br />
                <Button
                  color="primary"
                  size="lg"
                  href="/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.cloud}
                >
                  <CloudDownload className={classes.icons} />
                  Download CV
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <ProductSection />
            <TeamSection />
            <WorkSection />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);
