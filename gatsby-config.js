const siteName = 'Happy Birthday to the Internet | Daily Bruin'
const description = 'On Oct. 29, 1969, UCLA graduate researcher Charley Kline sent the data transmission “LO” and launched the internet age.'
const image = "https://assets.dailybruin.com/images/flatpage.2019.internet/internet.XZ.7-80b1b2501caaedf271b5c9574b0a54e9.jpg";
const year = '2019';
const prefixPath = `/${year}/happy-birthday-internet`;

const url = `https://features.dailybruin.com${prefixPath}/`;

module.exports = {
  pathPrefix: prefixPath,
  siteMetadata: {
    siteName,
    description,
    url,
    image,
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    {
      resolve: '@dailybruin/gatsby-source-kerckhoff',
      options: {
        slug: 'flatpage.2019.internet',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-28181852-23',
        head: false,
        anonymize: true,
      },
    },
    {
      resolve: 'gatsby-source-published-google-sheets',
      options: {
        sheetID: '1TJVrlFP0zPViE63jbPGZXGI1aixPwLYS6OdenLml76g',
      },
    },
  ],
}
