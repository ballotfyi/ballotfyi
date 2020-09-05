import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import HeadContent from 'components/HeadContent';
import Footer from 'components/layout/footer.js';
import withBasicTemplate from 'template/basic';
import { Space, LinkOut, Col, Row } from 'components/util';
import EmailSubscribe from 'components/EmailSubscribe';
import Acronym from 'components/Acronym';
import TopNav from 'components/layout/TopNav';


const IndexPage = () => {
  const [footerHeight, setFooterHeight] = useState(0);
  const footerRef = useRef();

  useEffect(() => {
    if (footerRef.current) {
      setFooterHeight(footerRef.current.getBoundingClientRect().height);
    }
  }, [footerRef]);

  return (
    <>
      <HeadContent datePublished={new Date('July 31, 2020')} pageType="page" />
      <TopNav />
      <div style={{ minHeight: `calc(100vh - ${footerHeight}px)` }}>
        <Space h={60} xsHeight={35} />
        <Row>
          <Col
            off={{ xs: 2, sm: 2, md: 2, lg: 2, xl: 2, xxl: 2 }}
            span={{ xs: 20, sm: 20, md: 20, lg: 20, xl: 20, xxl: 20 }}
          >
            <Title>The 2020 California Ballot Propositions, Explained</Title>
            <Space h={10} />
            <Center><Tag>COMING SOON</Tag></Center>
            <Space h={40} />
          </Col>

          <Col
            off={{ xs: 2, sm: 4, md: 5, lg: 7, xl: 8, xxl: 8 }}
            span={{ xs: 20, sm: 16, md: 14, lg: 10, xl: 8, xxl: 8 }}
          >
            <Description>
              We explain all the arguments behind the twelve Calfornia state propositions. Check out our <LinkOut href="https://2018.ballot.fyi/">2018</LinkOut> and <LinkOut href="https://2016.ballot.fyi/">2016</LinkOut> editions to know what to expect (except we're redesigning it all).
            </Description>

            <h2>This is up to you</h2>
            <Issues>
              <li>Whether affirmative action should be legal again</li>
              <li>Whether Lyft and Uber drivers are independent contractors</li>
              <li>How commercial properties are taxed (that’s a big deal)</li>
              <li>Whether cities can enact new rent control laws</li>
              <li>Whether older folks can move with their property tax assessment</li>
              <li>Whether we should get rid of the cash bail system</li>
            </Issues>
            <Description>
              As if you didn’t think this election wasn’t already a{' '}
              <Acronym short="BFD" long="big fucking deal" />. Come October, when you get your mail-in ballot, you can read our summaries to understand the broad set of opinions, dive into the details, and come to your own conclusions.
            </Description>
            <Space h={20} xsHeight={10} />
          </Col>
          <Col
            off={{ xs: 2, sm: 3, md: 4, lg: 6, xl: 7, xxl: 7 }}
            span={{ xs: 20, sm: 18, md: 16, lg: 12, xl: 10, xxl: 10 }}
          >
            <ShadowBox>
              <SubscribeTitle>
                We'll drop the guide in early October and can let you know. Sign up below.
              </SubscribeTitle>
              <EmailSubscribe />
            </ShadowBox>
          </Col>
          <Col
            off={{ xs: 2, sm: 4, md: 5, lg: 7, xl: 8, xxl: 8 }}
            span={{ xs: 20, sm: 16, md: 14, lg: 10, xl: 8, xxl: 8 }}
          >
            <Space h={20} xsHeight={10} />
            <Description>
              P.S. Can't wait?{` `}
              <LinkOut href="https://ballotpedia.org/California_2020_ballot_propositions">
                Ballotpedia
              </LinkOut>{' '}
              is a good and dense place to start.
            </Description>
            <Space h={80} xsHeight={15} />
          </Col>
        </Row>
      </div>
      <Footer ref={footerRef} />
    </>
  );
};

export default withBasicTemplate(IndexPage);

export const config = {
  amp: 'hybrid',
};

//-----------------------------

const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 0;
  text-align: center;
`;

const Tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  font-family: Inter, Helvetica;
  box-shadow: 0px 0px 30px 10px rgba(0, 0, 0, 0.055);
  border-radius: 4px;
  padding: 10px 15px;
  width: 150px;
  color: #aaa;
  font-size: 12px;
  letter-spacing: 0.195em;
  margin-left: 20px;
  height: 28px;
`;

const ShadowBox = styled.div`
  background: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 8px;
  padding: 10px 15px;
  box-shadow: 0px 0px 30px 10px rgba(0, 0, 0, 0.055);
`;

const SubscribeTitle = styled.h3`
  font-family: Inter;
  font-weight: 800;
  color: #333;
  text-align: center;
  margin-top: 20px;
`;
const Description = styled.div`
  font-size: 16px;
  line-height: 26px;
`;

const Issues = styled.div`
  margin-top: 30px;
  margin-bottom: 50px;
  line-height: 28px;
  color: #111;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
`;
