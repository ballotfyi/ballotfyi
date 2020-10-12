import { db } from 'lib/firebase-config';
import TopHat from 'components/TopHat';
import Footer from 'components/Footer';
import styled from 'styled-components';
import HeadContent from 'components/HeadContent';
import SkipLink from 'components/SkipLink';
import Intro from 'components/Intro';
import IntroPropSections from 'components/IntroPropSections';

const HomePage = (props) => {
  const sections = JSON.parse(props.sections);

  return (
    <>
      <HeadContent />
      <SeparateLayer>
        <SkipLink />
        <TopHat />
        {/* <PropNav /> */}
      </SeparateLayer>
      <Intro />
      <SectionsContainer>
        <IntroPropSections sections={sections} />
      </SectionsContainer>
      <Footer />
    </>
  );
};

export default HomePage;

export async function getStaticProps() {
  const pagesRef = await db.collection(`pages`).get();
  if (pagesRef.empty) return { props: {} };
  let sections = [];
  pagesRef.forEach((doc) => {
    sections.push({
      id: doc.id,
      propNum: doc.id,
      ...doc.data(),
    });
  });

  return {
    props: {
      sections: JSON.stringify(sections),
    },
  };
}

// export const config = {
//   amp: 'hybrid',
// };

//---------------------------------------------------
const SeparateLayer = styled.div`
  width: 100%;
  position: absolute;
  z-index: 30;
`;

const SectionsContainer = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: #eee;
`;
