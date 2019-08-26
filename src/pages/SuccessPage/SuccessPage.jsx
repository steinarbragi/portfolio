import React from "react";
// nodejs library that concatenates classes
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// React icons
import { FaHome } from 'react-icons/fa';
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import MetaHead from 'components/Header/MetaHead.jsx';

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";


const dashboardRoutes = [];

class SuccessPage extends React.Component {
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
