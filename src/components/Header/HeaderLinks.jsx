/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "gatsby";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload, Share } from "@material-ui/icons";

// React icons
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          href="/cv-090320.pdf"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <CloudDownload className={classes.icons} /> Download CV
        </Button>
      </ListItem> 
            
            <ListItem className={classes.listItem}>
        <Tooltip
          id="github-tooltip"
          title="Check out my projects!"
          placement={typeof window !== 'undefined' && window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://github.com/steinarbragi"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <FaGithub/>
            Github
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="linkedin-tooltip"
          title="Let's link up!"
          placement={typeof window !== 'undefined' && window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.linkedin.com/in/steinarbragi/"
            target="_blank"
            className={classes.navLink}
          >
            <FaLinkedin/>
            LinkedIn
          </Button>
        </Tooltip>
      </ListItem>
      { /*<ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Components"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/components" className={classes.dropdownLink}>
              All components
            </Link>,
            <a
              href="https://creativetimofficial.github.io/material-kit-react/#/documentation"
              target="_blank"
              className={classes.dropdownLink}
            >
              Documentation
            </a>
          ]}
        />
      </ListItem> */}
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Social"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Share}
          dropdownList={[
            <Button
            href="https://twitter.com/steinarbragi"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <FaTwitter/>
            Twitter
          </Button>,
            <Button
            color="transparent"
            href="https://www.instagram.com/steinarbragi/"
            target="_blank"
            className={classes.navLink}
          >
            <FaInstagram/>
            Instagram
          </Button>,
          <Button
          color="transparent"
          href="https://facebook.com/steinarbragi/"
          target="_blank"
          className={classes.navLink}
        >
          <FaFacebook/>
          Facebook
        </Button> 
          
          ]}
        />
      </ListItem>
      {/*<ListItem className={classes.listItem}>
        <Tooltip
          id="twitter-tooltip"
          title="Follow me on Twitter!"
          placement={typeof window !== 'undefined' && window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com/steinarbragi"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <FaTwitter/>
            Twitter
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow me on Instagram!"
          placement={typeof window !== 'undefined' && window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/steinarbragi/"
            target="_blank"
            className={classes.navLink}
          >
            <FaInstagram/>
            Instagram
          </Button> 
        </Tooltip>
      </ListItem>*/}
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
