import { useState } from 'react';
import { db } from 'lib/firebase-config';
import TopHat from 'components/TopHat';
import ReactFullpage from '@fullpage/react-fullpage';
import Footer from 'components/Footer';
import styled from 'styled-components';
import { propColors } from 'components/attributes';
import PropNav from 'components/PropNav';
import { Row, Col } from 'components/util';
import Image from 'components/Image';
import Link from 'next/link';
import HeadContent from 'components/HeadContent';
import SkipLink from 'components/SkipLink';

const Sections = (props) => {
  const sectionsRendered = props.sections.map((section, i) => {
    const { propNum, title, description } = section;
    return (
      <div key={propNum} className="section">
        <Top>
          <Isolate>
            <Noise />
            <Overlay propNum={propNum} />
            <Overlay2 propNum={propNum} />
          </Isolate>
          <FirstDigit>{propNum.toString().substring(0, 1)}</FirstDigit>
          <SecondDigit>{propNum.toString().substring(1, 2)}</SecondDigit>
          <Row style={{ position: 'absolute', width: '100%' }}>
            <Col
              off={{ xs: 3, sm: 3, md: 13, lg: 13, xl: 12, xxl: 12 }}
              span={{ xs: 20, sm: 20, md: 10, lg: 10, xl: 10, xxl: 10 }}
            >
              <Title>{title}</Title>
              <Bar />
            </Col>
          </Row>
        </Top>
        <Row>
          <Col
            off={{ xs: 2, sm: 2, md: 2, lg: 2, xl: 3, xxl: 3 }}
            span={{ xs: 20, sm: 20, md: 9, lg: 9, xl: 8, xxl: 8 }}
          >
            <ImageContainer>
              <Image
                alt="alt text example"
                srcset={[
                  { url: './static/2018images/prop-7.png', width: 310 },
                  { url: './static/2018images/prop-7.webp', width: 310 },
                  { url: './static/2018images/prop-7@2x.png', width: 620 },
                  { url: './static/2018images/prop-7@2x.webp', width: 620 },
                ]}
                width={1}
                height={1}
              />
            </ImageContainer>
          </Col>
          <Col
            off={{ xs: 3, sm: 3, md: 2, lg: 2, xl: 1, xxl: 1 }}
            span={{ xs: 20, sm: 20, md: 9, lg: 9, xl: 10, xxl: 10 }}
          >
            <Description>{description}</Description>
            <MorePosition>
              <Link href={`/prop-${propNum}`} passHref>
                <MoreButton tabIndex={props.activeIndex === i ? '0' : '-1'}>
                  See the full summary{' '}
                  <span role="img" aria-label="arrow">
                    →
                  </span>
                </MoreButton>
              </Link>
              <LinkUnderline propNum={propNum} />
            </MorePosition>
          </Col>
        </Row>
      </div>
    );
  });

  return sectionsRendered;
};

const HomePage = (props) => {
  const sections = JSON.parse(props.sections);
  const [currIndex, setCurrIndex] = useState(0);
  const seq = Array.from(Array(12).keys());
  const anchors = seq.map((n) => `prop-${n + 14}-intro`);

  //-- necessary to avoid having all Read More links tab-indexable
  const handleLeave = (origin, destination) => {
    // eslint-disable-line
    setCurrIndex(destination.index);
  };

  return (
    <>
      <HeadContent />
      <SeparateLayer>
        <SkipLink />
        <TopHat />
        <PropNav />
      </SeparateLayer>
      <ReactFullpage
        licenseKey="3CB1143B-BE7D4092-876D11C1-7FBD29BB"
        lockAnchors
        easing={'cubic-bezier(0.215, 0.610, 0.355, 1.000)'}
        easingcss3={'cubic-bezier(0.215, 0.610, 0.355, 1.000)'}
        menu="#propNav"
        anchors={anchors}
        verticalCentered={false}
        scrollingSpeed={600}
        touchSensitivity={1}
        onLeave={handleLeave}
        render={() => {
          return (
            <ReactFullpage.Wrapper>
              <Sections activeIndex={currIndex} sections={sections} />
            </ReactFullpage.Wrapper>
          );
        }}
      />
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

const SeparateLayer = styled.div`
  width: 100%;
  position: absolute;
  z-index: 10;
`;

const Noise = styled.div`
  height: 100%;
  background: conic-gradient(from 325deg at 12% -4%, rgba(255, 255, 255, 0), black),
    url(/static/noise.svg);
  filter: contrast(170%) brightness(905%);
  @media not all and (min-resolution: 0.001dpcm) {
    @media {
      background: conic-gradient(from 232deg at -60% -34%, rgba(255, 255, 255, 0), black),
        url(/static/noise.svg);
      filter: contrast(320%) brightness(485%);
    }
  }
`;

const Top = styled.div`
  position: relative;
  height: 63vh;
  @media screen and (max-width: 768px) {
    height: 50vh;
  }
`;

const Isolate = styled.div`
  isolation: isolate;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: calc(100% - 10px);
  background: linear-gradient(
    90deg,
    ${(props) => (props.propNum ? propColors[props.propNum] : 'purple')},
    ${(props) => (props.propNum ? propColors[`${parseInt(props.propNum - 1)}`] : 'purple')}
  );
  box-shadow: 4px 6px 40px 30px rgba(0, 0, 0, 0.06);
  mix-blend-mode: lighten;
`;
const Overlay2 = styled.div`
  position: absolute;
  top: calc(100% - 10px);
  width: 100%;
  height: 10px;
  background-color: ${(props) => (props.propNum ? propColors[props.propNum] : 'purple')};
  mix-blend-mode: exclusion;
`;

const Digit = styled.div`
  position: absolute;
  font-size: 290px;
  font-family: Inter, InterPre, Helvetica, sans-serif;
  font-weight: 750;
  color: rgba(255, 255, 255, 0.35);
  user-select: none;
  @media screen and (max-width: 576px) {
    font-size: 230px;
  }
`;

const FirstDigit = styled(Digit)`
  top: 38%;
  left: 16px;
`;

const SecondDigit = styled(Digit)`
  top: 52%;
  left: calc(16px + 6%);
  @media screen and (max-width: 768px) {
    left: calc(16px + 16%);
  }
`;

const Title = styled.h2`
  font-size: 52px;
  line-height: 59px;
  font-family: 'ITC Avant Garde', Inter, Helvetica, sans-serif;
  color: #333;
  @media screen and (max-width: 768px) {
    font-size: 30px;
    line-height: normal;
    position: relative;
    top: 20vh;
  }
  @media screen and (max-width: 576px) {
    font-size: 26px;
    line-height: normal;
    position: relative;
    top: 10vh;
  }
`;

const Description = styled.div`
  display: inline-block;
  margin-top: 30px;
`;

const Bar = styled.div`
  height: 20px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const ImageContainer = styled.div`
  width: 380px;
  position: relative;
  top: -200px;
  margin-bottom: -200px;
  user-select: none;
  transition: all 1500ms cubic-bezier(0.09, 0.85, 0.11, 0.98);
  filter: drop-shadow(3px 3px 0 white) drop-shadow(12px 12px 0 rgba(0, 0, 0, 0.15))
    drop-shadow(-20px 16px 2px rgba(0, 0, 0, 0.05));
  @media not all and (hover: none) {
    &:hover {
      transform: translate(0, -5px) scale(1.02);
      filter: drop-shadow(3px 3px 0 white) drop-shadow(14px 15px 0px rgba(0, 0, 0, 0.1))
        drop-shadow(-23px 19px 3px rgba(0, 0, 0, 0.03));
    }
    &:active {
      transition-duration: 200ms;
      transform: translate(0, 2px);
      filter: drop-shadow(3px 3px 0 white) drop-shadow(8px 3px 0px rgba(0, 0, 0, 0.2))
        drop-shadow(-4px 6px 0 rgba(0, 0, 0, 0.1));
    }
  }
  @media screen and (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
    width: 250px;
    top: -120px;
    margin-bottom: -120px;
  }
  @media screen and (max-width: 375px) {
    width: 160px;
    top: -100px;
    margin-bottom: -120px;
  }
`;

const MoreButton = styled.a`
  display: block;
  font-family: Inter, InterPre, Helvetica, sans-serif;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.095em;
  margin-top: 30px;
  text-align: right;
  text-decoration: none;
  color: blue;
  @media screen and (max-width: 375px) {
    margin-top: 16px;
    font-size: 12px;
  }
`;

const MorePosition = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 300px;
  @media screen and (max-width: 375px) {
    width: 250px;
  }
`;

const LinkUnderline = styled.div`
  background-color: ${(props) => (props.propNum ? propColors[props.propNum] : 'purple')};
  height: 10px;
  width: 100%;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
`;
