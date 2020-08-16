import withBasicTemplate from 'template/basic';
import Header from 'components/layout/header';
import { Container, Row, Col } from 'react-grid-system';
import { Space, LinkOut } from 'components/util';

const AboutPage = () => {
  return (
    <Container fluid>
      <Header />
      <Row>
        <Col
          offset={{xs: 1, sm: 2, md: 4, lg: 4, xl: 3, xxl: 3}}
          xs={22} sm={22} md={20} lg={16} xl={18} xxl={18}
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
            <p>
            <h3>We will explain to you all the rational arguments</h3>
            Unlike many other ballot guides, we don't take sides, and we'll try to explain how the Yes and the No sides are trying to convince you.
            </p>

            <p>
            <h3>We do not advertise or accept any monetary or in-kind contributions, except facts.</h3>
            We can not conscientiously make money from organizations or people who may be impacted by our coverage.*More details about our past regarding funding.
            </p>

            <p>
            <h3>We do not know everything.</h3>
            We'd like to know everything. If you know something we don't (regarding the props), send us the facts: fax@ballot.fyi.
            </p>
          </div>

          <h2>Your vote goes beyond the Presidential race</h2>
          <div>
            <p>
            Understandably, you may feel like your vote, as a Californian, doesn't matter. Unless everyone pandemic-fled SF to move into their parents' basements in Ohio, California is all but certain to vote blue in the presidential election, electorally-speaking. So why should you vote? RHETORICAL QUESTION. Because we put weighty, consequential propositions on the ballot that sometimes become laws (or state constitutional amendments) for a hell-uh long time. 
            </p>

            <p>
            For example, we're voting on whether to make affirmative action legal again in CA. It was banned via ballot proposition XX years ago. In 2016, a ballot prop was the vehicle for marijuana legalization. Own property? It's a really big deal this year that we might change Prop 13, a ballot prop voted in 1978, which sets the max for your property taxes. Oh sorry, you rent? You get to decide whether cities can enact new rent control measures.
            </p>
            
            <p>
            These decisions 100% matter. They might not directly affect you, but they might affect your friends, your future children, or even that colleague you used to say hello to everyday but didn't actually know their name.
            </p>

            <p>
            Let's be honest – convincing you to vote isn't the hard part. The hard part is finding the time and doing the work to understand the issues. We try to make that easy for you.
            </p>
          </div>

          <h2>Register to vote. Register to ballot.fyi</h2>
          <div>
            First, make sure you're registered to vote. In some civilizations, you can vote by mail.
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

export const config = {
  amp: 'hybrid',
};
