import withBasicTemplate from 'template/basic';
import styled from 'styled-components';
import { Space, LinkOut, Col } from 'components/util';
import EmailSubscribe from 'components/EmailSubscribe';
import Acronym from 'components/Acronym';
import Button from 'components/Button';
import Footer from 'components/Footer';
import TopHat from 'components/TopHat';
import HeadContent from 'components/HeadContent';

const AboutPage = () => {
  return (
    <div>
      {/* Needs canonicalImg image */}
      <HeadContent
        title="About ballot.fyi"
        description="Ballot.fyi simplifies the California ballot propositions. Read about the project's principles and the team behind it."
        canonicalUrlSlug="about"
        socialImage="static/social/general.png"
        datePublished={new Date(2020, 10, 12)}
        pageType="page"
      />
      <TopHat />
      <Col
        off={{ xs: 2, sm: 0, md: 0, lg: 0, xl: 0, xxl: 0 }}
        span={{ xs: 20, sm: 24, md: 24, lg: 24, xl: 24, xxl: 24 }}
      >
        <Title>The California props, simplified</Title>
      </Col>

      <Col
        style={{ textAlign: 'center' }}
        off={{ xs: 2, sm: 4, md: 5, lg: 5, xl: 5, xxl: 4 }}
        span={{ xs: 20, sm: 16, md: 14, lg: 14, xl: 14, xxl: 16 }}
      >
        <em>
          Ballot.fyi is a nonpartisan election guide to the California propositions, calmly
          informing you about the many arguments being shouted from all sides.
        </em>
      </Col>

      <Col
        off={{ xs: 2, sm: 4, md: 5, lg: 7, xl: 8, xxl: 8 }}
        span={{ xs: 20, sm: 16, md: 14, lg: 10, xl: 8, xxl: 8 }}
      >
        <h2>Our principles</h2>
        <div>
          <div>
            <h3>We don't take sides</h3>
            We do our best to be as nonpartisan as possible. We aggregate all the opinions on the
            issue and sanely digest it for you. We'll try to explain how the Yes and the No sides
            are trying to convince you and dive into the relevant research and reporting behind
            their claims. The issues tend to be pretty complicated (and luckily, not as polarized as
            national politics) so we let you decide. Also, we recognize we don't know everything, or
            fully understand every perspective. If you know something we don't, send us the facts:{' '}
            <b>fax@ballot.fyi</b>.
          </div>

          <div>
            <h3>We don't make or take money</h3>
            Unlike most people (which includes corporations of course), we don't make money and
            won't accept contributions. That's a feature. Mixed with politics, money is messy, and
            we'd probably lose your trust if there was some ulterior motive with this site.
            <br />
            <br /> In full transparency, we have asked for contributions in the past, and you can{' '}
            <Acronym
              toggleable={false}
              long={`learn more about it: In previous years, we have asked for donations from readers after the elections were over. (All were under $100.) We are discontinuing that practice. Also, in 2018, ballot.fyi received a grant from The Knight Foundation, a nonpartisan organization advancing media and information to aid democracy. We spent all of that and no longer have any obligation or affiliation to The Knight Foundation, or any other organization for that matter.`}
            >
              learn more about it here
            </Acronym>
            .
          </div>

          <div>
            <h3>We let you explore</h3>
            Behind almost every sentence is research or reporting to back it up. We cite everything
            we can and give you avenues to explore in case you're curious or skeptical.
          </div>
        </div>

        <h2>Your vote goes beyond the Presidential race</h2>
        <div>
          <p>
            Understandably, you may feel like your vote, as a Californian, doesn't matter. Unless
            everyone pandemic-fled SF to move into their parents' basements in Ohio, California is
            all but certain to vote blue in the presidential election, electorally-speaking. So why
            {` `}
            <Acronym long="the faaa">tf</Acronym> should you vote? RHETORICAL QUESTION. Because we
            put weighty, consequential propositions on the ballot that sometimes become laws (or
            state constitutional amendments) for a hell-uh long time.
          </p>

          <p>
            For example, we're voting on whether to make affirmative action legal again in CA. It
            was banned via ballot proposition 24 years ago. In 2016, a ballot prop was the vehicle
            for legalizing marijuana. Own property? It's a really big deal this year that we might
            change Prop 13, a ballot prop voted in 1978, which defines your property taxes. Oh, I'm
            sorry, you don't have $1M+ so you're a renter? You get to decide whether cities can
            enact new rent control measures this year.
          </p>

          <p>
            Your decisions 100 million% matter. They might not directly affect you, but they might
            affect your friends, your future children, or even that nice colleague you fondly used
            to say hello to everyday but didn't actually know their name.
          </p>

          <p>
            Let's be honest – convincing you to vote isn't the hard part. The hard part is finding
            the time and doing the work to understand the issues. We try to make that as easy as
            possible for you.
          </p>
        </div>
      </Col>
      <Space h={30} />
      <CTAContainer>
        <CTARow>
          <Col
            off={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 3, xxl: 3 }}
            span={{ xs: 22, sm: 20, md: 10, lg: 10, xl: 10, xxl: 10 }}
          >
            <DarkH2>1. Check your voter registration</DarkH2>
            First, make sure you're registered to vote in California. Deadline is Oct 19. You can
            vote by mail too. Not a CA resident? Try{' '}
            <LinkOut style={{ color: 'white' }} href="https://www.vote.org/">
              vote.org
            </LinkOut>
            .
          </Col>
          <Col
            off={{ xs: 1, sm: 2, md: 1, lg: 1, xl: 1, xxl: 1 }}
            span={{ xs: 22, sm: 20, md: 6, lg: 6, xl: 6, xxl: 6 }}
          >
            <Action>
              <Button bgColor="#E6E6FA" col="#333" href="https://registertovote.ca.gov/">
                Check my registration
              </Button>
            </Action>
          </Col>
        </CTARow>

        <CTARow>
          <Col
            off={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 3, xxl: 3 }}
            span={{ xs: 22, sm: 20, md: 10, lg: 10, xl: 10, xxl: 10 }}
          >
            <DarkH2>2. Subscribe</DarkH2>
            Second, sign up to be emailed when we release our state prop digests.
          </Col>
          <Col
            off={{ xs: 1, sm: 2, md: 1, lg: 1, xl: 1, xxl: 1 }}
            span={{ xs: 22, sm: 20, md: 7, lg: 7, xl: 7, xxl: 7 }}
          >
            <Action>
              <EmailSubscribe />
            </Action>
          </Col>
        </CTARow>
      </CTAContainer>

      <Space h={20} />
      <Col
        off={{ xs: 2, sm: 4, md: 5, lg: 7, xl: 8, xxl: 8 }}
        span={{ xs: 20, sm: 16, md: 14, lg: 10, xl: 8, xxl: 8 }}
      >
        <h2>About this project</h2>
        <div>
          Ballot.fyi is designed, coded, and primarily written by Jimmy Chion, with the editorial
          help of many friends, left and right. Jimmy is a creative technologist at{' '}
          <em>The New York Times</em>. This project is not affiliated in any way with{' '}
          <em>The Times</em>, and was started waaay before working there. First released in{' '}
          <LinkOut href="https://2016.ballot.fyi/">2016</LinkOut> and then rebuilt in{' '}
          <LinkOut href="https://2018.ballot.fyi/">2018</LinkOut>, it's back in 2020.
          <br />
          <br />
          Ballot.fyi is entirely a side project, with the two goals: (1) to inform voters with
          to-the-point but explorable information, research, and reporting, and (2) to look good. It
          is built on top of the hard work of many local journalists and people with way more
          expertise than us. The best way to support ballot.fyi is to buy a subscription to your
          local paper.
          <br />
          <br />
          Contact us at fax@ballot.fyi (via email).
        </div>
      </Col>

      <Space h={120} />
      <Footer />
    </div>
  );
};

export default withBasicTemplate(AboutPage);

export const config = {
  amp: 'hybrid',
};

const Title = styled.h1`
  text-align: center;
`;
const DarkH2 = styled.h2`
  color: white;
  margin-top: 0;
  @media screen and (max-width: 767px) {
    margin-top: 30px;
  }
`;

const CTARow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 30px;
`;

const Action = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    justify-content: center;
    margin-top: 15px;
  }
`;

const CTAContainer = styled.div`
  padding-top: 60px;
  padding-bottom: 60px;
  color: white;
  background-color: #222;
  @media screen and (max-width: 767px) {
    padding-top: 0;
    padding-bottom: 30px;
  }
`;
