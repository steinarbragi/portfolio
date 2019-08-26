import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// React icons
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import teamStyle from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx";

import team1 from "assets/img/faces/avatar.jpg";
import team2 from "assets/img/faces/christian.jpg";
import team3 from "assets/img/faces/kendall.jpg";

import steinar from "assets/img/faces/steinar.jpg";

class TeamSection extends React.Component {
  render() {
    const { classes } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    return (
      <div className={classes.section}>
        <h2 className={classes.title}>Who am I?</h2>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={steinar} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Steinar Bragi Sigurðarson
                  <br />
                  <small className={classes.smallTitle}>Computer Scientist</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                  I've gathered a broad set of skills during a decade of software development with a diverse set of companies. Each company had different values and approaches and I've learned to adapt and learn new skills to fit each environment. On the side, I kept a collection of my favorite tools and workflows which I've used as my own personal stack for freelance and hobby projects. My stack of choice is still evolving.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <FaLinkedin/>
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <FaInstagram/>
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <FaTwitter/>
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(teamStyle)(TeamSection);
