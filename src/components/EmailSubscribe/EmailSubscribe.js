import { useState } from 'react';
import styled from 'styled-components';
// import { useAmp } from "next/amp";
import { Row, Col, Form, Input, Button, Spin } from 'antd';
import {
  MailOutlined,
  LoadingOutlined,
  CheckOutlined,
  HeartFilled,
  ExclamationOutlined,
} from '@ant-design/icons';
import axios from 'axios';

const EmailSubscribe = () => {
  const [emailInput, setEmailInput] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [signupResult, setSignupResult] = useState(null);
  // const isAmp = useAmp();

  const spinner = <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />;

  const handleFormSubmit = (values) => {
    const endpoint = 'https://us-central1-ballotfyi.cloudfunctions.net/subscribeEmail';
    setIsSending(true);
    axios({
      url: endpoint,
      method: 'POST',
      data: { email: values.email || emailInput },
    }).then((res) => {
      setIsSending(false);
      if (res.status === 200) {
        if (res.data === 'subscribed') {
          setSignupResult('already');
        } else {
          setSignupResult('success');
        }

        setTimeout(() => {
          setSignupResult(null);
        }, 3000);
        console.log(res.data);
      }
    });
  };

  let statusOrButton = (
    <StyledButton disabled={isSending} tabIndex="0" type="submit" onClick={handleFormSubmit}>
      {isSending ? spinner : 'LMK'}
    </StyledButton>
  );
  let subMessage = null;

  if (signupResult === 'success') {
    statusOrButton = (
      <Circle color={'#82C036'}>
        <CheckOutlined style={{ color: '#fff' }} />
      </Circle>
    );
    subMessage = "> Subscribed! We'll let you know";
  } else if (signupResult === 'already') {
    statusOrButton = (
      <Circle color={'#eb75eb'}>
        <HeartFilled style={{ color: 'white' }} />
      </Circle>
    );
    subMessage = "> Already a subscriber! You're an OG.";
  } else if (signupResult === 'error') {
    statusOrButton = (
      <Circle color={'#DC143C'}>
        <ExclamationOutlined style={{ color: '#fff' }} />
      </Circle>
    );
    subMessage = "> Something went wrong, and we couldn't subscribe you.";
  }

  return (
    <div>
      <SubscribeForm>
        <Form
          style={{ width: '100%' }}
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
                    message: 'Email needed to sign up',
                  },
                ]}
              >
                <Input
                  disabled={isSending}
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  style={{ padding: '10px 15px', borderRadius: 23 }}
                  prefix={<MailOutlined style={{ marginRight: 6 }} />}
                  placeholder="Your email"
                />
              </Form.Item>
              <Absolute>
                <Message>{subMessage}</Message>
              </Absolute>
            </Col>
            <Col span={6}>{statusOrButton}</Col>
          </Row>
        </Form>
      </SubscribeForm>
    </div>
  );
};

export default EmailSubscribe;

const SubscribeForm = styled.div`
  display: flex;
`;

const Absolute = styled.div`
  position: absolute;
  width: 100%;
`;

const Message = styled.div`
  position: relative;
  top: -22px;
  padding-left: 30px;
  padding-top: 5px;
  font-size: 12px;
  font-weight: 700;
  font-style: italic;
`;

const Circle = styled.div`
  font-size: 21px;
  height: 44px;
  width: 44px;
  border-radius: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.color ? props.color : 'white')};
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
  background: linear-gradient(135deg, #adaafe 16.67%, #ffb9b9 73.81%);
  background-color: #ffb9b9;
  border: 0;
  transition: color 200ms ease-in-out;
  @media not all and (hover: none) {
    &:hover {
      color: #ffb9b9;
      background-color: #adaafe;
      background: linear-gradient(90deg, #adaafe 0%, #adaafe 100%);
    }
  }
`;
