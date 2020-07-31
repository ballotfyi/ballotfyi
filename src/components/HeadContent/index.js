import Head from 'next/head';
import PropTypes from 'prop-types';
import StructuredData from 'components/StructuredData';

const HeadContent = (props) => {
  const { datePublished, dateModified, title, description, canonicalUrlSlug, images } = props;
  const headline = `${title} → ballot.fyi`;
  const canonicalUrlBase = 'https://www.ballot.fyi/';
  return (
    <>
      <Head>
        <title>{headline}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={canonicalUrlBase + canonicalUrlSlug} />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content={description} />
        <meta name="keywords" content="California, Nov 2020, propositions" />

        <meta property="article:opinion" content="false" />

        <meta
          prefix="og: http://ogp.me/ns#"
          property="og:url"
          content={canonicalUrlBase + canonicalUrlSlug}
        />
        <meta prefix="og: http://ogp.me/ns#" property="og:type" content="website" />
        <meta prefix="og: http://ogp.me/ns#" property="og:title" content={headline} />
        <meta prefix="og: http://ogp.me/ns#" property="og:description" content={description} />

        {images.length > 0 && (
          <meta prefix="og: http://ogp.me/ns#" property="og:image" content={images[0].url} />
        )}
        {images.length > 0 && (
          <meta
            prefix="og: http://ogp.me/ns#"
            property="og:image:alt"
            content={images[0].caption}
          />
        )}
        <meta prefix="og: http://ogp.me/ns#" property="og:locale" content="en_US" />

        <meta
          prefix="og: http://ogp.me/ns/article#"
          property="article:published_time"
          content={datePublished}
        />
        {dateModified && (
          <meta
            prefix="og: http://ogp.me/ns/article#"
            property="article:modified_time"
            content={dateModified}
          />
        )}

        <meta name="twitter:url" content={canonicalUrlBase + canonicalUrlSlug} />
        <meta name="twitter:title" content={headline} />
        <meta name="twitter:description" content={description} />
        {images.length > 0 && <meta name="twitter:image" content={images[0].url} />}
        {images.length > 0 && <meta name="twitter:image:alt" content={images[0].caption} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ballotfyi" />

        <meta name="application-name" content="ballot.fyi" />
        <meta name="apple-mobile-web-app-title" content="ballot.fyi" />
        {/* TODO actually create these assets */}
        <link rel="apple-touch-icon" href="./static/touch/touch-icon-iphone-retina.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="./static/touch/touch-icon-ipad.png" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="./static/touch/touch-icon-iphone-retina.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="167x167"
          href="./static/touch/touch-icon-ipad-retina.png"
        />
      </Head>

      {/* Structured Data  */}
      <StructuredData props={props} />
    </>
  );
};

export default HeadContent;

HeadContent.propTypes = {
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

HeadContent.defaultProps = {
  title: 'ballot.fyi → 2020 CA Propositions, explained',
  description:
    "Everything you need to vote informed Nov 2020 for California's ballot propositions.",
  canonicalUrlSlug: '',
  datePublished: new Date(),
  dateModified: null,
  images: [],
  pageType: 'page',
};
