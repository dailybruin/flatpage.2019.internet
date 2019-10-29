import * as React from 'react'
import { graphql } from 'gatsby'
import {
  Article,
  Footer,
  Head,
} from '@dailybruin/lux';
import colors from '../utils/colors';
import Header from '../components/Header';
import KBMouse from "../components/KBMouse";
import Timeline from '../components/Timeline';
import { css } from 'emotion';
import Subheading from '../components/Subheading';
import PullQuote from "../components/Pullquote";
import "./style.css";

export const query = graphql`
  query {
    site {
      siteMetadata {
        siteName
        description
        url
        image
      }
    }
    kerckhoffArticle {
      headline
      author
      content {
        type
        value
      }
    }
  }
`

const Wrapper = ({ children }) => (
  <div style={{
    backgroundColor: `${colors.bg}`,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "white",
    overflowX: "hidden"
  }}>
    {children}
  </div>
);

const TimelineIntro = () => (
  <>
    <h2 className={css`
          text-transform: uppercase;
          background-color: ${colors.blue.dark};
          color: white;
          padding: 0.5em;
          font-size: 2em;
          font-weight: 500;
        `}>Timeline</h2>
    <p className={css`
      text-align: center;
      max-width: 500px;
    `}>Oct. 29, 1969 marked the first data transmission relayed across a computer network by researchers working under Leonard Kleinrock in Boelter Hall. But when was the internet first conceptualized, and how did it get to what it is today?</p>
  </>
);

const IndexPage = ({ data }) => (
  <>
    <Head {...data.site.siteMetadata} />
    <Wrapper>
      <Header title={data.kerckhoffArticle.headline} authors={data.kerckhoffArticle.author} />
      <KBMouse />
      <TimelineIntro />
      <Timeline />
      <Article content={data.kerckhoffArticle.content} customTypeComponentMapping={{
        subheading: Subheading,
        pullquote: PullQuote
      }} />
      <Footer developers="Dustin Newman (Developer), Lauren Ho (Designer)" copyrightYear={2019} />
    </Wrapper>
  </>
)

export default IndexPage
