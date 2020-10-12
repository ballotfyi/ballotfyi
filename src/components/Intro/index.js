import styled from 'styled-components';
import { Row, Col } from 'components/util';

const Intro = () => (
  <IntroBackground>
    <Row style={{ minHeight: '100vh', position: 'relative' }}>
      <Col
        off={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1, xxl: 1 }}
        span={{ xs: 22, sm: 22, md: 16, lg: 16, xl: 16, xxl: 16 }}
      >
        <Salutation>Dear California,</Salutation>
        <Title>
          <span>This election</span>
          <span>is more than</span>
          <span>two old</span>
          <span>
            white dudes<Asterisk>*</Asterisk>
          </span>
        </Title>
        <P1>
          On your ballot is affirmative action, rent control, property taxes, voting rights and
          more. All we hear about is the Presidential race, but let’s be honest, your vote more
          directly impacts the rest of the ballot.
        </P1>
        <Disclaimer>
          *Granted, one of those dudes will end up with enormous power that will shape the
          trajectory of our country (and world) at a pivotal moment for numerous matters
        </Disclaimer>
      </Col>
      <Col
        off={{ xs: 0, sm: 0, md: 0, lg: 0, xl: 0, xxl: 0 }}
        span={{ xs: 24, sm: 24, md: 7, lg: 7, xl: 7, xxl: 7 }}
      >
        <RightSide>
          <Isolate>
            <Noise />
            <Overlay />
          </Isolate>
          <P2>
            We did the work for you and summarized the twelve state props into nonpartisan &amp;
            nonboring explainers.
          </P2>
          <P3>Let’s begin.</P3>
        </RightSide>
        <TruncateRight>
          <CircleContainer>
            <BigCircle />
          </CircleContainer>
        </TruncateRight>
      </Col>
    </Row>
  </IntroBackground>
);

export default Intro;

const Salutation = styled.div`
  font-family: Georgia, serif;
  font-size: 28px;
  color: white;
  padding-left: 3px;
  margin-top: 90px;
  @media screen and (min-width: 576px) {
    font-size: 32px;
  }
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
  @media screen and (min-width: 992px) {
    font-size: 32px;
  }
  @media screen and (min-width: 1200px) {
    margin-top: 95px;
    font-size: 34px;
  }
  @media screen and (min-width: 1600px) {
    margin-top: 100px;
    font-size: 38px;
  }
`;

const Title = styled.h1`
  font-family: Inter, InterPre, Helvetica, sans-serif;
  font-size: 3.4125em;
  font-weight: 900;
  line-height: calc(1ex / 0.47);
  letter-spacing: -0.05em;
  color: #ff3981;
  text-transform: uppercase;
  margin-top: 30px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 576px) {
    font-size: 4.1em;
    line-height: calc(1ex / 0.49);
  }
  @media screen and (min-width: 768px) {
    font-size: 4.4em;
    line-height: calc(1ex / 0.51);
  }
  @media screen and (min-width: 992px) {
    font-size: 5.4em;
    line-height: calc(1ex / 0.5);
  }
  @media screen and (min-width: 1200px) {
    font-size: 6.8125em;
    line-height: calc(1ex / 0.49);
  }
  @media screen and (min-width: 1600px) {
    font-size: 7.8125em;
    line-height: calc(1ex / 0.47);
  }
`;

const IntroBackground = styled.div`
  background-color: #5a4abc;
  min-height: 100vh;
  isolation: isolate;
`;

const RightSide = styled.div`
  position: absolute;
  right: 0;
  width: 50%;
  background-color: rgba(136, 193, 23, 0.85);
  mix-blend-mode: color-dodge;
  min-height: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 767px) {
    position: relative;
    width: 100%;
    min-height: 300px;
    justify-content: center;
  }
`;

const Disclaimer = styled.div`
  max-width: 470px;
  font-family: Georgia, serif;
  color: white;
  font-size: 12px;
  line-height: 18px;
  padding-left: 10px;
  margin-top: 30px;
  margin-bottom: 50px;
  @media screen and (max-width: 576px) {
    padding-left: 0;
  }
`;
const Asterisk = styled.span`
  position: relative;
  font-family: Georgia, serif;
  color: white;
  padding-left: 10px;
  font-size: 40px;
  top: -20px;
  @media screen and (min-width: 768px) {
    top: -30px;
  }
  @media screen and (min-width: 992px) {
    top: -40px;
  }
  @media screen and (min-width: 1200px) {
    top: -50px;
  }
  @media screen and (min-width: 1600px) {
    top: -60px;
  }
`;

const TruncateRight = styled.div`
  position: absolute;
  right: 0;
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  overflow: hidden;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const CircleContainer = styled.div`
  position: absolute;
  right: 0;
  width: 50%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const BigCircle = styled.div`
  position: absolute;
  width: 910px;
  height: 910px;
  bottom: -622px;
  border-radius: 460px;
  background: #ff3737;
  box-shadow: 0px -30px 60px -12px rgba(50, 50, 93, 0.15), 0px -18px 36px -18px rgba(0, 0, 0, 0.22);
  mix-blend-mode: overlay;
`;

const Paragraph = styled.div`
  font-family: Georgia, serif;
  font-size: 1.2em;
  line-height: calc(1ex / 0.35);
  width: 50%;
  color: black;
  @media screen and (min-width: 576px) {
    font-size: 1.2em;
    line-height: calc(1ex / 0.35);
  }
  @media screen and (min-width: 768px) {
    font-size: 1.2em;
    line-height: calc(1ex / 0.35);
  }
  @media screen and (min-width: 992px) {
    font-size: 1.2em;
    line-height: calc(1ex / 0.35);
  }
  @media screen and (min-width: 1200px) {
    font-size: 1.3em;
    line-height: calc(1ex / 0.35);
  }
  @media screen and (min-width: 1600px) {
    font-size: 1.5em;
    line-height: calc(1ex / 0.35);
  }
`;

const P1 = styled(Paragraph)`
  width: 40ch;
  padding-left: 10px;
  color: white;
  max-width: 74%;
  @media screen and (max-width: 576px) {
    width: 100%;
    padding-left: 0;
    max-width: 100%;
  }
`;

const P2 = styled(Paragraph)`
  text-align: center;
  position: absolute;
  top: 36%;
  border: 2px solid #fff;
  padding: 20px 30px;
  border-radius: 3px;
  box-shadow: 0px 30px 60px -12px rgba(50, 50, 93, 0.15), 0px 18px 36px -18px rgba(0, 0, 0, 0.22);
  @media screen and (max-width: 992px) {
    background-color: white;
  }
  @media screen and (max-width: 767px) {
    position: static;
    isolation: isolate;
  }
`;
const P3 = styled(Paragraph)`
  text-align: center;
  position: absolute;
  bottom: 15%;
  text-align: center;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const Noise = styled.div`
  height: 100%;
  background: conic-gradient(from 325deg at 12% -10%, rgba(255, 255, 255, 0), black),
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

const Isolate = styled.div`
  position: absolute;
  isolation: isolate;
  height: 100%;
  width: 100%;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(136, 193, 23, 0.85);
`;
// exclusion is a good mix-blend-mode here
