import * as React from 'react'
import { graphql } from 'gatsby'
import {
  Article,
  Footer,
  Head
} from '@dailybruin/lux'
import Landing from "../components/Landing";
import colors from '../utils/colors';
import Header from '../components/Header';
import KBMouse from "../components/KBMouse";

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
    color: "white"
  }}>
    {children}
  </div>
);

const IndexPage = ({ data }) => (
  <>
    <Head {...data.site.siteMetadata} />
    <Landing imageURL={data.kerckhoffArticle.coverImg} />
    <Wrapper>
      <Header title="The Internet Is Cool" authors="This Person" />
      <KBMouse />
      <Article content={data.kerckhoffArticle.content} />
      <Footer developers="Dustin Newman" copyrightYear={2019} />
    </Wrapper>
  </>
)

export default IndexPage
