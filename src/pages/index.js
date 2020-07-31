import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import HeadContent from 'components/HeadContent';
import Header from 'components/layout/header'
// import Footer from 'components/layout/footer.js';
// import { useAmp } from "next/amp";
import withBasicTemplate from 'template/basic';
import { Row, Col } from 'antd';
import { Space, LinkOut } from 'components/util';
import EmailSubscribe from 'components/EmailSubscribe';
import Acronym from 'components/Acronym';

const IndexPage = () => {
  // const isAmp = useAmp();
  const [footerHeight, setFooterHeight] = useState(0);
  const footerRef = useRef();

  useEffect(() => {
    if(footerRef.current) {
      setFooterHeight(footerRef.current.getBoundingClientRect().height);
    }
  }, [footerRef]);

  return (
    <>
      <HeadContent />
      <div style={{ minHeight: `calc(100vh - ${footerHeight}px)` }}>
        <Header/>
        <Space h={60} xsHeight={35} />
        <Row>
          <Col
            xs={{ offset: 1, span: 22 }}
            sm={{ offset: 2, span: 20 }}
            md={{ offset: 1, span: 10 }}
            lg={{ offset: 1, span: 9 }}
            xl={{ offset: 3, span: 8 }}
            xxl={{ offset: 5, span: 6 }}
          >
            <Title>ballot.fyi</Title>
            <Subtitle>The 2020 California Ballot Propositions, Explained</Subtitle>
            <Space h={10} />
            <Tag>COMING SOON</Tag>

            <Space h={80} xsHeight={40} />

            <Description>
              We’ll be back in October to explain the arguments behind this year’s twelve Calfornia
              state propositions. Elections are, by definition, freakin’ fun, and 2020 is no
              exception, really.
            </Description>
            <Space h={20} />
            <SubscribeTitle>We’ll let you know when we publish our guide</SubscribeTitle>
            <EmailSubscribe />

            <Space h={20} xsHeight={15} />

            <Description>
              <span role="img" aria-label="pointing up">
                ☝️
              </span>
              {` `}If you’d like to be notified when we publish our multi-opinionated explainers,
              sign up for our biennial email list.
            </Description>
          </Col>
          <Col
            xs={{ offset: 1, span: 22 }}
            sm={{ offset: 2, span: 20 }}
            md={{ offset: 2, span: 10 }}
            lg={{ offset: 4, span: 9 }}
            xl={{ offset: 2, span: 8 }}
            xxl={{ offset: 2, span: 6 }}
          >
            <Subtitle>12 Propositions</Subtitle>
            <IssuesHeader>Here are some of the juicy decisions you get to make</IssuesHeader>
            <Issues>
              <li>How commercial properties are taxed (that’s a big deal)</li>
              <li>Whether cities can enact new rent control laws</li>
              <li>Whether older folks can move with their property tax assessment</li>
              <li>Whether affirmative action should be legal again</li>
              <li>Whether Lyft and Uber drivers are independent contractors</li>
              <li>Whether we should get rid of the cash bail system</li>
            </Issues>
            <Description>
              As if you didn’t think this election wasn’t already a{' '}
              <Acronym acronym="BFD" expanded="big fucking deal" />. The ballot is set, and we’re
              researching it all, so that come October, when you get your mail-in ballot, you can
              read our summaries to understand the broad set of opinions, dive into the details, and
              come to your own conclusions.
              <br />
              <br />
              P.S. If you’re curious to learn more about any of these props, like right now,{` `}
              <LinkOut href="https://ballotpedia.org/California_2020_ballot_propositions">
                ballotpedia
              </LinkOut>{' '}
              is a good and dense place to start.
            </Description>
            <Space h={0} xsHeight={50} />
          </Col>
        </Row>
      </div>
      {/* <Footer ref={footerRef} /> */}
    </>
  );
};

export default withBasicTemplate(IndexPage);

// export const config = {
//   amp: 'hybrid',
// };

//-----------------------------


const Title = styled.h1`
  font-family: 'itc-avant-garde-gothic-pro', Inter, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 44px;
  line-height: 58px;
  color: #5b6a9e;
  text-transform: uppercase;
  margin-bottom: 0;
`;

const Subtitle = styled.h2`
  font-weight: 700;
  font-size: 19px;
  line-height: 24px;
  @media screen and (max-width: 576px) {
    padding-top: 30px;
    margin-top: 15px;
    border-top: 1px solid #ddd;
  }
`;

const Tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 0px 30px 10px rgba(0, 0, 0, 0.03);
  border-radius: 4px;
  padding: 10px 15px;
  width: 150px;
  color: #aaa;
  font-size: 12px;
  letter-spacing: 0.095em;
`;

const SubscribeTitle = styled.h3`
  font-weight: 500;
  font-size: 14px;
`;
const Description = styled.div`
  font-size: 14px;
  line-height: 23px;
`;

const Issues = styled.div`
  margin-top: 30px;
  margin-bottom: 50px;
  line-height: 28px;
  color: #111;
`;

const IssuesHeader = styled.h3`
  font-style: italic;
  font-weight: 300;
  font-size: 16px;
  color: #999;
`;
