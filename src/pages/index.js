import styled from "styled-components";
import Header from "components/layout/header.js";
import { useAmp } from "next/amp";
import withBasicTemplate from "template/basic";
import { Row, Col, Form, Input, Button} from 'antd';
import { Space } from 'components/util'
import { MailOutlined } from '@ant-design/icons'

const IndexPage = () => {
  const isAmp = useAmp();
  const handleFormSubmit = (values) => {
    console.log(values.email);
  }
  return (
    <>
      <Header />
      <Row>
        <Col offset={1} span={10}>
          <TopHat>
            <TopHatDot />
            <TopHatBar />
          </TopHat>
        </Col>
      </Row>
      <Space height={60} />
      <Row>
        <Col offset={1} span={8}>
          <Title>ballot.fyi</Title>
          <Subtitle>The 2020 California Ballot Propositions, Explained</Subtitle>
          <Space height={10} />
          <Tag>COMING SOON</Tag>
          <Space height={80} />
          <IntroText>
            We’ll be back in October to explain the arguments behind this year’s 12 Calfornia state propositions. Elections are, by definition, freakin’ fun, and 2020 is no exception, really.
          </IntroText>
          <Space height={20} />
          <SubscribeTitle>We’ll let you know when we publish our guide</SubscribeTitle>
          <SubscribeForm>
            <Form 
              onFinish={handleFormSubmit}
              hideRequiredMark
              validateTrigger="onSubmit"
            >
              <Row gutter={8}>
                <Col span={18}>
                  <Form.Item 
                    name="email"
                    normalize={(val) => val.trim()}
                    rules={[
                      {
                        type: 'email',
                        message: 'Email please, not a tweet',
                      },
                      {
                        required: true,
                        message: 'Email needed',
                      },
                    ]}
                  >
                    <Input
                      style={{padding: '10px 15px', borderRadius: 23}}
                      prefix={<MailOutlined style={{marginRight: 6}}/>}
                      placeholder="Your email"
                      enterButton='LMK'
                    />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <StyledButton>
                    LMK
                  </StyledButton>
                </Col>
              </Row>
            </Form>
          </SubscribeForm>          
          <Space height={20} />

          <Description>
            If you’d like to be notified when we publish our multi-opinionated explainers, sign up for our biennial email list.
          </Description>
        </Col>
        <Col offset={6} span={8}>
          <Subtitle>12 Propositions</Subtitle>

          <Description>
              ...as if you didn’t think this election wasn’t already a BFD. We’re doing the research to understand the issues and their possible ramifications, so that come October, when you get your mail-in ballot, you can read our summaries to understand the broad set of opinions, dive into the details, and come to your own conclusions.
              <br/>
              <br/>
              P.S. If you’re curious to learn more about any of these props, like right now, ballotpedia is a good and dense place to start.
          </Description>
        </Col>
      </Row>

    </>
  );
};

export default withBasicTemplate(IndexPage);

export const config = {
  amp: "hybrid",
};

//-----------------------------

const TopHat = styled.div`
  display: flex;
  padding-top: 16px;
  padding-bottom: 30px;
`;

const TopHatDot = styled.div`
  height: 20px;
  width: 20px;
  background: linear-gradient(135deg, #ADAAFE 16.67%, #FFB9B9 73.81%);
  margin-right: 20px;
  border-radius: 10px;
`;

const TopHatBar = styled.div`
  width: 100%;
  background: linear-gradient(90deg, #FFB9B9 0%, rgba(129, 126, 255, 0.66) 100%);
  border-radius: 10px;
`;

const Title = styled.h1`
  font-family: ITC Avant Garde Gothic Pro, Inter;
  font-weight: bold;
  font-size: 44px;
  line-height: 53px;
  color: #5B6A9E;
  text-transform: uppercase;
  margin-bottom: 0;
`

const Subtitle = styled.h2`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
`;

const Tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #FFFFFF;
  box-shadow: 0px 0px 11px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 10px 15px;
  letter-spacing: 0.095em;
  width: 150px;
  color: #aaa;
  font-size: 12px;
`;
const IntroText = styled.div`
  font-size: 14px;

`;
const SubscribeForm = styled.div`
  display: flex;
`;
const SubscribeTitle = styled.h3`
  font-weight: 500;
  font-size: 14px;
`;
const Description = styled.div`
`;

const StyledButton = styled(Button)`
  font-size: 12px;
  color: white;
  height: 44px;
  border-radius: 22px;
  width: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #ADAAFE 16.67%, #FFB9B9 73.81%);
  background-color: #FFB9B9;
  border: 0;
  transition: color 200ms ease-in-out;
  @media not all and (hover: none) {
    &:hover {
      color: #FFB9B9;
      background-color: #ADAAFE;
      background: linear-gradient(90deg, #ADAAFE 0%, #ADAAFE 100%);
    }
  }
`;