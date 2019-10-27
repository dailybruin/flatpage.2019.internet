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

const IndexPage = ({ data }) => (
  <>
    <Head {...data.site.siteMetadata} />
    <Wrapper>
      <Header title={data.kerckhoffArticle.headline} authors={data.kerckhoffArticle.author} />
      <KBMouse />
      <h2 className={css`
        text-transform: uppercase;
        background-color: ${colors.blue.dark};
        color: white;
        padding: 0.5em;
        font-size: 2em;
        font-weight: 500;
      `}>Timeline</h2>
      <p>Description for timeline goes here</p>
      <Article content={data.kerckhoffArticle.content} customTypeComponentMapping={{
        subheading: Subheading,
        pullquote: PullQuote
      }} />
      <Timeline />
      <Footer developers="Dustin Newman (Developer), Lauren Ho (Designer)" copyrightYear={2019} />
    </Wrapper>
  </>
)

export default IndexPage
