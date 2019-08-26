import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Web from "@material-ui/icons/Laptop";
import Mobile from "@material-ui/icons/PhoneIphone";
import Cloud from "@material-ui/icons/CloudQueue";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class ProductSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>What I do</h2>
            <h5 className={classes.description}>
              I've gathered a broad set of skills during a decade of software development with a diverse group of companies. Each company had different values and approaches and I've learned to adapt and learn new skills to fit each environment. On the side, I kept a collection of my favorite tools and workflows which I used as my own personal stack for freelance and hobby projects. My stack of choice is always evolving.
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Web"
                description="I started playing with web technologies a decade ago. I have experience with PHP, .NET, React, NodeJS, TypeScript to name a few tools."
                icon={Web}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Mobile"
                description="I've used React Native while building an MVP for a startup. I've recently started developing with Flutter and I love the speed and quality of the developer experience."
                icon={Mobile}
                iconColor="primary"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Cloud"
                description="In 2010 I managed cPanel hosting for a small internet company. Since then I've used everything from Heroku, AWS, Serverless, MongoDB Atlas, etc. I know how to maintain CI/CD pipelines and build scalable APIs."
                icon={Cloud}
                iconColor="danger"
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);
