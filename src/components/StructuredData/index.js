import Head from 'next/head';
import PropTypes from 'prop-types';
/**
 * TODO
 * [ ] replace logo images
 * [ ] home page structured data
 * [ ] add YouTube under sameAs
 * [ ] add logo to publisher data
 * [ ] fallback article image
 * [ ] real articles
 * */

// https://developers.google.com/search/docs/data-types/article#amp-sd
const StructuredData = (props) => {
  const { 
    datePublished,
    dateModified,
    title,
    description,
    canonicalUrlSlug,
    pageType,
    // images
  } = props;
  const urlBase = 'https://www.ballot.fyi/';
  const publisherId = urlBase + '#publisher';
  // const propNums = Array(12)
  //   .fill(14)
  //   .map((val, index) => val + index); // [14, 15, ..., 25]
  // const articleUrls = propNums.map((n) => `${urlBase}prop-${n}`);

  const articleData = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': urlBase + canonicalUrlSlug,
    },
    headline: title,
    description: description,
    // image: images.map((img) => ({
    //   '@context': 'https://schema.org',
    //   '@type': 'ImageObject',
    //   url: img.url || 'www.google.com',
    //   caption: img.caption || '',
    //   height: img.height || 1,
    //   width: img.width || 1,
    // })),
    inLanguage: 'en-US',
    isAccessibleForFree: true,
    copyrightYear: datePublished.getFullYear(),
    copyrightHolder: {
      '@id': publisherId,
    },
    datePublished: datePublished.toISOString(),
    dateModified: dateModified ? dateModified.toISOString() : datePublished.toISOString(),
    author: {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Jimmy Chion',
    },
    publisher: {
      '@id': publisherId,
    },
    sourceOrganization: {
      '@id': publisherId,
    },
  };

  const homeData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    // mainEntity: {
    //   '@context': 'https://schema.org',
    //   '@type': 'ItemList',
    //   numberOfItems: articleUrls.length,
    //   itemListElement: articleUrls.map((url, index) => ({
    //     '@context': 'https://schema.org',
    //     '@type': 'ListItem',
    //     position: index,
    //     url: url,
    //   })),
    // },
    // image: images.map((img) => ({
    //   '@context': 'https://schema.org',
    //   '@type': 'ImageObject',
    //   url: img.url || 'www.google.com',
    //   caption: img.caption || '',
    //   height: img.height || 1,
    //   width: img.width || 1,
    // })),
    name: 'ballot.fyi',
    publisher: {
      '@id': publisherId,
    },
  };

  const publisher = {
    '@context': 'https://schema.org',
    '@id': publisherId,
    '@type': 'NewsMediaOrganization',
    name: 'ballot.fyi',
    alternateName: ['ballotfyi', 'ballot fyi'],
    description: "A nonpartisan voter guide for propositions for California's 2020 Election",
    foundingDate: '2016-10-01',
    url: urlBase,
    email: 'fax@ballot.fyi',
    founder: {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Jimmy Chion',
    },
    sameAs: [
      'https://www.facebook.com/ballotfyi/',
      'https://twitter.com/ballotfyi/',
      'https://www.instagram.com/ballotfyi/',
    ],
    // logo: {
    //   '@context': 'https://schema.org',
    //   '@type': 'ImageObject',
    //   url: 'https://www.ballot.com/static/logo.jpg', //--TODO
    //   width: 300,
    //   height: 200,
    // },
  };
  return (
    <Head>
      {pageType === 'article' ? 
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }}
        ></script>
        :
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(homeData) }}
        ></script>
      }
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(publisher) }}
      ></script>
    </Head>
  );
};

export default React.memo(StructuredData);

StructuredData.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  canonicalUrlSlug: PropTypes.string.isRequired,
  datePublished: PropTypes.instanceOf(Date).isRequired,
  dateModified: PropTypes.instanceOf(Date),
  images: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      caption: PropTypes.string,
    })
  ).isRequired,
  pageType: PropTypes.oneOf(['article', 'page']),
};

StructuredData.defaultProps = {
  title: 'ballot.fyi → 2020 CA Propositions, explained',
  description: "Everything you need to vote informed Nov 2020 for California's ballot propositions.",
  canonicalUrlSlug: '',
  datePublished: new Date(),
  dateModified: null,
  images: [],
  pageType: 'page'
};