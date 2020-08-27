import withBasicTemplate from 'template/basic';
import styled from 'styled-components';
// import Header from 'components/layout/header';
import { Container, Row, Col } from 'react-grid-system';
import { Space, LinkOut } from 'components/util';
// import EmailSubscribe from 'components/EmailSubscribe';
import Acronym from 'components/Acronym';
import Button from 'components/Button';

const HeaderBgContainer = styled.div`
  position: absolute;
`;

const AboutPage = () => {
  return (
    <Container fluid>
      <HeaderBgContainer>
        <img style={{minWidth: '100vw'}} src="./static/about-bg.png" alt='swirly line' />
      </HeaderBgContainer>
      <Row>
        <Col
          offset={{xs: 1, sm: 2, md: 4, lg: 4, xl: 3, xxl: 3}}
          xs={22} sm={22} md={20} lg={16} xl={14} xxl={12}
        >
          <h1>Ballot.fyi helps you do your election homework</h1>
        </Col>
      </Row> 

      <Row>
        <Col
          offset={{xs: 1, sm: 2, md: 4, lg: 4, xl: 3, xxl: 3}}
          xs={22} sm={20} md={16} lg={12} xl={12} xxl={10}
        >
          <p>
            Ballot.fyi helps you do your election homework by calmly informing you about the many arguments being shouted from all sides of the state propositions. Ballot.fyi does not give any recommendations. We trust you can form your own opinion.
          </p>

          <h2>Our principles</h2>
          <div>
            <div>
            <h3><em>All</em> the rational arguments</h3>
            Unlike other ballot guides, we don't take sides. We'll try to explain how the Yes and the No sides are trying to convince you and dive into the relevant research and reporting behind their claims. The issues tend to be pretty complicated, so we let you decide.
            </div>

            <div>
            <h3>No money$ allowed</h3>
            Unlike most people and organizations, we don't want to make any money. We do not sell advertisements or accept any monetary or in-kind contributions. (In full transparency, we have in the past, and you can <Acronym toggleable={false} short='click here to learn more)' long={`In previous years, we have asked for donations from readers after the elections were over. (All were under $100.) We are discontinuing that practice. Also, in 2018, ballot.fyi received a grant from The Knight Foundation, a nonpartisan organization advancing media and information to aid democracy. We no longer have any obligation or affiliation to The Knight Foundation, or any other organization`}/>.
            </div>

            <div>
            <h3>We don't know everything</h3>
            But, we'd like to know everything. If you know something we don't (regarding the props), send us the facts: <b>fax@ballot.fyi</b>.
            </div>
          </div>

          <h2>Your vote goes beyond the Presidential race</h2>
          <div>
            <p>
            Understandably, you may feel like your vote, as a Californian, doesn't matter. Unless everyone pandemic-fled SF to move into their parents' basements in Ohio, California is all but certain to vote blue in the presidential election, electorally-speaking. So why should you vote? RHETORICAL QUESTION. Because we put weighty, consequential propositions on the ballot that sometimes become laws (or state constitutional amendments) for a hell-uh long time. 
            </p>

            <p>
            For example, we're voting on whether to make affirmative action legal again in CA. It was banned via ballot proposition 24 years ago. In 2016, a ballot prop was the vehicle for marijuana legalization. Own property? It's a really big deal this year that we might change Prop 13, a ballot prop voted in 1978, which sets the max for your property taxes. Oh sorry, you rent? You get to decide whether cities can enact new rent control measures.
            </p>
            
            <p>
            Your decisions 100% matter. They might not directly affect you, but they might affect your friends, your future children, or even that colleague you used to say hello to everyday but didn't actually know their name.
            </p>

            <p>
            Let's be honest – convincing you to vote isn't the hard part. The hard part is finding the time and doing the work to understand the issues. We try to make that easy for you.
            </p>
          </div>

          <h2>Register to vote. Register to ballot.fyi</h2>
          <div>
            First, make sure you're registered to vote in California. In some civilizations, you can vote by mail.
            <Button
              href="https://registertovote.ca.gov/"
            >
              Register to vote
            </Button>
            <br />
            Second, sign up to be emailed when we release our state prop digests.
          </div>

          <h2>About this project</h2>
          <div>
            Ballot.fyi is designed, coded, and primarily written by Jimmy Chion, with the editorial help of many friends, left and right. Jimmy is a creative technologist at The New York Times. (To be clear, this is 100% a volunteer side project, and not affiliated in any way to The New York Times.) He started <LinkOut href="https://2016.ballot.fyi/">ballot.fyi in 2016</LinkOut>, and designed and wrote for it again in <LinkOut href="https://2018.ballot.fyi/">2018</LinkOut>.
          </div>
          <Space h={160} />
        </Col>
      </Row>
    </Container>
  );
};

export default withBasicTemplate(AboutPage);

// export const config = {
//   amp: 'hybrid',
// };
