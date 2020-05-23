import Head from 'next/head'

// https://developers.google.com/search/docs/data-types/article#amp-sd
const StructuredData = (props) => {
  const {datePublished, dateModified, title, description, canonicalUrl} = props;
  const data = {    
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": {canonicalUrl}
    },
    "headline": {title},
    "image": [
      "https://example.com/photos/1x1/photo.jpg",
      "https://example.com/photos/4x3/photo.jpg",
      "https://example.com/photos/16x9/photo.jpg"
    ],
    "datePublished": {datePublished},
    "dateModified": {dateModified},
    "author": {
      "@type": "Person",
      "name": "Jimmy Chion"
    },
    "publisher": {
      "@type": "Organization",
      "name": "ballot.fyi",
      "description": "ballot.fyi is a nonpartisan voter guide for California elections",
      "url": "https://www.ballot.fyi/",
      "email": "fax@ballot.fyi",
      "founder": "Jimmy Chion",
      "sameAs": [
        "https://www.facebook.com/ballotfyi/",
        "https://twitter.com/ballotfyi/",
        "https://www.instagram.com/ballotfyi/"
      ],
      "logo": {
        "@type": "ImageObject",
        "url": "https://google.com/logo.jpg",
        "width": 300,
        "heigth": 200
      },
    }
  }
  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      ></script>
    </Head>
  )
}

export default StructuredData;