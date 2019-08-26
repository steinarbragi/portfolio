import React from "react";
import Helmet from "react-helmet";

const MetaHead = () => (
  <Helmet>
          <title>Steinar.io</title>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
          <meta name="description" content="steinar.io - I create web and mobile experiences for the next generation of consumer-facing companies."/>
          <meta name="image" content="https://steinar.io/sbanndoom.png"/>
          <meta property="og:title" content="steinar.io - Web &amp; Mobile development"/>
          <meta property="og:url" content="https://steinar.io"/>
          <meta property="og:description" content="steinar.io - I create web and mobile experiences for the next generation of consumer-facing companies."/>
          <meta property="og:image" content="https://steinar.io/sbanndoom.png"/>
          <meta property="og:type" content="website"/>
          <meta property="og:image:alt" content="steinar.io - I create web and mobile experiences for the next generation of consumer-facing companies."/>
          <meta name="twitter:card" content="summary_large_image"/>
          <meta name="twitter:title" content="steinar.io - Web &amp; Mobile development"/>
          <meta name="twitter:url" content="https://steinar.io"/>
          <meta name="twitter:description" content="steinar.io - I create web and mobile experiences for the next generation of consumer-facing companies."/>
          <meta name="twitter:image" content="https://steinar.io/sbanndoom.png"/>
          <meta name="twitter:image:alt" content="steinar.io - I create web and mobile experiences for the next generation of consumer-facing companies."/>
          <meta name="twitter:creator" content="@steinarbragi"/>
  </Helmet>
);

export default MetaHead