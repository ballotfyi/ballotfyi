import Head from 'next/head';
import PropTypes from 'prop-types';
import StructuredData from 'components/StructuredData';

const HeadContent = (props) => {
  const {
    datePublished,
    dateModified,
    title,
    description,
    canonicalImage,
    canonicalImageAlt,
    canonicalUrlSlug,
    socialTitle,
    socialDescription,
    socialImage,
    socialImageAlt,
  } = props;
  const headline = `${title} → ballot.fyi`;
  const canonicalUrlBase = 'https://www.ballot.fyi/';

  return (
    <>
      <Head>
        <title>{headline}</title>
        <link rel="icon" href={canonicalUrlBase + "favicon.ico"} />
        <link rel="canonical" href={canonicalUrlBase + canonicalUrlSlug} />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" /> */}
        <meta name="description" content={description} />
        <meta name="keywords" content="California, Nov 2020, propositions" />

        <meta
          prefix="og: http://ogp.me/ns#"
          property="og:url"
          content={canonicalUrlBase + canonicalUrlSlug}
        />
        <meta prefix="og: http://ogp.me/ns#" property="og:type" content="website" />
        <meta prefix="og: http://ogp.me/ns#" property="og:title" content={socialTitle || title} />
        <meta
          prefix="og: http://ogp.me/ns#"
          property="og:description"
          content={socialDescription || description}
        />
        {(socialImage || canonicalImage) && (
          <meta
            prefix="og: http://ogp.me/ns#"
            property="og:image"
            content={canonicalUrlBase + (socialImage || canonicalImage)}
          />
        )}
        {(socialImage || canonicalImage) && (
          <meta
            prefix="og: http://ogp.me/ns#"
            property="og:image:alt"
            content={socialImageAlt || canonicalImageAlt}
          />
        )}
        <meta prefix="og: http://ogp.me/ns#" property="og:locale" content="en_US" />

        <meta
          prefix="og: http://ogp.me/ns/article#"
          property="article:published_time"
          content={datePublished.toISOString()}
        />
        {dateModified && (
          <meta
            prefix="og: http://ogp.me/ns/article#"
            property="article:modified_time"
            content={dateModified.toISOString()}
          />
        )}

        <meta name="twitter:url" content={canonicalUrlBase + canonicalUrlSlug} />
        <meta name="twitter:title" content={socialTitle || title} />
        <meta name="twitter:description" content={socialDescription || description} />
        {(socialImage || canonicalImage) && (
          <meta name="twitter:image" content={canonicalUrlBase + (socialImage || canonicalImage)} />
        )}
        {(socialImage || canonicalImage) && (
          <meta name="twitter:image:alt" content={socialImageAlt || canonicalImageAlt} />
        )}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ballotfyi" />

        <meta name="application-name" content="ballot.fyi" />
        <meta name="apple-mobile-web-app-title" content="ballot.fyi" />
        {/* TODO actually create these assets */}
        <link rel="apple-touch-icon" href={canonicalUrlBase + 'static/touch/touch-icon-iphone-retina.png'} />
        <link rel="apple-touch-icon" sizes="152x152" href={canonicalUrlBase + 'static/touch/touch-icon-ipad.png'} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={canonicalUrlBase + 'static/touch/touch-icon-iphone-retina.png'}
        />
        <link
          rel="apple-touch-icon"
          sizes="167x167"
          href={canonicalUrlBase + "static/touch/touch-icon-ipad-retina.png"}
        />
      </Head>

      {/* Structured Data  */}
      <StructuredData {...props} />
    </>
  );
};

export default HeadContent;

HeadContent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  canonicalUrlSlug: PropTypes.string.isRequired,
  canonicalImage: PropTypes.string.isRequired,
  canonicalImageAlt: PropTypes.string.isRequired,
  canonicalImageWidth: PropTypes.number,
  canonicalImageHeight: PropTypes.number,
  socialImage: PropTypes.string.isRequired,
  socialImageAlt: PropTypes.string.isRequired,
  datePublished: PropTypes.instanceOf(Date).isRequired,
  dateModified: PropTypes.instanceOf(Date),
  pageType: PropTypes.oneOf(['article', 'page']),
};

HeadContent.defaultProps = {
  title: '2020 CA Propositions, explained',
  description:
    "Everything you need to vote informed Nov 2020 for California's ballot propositions.",
  canonicalUrlSlug: '',
  canonicalImage: '/static/social/general.png',
  canonicalImageAlt: 'ballot.fyi explains the California state propositions',
  socialImage: '/static/social/general.png',
  socialImageAlt: 'ballot.fyi explains the California state propositions',
  datePublished: new Date(2020, 10, 12),
  dateModified: null,
  pageType: 'page',
};
