import { db } from 'lib/firebase-config';
import { blockTypes } from 'lib/block-types';
import Acronym from 'components/Acronym';
import Citation from 'components/Citation';
import JsxParser from 'react-jsx-parser';
import Footer from 'components/Footer';
import PropNav from 'components/PropNav';

const PropPage = (props) => {
  const {
    title,
    // shortTitle,
    description,
    // shortDescription,
    // propNum,
    // socialTitle,
    blocks,
  } = props;

  const renderedBlocks = blocks.map((block, i) => {
    const hasBody = blockTypes[block.type].fields.some((field) => field.type === 'richText');
    if (hasBody) {
      return (
        <JsxParser
          key={i} //later change this to a nonsequential key
          components={{ Acronym, Citation }}
          jsx={`${block.data.markup}`}
          showWarnings={true}
        />
      );
    } else return <div />;
  });

  return (
    <>
      <PropNav />
      <h1>{title}</h1>
      <div>{description}</div>
      {renderedBlocks}
      <Footer />
    </>
  );
};

export default PropPage;

//----------------------------------------------

/**
 * NEXT.JS FUNCTIONS
 */
//-- next.js unique function
//-- must return paths to prerender. See: https://nextjs.org/docs/basic-features/data-fetching
//-- runs at build, so console.log()s won't work
export async function getStaticPaths() {
  const defaultObj = {
    paths: [],
    fallback: false,
  };
  try {
    const pages = await db.collection('pages').where('isPublished', '==', true).get();
    if (!pages.empty) {
      const paths = pages.docs.map((doc) => ({
        params: {
          pid: `prop-${doc.id}`,
        },
      }));
      return {
        paths: paths,
        fallback: false,
      };
    } else {
      return defaultObj;
    }
  } catch (err) {
    return defaultObj;
  }
}

//-- next.js unique function
//-- returned object gets sent to default exported object
//-- such as data needed to render page
//-- console.log's don't work
export async function getStaticProps({ params }) {
  const pageId = params.pid.split('-')[1];
  const pageDataRef = await db.doc(`pages/${pageId}`).get();
  if (!pageDataRef.exists) return;
  const { publishId } = pageDataRef.data();
  const versionData = await db.doc(`pages/${pageId}/v/${publishId}`).get();
  if (!versionData.exists) return;
  const pageData = pageDataRef.data();
  //-- because all passed values need to be JSON serializable
  for (const [key, value] of Object.entries(pageData)) {
    if (key.includes('date') || key === 'updated' || key === 'created') {
      pageData[key] = value.toDate().toString();
    }
  }
  return {
    props: {
      blocks: versionData.data().blocks,
      ...pageData,
      ...params,
    },
    revalidate: 1,
  };
}
