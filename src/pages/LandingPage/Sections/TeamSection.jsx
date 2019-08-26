import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// React icons
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import teamStyle from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx";

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
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <Card plain>
                <GridItem xs={10} sm={8} md={6} className={classes.itemGrid}>
                  <img src={steinar} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Steinar Bragi Sigurðarson
                  <br />
                  <small className={classes.smallTitle}>Computer Scientist</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                  I've always been fascinated by computers and technology. I remember playing with DOS at the age of 4 and tearing computers and electronics apart a few years later. I am driven by curiosity and a a need to solve difficult problems. I got my BSc in CS from Reykjavík University in 2014 where I dipped my toes into various fields within computer science with a focus on web development and software engineering. Since then I've worked on a wide variety of projects. For the past couple of years I've been researching Machine Learning in the Netherlands. 
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    href="https://linkedin.com/in/steinarbragi"
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <FaLinkedin/>
                  </Button>

                  <Button
                    href="https://github.com/steinarbragi"
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <FaGithub/>
                  </Button>
                  <Button
                    href="https://twitter.com/steinarbragi"
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <FaTwitter/>
                  </Button>
                  <Button
                    href="https://instagram.com/steinarbragi"
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <FaInstagram/>
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
