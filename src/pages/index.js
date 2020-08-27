import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import HeadContent from 'components/HeadContent';
import Header from 'components/layout/header';
import Footer from 'components/layout/footer.js';
// import { useAmp } from "next/amp";
import withBasicTemplate from 'template/basic';
import { Row, Col } from 'react-grid-system';
import { Space, LinkOut } from 'components/util';
import EmailSubscribe from 'components/EmailSubscribe';
import Acronym from 'components/Acronym';

const IndexPage = () => {
  // const isAmp = useAmp();
  // if(isAmp) {console.log('amp')}
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
      <div style={{ minHeight: `calc(100vh - ${footerHeight}px)` }}>
        <Header />
        <Space h={60} xsHeight={35} />
          <Row style={{marginLeft: 0, marginRight: 0}}>
            <Col 
              offset={{xs: 1, sm: 2, md: 1, lg: 1, xl: 3, xxl: 1}}
              xs={22}
              sm={20}
              md={10}
              lg={9}
              xl={8}
              xxl={10}
            >
              <Title>ballot.fyi</Title>
              <Subtitle>The 2020 California Ballot Propositions, Explained</Subtitle>
              <Space h={10} />
              <Tag>COMING SOON</Tag>

              <Space h={80} xsHeight={40} />

              <Description>
                We’ll be back in October to explain the arguments behind this year’s twelve Calfornia
                state propositions. Elections are, by definition, freakin’ fun, and 2020 is no
                exception.
              </Description>
              <Space h={20} />
              <SubscribeTitle>We can let you know when we publish our guide</SubscribeTitle>
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
              offset={{xs: 1, sm: 2, md: 2, lg: 4, xl: 2, xxl: 1}}
              xs={22}
              sm={20}
              md={10}
              lg={9}
              xl={8}
              xxl={10}
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
                <Acronym short="BFD" long="big fucking deal" />. The ballot is set, and we’re
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
      <Footer ref={footerRef} />
    </>
  );
};

export default withBasicTemplate(IndexPage);

// export const config = {
//   amp: 'hybrid',
// };

//-----------------------------

const Title = styled.div`
  font-family: 'itc-avant-garde-gothic-pro', Helvetica, sans-serif;
  font-weight: bold;
  font-size: 44px;
  line-height: 58px;
  color: #5b6a9e;
  text-transform: uppercase;
  margin-bottom: 0;
`;

const Subtitle = styled.h2`
  font-weight: 700;
  font-size: 22px;
  line-height: 30px;
  margin-top: 0;
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
  font-family: Inter, Helvetica;
  box-shadow: 0px 0px 30px 10px rgba(0, 0, 0, 0.03);
  border-radius: 4px;
  padding: 10px 15px;
  width: 150px;
  color: #aaa;
  font-size: 12px;
  letter-spacing: 0.195em;
`;

const SubscribeTitle = styled.h3`
  font-family: Inter;
  font-weight: 500;
  font-size: 14px;
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

const IssuesHeader = styled.h3`
  font-style: italic;
  font-weight: 300;
  font-size: 16px;
  color: #999;
`;
