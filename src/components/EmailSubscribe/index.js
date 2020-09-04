import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useAmp } from "next/amp";
import axios from 'axios';
import { captureException } from '@sentry/react';
import LoadingSvg from './loading.svg';

/* eslint-disable jsx-a11y/accessible-emoji */

const EmailSubscribe = () => {
  const [emailInput, setEmailInput] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [signupResult, setSignupResult] = useState(null);
  const isAmp = useAmp();
  const endpoint = 'https://us-central1-ballotfyi.cloudfunctions.net/subscribeEmail';

  const handleFormSubmit = () => {
    setIsSending(true);

    axios({
      url: endpoint,
      method: 'POST',
      data: { email: emailInput },
    })
      .then((res) => {
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
        }
      })
      .catch((err) => {
        setSignupResult('error');
        setIsSending(false);
        setTimeout(() => {
          setSignupResult(null);
        }, 3000);
        captureException(err);
      });
  };

  let statusOrButton = (
    <SubmitButton
      disabled={isSending || emailInput === ''}
      tabIndex="0"
      type="submit"
      onClick={handleFormSubmit}
    >
      {isSending ? (
        <Spin>
          <LoadingSvg />
        </Spin>
      ) : emailInput === '' ? (
        <Emoji label="pointing left">👈</Emoji>
      ) : (
        'LMK'
      )}
    </SubmitButton>
  );
  let subMessage = null;

  if (signupResult === 'success') {
    statusOrButton = (
      <Circle color={'#3CB371'}>
        <Emoji label="check">👍</Emoji>
      </Circle>
    );
    subMessage = "> Subscribed! We'll let you know";
  } else if (signupResult === 'already') {
    statusOrButton = (
      <Circle color={'#9370DB'}>
        <Emoji label="love">🥰</Emoji>
      </Circle>
    );
    subMessage = "> Already a subscriber! You're an OG.";
  } else if (signupResult === 'error') {
    statusOrButton = (
      <Circle color={'#C0C0C0'}>
        <Emoji label="error">❌</Emoji>
      </Circle>
    );
    subMessage = "> Something went wrong, and we couldn't subscribe you.";
  }
  if(!isAmp) {
    return (
      <SubscribeForm>
        <Form name="subscribe" onSubmit={handleFormSubmit}>
          <TextField
            required={true}
            type="email"
            name="subscribe"
            placeholder="Your email addy"
            tabIndex="0"
            onChange={(e) => setEmailInput(e.target.value)}
            onSubmit={handleFormSubmit}
            autoComplete="on"
            aria-label="Email address to subscribe to ballot.fyi"
            value={emailInput}
            size={30}
            disabled={isSending}
          />
          {statusOrButton}
        </Form>
        <Message>{subMessage}</Message>
      </SubscribeForm>
    );
  } else {
    return (
      <form 
        method="post"
        action-xhr={endpoint} 
        target="_top"
        on="submit-success: AMP.setState({'formMessage': event.response})"
      >
        <FieldSet>
          <TextField
            required={true}
            type="email"
            name="subscribe"
            placeholder="Your email addy"
            tabIndex="0"
            onChange={(e) => setEmailInput(e.target.value)}
            autoComplete="on"
            aria-label="Email address to subscribe to ballot.fyi"
            size={30}
            disabled={isSending}
          />
          <SubmitButton 
            type="submit"
            value="Subscribe"
          >
            LMK
          </SubmitButton>
        </FieldSet>
        <Message 
          data-amp-bind-text="formMessage"
        />
      </form>
    )
  }
};

export default EmailSubscribe;

const Emoji = (props) => {
  return (
    <span style={{ fontSize: 20 }} role="img" aria-label={props.label}>
      {props.children}
    </span>
  );
};

const SubscribeForm = styled.div`
  font-family: Inter, Helvetica;
  box-sizing: border-box;
  @media screen and (max-width: 576px) {
    justify-content: center;
  }
`;

const Form = styled.form`
  display: flex;
  align-items: center;
`;

const Message = styled.div`
  position: relative;
  top: -10px;
  padding-left: 20px;
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
  margin-left: 10px;
  background-color: ${(props) => (props.color ? props.color : 'white')};
`;

const SubmitButton = styled.button`
  font-size: 12px;
  color: white;
  height: 44px;
  border-radius: 22px;
  width: 44px;
  display: inline;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  background: linear-gradient(135deg, #adaafe 16.67%, #ffb9b9 73.81%);
  background-color: #ffb9b9;
  border: 0;
  transition: color 200ms ease-in-out;
  cursor: pointer;

  @media not all and (hover: none) {
    &:hover {
      background-color: #ffb9b9;
    }
  }

  &:disabled {
    cursor: auto;
    background: none;
    background-color: #6a5acd;
  }
`;

const TextField = styled.input`
  font-weight: 600;
  font-size: 15px;
  width: 70%;
  display: inline;
  box-sizing: border-box;
  line-height: 20px;
  text-transform: none;
  letter-spacing: none;
  padding-left: 20px;
  padding-top: 16px;
  padding-bottom: 10px;
  margin-top: 9px;
  margin-bottom: 9px;
  border-left: none;
  border-right: none;
  border-top: none;
  border-bottom: 5px solid #eee;
  outline: none;
  background-color: white;
  border-radius: 3px;
  background-color: #f9f9f9;
  transition: background-color 200ms ease-in;
  ::placeholder {
    color: #999;
  }

  &:focus {
    background-color: white;
    border-bottom: 5px solid blue;
    box-shadow: 0px 0px 30px 10px rgba(0, 0, 0, 0.03);
  }
  @media screen and (max-width: 767px) {
    font-size: 16px;
    border-radius: 0;
  }
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Spin = styled.div`
  animation: ${spin} 800ms linear infinite;
`;

const FieldSet = styled.fieldset`
  padding: 0;
  margin: 0;
  border: none;
`;
