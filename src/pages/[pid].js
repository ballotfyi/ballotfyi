import { db } from 'lib/firebase-config';
import Footer from 'components/Footer';
import PropNav from 'components/PropNav';
import TopHat from 'components/TopHat';
import { Row, Col, Space } from 'components/util';
import GhostLoader from 'components/GhostLoader';
import dynamic from 'next/dynamic';
import HeadContent from 'components/HeadContent';
import withBasicTemplate from 'template/basic';

const PropPage = (props) => {
  const { title, blocks } = props;

  //-- convert stringified dates back to javascript DateTime
  let headProps = {};
  for (const key in props) {
    if (key.includes('date') || key === 'updated' || key === 'created') {
      headProps[key] = new Date(props[key]);
    } else {
      headProps[key] = props[key];
    }
  }
  const renderedBlocks = blocks.map((block, i) => {
    const BlockComponent = dynamic(() => import(`../blocks/${block.type}`), {
      loading: GhostLoader,
    });
    return <BlockComponent key={i} data={block.data} />;
  });

  return (
    <>
      <HeadContent pageType={'article'} {...headProps} />
      <TopHat />
      <PropNav />
      <Row>
        <Col
          off={{ xs: 3, sm: 3, md: 3, lg: 3, xl: 3, xxl: 3 }}
          span={{ xs: 18, sm: 16, md: 16, lg: 16, xl: 16, xxl: 16 }}
        >
          <h1>{title}</h1>
        </Col>
      </Row>
      {renderedBlocks}
      <Space h={120} />
      <Footer />
    </>
  );
};

export default withBasicTemplate(PropPage);

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

// export const config = {
//   amp: 'hybrid',
// };
